/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      fontFamily: {
        elmessiri: ['"El Messiri"', 'sans-serif'],
      },
      colors: {
        primary: '#4c6353',
        secondary: '#A8CD89',
        hover: '#DDEB9D'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}

