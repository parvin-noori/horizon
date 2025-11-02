// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/components/**/*.js"],
  theme: {
    extend: {
      colors: {
        // primaryText:"#2B3674"
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#4318FF",
            },

            secondary: "#F4F7FE",
            background: "#FFFFFF",
          },
        },
        dark: {
          colors: {
            background: "#0B1437",
          },
        },
      },
    }),
  ],
};
