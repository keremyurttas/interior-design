/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2C3878",
        secondary: "#333333",
        light: "#9C9C9C",
        black: "#000000",
        white: "#FFFFFF",
        lightGray:"#D9D9D9"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
