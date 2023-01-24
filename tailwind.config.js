/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ", './public/index.html'"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }}
    },
    extend: {
      backgroundImage: {
        "light-img": "url('./src/images/bg-desktop-light.jpg')",
        "dark-img": "url('./src/images/bg-desktop-dark.jpg')",
        "mob-light": "url('./src/images/bg-desktop-light.jpg')",
        "mob-dark": "url('./src/images/bg-desktop-dark.jpg')",
      },
      colors: {
        blackText: "#393A4B",
        darkCover: "#25273D",
        backgroundDark: "#171823",
        borderGrayDark: "#393A4B",
        borderGrayLight: "#E3E4F1",
        darkGrayText: "#C8CBE7",
        lightGrayText: "#494C6B",
      },
    },
  },
  plugins: [],
};
