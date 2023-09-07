import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Page = () => {
  return (
    <main className="pt-12 sm:pt-16 max-w-2xl m-auto px-4">
      <section>
        <h1 className="font-blackHan text-3xl pt-8 sm:pt-10">
          안녕하세요. 구교현입니다.
        </h1>
        <p className="pt-5 text-[#343434]">
          멋진 디자인과 인터렉션, 애니메이션으로 깔끔한 UI, UX를 구현하는데
          흥미를 느낍니다. <br />
          개발과 관련된 무언가를 깊게 공부하고 학습하는 과정 자체를 즐깁니다.
        </p>
        <p className="pt-3 space-x-4">
          <Link href="/resume">
            <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
              이력서
            </span>
          </Link>
          <Link
            href="https://github.com/rygus9"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-arita underline decoration-1 decoration-wavy underline-offset-4">
              GITHUB
            </span>
          </Link>
        </p>
      </section>
      <section className="my-6">
        <Category href="/record">나의 일기</Category>
        <p className="pt-2 text-[#343434]">
          요새 약간 프론트엔드에 대한 열망이 줄어들었다. 인터렉티브...
          <span className="ml-2">At 23.09.02</span>
        </p>
        <MoreLink href="/record" />
      </section>
      <div className="my-6 flex items-start justify-between flex-wrap space-y-6 sm:space-y-0">
        <section className="w-full sm:max-w-[47%]">
          <Category href="/note">정리 노트</Category>
          <ul className="mt-2 space-y-3 text-[#343434]">
            <li>
              <p className="text-[#565656] text-sm">2023 모음</p>
              <h3>React 13 분석하기</h3>
            </li>
            <li>
              <p className="text-[#565656] text-sm">블로그 개발기</p>
              <h3>Notion API 연동하기</h3>
            </li>
            <li>
              <p className="text-[#565656] text-sm">블로그 개발기</p>
              <h3>디자인 구성, 블로그 구조 설계</h3>
            </li>
          </ul>
          <MoreLink href="/note" />
        </section>
        <section className="w-full sm:max-w-[47%]">
          <Category href="/snippet">스니펫</Category>

          <ul className="mt-3 space-y-2 text-[#343434]">
            <li>
              <span>[JS]</span> JSON 변환
            </li>
            <li>
              <span>[JS]</span> 유용한 정규식 모음
            </li>
            <li>
              <span>[CSS]</span> safe-area 대응
            </li>
            <li>
              <span>[CSS]</span> 요소 중앙 정렬
            </li>
            <li>
              <span>[CSS]</span> 백그라운드 속성
            </li>
          </ul>
          <MoreLink href="/snippet" />
        </section>
      </div>
    </main>
  );
};

const Category = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <h2 className="text-md text-[#787878] font-arita font-semibold">
    <Link href={href} className="flex items-center justify-start">
      {children} <ChevronRightIcon className="w-4 h-4 stroke-2" />
    </Link>
  </h2>
);

const MoreLink = ({ href }: { href: string }) => (
  <Link
    className="inline-block mt-2 text-sm text-[#787878] font-arita"
    href={href}
  >
    더보기...
  </Link>
);

export default Page;
