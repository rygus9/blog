import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./common/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--notoSansKr)"],
        blackHan: ["var(--blackHan)"],
        arita: ["var(--arita)"],
      },
      colors: {
        txt: {
          300: "rgba(var(--color-text-week), <alpha-value>)",
          500: "rgba(var(--color-text), <alpha-value>)",
          700: "rgba(var(--color-text-em), <alpha-value>)",
        },
        back: "rgba(var(--color-bg), <alpha-value>)",
        "back-em": "rgba(var(--color-bg-em), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
