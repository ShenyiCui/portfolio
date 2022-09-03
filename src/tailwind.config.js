const tailwindTheme = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {},
      fontFamily: { Inter: ["inter", "sans-serif"] },
    },
  },
};

module.exports = tailwindTheme;
