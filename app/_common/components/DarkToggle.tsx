"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

import { classNames } from "../utils/classNames";

export const DarkToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = useCallback(
    () => (theme === "light" ? setTheme("dark") : setTheme("light")),
    [setTheme, theme],
  );

  return (
    <label
      htmlFor="dark-toggle"
      className={classNames(
        "relative block w-[68px] h-[36px] rounded-full cursor-pointer shadow-[inset_0px_2px_4px_rgba(0,0,0,0.3),_inset_0px_2px_4px_rgba(255,255,255,0.2)]",
        "transition-colors after:transition-[left_colors] duration-200 after:duration-200",
        "after:absolute after:w-7 after:h-7 after:rounded-full after:top-1 after:left-1 after:shadow-[0px_2px_4px_rgba(0,0,0,0.2)]",
        theme === "dark"
          ? "bg-[#202020] after:left-[36px] after:bg-[#454545]"
          : "bg-[#dedede] after:left-1 after:bg-[#dedede]",
      )}
    >
      <input
        type="checkbox"
        id="dark-toggle"
        checked={theme === "dark"}
        onChange={handleToggle}
        className="hidden"
      />
    </label>
  );
};
