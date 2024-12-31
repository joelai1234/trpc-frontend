"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StoryPreview } from "@/types/script";
import { mockScripts } from "@/mocks/scriptData";

export default function ScriptsPage() {
  const [scripts] = useState<StoryPreview[]>(
    mockScripts.map((script) => ({
      id: script.id,
      title: script.title,
      summary: script.summary,
    }))
  );
  const router = useRouter();

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Scripts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scripts.map((script) => (
                <TableRow key={script.id}>
                  <TableCell className="font-medium">{script.title}</TableCell>
                  <TableCell>{script.summary}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="secondary"
                      onClick={() => router.push(`/scripts/${script.id}`)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
