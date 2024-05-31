/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#444961',
        secondary: '#2D3142',
        mainText: '#EAE8FF',
        secondaryText: '#D4D0FF',
        button: '#D4D0FF',
        button_sh: '#B3ACFF',
      },
      fontFamily: {
        Lemon: ['Lemon', 'Regular'],
        Itim: ['Itim', 'Regular'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
