"use client";

import { useSearchParams } from "next/navigation";

import { NoteMeta } from "@/notion/server/getNotes";

import { NoteListCard } from "./NoteListCard";

interface NoteListProps {
  notes: Omit<NoteMeta, "notionId">[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category") ?? "";

  return (
    <ul className="min-h-[40px]">
      {notes
        .filter((note) => (nowCategory ? note.category === nowCategory : true))
        .map((note) => (
          <li key={note.id}>
            <NoteListCard {...note} />
          </li>
        ))}
    </ul>
  );
};
