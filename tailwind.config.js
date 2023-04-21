/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-950" : "#0a0a0a",
        "black-900": "#1e1e1f",
        "black-800" : "#222324",
        "black-700": "#222224",
        "black-600" : "#292a2b",
        "gray" : "#172a35",
        "red" : "#e02735"
      },
      fontFamily: {
        notosansthai: ["Noto Sans Thai", 'sans-serif']
      },
    },
  },
  plugins: [],
}

