/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
 
  ],
  theme: {
    extend: {
      colors:{
        primary:"#871cf8",
        "bg-100":"#1A1A1A",
        "bg-200":"#292929",
        "bg-300":"#404040",
        "bg-400":"#585858",
      }
    },
  },
  plugins: [],
}