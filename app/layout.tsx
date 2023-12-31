import "./globals.css";

import type { Metadata } from "next";
import { Black_Han_Sans, Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";

import { RootProvider } from "@/component/RootProvider";

import { Header } from "../component/Header";
import { classNames } from "../util/classNames";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--notoSansKr",
});

const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--blackHan",
});

const arita = localFont({
  src: "./font/Arita-dotum-Medium.woff",
  display: "swap",
  variable: "--arita",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={classNames(
          arita.variable,
          notoSansKr.variable,
          blackHanSans.variable,
          "font-noto",
        )}
      >
        <RootProvider>
          <Header />
          <div className="relative m-auto my-28 sm:my-32 px-4 max-w-2xl">
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
