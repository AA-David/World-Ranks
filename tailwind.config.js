
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    screens: {
      'xl.5': '1360px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: [
        'Be Vietnam Pro', 
             'ui-sans-serif',
             'system-ui',
             '-apple-system',
             'BlinkMacSystemFont',
             'Segoe UI',
             'Roboto',
             'Helvetica Neue',
             'Arial',
             'Noto Sans',
             'sans-serif',
             'Apple Color Emoji',
             'Segoe UI Emoji',
             'Segoe UI Symbol',
             'Noto Color Emoji']
    },
    extend: {
      colors: {
        blue: '#4E80EE',
        grey: '#282B30',
        greyMid: '#6C727F',
        greyLight: '#D2D5DA',
        black: '#1B1D1F',
        blackLight: '#1C1D1F'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

