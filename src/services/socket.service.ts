import { io, Socket } from "socket.io-client";

const SOCKET_URL = `${process.env.NEXT_PUBLIC_API_URL}/chat`;
const RECONNECTION_ATTEMPTS = 5;
const RECONNECTION_DELAY = 3000;

// Define connection status type
export enum SocketStatus {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  ERROR = 'error'
}

// Add this interface above the class
interface SocketError {
  type?: string;
  message?: string;
}

class SocketService {
  private socket: Socket | null = null;
  private connectedRooms: Set<number> = new Set();
  private reconnectionAttempts = 0;
  private reconnectionTimer: NodeJS.Timeout | null = null;
  private connectionStatus: SocketStatus = SocketStatus.DISCONNECTED;
  private statusListeners: ((status: SocketStatus) => void)[] = [];

  // Add method to subscribe to connection status changes
  onStatusChange(callback: (status: SocketStatus) => void) {
    this.statusListeners.push(callback);
    // Immediately call with current status
    callback(this.connectionStatus);
    
    // Return cleanup function
    return () => {
      this.statusListeners = this.statusListeners.filter(cb => cb !== callback);
    };
  }

  private updateStatus(status: SocketStatus) {
    this.connectionStatus = status;
    this.statusListeners.forEach(callback => callback(status));
  }

  connect(token: string): Socket {
    if (!this.socket || !this.socket.connected) {
      this.updateStatus(SocketStatus.CONNECTING);
      
      this.socket = io(SOCKET_URL, {
        auth: { token },
        reconnection: true,
        reconnectionAttempts: RECONNECTION_ATTEMPTS,
        reconnectionDelay: RECONNECTION_DELAY,
        reconnectionDelayMax: 5000,
        timeout: 10000,
      });

      this.setupSocketListeners();
    }
    return this.socket;
  }

  private setupSocketListeners() {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('Socket connected');
      this.updateStatus(SocketStatus.CONNECTED);
      this.reconnectionAttempts = 0;
      
      if (this.reconnectionTimer) {
        clearTimeout(this.reconnectionTimer);
        this.reconnectionTimer = null;
      }
      
      // Rejoin all rooms after reconnection
      this.connectedRooms.forEach(roomId => {
        this.joinRoom(roomId);
      });
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      this.updateStatus(SocketStatus.ERROR);
      this.handleReconnection();
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      this.updateStatus(SocketStatus.DISCONNECTED);
      
      if (reason === 'io server disconnect' || reason === 'io client disconnect') {
        // Don't attempt to reconnect for intentional disconnections
        return;
      }
      this.handleReconnection();
    });

    // Handle authentication errors
    this.socket.on('error', (error: SocketError) => {
      if (error?.type === 'UnauthorizedError' || error?.message?.includes('authentication')) {
        console.error('Socket authentication failed:', error);
        this.updateStatus(SocketStatus.ERROR);
        this.disconnect();
      }
    });
  }

  private handleReconnection() {
    if (this.reconnectionTimer) return;

    if (this.reconnectionAttempts < RECONNECTION_ATTEMPTS) {
      this.reconnectionAttempts++;
      this.updateStatus(SocketStatus.CONNECTING);
      console.log(`Attempting to reconnect (${this.reconnectionAttempts}/${RECONNECTION_ATTEMPTS})...`);
      
      this.reconnectionTimer = setTimeout(() => {
        this.reconnectionTimer = null;
        if (this.socket) {
          const token = localStorage.getItem('token');
          if (token) {
            this.socket.auth = { token };
            this.socket.connect();
          } else {
            console.error('No authentication token available for reconnection');
            this.updateStatus(SocketStatus.ERROR);
            this.disconnect();
          }
        }
      }, RECONNECTION_DELAY);
    } else {
      console.error('Max reconnection attempts reached');
      this.updateStatus(SocketStatus.ERROR);
      this.disconnect();
    }
  }

  joinRoom(roomId: number) {
    if (this.socket?.connected) {
      this.socket.emit("joinRoom", roomId);
      this.socket.emit("subscribeToRoom", roomId);
      this.connectedRooms.add(roomId);
    }
  }

  leaveRoom(roomId: number) {
    if (this.socket?.connected) {
      this.socket.emit("leaveRoom", roomId);
      this.connectedRooms.delete(roomId);
    }
  }

  disconnect() {
    if (this.socket) {
      this.connectedRooms.clear();
      this.socket.disconnect();
      this.socket = null;
    }
  }

  getSocket(): Socket | null {
    return this.socket;
  }

  getStatus(): SocketStatus {
    return this.connectionStatus;
  }
}

export const socketService = new SocketService();