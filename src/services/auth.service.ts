import { LoginDto, RegisterDto, TokenDto } from "@/types/auth";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
  async login(data: LoginDto): Promise<TokenDto> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Login failed");
    }

    const tokenData = await response.json();
    Cookies.set("token", tokenData.access_token);
    localStorage.setItem("token", tokenData.access_token);
    return tokenData;
  },

  async register(data: RegisterDto): Promise<TokenDto> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const tokenData = await response.json();
    Cookies.set("token", tokenData.access_token);
    return tokenData;
  },

  logout() {
    Cookies.remove("token");
  },
};