"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { roomsService } from "@/services/rooms.service";
import { Room, RoomStatus } from "@/types/room";
import { User } from "@/types/user";
import { UserCircle } from "lucide-react";
import { use } from "react";
import { ChatRoom } from "@/components/ChatRoom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Character } from "@/types/character";
import { dashboardService } from "@/services/dashboard.service";
import { Badge } from "@/components/ui/badge";
import { socketService } from "@/services/socket.service";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

export default function RoomPage({ params }: RoomPageProps) {
  const resolvedParams = use(params);
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [roomData, charactersData, userData] = await Promise.all([
          roomsService.findOne(Number(resolvedParams.id)),
          dashboardService.getCharacters(),
          dashboardService.getProfile()
        ]);
        
        setRoom(roomData);
        setCharacters(charactersData);
        setCurrentUser(userData);
      } catch (err: unknown) {
        console.error('Failed to load initial data:', err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load initial data",
        });
        router.push("/rooms");
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, [resolvedParams.id, router, toast]);

  // Socket connection for real-time updates
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const socket = socketService.connect(token);
    const roomUpdateChannel = `room-${resolvedParams.id}-updates`;
    
    const handleRoomUpdate = (updatedRoom: Room) => {
      console.log(`Room update received in channel ${roomUpdateChannel}:`, updatedRoom);
      setRoom(updatedRoom);
    };

    socket.on("roomUpdate", handleRoomUpdate);
    socketService.joinRoom(Number(resolvedParams.id));

    return () => {
      socket.off("roomUpdate", handleRoomUpdate);
      socketService.leaveRoom(Number(resolvedParams.id));
    };
  }, [resolvedParams.id]);

  const handleStartGame = async () => {
    try {
      await roomsService.startGame(Number(resolvedParams.id));
      toast({
        title: "Success",
        description: "Game started successfully!",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to start game";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  const handleSelectCharacter = async (characterId: string) => {
    try {
      if (characterId === "none") {
        await roomsService.selectCharacter(Number(resolvedParams.id), 0);
      } else {
        await roomsService.selectCharacter(Number(resolvedParams.id), Number(characterId));
      }
      
      toast({
        title: "Success",
        description: "Character selected successfully",
      });
    } catch (error: unknown) {
      console.error('Failed to select character:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to select character",
      });
    }
  };

  const handleLeaveRoom = async () => {
    try {
      await roomsService.leave(Number(resolvedParams.id));
      toast({
        title: "Success",
        description: "Successfully left the room",
      });
      router.push("/rooms");
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to leave room",
      });
    }
  };

  const canStartGame = room?.roomPlayers?.every(player => player.character !== null) ?? false;
  const isHost = room?.host.id === currentUser?.id;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!room) return null;

  return (
    <div className="container mx-auto py-10 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{room.name}</CardTitle>
              <CardDescription>{room.description}</CardDescription>
            </div>
            <div className="flex gap-2">
              {isHost && room.status === RoomStatus.WAITING && (
                <Button 
                  variant="default"
                  onClick={handleStartGame}
                  disabled={!canStartGame}
                >
                  Start Game
                </Button>
              )}
              <Button 
                variant="destructive" 
                onClick={handleLeaveRoom}
              >
                Leave Room
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Players</h3>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Character</TableHead>
                      <TableHead>Ready</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {room.roomPlayers?.map((roomPlayer) => (
                      <TableRow key={roomPlayer.id}>
                        <TableCell className="flex items-center gap-2">
                          <UserCircle className="h-5 w-5" />
                          <span>{roomPlayer.player.username}</span>
                          {room.host.id === roomPlayer.player.id && (
                            <Badge variant="secondary">Host</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              roomPlayer.player.isActive
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-50 text-gray-700"
                            }`}>
                            {roomPlayer.player.isActive ? "Online" : "Offline"}
                          </span>
                        </TableCell>
                        <TableCell>
                          {roomPlayer.player.id === currentUser?.id ? (
                            <Select 
                              onValueChange={handleSelectCharacter} 
                              value={roomPlayer.character?.id?.toString()}
                            >
                              <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select character" />
                              </SelectTrigger>
                              <SelectContent>
                                {characters.map((character) => (
                                  <SelectItem key={character.id} value={character.id.toString()}>
                                    {character.name} - {character.occupation}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <span>{roomPlayer.character?.name || "Not selected"}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={roomPlayer.isReady ? "default" : "secondary"}
                          >
                            {roomPlayer.isReady ? "Ready" : "Not Ready"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            {!canStartGame && isHost && (
              <div className="text-sm text-muted-foreground">
                All players must select a character before the game can start.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <ChatRoom roomId={Number(resolvedParams.id)} />
    </div>
  );
}
