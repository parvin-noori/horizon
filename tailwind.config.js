// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/components/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#4318FF",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            secondary: "#F4F7FE",
            background: "#FFFFFF",
          },
        },
        dark: {
          colors: {
            secondary: "#111C44",
            background: "#0B1437",
          },
        },
      },
    }),
  ],
};
