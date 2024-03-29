/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_site/**/*.{html,css,js,njk}',
    './_site/**/**/*.{html,css,js,njk}',
    './_site/*.{html,css,js,njk}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

