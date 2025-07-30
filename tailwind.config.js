/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {
      screens:{
    'ms':{'max':'520px'},
    },
    },
  },
  plugins: [],
}

