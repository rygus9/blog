import { CalendarIcon, LinkIcon } from "@heroicons/react/20/solid";

import { RecordMeta } from "@/notion/getRecords";
import { classNames } from "@/utils/classNames";

interface RecordCardProps extends Omit<RecordMeta, "id"> {}

export const RecordCard = ({ content, created, title }: RecordCardProps) => (
  <article className="py-8 first:pt-0">
    <h2
      className="text-[22px] text-txt-500 font-semibold scroll-mt-20"
      id={created}
    >
      <a
        href={`#${created}`}
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
      <span className="font-arita">{created}</span>
    </span>
    <div className="mt-4 space-y-4">{content}</div>
  </article>
);
