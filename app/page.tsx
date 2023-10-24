import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { getNotes } from "@/notion/getNotes";
import { getRecords } from "@/notion/getRecords";

import { Divider } from "../components/Divider";
import { Title } from "./_feature/components/Title";
import { NoteListCard } from "./note/_feature/components/NoteListCard";

const SectionTitle = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
  <h2 className="text-lg text-txt-700 font-arita font-bold">
    <Link href={href} className="flex items-center justify-start">
      {children} <ChevronRightIcon className="w-5 h-5 ml-1 stroke-2" />
    </Link>
  </h2>
);

const MoreLink = ({ href }: { href: string }) => (
  <Link
    className="inline-block mt-2 text-sm text-txt-300 font-arita"
    href={href}
  >
    더보기...
  </Link>
);

const Page = async () => {
  const notes = await getNotes();
  const records = await getRecords();
  const { content, created } = records[0];
  const truncatedContent =
    content.length < 100 ? content : `${content.substring(0, 100)}...`;

  return (
    <main>
      <Title title="안녕하세요. DEVCO입니다.">
        <p className="pt-4">
          개발과 관련된 무언가를 깊게 공부하고 학습하는 과정 자체를 즐깁니다.
        </p>
        <p className="pt-3 space-x-4">
          <Link href="/resume">
            <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
              이력서
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
          <span className="inline-flex gap-1 items-center text-txt-300 align-middle">
            <CalendarIcon className="w-4 h-4" />
            <span className="font-arita">{created}</span>
          </span>
          <p className="pt-1">{truncatedContent}</p>
        </div>
        <MoreLink href="/record" />
      </section>
      <Divider />
      <section>
        <SectionTitle href="/note">정리 노트</SectionTitle>
        <ul className="space-y-8 mt-5 mb-4">
          {notes.map((props) => (
            <NoteListCard {...props} key={props.id} />
          ))}
        </ul>
        <MoreLink href="/note" />
      </section>
    </main>
  );
};

export default Page;
