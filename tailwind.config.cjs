/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#222224',
        'secondary-color': '#292A2B',
        "tertiary-color": "#1E1E1F",
        'primary-font-color': '#F7F7F7',
        "secondary-font-color": "#CFCFCF",
        'btn-color': '#E02735',
        'btn-hover-color': '#C92929',
        'primary-placeholder-font-color': '#7E7E7E',
        'primary-divider-line-color': '#202122',
        'secondary-divider-line-color': '#262728',
        'dropdown-svg-and-search-placeholder-color': '#666666',
        'right-arrow-svg-color': '#333333',
        'filter-svg-color': '#4D4D4D',
        'student-information-field-color': '#222324',
        'student-ratings-font-color': '#9E9E9E',
        'filter-window-btn-color': '#172A35',
        'filter-window-color': '#0A0A0A',
        'tab-underline-color': '#C92929',
        'cv-github-color': '#0B8BD4',
      },
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
      },
      fontSize: {
        '2xs' : '0.65rem',
        '3xs': '0.50rem'
      }
    },
  },
  plugins: [],
}

