/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#ec4899',
      'green': '#10b981',
      'light-green': '#f7fee7'
    },
    container: {
      padding: "2rem",
      center: true,
    },
    // fontFamily: {
    //   'font-mono':
    // },
    extend: {
      
    },
  },
  plugins: [],
}

