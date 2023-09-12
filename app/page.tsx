import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { notes, snippets } from "./_common/mock";

const Page = () => {
  return (
    <main className="py-10 sm:py-14 max-w-2xl m-auto px-4">
      <section className="mt-3 mb-6">
        <h1 className="font-blackHan text-txt-em text-[1.75rem] sm:text-3xl">
          안녕하세요. 구교현입니다.
        </h1>
        <p className="pt-4">
          멋진 디자인과 인터렉션, 애니메이션으로 깔끔한 UI, UX를 구현하는데
          흥미를 느낍니다. <br />
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
      <hr className="border-back-em" />
      <section className="my-4">
        <Category href="/record">나의 일기</Category>
        <div className="mt-2">
          <p className="py-1">
            요새 약간 프론트엔드에 대한 열망이 줄어들었다. 인터렉티브...
            <span className="ml-2">At 23.09.02</span>
          </p>
        </div>
        <MoreLink href="/record" />
      </section>
      <hr className="border-back-em" />
      <section className="my-4">
        <Category href="/note">정리 노트</Category>
        <ul className="mt-2 flex flex-wrap items-start">
          {notes.map((props) => (
            <NoteItem {...props} />
          ))}
        </ul>
        <MoreLink href="/note" />
      </section>
      <hr className="border-back-em" />
      <section className="my-4">
        <Category href="/snippet">스니펫</Category>

        <ul className="mt-2 flex flex-wrap items-start">
          {snippets.map((props) => (
            <SnippetItem {...props} />
          ))}
        </ul>
        <MoreLink href="/snippet" />
      </section>
    </main>
  );
};

const NoteItem = ({
  categorySlug,
  category,
  titleSlug,
  title,
}: {
  categorySlug: string;
  category: string;
  titleSlug: string;
  title: string;
}) => (
  <li className="w-[48%] p-2 pl-0">
    <p className="text-txt-300 text-sm cursor-pointer w-fit">
      <Link href={`/note?category=${categorySlug}`}>{category}</Link>
    </p>
    <h3 className="cursor-pointer w-fit">
      <Link href={`/note/${titleSlug}`}>{title}</Link>
    </h3>
  </li>
);

const SnippetItem = ({
  categorySlug,
  category,
  titleSlug,
  title,
}: {
  categorySlug: string;
  category: string;
  titleSlug: string;
  title: string;
}) => (
  <li className="w-[47%] p-1 pl-0 space-x-1">
    <span className="cursor-pointer">
      <Link href={`/snippet?category=${categorySlug}`}> {category}</Link>
    </span>
    <span className="cursor-pointer">
      <Link href={`/snippet/${titleSlug}`}>{title}</Link>
    </span>
  </li>
);

const Category = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <h2 className="text-md text-txt-300 font-arita font-semibold">
    <Link href={href} className="flex items-center justify-start">
      {children} <ChevronRightIcon className="w-4 h-4 stroke-2" />
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
