import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--notoSansKr)"],
        blackHan: ["var(--blackHan)"],
        arita: ["var(--arita)"],
      },
    },
  },
  plugins: [],
};
export default config;
