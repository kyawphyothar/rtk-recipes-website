/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily:{
        'body' : [ 'Crimson Text', 'serif'
      ],
     ' heading' :['Castoro Titling', 'cursive'],
     'about':['Bruno Ace SC', 'cursive']
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
}

