
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        khaki: "#c19d68",
        lightBlack: "#1e1e1e",
        whiteSmoke: "#f8f6f3",
        lightGray: "#acacac",
      },
      backgroundColor: {
        khaki: "#c19d68",
        lightBlack: "#1e1e1e",
        whiteSmoke: "#f8f6f3",
      },
    },
  },
  plugins: [],
};
