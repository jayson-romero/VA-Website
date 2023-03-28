/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1B8D2",
        secondary: "#95BBE9",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['32px', '22px'],
        header: ['40px', '58px'],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}