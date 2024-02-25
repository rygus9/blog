"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { classNames } from "@/util/classNames";

interface CategoryInfo {
  category: string;
  pages: number;
}

interface CategoryNavProps {
  categoryInfos: CategoryInfo[];
}

export const CategoryNav = ({ categoryInfos }: CategoryNavProps) => {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category") ?? "";

  return (
    <ul
      className={classNames(
        "mt-4 flex items-center gap-4 gap-y-2 text-contrast-500 flex-wrap",
        "text-base sm:text-lg",
      )}
    >
      {[{ category: "ALL", pages: categoryInfos.length }]
        .concat(categoryInfos)
        .map(({ category, pages }) => (
          <li key={category} className="group">
            <Link
              href={`/note?category=${category}`}
              className={classNames(
                nowCategory === category && "text-contrast-700 font-semibold",
                category === "ALL" &&
                  !nowCategory &&
                  "text-contrast-700 font-semibold",
              )}
            >
              <span className="group-hover:underline underline-offset-2">
                {category}
              </span>
              <span className="text-sm align-top"> ({pages})</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};
