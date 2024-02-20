const lineClamp = require('@tailwindcss/line-clamp');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': 'url(/assets/main/banner.jpg)',
        gradient: 'linear-gradient(0deg, #3b82f6 0%, #FFF 96.25%)',
      },
      colors: {
        secondary: '#F9C34D', // red 2
        button: '#F08C18',
        golden1: '#EF9D0E', // golden
        golden2: '#D99A26', // golden
        footer: '	#188a8d',
        primary: '#3b82f6',
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
