"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { roomsService } from "@/services/rooms.service";
import { Room, RoomStatus } from "@/types/room";
import { dashboardService } from "@/services/dashboard.service";

const statusConfig = {
  [RoomStatus.WAITING]: {
    label: "Waiting",
    variant: "secondary" as const,
    className: "whitespace-nowrap bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50",
  },
  [RoomStatus.PLAYING]: {
    label: "Playing",
    variant: "default" as const,
    className: "whitespace-nowrap bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50",
  },
  [RoomStatus.ENDED]: {
    label: "Ended",
    variant: "destructive" as const,
    className: "whitespace-nowrap bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-50",
  },
};

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const isPlayerInRoom = useCallback((room: Room) => {
    return room.roomPlayers.some(player => player.player.id === currentUserId);
  }, [currentUserId]);

  const sortRooms = useCallback((rooms: Room[]) => {
    return [...rooms].sort((a, b) => {
      // First priority: rooms that need rejoin (playing and player is in room)
      const aCanRejoin = a.status === RoomStatus.PLAYING && isPlayerInRoom(a);
      const bCanRejoin = b.status === RoomStatus.PLAYING && isPlayerInRoom(b);
      
      if (aCanRejoin && !bCanRejoin) return -1;
      if (!aCanRejoin && bCanRejoin) return 1;

      // Second priority: waiting rooms
      if (a.status === RoomStatus.WAITING && b.status !== RoomStatus.WAITING) return -1;
      if (a.status !== RoomStatus.WAITING && b.status === RoomStatus.WAITING) return 1;

      // Third priority: sort by creation date (assuming newer rooms should be first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [isPlayerInRoom]);

  const loadUserAndRooms = useCallback(async () => {
    try {
      const [userData, roomsData] = await Promise.all([
        dashboardService.getProfile(),
        roomsService.findAll()
      ]);
      setCurrentUserId(userData.id);
      setRooms(sortRooms(roomsData));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load data";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  }, [toast, sortRooms]);

  useEffect(() => {
    loadUserAndRooms();
  }, [loadUserAndRooms]);

  const handleJoinRoom = async (id: number) => {
    const room = rooms.find(r => r.id === id);
    if (!room) return;

    // If player is already in a playing room, directly navigate
    if (room.status === RoomStatus.PLAYING && isPlayerInRoom(room)) {
      router.push(`/rooms/${id}`);
      return;
    }

    // Otherwise, call join API
    try {
      await roomsService.join(id);
      toast({
        title: "Success",
        description: "Successfully joined the room",
      });
      router.push(`/rooms/${id}`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to join room";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Game Rooms</h1>
        <Button onClick={() => router.push("/rooms/create")}>
          <Plus className="mr-2 h-4 w-4" />
          Create Room
        </Button>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Players</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rooms.map((room) => {
                const canJoin = room.status === RoomStatus.WAITING || 
                  (room.status === RoomStatus.PLAYING && isPlayerInRoom(room));
                const buttonText = room.status === RoomStatus.PLAYING && isPlayerInRoom(room) 
                  ? "Rejoin" 
                  : "Join";

                return (
                  <TableRow key={room.id}>
                    <TableCell className="font-medium">{room.name}</TableCell>
                    <TableCell>{room.description}</TableCell>
                    <TableCell>
                      {room.roomPlayers?.length || 0}/{room.maxPlayers}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge 
                        variant={statusConfig[room.status].variant}
                        className={statusConfig[room.status].className}
                      >
                        {statusConfig[room.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="secondary"
                        onClick={() => handleJoinRoom(room.id)}
                        disabled={!canJoin}
                      >
                        {buttonText}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {rooms.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    No rooms available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
} 