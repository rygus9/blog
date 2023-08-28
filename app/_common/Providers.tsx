import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren<{}>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
