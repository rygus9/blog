"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { classNames } from "../util/classNames";
import { DarkToggle } from "./DarkToggle";

const path = [
  {
    name: "정리노트",
    href: "/note",
    section: "note",
  },
  {
    name: "나의일기",
    href: "/record",
    section: "record",
  },
];

export const Header = () => {
  const [isClose, setIsClose] = useState(true);
  const pathname = usePathname();

  const nowSection = pathname.split("/")[1];

  const onClose = useCallback(() => {
    setIsClose(true);
  }, []);

  return (
    <>
      <header className="fixed z-40 top-0 w-full h-16 border-b border-border backdrop-blur-sm bg-back bg-opacity-90">
        <div className="max-w-5xl w-full h-full m-auto px-6 flex items-center">
          <h1
            className={classNames(
              "text-2xl font-bold text-txt-700 flex-1 tracking-wide",
              "sm:flex-none sm:mr-12",
            )}
          >
            <Link href="/" onClick={onClose}>
              DEVCO
            </Link>
          </h1>
          <div
            className={classNames(
              "hidden text-txt-300",
              "sm:flex-1 sm:flex sm:items-center sm:space-x-6",
            )}
          >
            {path.map(({ name, href, section }) => (
              <Link
                href={href}
                key={name}
                className={classNames(
                  nowSection === section && "text-txt-500 font-semibold",
                )}
              >
                {name}
              </Link>
            ))}
          </div>
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
        <div
          className={classNames(
            "fixed z-40 w-full h-[calc(100%-64px)] top-16 bg-back text-txt-300",
            "sm:hidden",
          )}
        >
          <div className="flex flex-col items-start space-y-4 p-6">
            {path.map(({ name, href, section }) => (
              <Link
                href={href}
                key={name}
                className={classNames(
                  "text-lg",
                  nowSection === section && "text-txt-500 font-semibold",
                )}
                onClick={onClose}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-4">
            <DarkToggle />
          </div>
        </div>
      )}
    </>
  );
};
