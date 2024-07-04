/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors:{
        'Light-Gray':'hsl(0, 0%, 98%)',
        'White':'hsl(0, 0%, 100%)',
        'Dark-Gray':'hsl(0, 0%, 52%)',
        'Dark-Blue':'hsl(200, 15%, 8%)',
        "Dark-Blue-Elements": "hsl(209, 23%, 22%)",
        "Very-Bark-Blue-bg": "hsl(207, 26%, 17%)",
       
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        "semi-bold": 600,
        bold: 800,
      }
    },
  },
  plugins: [],
}

