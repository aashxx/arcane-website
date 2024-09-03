/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "valorax": ["Valorax", "sans-serif"],
        "expletus-sans": ["Expletus Sans", "sans-serif"]
      },
      colors: {
        "arcane-primary": "#9E325F"
      }
    },
  },
  plugins: [],
}

