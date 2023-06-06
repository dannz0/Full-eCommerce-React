/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cusOrangeDark: '#d87d4a',
        cusOrangeLight: '#fbaf85',
        cusBlack: '#101010',
        cusGrey: '#f1f1f1',
        cusWhite: '#fafafa',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
