module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    //https://coolors.co/1a535c-4ecdc4-f7fff7-ff6b6b-ffe66d
    //https://coolors.co/0081a7-00afb9-fdfcdc-fed9b7-f07167
    // textColor: {
    //   primary: "#0081A7",
    //   secondary: "#00AFB9",
    //   light: "#FDFCDC",
    //   cream: "#FED9B7",
    //   danger: "#F07167",
    // },
    container: {
      center: true,
    },
    margin: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
