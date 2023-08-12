/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors: {
        primary: '#ffb17a',
        secondary: '#cbd5e1',
        soft: '#676f8d',
        dark: '#2d3250',
      },
      dropShadow: {
        full: '0 0 8px #ffb17a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

