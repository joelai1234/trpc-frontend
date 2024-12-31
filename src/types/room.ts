import { Character } from "./character";
import { User } from "./user";

export enum RoomStatus {
  WAITING = 'waiting',
  PLAYING = 'playing',
  ENDED = 'ended',
}

export interface RoomPlayer {
  id: number;
  isReady: boolean;
  player: User;
  character: Character | null;
}

export interface Room {
  id: number;
  name: string;
  description: string;
  maxPlayers: number;
  status: RoomStatus;
  createdAt: string;
  script: string;
  deletedAt: string | null;
  host: User;
  roomPlayers: RoomPlayer[];
}

export interface CreateRoomDto {
  name: string;
  description: string;
  maxPlayers: number;
  script: string;
} 