const lineClamp = require('@tailwindcss/line-clamp');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': 'url(/assets/main/banner.jpg)',
      },
      colors: {
        secondary: '#BF242F', // red 2
        gray1: '#A6A6A6', // gray
        gray2: '#F2F2F2', // light gray 1
        golden1: '#EF9D0E', // golden
        golden2: '#D99A26', // golden
        footer: '#1E1E1E',
        primary: '#3284B3',
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    lineClamp,
    plugin(function newCom({ addComponents }) {
      const components = {
        '.container-full': {},
        '.container-fluid': {},
        '.text-border': {},
        '.font-inter': {},
      };

      addComponents(components);
    }),
  ],
};
