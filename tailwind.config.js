/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'], 
        'afacad-flux': ['Afacad Flux', 'sans-serif'],
        'edu-dots': ['"Edu AU VIC WA NT Dots"', 'cursive'], 
    },
  }
  },
  plugins: [],
}

