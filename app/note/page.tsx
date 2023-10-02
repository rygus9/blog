import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { Divider } from "../_common/components/Divider";
import { NoteListCard } from "../_common/components/NoteListCard";
import { categorys, notes } from "../_common/mock";
import { classNames } from "../_common/utils/classNames";

interface SearchParams {
  category?: string;
}

const Page = ({
  searchParams: { category: nowCategoy },
}: {
  searchParams: SearchParams;
}) => {
  return (
    <div className="relative max-w-2xl px-4 h-fit m-auto my-10 sm:my-14">
      <main className="w-full min-h-[500px]">
        <header>
          <div className="relative">
            <div
              className={classNames(
                "hidden",
                "lg:absolute lg:block lg:-left-40 lg:top-0 lg:w-40 lg:h-full",
              )}
            >
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-txt-300 hover:text-txt-700"
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
        <Divider />
        <section className="relative">
          <ul
            className={classNames(
              "flex items-center gap-4 gap-y-2 text-txt-300 mb-6 flex-wrap text-sm",
              "lg:flex-col lg:items-start lg:gap-y-4 lg:absolute lg:-left-40 lg:top-1 lg:w-40 lg:h-full",
            )}
          >
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
          <hr className="border-back-em my-8 lg:hidden" />
          <ul className="space-y-10">
            {notes.map((props) => (
              <NoteListCard {...props} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;
