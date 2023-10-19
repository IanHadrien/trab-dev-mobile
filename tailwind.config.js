/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cinza: {
          100: '#f6fbff',
          150: '#E9E9E9',
          200: '#C4C4CC',
          300: '#8D8D99',
          350: '#343438',
          400: '#28282c',
          500: '#1f1f23',
          600: 'rgba(0, 0, 0, 0.5)',
          700: '#2a2a2a'
        },
        azul: {
          200: '#009CD7',
          300: '#086893',
        }
    },
    },
  },
  plugins: [],
}

