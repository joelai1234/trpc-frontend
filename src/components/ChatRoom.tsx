import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { socketService } from "@/services/socket.service";
import { Card } from "@/components/ui/card";
import { chatService } from "@/services/chat.service";
import { Message } from "@/types/chat";

interface ChatRoomProps {
  roomId: number;
}

export function ChatRoom({ roomId }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [diceInput, setDiceInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socket = socketService.getSocket();

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const history = await chatService.getRoomMessages(roomId);
        setMessages(history.sort((a, b) => 
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ));
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    };

    loadMessages();

    if (socket) {
      socketService.joinRoom(roomId);

      const handleMessage = (message: Message) => {
        console.log('Received message:', message);
        setMessages((prev) => {
          const exists = prev.some(m => m.id === message.id);
          if (exists) return prev;
          return [...prev, message];
        });
      };

      socket.on("message", handleMessage);

      return () => {
        socket.off("message", handleMessage);
        socketService.leaveRoom(roomId);
      };
    }
  }, [roomId, socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && socket) {
      socket.emit("sendMessage", { roomId, content: newMessage });
      setNewMessage("");
    }
  };

  const handleRollDice = (e: React.FormEvent) => {
    e.preventDefault();
    if (diceInput.trim() && socket) {
      socket.emit("rollDice", { roomId, dice: diceInput });
      setDiceInput("");
    }
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={`${message.id}-${message.createdAt}`}
              className={`p-2 rounded-lg ${
                message.type === "system"
                  ? "bg-gray-100"
                  : message.type === "dice"
                  ? "bg-blue-50"
                  : "bg-white border"
              }`}
            >
              {message.type !== "system" && message.sender && (
                <div className="font-semibold text-sm">
                  {message.sender.username}
                </div>
              )}
              <div className="text-sm">{message.content}</div>
              <div className="text-xs text-gray-500">
                {new Date(message.createdAt).toLocaleTimeString()}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t space-y-4">
        <form onSubmit={handleRollDice} className="flex gap-2">
          <Input
            placeholder="輸入骰子格式 (例如: 1d100)"
            value={diceInput}
            onChange={(e) => setDiceInput(e.target.value)}
          />
          <Button type="submit">Roll</Button>
        </form>

        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            placeholder="輸入訊息..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Card>
  );
}