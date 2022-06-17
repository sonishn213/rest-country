/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1110px",
      xl: "1440px",
      xxl: "1920px",
      xxxl: "2560px",
    },
    extend: {},
  },
  plugins: [],
};
