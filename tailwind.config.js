/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      i12: "390px",
      i20: "412px",
      xsm: "460px",
      zsm: "530px",
      ipad: "820px",
      pro: "912px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        herobg: "#022E64",
        btnbg: "#E0AD0F",
        h2bg: "#022E64",
        paragraphbg: "#4E6D93",
        leadercardbg: "#B3C0D1",
        cohortcardbg: "#F1F1F1",
        footerbg: "#003B65",
        pagesbg: "#B3C0D1",
        grey: {
          100: "#F6F6F6",
          500: "#4E6D93",
          600: "#4A4A4A",
        },
      },
      fontFamily: {
        sans: ['"Rubik Variable"', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito Variable"', ...defaultTheme.fontFamily.sans],
        carter: ['"Carter One"', ...defaultTheme.fontFamily.sans],
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [],
};
