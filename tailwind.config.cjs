/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':{
          light:'#3e4474',
          default:'#21243D',
          dark:'#121321'
        },
        'secondary':{
          light:'#c5ccd3',
          default:'#8695A4',
          dark:'#4d5966'
        },
        'btn':{
          light: '#ffe6e6',
          default:'#ff6464',
          dark: '#e60000'
        },
        'back':{
          default:'#EDF7FA',
          semi: '#87cade',
          dark: '#2c85a0'
        }
      },
      fontFamily:{
        primary:"'Heebo', 'sans-serif'",
      }
    },
  },
  plugins: [],
}
