const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  darkMode: 'media',
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      fontFamily: {
        sans: ['-apple-system', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {},
  plugins: [],
};