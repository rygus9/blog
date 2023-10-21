import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { NoteMeta } from "@/common/notion/getNotes";

type NoteListCardProps = Omit<NoteMeta, "id" | "notionId">;

export const NoteListCard = ({
  category,
  created,
  short,
  title,
  slug,
}: NoteListCardProps) => {
  return (
    <article>
      <p className="w-fit py-1 px-2 rounded-sm bg-back-em text-txt-300 text-sm cursor-pointer">
        <Link href={`/note?category=${category}`}>{category}</Link>
      </p>
      <h3 className="text-lg text-txt-700 mt-1">
        <Link href={`/note/${slug}`} className="align-middle mr-2">
          {title}
        </Link>
      </h3>
      <p className="text-txt-300 mt-1">{short}</p>
      <section className="mt-2">
        <span className="inline-flex flex-wrap gap-1 items-center text-sm text-txt-300 align-middle">
          <CalendarIcon className="w-4 h-4" />
          <span className="font-arita">{created}</span>
        </span>
      </section>
    </article>
  );
};
