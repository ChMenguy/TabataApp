module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        'appbg':'#3a4363'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
