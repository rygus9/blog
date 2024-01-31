import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./component/**/*.{ts,tsx}",
    "./notion/component/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--notoSansKr)"],
        blackHan: ["var(--blackHan)"],
        arita: ["var(--arita)"],
      },
      colors: {
        contrast: {
          100: "rgba(var(--color-contrast-100), <alpha-value>)",
          200: "rgba(var(--color-contrast-200), <alpha-value>)",
          300: "rgba(var(--color-contrast-300), <alpha-value>)",
          500: "rgba(var(--color-contrast-500), <alpha-value>)",
          600: "rgba(var(--color-contrast-600), <alpha-value>)",
          700: "rgba(var(--color-contrast-700), <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
