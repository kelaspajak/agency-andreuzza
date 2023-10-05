/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          '50': 'hsl(224, 100%, 96%)',
    '100': 'hsl(224, 100%, 92%)',
    '200': 'hsl(225, 100%, 86%)',
    '300': 'hsl(227, 100%, 77%)',
    '400': 'hsl(233, 100%, 68%)',
    '500': 'hsl(238, 100%, 61%)',
    '600': 'hsl(244, 100%, 54%)',
    '700': 'hsl(244, 93%, 47%)',
    '800': 'hsl(243, 88%, 41%)',
    '900': 'hsl(241, 76%, 34%)',
    '950': 'hsl(244, 76%, 20%)',
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
