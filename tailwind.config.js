/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryIndigo" : "#7B3CF3",
        "darkIndigo" : "#4E139F",
        "darkWhite" : "#ECE7FE" ,
        "lightBlue" : "#6C63FF" ,
        "radicalRed" : "#FF2D55" ,
        "Backgroundwhite" : "#FFFFFF",
        "lightBlack" : "#333333" ,
        "darkGray" : "#475467" ,
        "lightWhite" : "#D0D5DD",
        "errorRed" : "#E50000",
        "successGreen":"#00C853" ,
        "lightIndigo": "#9E9EFF"
      }
    },
  },
  plugins: [],
}