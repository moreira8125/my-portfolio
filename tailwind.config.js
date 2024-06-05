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
      boxShadow: {
        custom:
          "0 2px 4px 0 rgba(0, 0, 0, 0.8), 0 6px 15px 0 rgba(0, 0, 0, 0.80)",
      },
      keyframes: {
        slidein: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px) translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateX(0)",
          },
        },
        slideinlate: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideinright: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideinup: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease forwards",
        slideinlate: "slideinlate 3s ease forwards",
        slideinright: "slideinright 1s ease forwards",
        slideinup: "slideinup 1s ease forwards",
      },
      animationDelay: {
        "1s": "1s",
        "2s": "2s",
        "3s": "3s",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".delay-1s": {
          "animation-delay": "1s",
        },
        ".delay-2s": {
          "animation-delay": "2s",
        },
        ".delay-3s": {
          "animation-delay": "3s",
        },
        ".hidden-before-animation": {
          opacity: "0",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
