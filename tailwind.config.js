/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "460px",
      zsm: "530px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        herobg: "#022E64",
        btnbg: "#E0AD0F",
        h2bg: "#022E64",
        paragraphbg: "#4E6D93",
        leadercardbg: "#B3C0D1",
        cohortcardbg: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
