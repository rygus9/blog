import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { getNotes } from "@/notion/server/getNotes";
import { getRecords } from "@/notion/server/getRecords";

import { Divider } from "../component/common/Divider";
import { Title } from "../component/common/Title";
import { NoteListCard } from "../component/note/NoteListCard";

const SectionTitle = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
  <h2 className="text-lg text-contrast-700 font-arita font-bold">
    <Link href={href} className="flex items-center justify-start">
      {children} <ChevronRightIcon className="w-5 h-5 ml-1 stroke-2" />
    </Link>
  </h2>
);

const Page = async () => {
  const notes = await getNotes();
  const records = await getRecords();
  const { content, created } = records[0];
  const truncatedContent =
    content.length < 100 ? content : `${content.substring(0, 100)}...`;

  return (
    <main>
      <Title title="DEVCO's BLOG">
        <p className="pt-3 space-x-4">
          <Link href="/resume">
            <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
              ABOUT
            </span>
          </Link>
          <Link
            href="https://github.com/rygus9"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
              GITHUB
            </span>
          </Link>
        </p>
      </Title>
      <Divider />
      <section>
        <SectionTitle href="/record">나의 일기</SectionTitle>
        <div className="my-3">
          <span className="inline-flex gap-1 items-center text-contrast-500 align-middle">
            <CalendarIcon className="w-4 h-4" />
            <span className="font-arita">{created}</span>
          </span>
          <p className="pt-1">{truncatedContent}</p>
        </div>
      </section>
      <Divider />
      <section>
        <SectionTitle href="/note">정리 노트</SectionTitle>
        <ul className="space-y-8 mt-5 mb-4">
          {notes.map((props) => (
            <NoteListCard {...props} key={props.id} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Page;
