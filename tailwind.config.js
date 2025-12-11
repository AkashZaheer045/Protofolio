const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: require('tailwindcss/colors').cyan,
        gray: require('tailwindcss/colors').slate,
        almond: {
          50: '#F5F1E8',   // Lightest - for cards
          100: '#E8DCC8',  // Light - for main backgrounds
          200: '#D4C5A9',  // Medium - for section backgrounds
          300: '#C0AE8A',  // Medium-dark - for borders
          400: '#AC976B',  // Darker
          500: '#98804C',  // Main dark almond
          600: '#7A663D',  // Very dark
          700: '#5C4D2E',  // Almost brown
          800: '#3E331F',  // Deep brown
          900: '#201A10',  // Darkest
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
};
