/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ", './public/index.html'"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }}

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }}
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
