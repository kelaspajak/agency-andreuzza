/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          '50': 'hsl(9, 100%, 97%)',
    '100': 'hsl(8, 100%, 94%)',
    '200': 'hsl(8, 100%, 89%)',
    '300': 'hsl(9, 100%, 81%)',
    '400': 'hsl(9, 100%, 70%)',
    '500': 'hsl(9, 96%, 60%)',
    '600': 'hsl(9, 82%, 53%)',
    '700': 'hsl(8, 84%, 42%)',
    '800': 'hsl(8, 80%, 35%)',
    '900': 'hsl(9, 72%, 31%)',
    '950': 'hsl(9, 85%, 15%)',
        },
      },
      fontFamily: {
        sans: ["Bricolage Grotesque", ...defaultTheme.fontFamily.sans],
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
