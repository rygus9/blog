import Link from "next/link";

import { Divider } from "../../common/components/Divider";
import { categorys, notes } from "../../common/mock";
import { classNames } from "../../common/utils/classNames";
import { Title } from "../_feature/components/Title";
import { NoteListCard } from "./_feature/components/NoteListCard";

interface SearchParams {
  category?: string;
}

const Page = ({
  searchParams: { category: nowCategoy },
}: {
  searchParams: SearchParams;
}) => {
  return (
    <main className="w-full min-h-[500px]">
      <Title title="정리 노트" showHomeLink>
        <p className="mt-4">
          공부 했던 내용이나 진행했던 프로젝트 등을 정리해두는 공간입니다.
        </p>
      </Title>
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
              className={classNames(nowCategoy === categorySlug && "-order-1")}
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
  );
};

export default Page;
