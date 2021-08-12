module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      md: "900px",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
