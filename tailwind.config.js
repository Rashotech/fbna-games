/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "460px",
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
    },
  },
  plugins: [],
};
