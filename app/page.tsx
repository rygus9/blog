import Link from "next/link";

import { DarkToggle } from "./_common/components/DarkToggle";

const Page = () => {
  return (
    <main className="pt-16 max-w-3xl m-auto px-4">
      <DarkToggle />
      <h1 className="font-blackHan text-3xl pt-10">
        안녕하세요. 구교현입니다.
      </h1>
      <p className="pt-5">
        멋진 디자인과 인터렉션, 애니메이션으로 깔끔한 UI, UX를 구현하는데 흥미를
        느낍니다. <br />
        개발과 관련된 무언가를 깊게 공부하고 학습하는 과정 자체를 즐깁니다.
      </p>
      <div className="pt-3 space-x-4">
        <Link href="/resume">
          <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
            구교현의 이력서
          </span>
        </Link>
        <Link href="https://github.com/rygus9" target="_blank" rel="noreferrer">
          <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
            GITHUB
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Page;
