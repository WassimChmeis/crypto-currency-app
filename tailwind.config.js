/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        level: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    },
    fontFamily: {
      dominant: ["Space Grotesk", "sans-serif"],
      minor: ["Mulish", "sans-serif"],
    },
  },
  plugins: [],
};
