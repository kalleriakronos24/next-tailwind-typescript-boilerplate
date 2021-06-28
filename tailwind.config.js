module.exports = {
  important: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vistaBlue: "#7DCCAB",
        test1: "#0C63E7",
        c1 : "#F9F9FB"
      },

      fontFamily: {
        ptsans: ["ptsans"],
        mono: ["mono"],
      },
      textColor: {
        vistaBlue: "#7DCCAB",
        test1: "#0C63E7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
