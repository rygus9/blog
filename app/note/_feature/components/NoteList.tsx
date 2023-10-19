"use client";

import { useSearchParams } from "next/navigation";

import { Note } from "@/common/mock";

import { NoteListCard } from "./NoteListCard";

interface NoteListProps {
  notes: Note[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category") ?? "";

  return (
    <ul className="space-y-10 min-h-[40px]">
      {notes
        .filter((note) =>
          nowCategory ? note.categorySlug === nowCategory : true,
        )
        .map((note: Note) => (
          <NoteListCard {...note} key={note.titleSlug} />
        ))}
    </ul>
  );
};
