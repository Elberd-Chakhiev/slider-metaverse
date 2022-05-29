module.exports = {
  content: ['./*.{html,js}', './**/*.{html,js}'],
  theme: {
      extend: {},


      screens: {
          '3xl': {'max': '1919px'},
          '2xl': {'max': '1281px'},
          'xl': {'max': '1025px'},
          'lg': {'max': '767px'},
          'md': {'max': '539px'},
          'sm': {'max': '360px'},
          'xm': {'max': '320px'},
        },
  },
  plugins: [],
}