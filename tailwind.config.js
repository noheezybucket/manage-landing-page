/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(12, 88%, 59%)",
        "primary-blue": "hsl(228, 39%, 23%)",
        "neutral-blue": "hsl(227, 12%, 61%)",
        "neutral-dark-blue": "hsl(233, 12%, 13%)",
        "neutral-red": "hsl(13, 100%, 96%)",
        "neutral-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        font: ["Be Vietnam Pro"],
      },
    },
  },
  plugins: [],
};
