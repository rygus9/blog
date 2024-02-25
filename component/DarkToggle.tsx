"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { classNames } from "../util/classNames";

interface DarkToggleProps {
  className?: string;
}

export const DarkToggle = ({ className = "" }: DarkToggleProps) => {
  const [mount, setMount] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("light");
        return;
      }
      setTheme("dark");
      return;
    }
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }, [setTheme, theme]);

  useEffect(() => setMount(true), [setMount]);

  if (!mount) return null;

  return (
    <label
      htmlFor="dark-toggle"
      className={classNames(
        "relative block w-[68px] h-[36px] rounded-full cursor-pointer shadow-[inset_0px_2px_4px_rgba(0,0,0,0.3),_inset_0px_2px_4px_rgba(255,255,255,0.2)]",
        "transition-colors after:transition-[left_colors] duration-200 after:duration-200",
        "after:absolute after:w-7 after:h-7 after:rounded-full after:top-1 after:left-1 after:shadow-[0px_2px_4px_rgba(0,0,0,0.2)]",
        "dark:bg-[#202020] dark:after:left-[36px] dark:after:bg-[#454545]",
        "bg-[#dedede] after:left-1 after:bg-[#efefef]",
        className,
      )}
    >
      <div className="hidden">다크 모드 토글 버튼</div>
      <MoonIcon className="absolute top-2 left-[40px] z-10 w-5 h-5" />
      <input
        type="checkbox"
        id="dark-toggle"
        checked={theme === "dark"}
        onChange={handleToggle}
        className="hidden"
      />
      <SunIcon className="absolute top-2 left-2 z-10 w-5 h-5" />
    </label>
  );
};
