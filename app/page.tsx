import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { Divider } from "../common/components/Divider";
import { notes } from "../common/mock";
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

const Page = () => {
  return (
    <main>
      <section>
        <h1 className="font-blackHan text-txt-em text-[1.75rem] sm:text-3xl">
          안녕하세요. 구교현입니다.
        </h1>
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
      </section>
      <Divider />
      <section>
        <SectionTitle href="/record">나의 일기</SectionTitle>
        <div className="mt-2">
          <p className="py-1">
            요새 약간 프론트엔드에 대한 열망이 줄어들었다. 인터렉티브...
            <span className="ml-2">At 23.09.02</span>
          </p>
        </div>
        <MoreLink href="/record" />
      </section>
      <Divider />
      <section>
        <SectionTitle href="/note">정리 노트</SectionTitle>
        <ul className="space-y-8 mt-5 mb-4">
          {notes.map((props) => (
            <NoteListCard {...props} />
          ))}
        </ul>
        <MoreLink href="/note" />
      </section>
    </main>
  );
};

export default Page;
