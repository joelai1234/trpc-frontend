"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { roomsService } from "@/services/rooms.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const createRoomSchema = z.object({
  name: z.string().min(2, {
    message: "Room name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  maxPlayers: z.coerce
    .number()
    .min(2, { message: "Must have at least 2 players" })
    .max(10, { message: "Cannot have more than 10 players" }),
  script: z.string().min(20, {
    message: "Script must be at least 20 characters.",
  }),
});

export default function CreateRoomPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof createRoomSchema>>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: "",
      description: "",
      maxPlayers: 5,
      script: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createRoomSchema>) {
    try {
      const room = await roomsService.create(values);
      toast({
        title: "Success",
        description: "Room created successfully!",
      });
      router.push(`/rooms/${room.id}`);
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create room. Please try again.",
      });
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create Room</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter room name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter room description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxPlayers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Players</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={2}
                        max={10}
                        placeholder="Enter maximum number of players"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="script"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Script</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter your script content here..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Room</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
} 