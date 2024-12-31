import { Message } from "@/types/chat";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const chatService = {
  async getRoomMessages(roomId: number): Promise<Message[]> {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/chat/rooms/${roomId}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }

    return response.json();
  },
}; 