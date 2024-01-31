"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { classNames } from "@/util/classNames";

interface CategoryNavProps {
  categorys: string[];
}

export const CategoryNav = ({ categorys }: CategoryNavProps) => {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category") ?? "";

  return (
    <ul
      className={classNames(
        "flex items-center gap-4 gap-y-2 text-contrast-500 mb-6 flex-wrap text-base",
        "lg:flex-col lg:items-start lg:gap-y-4 lg:absolute lg:-left-40 lg:top-1 lg:w-40 lg:h-fit",
      )}
    >
      <li className={classNames(!nowCategory && "-order-1")}>
        <Link
          href="/note"
          className={classNames(!nowCategory && "text-contrast-700 text-lg")}
        >
          전체 보기
        </Link>
      </li>
      {categorys.map((category) => (
        <li
          className={classNames(nowCategory === category && "-order-1")}
          key={category}
        >
          <Link
            href={`/note?category=${category}`}
            className={classNames(
              nowCategory === category && "text-contrast-700 text-lg",
            )}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};
