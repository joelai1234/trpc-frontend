export interface Message {
  id: number;
  content: string;
  type: 'chat' | 'system' | 'dice';
  sender?: {
    id: number;
    username: string;
  };
  createdAt: string;
  room?: {
    id: number;
  };
} 