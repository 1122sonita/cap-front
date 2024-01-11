const lineClamp = require('@tailwindcss/line-clamp');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        main: 'url(/assets/main/bg-1.png)',
      },
      colors: {
        footer: '#343434',
        primary: '#6539B8', // purple
        secondary: '#FFC916', // golden
        purple_1: '#BA68C8', // hover purple
        green: '#00DF76', // hover purple
        red: '#FF3E3E', // hover purple
        purple: '#E9DDFF',
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    lineClamp,
    plugin(function newCom({ addComponents }) {
      const components = {
        '.container-full': {},
        '.container-full-px': {},
        '.container-fluid': {},
      };

      addComponents(components);
    }),
  ],
};
