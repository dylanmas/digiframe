/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        fadein: "fade 0.5s",
        pulsepreset: "pulsepresetkf 10s linear infinite",
        scalepreset: "scalepresetkf 10s ease-in infinite",
        scalelpreset: "scalepresetkf 10s ease-in infinite",
        scalexpreset: "scalexpresetkf 10s ease-in infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        pulsepresetkf: {
          "0%": { transform: "translateY(0vh)" },
          // "50%": { transform: "translateX(000px)" },
          "100%": { transform: "translateY(-100vh)" },
        },
        scalepresetkf: {
          "0%": { transform: "scaleY(0)", opacity: "100%" },
          "90%": { opacity: "100%" },
          "100%": { transform: "scaleY(-1)", opacity: "0%" },
        },
        scalexpresetkf: {
          "0%": { transform: "scaleX(0)", opacity: "100%" },
          "90%": { opacity: "100%" },
          "100%": { transform: "scaleX(-1)", opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};

