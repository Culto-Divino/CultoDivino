/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'bgColor1': '#032644',
        'bgColor2': '#033444',
      },
      screens: {
        'cel': {'max': '640px'}
      },
      fontFamily: {
        'american-typewriter': ['American Typewriter','sans-serif']
      }
    },
  },
  plugins: [],
}
