/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hide: {
          "0%": {
            transform: "translateY(0)",
            visibility: "visible",
            opacity: 0.8,
          },
          "100%": {
            transform: "translateY(-100%)",
            visibility: "hidden",
            opacity: 0,
          },
        },
        show: {
          "0%": {
            transform: "translateY(-100%)",
            visibility: "hidden",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            visibility: "visible",
            opacity: 0.75,
          },
        },
      },
      animation: {
        hide: "hide 0.5s forwards",
        show: "show 0.5s forwards",
      },
      backgroundImage: {
        'banner': 'url("src/assets/banner.jpg")'
      }
    },
  },
  plugins: [],
});
