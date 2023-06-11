/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        mainBG: 'hsl(217, 54%, 11%)',
        cardBGVeryDarkBlue: 'hsl(216, 50%, 16%)',
        lineVeryDarkBlue: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)',
        bgCyan: 'hsla(178, 100%, 50%, 0.2)'
      },
    },
  },
  plugins: [],
}