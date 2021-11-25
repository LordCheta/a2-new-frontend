// const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        a2blue: '#32324e',
        a2yellow: '#ffae00'
      },
      fontFamily: {
        mont: ['Montserrat'],
        poppins: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
