import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { Divider } from "../../common/components/Divider";
import { records } from "../../common/mock";
import { classNames } from "../../common/utils/classNames";
import { RecordCard } from "./_feature/components/RecordCard";

const Page = () => {
  return (
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
        <p className="mt-4">개인적인 생각, 고민 등을 가볍게 적어두었습니다.</p>
      </header>
      <Divider />

      <div className="divide-y divide-back-em">
        {records.map((props) => (
          <RecordCard {...props} />
        ))}
      </div>
    </main>
  );
};

export default Page;
