/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        inputSize: "1.25rem"
      }
    },
    colors: {
      neutral: {
        100: "#fff",
        200: "#f4f4f4",
        300: "#969696",
        400: "#2b2b2b",
        500: "#000"
      }
    },
    fontFamily: {
      main: "'Rubik', sans-serif"
    }
  },
  plugins: [],
}
