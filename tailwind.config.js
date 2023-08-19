/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors:{
        'background-curantis': '#ae2465',
        'white':'#FFFFFF',
        'title-white':'#fefefe',
        'background-page':'background-color: #eef0f2',
        'primary': '#ae2465',
        'background-titles':'#E2E7EF',
        'titles':'#5977BA',
        'background-row':'#eee'
      },
    },
  },
  plugins: [],
}