"use client";

import { useState, use, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Script, mockScripts } from "@/mocks/scriptData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { roomsService } from "@/services/rooms.service";

interface ScriptPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 將屬性分組顯示
const statGroups = [
  {
    title: "Basic Attributes",
    stats: ['STR', 'CON', 'SIZ', 'DEX', 'POW'],
    bgColor: "bg-blue-50"
  },
  {
    title: "Knowledge Attributes",
    stats: ['EDU', 'INT', 'LUCK'],
    bgColor: "bg-green-50"
  },
  {
    title: "Status Values",
    stats: ['HP', 'MP', 'SAN'],
    bgColor: "bg-amber-50"
  }
];

function ScriptPageContent({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [script] = useState<Script>(() => {
    const foundScript = mockScripts.find(s => s.id === id);
    if (!foundScript) {
      throw new Error(`Script with id ${id} not found`);
    }
    return foundScript;
  });

  // 從劇本建議人數設置初始值
  const [maxPlayers, setMaxPlayers] = useState<number>(() => {
    const recommended = script.players.recommended;
    return recommended || 4;
  });
  const [isCreating, setIsCreating] = useState(false);

  // 從劇本範圍解析最小和最大人數
  const [minPlayers, maxAllowedPlayers] = useMemo(() => {
    const range = script.players.range.split('-').map(Number);
    return [range[0] || 2, Math.min(range[1] || 10, 10)];
  }, [script.players.range]);

  const handleCreateRoom = async () => {
    if (maxPlayers < minPlayers || maxPlayers > maxAllowedPlayers) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Number of players must be between ${minPlayers}-${maxAllowedPlayers}`,
      });
      return;
    }

    setIsCreating(true);
    try {
      const room = await roomsService.create({
        name: `${script.title}`,
        description: script.summary,
        maxPlayers,
        script: JSON.stringify(script),
      });
      
      toast({
        title: "Success",
        description: "Room created successfully! Redirecting to room...",
      });
      router.push(`/rooms/${room.id}`);
    } catch (error) {
      console.error('Create room error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create room, please try again later",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/scripts")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Scripts
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Start Game</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Game Room</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Maximum Players ({minPlayers}-{maxAllowedPlayers})
                </label>
                <div className="space-y-1">
                  <Input
                    type="number"
                    min={minPlayers}
                    max={maxAllowedPlayers}
                    value={maxPlayers}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setMaxPlayers(Math.min(Math.max(value, minPlayers), maxAllowedPlayers));
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    Recommended: {script.players.recommended} players
                  </p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <DialogTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogTrigger>
                <Button 
                  onClick={handleCreateRoom}
                  disabled={isCreating || maxPlayers < minPlayers || maxPlayers > maxAllowedPlayers}
                >
                  {isCreating ? "Creating..." : "Confirm"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Title</h3>
                <p>{script.title}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Type</h3>
                <p>{script.type}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Difficulty</h3>
                <p>{script.difficulty}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Duration</h3>
                <p>{script.duration}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Recommended Players</h3>
                <p>{script.players.recommended} players ({script.players.range})</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Setting</h3>
                <p>{script.setting.time}, {script.setting.location}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Summary</h3>
              <p className="text-gray-700">{script.summary}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hidden">
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Historical Background</h3>
                <p className="text-gray-700">{script.background.history}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Characters</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {script.background.characters.map((character, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-md">{character.name}</CardTitle>
                        <p className="text-sm text-gray-500">{character.profession}</p>
                      </CardHeader>
                      <CardContent>
                        <p><span className="font-semibold">Personality: </span>{character.personality}</p>
                        <p><span className="font-semibold">Motivation: </span>{character.motivation}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Important Locations</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {script.background.locations.map((location, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-md">{location.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{location.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hidden">
          <CardHeader>
            <CardTitle>Scenes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {script.scenes.map((scene, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-md">{scene.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {scene.start && (
                      <p><span className="font-semibold">Opening: </span>{scene.start}</p>
                    )}
                    {scene.objective && (
                      <p><span className="font-semibold">Objective: </span>{scene.objective}</p>
                    )}
                    {scene.clues && (
                      <div>
                        <p className="font-semibold">Clues:</p>
                        <ul className="list-disc list-inside pl-4">
                          {scene.clues.map((clue, i) => (
                            <li key={i}>{clue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {scene.challenges && (
                      <div>
                        <p className="font-semibold">Challenges:</p>
                        {scene.challenges.map((challenge, i) => (
                          <div key={i} className="pl-4">
                            <p><span className="font-semibold">{challenge.type}: </span>{challenge.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {scene.main_confrontation && (
                      <p><span className="font-semibold">Main Conflict: </span>{scene.main_confrontation}</p>
                    )}
                    {scene.outcomes && (
                      <div>
                        <p className="font-semibold">Possible Outcomes:</p>
                        <ul className="list-disc list-inside pl-4">
                          {scene.outcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hidden">
          <CardHeader>
            <CardTitle>Character Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {script.character_suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <span>{suggestion.skill}</span>
                  <span className="px-2 py-1 text-sm rounded-full bg-gray-100">
                    Importance: {suggestion.importance}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hidden">
          <CardHeader>
            <CardTitle>Appendix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Maps</h3>
                <ul className="list-disc list-inside pl-4">
                  {script.appendix.maps.map((map, index) => (
                    <li key={index}>{map}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">NPC Stats</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {script.appendix.npc_stats.map((npc, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-2 border-b">
                        <CardTitle className="text-xl flex items-center gap-2">
                          {npc.name}
                          <span className="text-sm font-normal text-gray-500">
                            {script.background.characters.find(c => c.name === npc.name)?.profession}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 pt-4">
                        {statGroups.map((group, groupIndex) => (
                          <div key={groupIndex}>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">{group.title}</h4>
                            <div className="grid grid-cols-3 gap-2">
                              {group.stats.map(stat => (
                                <div 
                                  key={stat} 
                                  className={`${group.bgColor} rounded-lg p-3 text-center transition-all hover:scale-105`}
                                >
                                  <div className="text-sm font-semibold text-gray-600">{stat}</div>
                                  <div className="text-xl font-medium mt-1">
                                    {npc.stats[stat as keyof typeof npc.stats]}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Mythological Elements</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {script.appendix.mythos_elements.map((element, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-md">{element.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{element.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Additional Clues</h3>
                <ul className="list-disc list-inside pl-4">
                  {script.appendix.additional_clues.map((clue, index) => (
                    <li key={index}>{clue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ScriptPage({ params }: ScriptPageProps) {
  const resolvedParams = use(params);
  return <ScriptPageContent id={resolvedParams.id} />;
} 