import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface BlogListCardProps {
  title: string;
  titleSlug: string;
  intro: string;
  createdAt: string;
  category: string;
  categorySlug: string;
}

export const BlogListCard = ({
  category,
  categorySlug,
  createdAt,
  intro,
  title,
  titleSlug,
}: BlogListCardProps) => {
  return (
    <article>
      <p className="w-fit py-1 px-2 rounded-sm bg-back-em text-txt-300 text-sm cursor-pointer">
        <Link href={`/note?category=${categorySlug}`}>{category}</Link>
      </p>
      <h3 className="text-lg text-txt-700 mt-1">
        <Link href={`/note/${titleSlug}`} className="align-middle mr-2">
          {title}
        </Link>
      </h3>
      <p className="text-txt-300 mt-1">{intro}</p>
      <section className="mt-2">
        <span className="inline-flex flex-wrap gap-1 items-center text-sm text-txt-300 align-middle">
          <CalendarIcon className="w-4 h-4" />
          <span className="font-arita">{createdAt}</span>
        </span>
      </section>
    </article>
  );
};
