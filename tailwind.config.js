const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        blue: colors.cyan,
        gray: colors.slate,
      },
    },
  },
  plugins: [],
};
