"use client";

import { useEffect, useState, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Character } from "@/types/character";
import { characterService } from "@/services/character.service";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { Pencil, Trash2, ChevronLeft } from "lucide-react";

const characterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
  age: z.coerce.number().min(15).max(90),
  str: z.coerce.number().min(15).max(90),
  con: z.coerce.number().min(15).max(90),
  siz: z.coerce.number().min(40).max(90),
  dex: z.coerce.number().min(15).max(90),
  app: z.coerce.number().min(15).max(90),
  int: z.coerce.number().min(40).max(90),
  pow: z.coerce.number().min(15).max(90),
  edu: z.coerce.number().min(40).max(90),
  luck: z.coerce.number().min(15).max(90),
  hp: z.coerce.number(),
  maxHp: z.coerce.number(),
  mp: z.coerce.number(),
  maxMp: z.coerce.number(),
  san: z.coerce.number(),
  maxSan: z.coerce.number(),
  mov: z.coerce.number(),
  background: z.string(),
  skills: z.array(
    z.object({
      name: z.string(),
      value: z.number(),
      isOccupational: z.boolean().default(false),
    })
  ),
  equipment: z.array(z.string()),
});

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}

// Add this type to handle the character stats
type CharacterStat =
  | "str"
  | "con"
  | "siz"
  | "dex"
  | "app"
  | "int"
  | "pow"
  | "edu"
  | "luck";

export default function CharacterPage({ params }: CharacterPageProps) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();
  const resolvedParams = use(params);

  const form = useForm<z.infer<typeof characterSchema>>({
    resolver: zodResolver(characterSchema),
  });

  const loadCharacter = useCallback(async () => {
    try {
      const data = await characterService.findOne(Number(resolvedParams.id));
      setCharacter(data);
      form.reset(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load character";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }, [resolvedParams.id, router, toast, form]);

  useEffect(() => {
    loadCharacter();
  }, [loadCharacter]);

  const handleUpdate = async (values: z.infer<typeof characterSchema>) => {
    try {
      const updated = await characterService.update(Number(resolvedParams.id), values);
      setCharacter(updated);
      setIsEditing(false);
      toast({
        title: "Success",
        description: "Character updated successfully",
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update character";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  const handleDelete = async () => {
    try {
      await characterService.delete(Number(resolvedParams.id));
      toast({
        title: "Success",
        description: "Character deleted successfully",
      });
      router.push("/dashboard");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to delete character";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!character) return null;

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/dashboard")}
                  className="hover:bg-accent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div>
                  <CardTitle className="text-2xl">{character.name}</CardTitle>
                  <CardDescription>{character.occupation}</CardDescription>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your character.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleUpdate)} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Occupation</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Character Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {(
                    [
                      "str",
                      "con",
                      "siz",
                      "dex",
                      "app",
                      "int",
                      "pow",
                      "edu",
                      "luck",
                    ] as CharacterStat[]
                  ).map((stat) => (
                    <FormField
                      key={stat}
                      control={form.control}
                      name={stat}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{stat.toUpperCase()}</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {/* Background */}
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Add Skills Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Skills</h3>
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <div className="space-y-2">
                          {field.value?.map((skill, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-[2fr,1fr,auto] gap-2 items-center">
                              <Input
                                placeholder="Skill name"
                                value={skill.name}
                                onChange={(e) => {
                                  const newSkills = [...field.value];
                                  newSkills[index] = { ...skill, name: e.target.value };
                                  field.onChange(newSkills);
                                }}
                              />
                              <Input
                                type="number"
                                placeholder="Value"
                                value={skill.value}
                                onChange={(e) => {
                                  const newSkills = [...field.value];
                                  newSkills[index] = { ...skill, value: Number(e.target.value) };
                                  field.onChange(newSkills);
                                }}
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="flex-shrink-0"
                                onClick={() => {
                                  const newSkills = field.value.filter((_, i) => i !== index);
                                  field.onChange(newSkills);
                                }}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              field.onChange([...field.value, { name: "", value: 0 }]);
                            }}>
                            Add Skill
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Add Equipment Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Equipment</h3>
                  <FormField
                    control={form.control}
                    name="equipment"
                    render={({ field }) => (
                      <FormItem>
                        <div className="space-y-2">
                          {field.value?.map((item, index) => (
                            <div key={index} className="flex gap-2">
                              <Input
                                placeholder="Equipment name"
                                value={item}
                                onChange={(e) => {
                                  const newEquipment = [...field.value];
                                  newEquipment[index] = e.target.value;
                                  field.onChange(newEquipment);
                                }}
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => {
                                  const newEquipment = field.value.filter((_, i) => i !== index);
                                  field.onChange(newEquipment);
                                }}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              field.onChange([...field.value, ""]);
                            }}>
                            Add Equipment
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              {/* Status Bars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              </div>

              {/* Character Stats */}
              <div className="grid grid-cols-3 gap-4">
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

              {/* Skills */}
              <div>
                <h3 className="text-lg font-medium mb-2">Skills</h3>
                {character.skills.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {character.skills.map((skill, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{skill.name}</span>
                        <span>{skill.value}%</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground italic">No skills added yet.</p>
                )}
              </div>

              {/* Equipment */}
              <div>
                <h3 className="text-lg font-medium mb-2">Equipment</h3>
                {character.equipment.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {character.equipment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground italic">No equipment added yet.</p>
                )}
              </div>

              {/* Background */}
              <div>
                <h3 className="text-lg font-medium mb-2">Background</h3>
                <p className="text-muted-foreground">{character.background}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
