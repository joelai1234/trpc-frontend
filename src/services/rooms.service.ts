import { Room, CreateRoomDto } from "@/types/room";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const roomsService = {
  async findAll(): Promise<Room[]> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch rooms");
    }

    return response.json();
  },

  async findOne(id: number): Promise<Room> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch room");
    }

    return response.json();
  },

  async join(id: number): Promise<void> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms/${id}/join`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to join room");
    }
  },

  async leave(id: number): Promise<void> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms/${id}/leave`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to leave room");
    }
  },

  async create(data: CreateRoomDto): Promise<Room> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create room");
    }

    return response.json();
  },

  async startGame(id: number): Promise<Room> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms/${id}/start`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to start game");
    }

    return response.json();
  },

  async selectCharacter(roomId: number, characterId: number | null): Promise<void> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/rooms/${roomId}/select-character`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ characterId }),
    });

    if (!response.ok) {
      throw new Error("Failed to select character");
    }

    return response.json();
  },
}; 