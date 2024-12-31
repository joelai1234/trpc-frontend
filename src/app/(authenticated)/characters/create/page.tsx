"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import { characterService } from "@/services/character.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Dice1 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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

const characteristics = [
  { name: "str", label: "STR", description: "Strength (3D6 × 5)", min: 15, max: 90, diceRule: "3d6x5" },
  { name: "con", label: "CON", description: "Constitution (3D6 × 5)", min: 15, max: 90, diceRule: "3d6x5" },
  { name: "siz", label: "SIZ", description: "Size ((2D6 + 6) × 5)", min: 40, max: 90, diceRule: "(2d6+6)x5" },
  { name: "dex", label: "DEX", description: "Dexterity (3D6 × 5)", min: 15, max: 90, diceRule: "3d6x5" },
  { name: "app", label: "APP", description: "Appearance (3D6 × 5)", min: 15, max: 90, diceRule: "3d6x5" },
  { name: "int", label: "INT", description: "Intelligence ((2D6 + 6) × 5)", min: 40, max: 90, diceRule: "(2d6+6)x5" },
  { name: "pow", label: "POW", description: "Power (3D6 × 5)", min: 15, max: 90, diceRule: "3d6x5" },
  { name: "edu", label: "EDU", description: "Education ((2D6 + 6) × 5)", min: 40, max: 90, diceRule: "(2d6+6)x5" },
  { name: "luck", label: "LUK", description: "Luck (3D6 × 5)", min: 15, max: 90, diceRule: "3d6x5" },
] as const;

// 首先定義特徵值的名稱類型
type CharacteristicName = typeof characteristics[number]['name'];

export default function CreateCharacterPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof characterSchema>>({
    resolver: zodResolver(characterSchema),
    defaultValues: {
      name: "",
      occupation: "",
      age: 25,
      str: 50,
      con: 50,
      siz: 50,
      dex: 50,
      app: 50,
      int: 50,
      pow: 50,
      edu: 50,
      luck: 50,
      skills: [],
      background: "",
      equipment: [],
      hp: 0,
      maxHp: 0,
      mp: 0,
      maxMp: 0,
      san: 0,
      maxSan: 0,
      mov: 0,
    },
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    name: "skills",
    control: form.control,
  });

  const {
    fields: equipmentFields,
    append: appendEquipment,
    remove: removeEquipment,
  } = useFieldArray({
    name: "equipment",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    control: form.control as z.Control<{ equipment: string[] }>,
  });

  const rollDice = (diceRule: string, fieldName: CharacteristicName) => {
    let result = 0;
    
    if (diceRule === "3d6x5") {
      // 擲 3D6 × 5
      result = Array(3)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6) + 1)
        .reduce((a, b) => a + b, 0) * 5;
    } else if (diceRule === "(2d6+6)x5") {
      // 擲 (2D6 + 6) × 5
      result = (Array(2)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6) + 1)
        .reduce((a, b) => a + b, 0) + 6) * 5;
    }

    // 確保結果在允許的範圍內
    const stat = characteristics.find(c => c.name === fieldName);
    if (stat) {
      result = Math.max(stat.min, Math.min(stat.max, result));
    }

    form.setValue(fieldName, result);
  };

  const rollAll = () => {
    characteristics.forEach((stat) => {
      rollDice(stat.diceRule, stat.name);
    });
    
    toast({
      title: "Success",
      description: "All characteristics have been rolled!",
    });
  };

  async function onSubmit(values: z.infer<typeof characterSchema>) {
    try {
      // Calculate derived attributes
      const hp = Math.floor((values.con + values.siz) / 10);
      const mp = Math.floor(values.pow / 5);
      const san = values.pow;

      // Calculate MOV based on STR, DEX, and SIZ
      let mov = 8;
      if (values.str < values.siz && values.dex < values.siz) mov = 7;
      if (values.str > values.siz && values.dex > values.siz) mov = 9;

      const characterData = {
        ...values,
        hp,
        maxHp: hp,
        mp,
        maxMp: mp,
        san,
        maxSan: san,
        mov,
      };

      const character = await characterService.create(characterData);
      toast({
        title: "Success",
        description: "Character created successfully!",
      });
      router.push(`/characters/${character.id}`);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create character";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Create Character
            <Button
              type="button"
              variant="outline"
              onClick={rollAll}
              className="flex items-center gap-2"
            >
              <Dice1 className="h-4 w-4" />
              Roll All Characteristics
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Character Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter character name" {...field} />
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
                        <Input placeholder="Enter occupation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" min={15} max={90} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Characteristics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {characteristics.map((stat) => (
                  <FormField
                    key={stat.name}
                    control={form.control}
                    name={stat.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <span className="font-medium">{stat.label}</span>
                          <span className="text-xs text-muted-foreground block">
                            {stat.description}
                          </span>
                        </FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input type="number" min={stat.min} max={stat.max} {...field} />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => rollDice(stat.diceRule, stat.name)}
                          >
                            <Dice1 className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormLabel>Skills</FormLabel>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendSkill({ name: "", value: 50, isOccupational: false })}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
                {skillFields.map((field, index) => (
                  <div key={field.id} className="flex gap-4 items-start">
                    <FormField
                      control={form.control}
                      name={`skills.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Skill name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`skills.${index}.value`}
                      render={({ field }) => (
                        <FormItem className="w-24">
                          <FormControl>
                            <Input type="number" min={0} max={99} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`skills.${index}.isOccupational`}
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">Occupational</FormLabel>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSkill(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Equipment */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormLabel>Equipment</FormLabel>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendEquipment("")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Equipment
                  </Button>
                </div>
                {equipmentFields.map((field, index) => (
                  <div key={field.id} className="flex gap-4 items-center">
                    <FormField
                      control={form.control}
                      name={`equipment.${index}`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Equipment name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeEquipment(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Background */}
              <FormField
                control={form.control}
                name="background"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Background Story</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter character background story"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit">Create Character</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
