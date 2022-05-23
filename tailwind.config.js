module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          100: '#FFE8E8',
          200: '#FFBDBD',
          300: '#FF9B9B',
          400: '#FF6F6F',
          500: '#FF4D4D',
          600: '#FF3333',
          700: '#FF1919',
          800: '#FF0000',
          900: '#CC0000',
        },
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        primary: {
          900: '#6c4fdf',
          800: '#7c5ce7',
          700: '#8c6cf7',
          600: '#9c7cf7',
          500: '#ac8cf7',
          400: '#bc9cf7',
          300: '#ccbcf7',
          200: '#dcccf7',
          100: '#f7f7f7',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
