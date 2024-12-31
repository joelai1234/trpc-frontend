import { Character, CreateCharacterDto } from "@/types/character";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const characterService = {
  async create(data: CreateCharacterDto): Promise<Character> {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL}/characters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create character");
    }

    return response.json();
  },

  async findOne(id: number): Promise<Character> {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL}/characters/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch character");
    }

    return response.json();
  },

  async update(id: number, data: CreateCharacterDto): Promise<Character> {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL}/characters/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update character");
    }

    return response.json();
  },

  async delete(id: number): Promise<void> {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL}/characters/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete character");
    }
  },
}; 