import { ArrowUturnLeftIcon, CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { classNames } from "../_common/utils/classNames";
import { categorys, posts } from "./_common/mock";

interface SearchParams {
  category?: string;
}

const Page = ({
  searchParams: { category: nowCategoy },
}: {
  searchParams: SearchParams;
}) => {
  return (
    <div className="relative max-w-2xl h-fit m-auto my-10 sm:my-14">
      <main className="w-full px-2 min-h-[500px]">
        <header>
          <div className="relative">
            <div className="absolute -left-40 top-0 w-40 h-full">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-txt-300"
              >
                <ArrowUturnLeftIcon className="w-4 h-4" />
                <span> 홈으로</span>
              </Link>
            </div>
            <h1 className="font-blackHan text-txt-em text-[1.75rem] sm:text-3xl">
              정리 노트
            </h1>
          </div>
          <p className="mt-4">
            공부 했던 내용이나 진행했던 프로젝트 등을 정리해두는 공간입니다.
          </p>
        </header>
        <hr className="border-back-em my-8" />
        <section className="relative">
          <ul className="flex flex-col gap-4 absolute -left-40 top-1 w-40 h-full text-txt-300">
            <li className={classNames(!nowCategoy && "-order-1")}>
              <Link
                href="/note"
                className={classNames(!nowCategoy && "text-txt-700 text-lg")}
              >
                전체 보기
              </Link>
            </li>
            {categorys.map(({ category, categorySlug }) => (
              <li
                className={classNames(
                  nowCategoy === categorySlug && "-order-1",
                )}
              >
                <Link
                  href={`/note?category=${categorySlug}`}
                  className={classNames(
                    nowCategoy === categorySlug && "text-txt-700 text-lg",
                  )}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-8">
            {posts.map(({ title, titleSlug, intro, createdAt }) => (
              <article>
                <h3 className="text-lg text-txt-700">
                  <Link href={`/note/${titleSlug}`} className="align-middle">
                    {title}
                  </Link>
                  <span className="inline-flex ml-2 gap-1 items-center text-sm text-txt-300 align-middle">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="font-arita">{createdAt}</span>
                  </span>
                </h3>
                <p className="text-txt-300 mt-1">{intro}</p>
              </article>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;
