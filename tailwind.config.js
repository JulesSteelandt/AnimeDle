/** @type {import('tailwindcss').Config} */
import {COLORS} from './src/constants/colors';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],

  theme: {
    extend: {
      colors: {
        main: COLORS.MAIN,
        second: COLORS.SECONDARY,
        mainText: COLORS.MAIN_TEXT,
        secondaryText: COLORS.SECONDARY_TEXT,
        button: COLORS.BUTTON,
        button_sh: COLORS.BUTTON_SH,
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
