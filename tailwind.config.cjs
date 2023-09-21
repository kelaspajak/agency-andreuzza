/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {

    extend: {

      colors: {

        blue: {
         50: "#EBEBFF",
      100: "#D2D2FE",
      200: "#A6A4FE",
      300: "#7E7CFD",
      400: "#524FFD",
      500: "#2522FC",
      600: "#0703E2",
      700: "#0502AB",
      800: "#03026F",
      900: "#020137",
      950: "#01001E"
        },
      },
      fontFamily: {
        display: ["Newsreader", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
