/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        turquoise: {
          base: '#31C3BD',
          light: '#65E9E4',
          shadow: '#118C87'
        },
        mango: {
          base: '#F2B137',
          light: '#FFC860',
          shadow: '#CC8B13'
        },
        navy: '#1A2A33',
        'navy-secondary': '#1F3641',
        gray: '#A8BFC9',
        white: '#DBE8ED'
      },
      height: {
        '18': '4.5rem'
      },
    },
  },
  plugins: [],
}