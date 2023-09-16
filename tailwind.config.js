/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryIndigo: "#7B3CF3",
        darkIndigo: "#4E139F",
        darkWhite: "#ECE7FE",
        lightBlue: "#6C63FF",
        radicalRed: "#FF2D55",
        Backgroundwhite: "#FFFFFF",
        lightBlack: "#333333",
        darkGray: "#475467",
        lightWhite: "#D0D5DD",
        errorRed: "#E50000",
        successGreen: "#00C853",
        lightIndigo: "#9E9EFF",
        headingColor: '#1C048DFF',
        textColor : '#171A1FFF',
      },
      fontFamily: {
        body: ["poppins"],
        heading: ["poppins"],
      },
      backgroundImage: {
        "gradient-lightIndigo": "linear-gradient(to bottom, #9E9EFF, #d6e1ff)",
        "gradient-lightIndigo-top":
          "linear-gradient(to bottom, #d6e1ff, #9E9EFF)",
      },
      fontWeight: {
        'extra-bold': '900',
      }
    },
  },
  plugins: [],
};
