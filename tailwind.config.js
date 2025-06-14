const { FaSignature } = require('react-icons/fa');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty:{
        'width':'width'
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

