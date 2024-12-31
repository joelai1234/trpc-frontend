"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { Character } from "@/types/character";
import { dashboardService } from "@/services/dashboard.service";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus, UserCircle } from "lucide-react";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const loadDashboard = useCallback(async () => {
    try {
      const [profileData, charactersData] = await Promise.all([
        dashboardService.getProfile(),
        dashboardService.getCharacters(),
      ]);
      setUser(profileData);
      setCharacters(charactersData);
    } catch (err: unknown) {
      const error = err as Error;
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to load dashboard data",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {/* User Profile Section */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-4">
            <UserCircle className="h-12 w-12" />
            <div>
              <CardTitle>{user?.username}</CardTitle>
              <CardDescription>{user?.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Characters Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Characters</h2>
          <Button onClick={() => router.push("/characters/create")}>
            <Plus className="mr-2 h-4 w-4" />
            Create Character
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character) => (
            <Card
              key={character.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => router.push(`/characters/${character.id}`)}
            >
              <CardHeader>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription>{character.occupation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Status Bars */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>HP</span>
                      <span>
                        {character.hp}/{character.maxHp}
                      </span>
                    </div>
                    <Progress value={(character.hp / character.maxHp) * 100} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>MP</span>
                      <span>
                        {character.mp}/{character.maxMp}
                      </span>
                    </div>
                    <Progress value={(character.mp / character.maxMp) * 100} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sanity</span>
                      <span>
                        {character.san}/{character.maxSan}
                      </span>
                    </div>
                    <Progress value={(character.san / character.maxSan) * 100} />
                  </div>

                  {/* Character Stats */}
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>STR: {character.str}</div>
                    <div>CON: {character.con}</div>
                    <div>SIZ: {character.siz}</div>
                    <div>DEX: {character.dex}</div>
                    <div>APP: {character.app}</div>
                    <div>INT: {character.int}</div>
                    <div>POW: {character.pow}</div>
                    <div>EDU: {character.edu}</div>
                    <div>Luck: {character.luck}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {characters.length === 0 && (
            <Card className="col-span-full">
              <CardContent className="text-center py-6 text-muted-foreground">
                No characters created yet. Create your first character to get
                started!
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}