import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { NoteMeta } from "@/notion/server/getNotes";
import { classNames } from "@/util/classNames";

type NoteListCardProps = Omit<NoteMeta, "id" | "notionId">;

export const NoteListCard = ({
  category,
  created,
  short,
  title,
  slug,
}: NoteListCardProps) => {
  return (
    <Link href={`/note/${slug}`} className="align-middle group">
      <article>
        <p
          className={classNames(
            "w-fit py-1 px-2 rounded-sm bg-contrast-200 text-contrast-500 text-sm cursor-pointer transition-[outline]",
            "hover:outline hover:outline-offset-2 hover:outline-contrast-500",
          )}
        >
          <Link href={`/note?category=${category}`}>{category}</Link>
        </p>
        <h3
          className={classNames(
            "text-lg text-contrast-700 mt-1 font-semibold transition-colors",
            "group-hover:text-contrast-500",
          )}
        >
          {title}
        </h3>
        <p className="text-contrast-500 mt-1">{short}</p>
        <section className="mt-2">
          <span className="inline-flex flex-wrap gap-1 items-center text-sm text-contrast-500 align-middle">
            <CalendarIcon className="w-4 h-4" />
            <span className="font-arita">{created}</span>
          </span>
        </section>
      </article>
    </Link>
  );
};
