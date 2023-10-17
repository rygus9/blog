import { CalendarIcon, LinkIcon } from "@heroicons/react/20/solid";

import { classNames } from "@/common/utils/classNames";

interface RecordCardProps {
  content: string;
  createdAt: string;
  title: string;
}

export const RecordCard = ({ content, createdAt, title }: RecordCardProps) => (
  <article className="py-8 first:pt-0">
    <h2
      className="text-[22px] text-txt-500 font-semibold scroll-mt-20"
      id={createdAt}
    >
      <a
        href={`#${createdAt}`}
        className={classNames(
          "flex items-center justify-start gap-1",
          "hover:text-txt-300",
        )}
      >
        {title} <LinkIcon className="w-5 h-5 text-txt-300" />
      </a>
    </h2>
    <span className="inline-flex gap-1 items-center text-sm text-txt-300 align-middle mt-1">
      <CalendarIcon className="w-4 h-4" />
      <span className="font-arita">{createdAt}</span>
    </span>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="mt-6 space-y-4"
    />
  </article>
);
