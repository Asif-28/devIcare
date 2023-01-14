/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6184F4",
        navbar: "#7E7E7E",
        red: "#FF3E3E",
      },
      fontSize: {
        small: ".88rem",
      },
      padding: {
        smscreen: ".7rem",
      },
      fontFamily: { mont: "Montserrat" },
      screens: {
        xs: "300px",
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
