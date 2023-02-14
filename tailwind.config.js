// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   md2: { max: "960px" },
    // },
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        bg: "#f1cdd7",
        colorMain: "#865c6c",
        color1: "#4f3cc9;",
      },
    },
  },
  plugins: [],
};
