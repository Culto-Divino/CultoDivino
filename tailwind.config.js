/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'bgColor1': '#032644',
        'bgColor2': '#033444',
        'bgInput': '#020446',
        'bgNote1': '#171B1D',
        'bgNote2': '#0A0F0F'
      },
      screens: {
        'cel': {'max': '640px'},
        'pc': {'min': '641px'}
      },
      fontFamily: {
        'american-typewriter': ['American Typewriter','sans-serif']
      },
      aspectRatio: {
        '4/3': '4 / 3'
      }
    },
  },
  plugins: [],
}
