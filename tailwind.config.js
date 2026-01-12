/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'coffee-primary': '#3C2A21',
        'coffee-secondary': '#D5CEA3',
        'coffee-accent': '#E5DCC3'
      }
    }
  },
  plugins: []
}