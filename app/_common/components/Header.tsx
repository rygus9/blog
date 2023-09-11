"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

import { classNames } from "../utils/classNames";
import { DarkToggle } from "./DarkToggle";

const path = [
  {
    name: "정리노트",
    href: "/note",
  },
  {
    name: "스니펫",
    href: "/snippet",
  },
  {
    name: "나의일기",
    href: "/record",
  },
];

export const Header = () => {
  const [isClose, setIsClose] = useState(true);

  return (
    <>
      <header className="fixed z-40 top-0 w-full h-16 border-b border-[#dedede] backdrop-blur-sm bg-[#EFEFEF] bg-opacity-90">
        <div className="max-w-5xl w-full h-full m-auto px-6 flex items-center">
          <h1
            className={classNames(
              "text-2xl font-bold text-[#121212 flex-1 tracking-wide",
              "sm:flex-none sm:mr-12",
            )}
          >
            DEVCO
          </h1>
          <nav
            className={classNames(
              "hidden text-[#454545]",
              "sm:flex-1 sm:flex sm:items-center sm:space-x-6",
            )}
          >
            {path.map(({ name, href }) => (
              <Link href={href} key={name}>
                {name}
              </Link>
            ))}
          </nav>
          <DarkToggle className="hidden sm:block" />
          <Bars3Icon
            className={classNames(
              "w-8 h-8 cursor-pointer",
              !isClose && "hidden",
              "sm:hidden",
            )}
            onClick={() => setIsClose((isClosed) => !isClosed)}
          />
          <XMarkIcon
            className={classNames(
              "w-8 h-8 cursor-pointer",
              isClose && "hidden",
              "sm:hidden",
            )}
            onClick={() => setIsClose((isClosed) => !isClosed)}
          />
        </div>
      </header>
      {!isClose && (
        <nav
          className={classNames(
            "fixed z-40 w-full h-[calc(100%-64px)] top-16 bg-[#EFEFEF] text-[#454545]",
            "sm:hidden",
          )}
        >
          <div className="flex flex-col items-start space-y-4 p-6">
            {path.map(({ name, href }) => (
              <Link href={href} key={name} className="text-lg">
                {name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-4">
            <DarkToggle />
          </div>
        </nav>
      )}
    </>
  );
};
