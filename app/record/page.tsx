import {
  ArrowUturnLeftIcon,
  CalendarIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

import { Divider } from "../_common/components/Divider";
import { records } from "../_common/mock";
import { classNames } from "../_common/utils/classNames";

const Page = () => {
  return (
    <div className="max-w-2xl px-4 h-fit m-auto my-10 sm:my-14">
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
              나의 일기
            </h1>
          </div>
          <p className="mt-4">
            개인적인 생각, 고민 등을 가볍게 적어두었습니다.
          </p>
        </header>
        <Divider />

        <div className="divide-y divide-back-em">
          {records.map(({ content, createdAt, title }) => (
            <article className="py-8 first:pt-0">
              <h2
                className="text-[22px] text-txt-500 font-semibold scroll-mt-20"
                id={createdAt}
              >
                <a
                  href={`#${createdAt}`}
                  className={classNames(
                    "flex items-center justify-start gap-1",
                    "hover:text-txt-300",
                  )}
                >
                  {title} <LinkIcon className="w-5 h-5 text-txt-300" />
                </a>
              </h2>
              <span className="inline-flex gap-1 items-center text-sm text-txt-300 align-middle mt-1">
                <CalendarIcon className="w-4 h-4" />
                <span className="font-arita">{createdAt}</span>
              </span>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="mt-6 space-y-4"
              />
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
