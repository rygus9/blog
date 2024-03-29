import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { classNames } from "@/util/classNames";

interface TitleProps {
  showHomeLink?: boolean;
  title: string;
}

export const Title = ({
  showHomeLink,
  title,
  children,
}: PropsWithChildren<TitleProps>) => {
  return (
    <header>
      <div className="relative">
        {showHomeLink && (
          <div
            className={classNames(
              "hidden",
              "lg:absolute lg:block lg:-left-40 lg:top-0 lg:w-40 lg:h-full",
            )}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-contrast-500 hover:text-contrast-700"
            >
              <ArrowUturnLeftIcon className="w-4 h-4" />
              <span> 홈으로</span>
            </Link>
          </div>
        )}
        <h1 className="font-blackHan text-contract-900 text-[1.75rem] sm:text-3xl">
          {title}
        </h1>
      </div>
      {children}
    </header>
  );
};
