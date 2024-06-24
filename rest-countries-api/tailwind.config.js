/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Light-Gray':'hsl(0, 0%, 98%)',
        'White':'hsl(0, 0%, 100%)',
        'Dark-Gray':'hsl(0, 0%, 52%)',
        'Dark-Blue':'hsl(200, 15%, 8%)'
      },
      fontFamily: {
        'Nunito': ['Nunito', '"Nunito Sans", sans-serif;']
       }
    },
  },
  plugins: [],
}

