/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPalette: {
          navBG: '#0B161A',
          Bg2: '#141E21'
        }
      }
    },
  },
  plugins: [],
}

