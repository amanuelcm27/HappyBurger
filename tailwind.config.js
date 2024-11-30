/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily:{
        "primary": ["Jersey25"],
        "mont-regular": ["MontserratRegular"],
        "mont-bold": ["MontserratBold"],
        "mont-light": ["MontserratLight"],
        "mont-extrabold": ["MontserratExtraBold"],

      }
    },
  },
  plugins: [],
}

