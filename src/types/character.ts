import { User } from "./user";

export interface Skill {
  name: string;
  value: number;
  isOccupational: boolean;
}

export interface Character {
  id: number;
  name: string;
  occupation: string;
  age: number;
  str: number;
  con: number;
  siz: number;
  dex: number;
  app: number;
  int: number;
  pow: number;
  edu: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  san: number;
  maxSan: number;
  luck: number;
  mov: number;
  skills: Skill[];
  background: string;
  equipment: string[];
  user: User;
}

export interface CreateCharacterDto {
  name: string;
  occupation: string;
  age: number;
  str: number;
  con: number;
  siz: number;
  dex: number;
  app: number;
  int: number;
  pow: number;
  edu: number;
  luck: number;
  skills: Skill[];
  background: string;
  equipment: string[];
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  san: number;
  maxSan: number;
  mov: number;
} 