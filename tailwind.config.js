module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: {
          600: '#89D2A0',
          500: '#C4E6C0',
          400: '#E1F0D0',
          300: '#F0F5D8',
          200: '#FEFAE0'
        },
        beige: {
          600: '#D4A373',
          500: '#DCB387',
          400: '#E3C29B',
          300: '#EDD8B6',
          200: '#F6E9CB'
        }
      },
      fontFamily: {
        'title': ['PlayfairDisplay'],
        'body': ['Lato']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
