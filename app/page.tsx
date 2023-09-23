import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { notes, snippets } from "./_common/mock";

const Page = () => {
  return (
    <main className="py-10 sm:py-14 max-w-2xl m-auto px-4">
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
      <hr className="border-back-em my-8" />
      <section>
        <Category href="/record">나의 일기</Category>
        <div className="mt-2">
          <p className="py-1">
            요새 약간 프론트엔드에 대한 열망이 줄어들었다. 인터렉티브...
            <span className="ml-2">At 23.09.02</span>
          </p>
        </div>
        <MoreLink href="/record" />
      </section>
      <hr className="border-back-em my-8" />
      <section>
        <Category href="/note">정리 노트</Category>
        <ul className="mt-2 flex flex-wrap items-start justify-between">
          {notes.map((props) => (
            <ContentItem type="note" {...props} />
          ))}
        </ul>
        <MoreLink href="/note" />
      </section>
      <hr className="border-back-em my-8" />
      <section>
        <Category href="/snippet">스니펫</Category>

        <ul className="mt-2 flex flex-wrap items-start justify-between">
          {snippets.map((props) => (
            <ContentItem type="snippet" {...props} />
          ))}
        </ul>
        <MoreLink href="/snippet" />
      </section>
    </main>
  );
};

const ContentItem = ({
  categorySlug,
  category,
  titleSlug,
  title,
  type,
}: {
  categorySlug: string;
  category: string;
  titleSlug: string;
  title: string;
  type: "note" | "snippet";
}) => (
  <li className="w-[48%] py-4 space-y-2">
    <p className="w-fit py-1 px-2 rounded-sm bg-back-em text-txt-300 text-sm cursor-pointer">
      <Link href={`/${type}?category=${categorySlug}`}>{category}</Link>
    </p>
    <h3 className="cursor-pointer w-fit">
      <Link href={`/${type}/${titleSlug}`}>{title}</Link>
    </h3>
  </li>
);

const Category = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <h2 className="text-xl text-txt-700 font-arita font-bold">
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

export default Page;
