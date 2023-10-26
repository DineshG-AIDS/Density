/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom1: ["custom1", "sans"],
      custom2: ["custom2", "sans"],
      custom3: ["custom3", "sans"],
    },
  },
  plugins: [],
};
