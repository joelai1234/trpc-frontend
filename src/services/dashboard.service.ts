import type { Character } from "@/types/character";
import type { User } from "@/types/user";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const dashboardService = {
  async getProfile(): Promise<User> {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    return response.json();
  },

  async getCharacters(): Promise<Character[]> {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL}/characters`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }

    return response.json();
  },
}; 