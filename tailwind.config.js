/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#CD0706",
        darkIndigo: "#CD0706",
        lightBlue: "#CD0706",

        headingColor: "#1C048DFF",
        textColor: "#171A1FFF",
      },
      fontFamily: {
        body: ["poppins"],
        heading: ["poppins"],
      },
      backgroundImage: {
        bluegradient:
          "linear-gradient(to right, #D0DBF9, #E6ECFC, #F4F7FE, #FFFFFF 48%)",
        purplegradientBottom:
          "linear-gradient(to left bottom, #b88ffa, #dfcefa,#ECE3FB , #ffffff 50%)",
        purplegradientTop:
          "linear-gradient(to right top,#b88ffa, #D8C5F6, #ECE3FB, #FFFFFF 50%)",
      },
      boxShadow: {
        yellowShadow: "0px 0px 80px 20px #fcffc7",
        purpleShadow: "10px 10px 60px 10px #b29dde",
      },
    },
  },
  plugins: [],
};
