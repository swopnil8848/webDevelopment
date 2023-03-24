/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxsm': '390px',
        'xsm' : '500px',
        
      }
    },
  },
  plugins: [],
}