"use client";

import { useSearchParams } from "next/navigation";

import { NoteMeta } from "@/common/notion/getNotes";

import { NoteListCard } from "./NoteListCard";

interface NoteListProps {
  notes: Omit<NoteMeta, "notionId">[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category") ?? "";

  return (
    <ul className="space-y-10 min-h-[40px]">
      {notes
        .filter((note) => (nowCategory ? note.category === nowCategory : true))
        .map((note) => (
          <NoteListCard {...note} key={note.id} />
        ))}
    </ul>
  );
};
