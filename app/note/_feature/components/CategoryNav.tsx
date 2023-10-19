"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Category } from "@/common/mock";
import { classNames } from "@/common/utils/classNames";

interface CategoryNavProps {
  categorys: Category[];
}

export const CategoryNav = ({ categorys }: CategoryNavProps) => {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category") ?? "";

  return (
    <ul
      className={classNames(
        "flex items-center gap-4 gap-y-2 text-txt-300 mb-6 flex-wrap text-sm",
        "lg:flex-col lg:items-start lg:gap-y-4 lg:absolute lg:-left-40 lg:top-1 lg:w-40 lg:h-fit",
      )}
    >
      <li className={classNames(!nowCategory && "-order-1")}>
        <Link
          href="/note"
          className={classNames(!nowCategory && "text-txt-700 text-lg")}
        >
          전체 보기
        </Link>
      </li>
      {categorys.map(({ category, categorySlug }) => (
        <li
          className={classNames(nowCategory === categorySlug && "-order-1")}
          key={categorySlug}
        >
          <Link
            href={`/note?category=${categorySlug}`}
            className={classNames(
              nowCategory === categorySlug && "text-txt-700 text-lg",
            )}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};
