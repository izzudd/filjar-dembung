const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './*.vue',
    './components/**/*.{vue,js,ts,tsx}',
    './layouts/**/*.{vue,js,ts,tsx}',
    './pages/**/*.{vue,js,ts,tsx}',
    './plugins/**/*.{js,ts}',
  ],

  theme: {
    extend: {
      fontFamily: {
        // Heading font Fugaz One fallback to serif
        heading: ['Fugaz One', defaultTheme.fontFamily.serif],
        // Body font Open Sans fallback to sans
        body: ['Open Sans', defaultTheme.fontFamily.sans],
      },

      // design system color pallete
      colors: {
        primary: '#295C56',
        secondary: '#D1E8DC',
        accent: '#9BB0A5',
        'accent-white': '#F9F8F3',
        'accent-black': '#0C120C',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
