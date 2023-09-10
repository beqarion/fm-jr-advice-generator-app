/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html", "./js/**/*.{html,js"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightCyan: "hsl(193, 38%, 86%)",
          neonGreen: "hsl(150, 100%, 66%)",
        },
        neutral: {
          grayishBlue: "hsl(217, 19%, 38%)",
          darkGrayishBlue: "hsl(217, 19%, 24%)",
          darkBlue: "hsl(218, 23%, 16%)",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans"],
      },
    },
  },
  plugins: [],
}