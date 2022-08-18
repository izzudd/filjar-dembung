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
        // TODO: include font fot heading and body
        // Heading font Fugaz One fallback to serif
        // Body font Open Sans fallback to sans
      },
    },
  },
  // TODO: decide use typography fom plugin or manual
  // plugins: [require('@tailwindcss/typography')],
};