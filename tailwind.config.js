/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-blue": "#142F3F",
        "logo-gold": "#786C55",
        "color-ivory": "#F5FBEF",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        merriweather: ["Merriweather"],
      },
    },
  },
  plugins: [],
};
