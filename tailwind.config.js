/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        bgColor1: '#032644',
        bgColor2: '#033444',
        bgInput: '#020446',
        bgNote1: '#171B1D',
        bgNote2: '#0A0F0F',
      },
      screens: {
        cel: { max: '640px' },
        pc: { min: '641px' },
        ise: { raw: '(max-height: 800px)' },
      },
      fontFamily: {
        'american-typewriter': ['American Typewriter', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      minHeight: {
        '2/6': '33.33333%',
        '4/6': '66.66666%',
      },
      height: {
        s1: '20%',
        s2: '10%',
      },
    },
  },
  plugins: [
    require('daisyui'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  daisyui: {
    themes: [
      {
        theme: {
          primary: '#03353D',
        },
      },
    ],
  },
}
