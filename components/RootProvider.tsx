"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const RootProvider = ({ children }: PropsWithChildren<{}>) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
