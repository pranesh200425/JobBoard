/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#050804',
        'background': '#f5faf2',
        'primary': '#71c947',
        'secondary': '#a8e78a',
        'accent': '#88ea5a',
       },
    },
  },
  plugins: [],
}