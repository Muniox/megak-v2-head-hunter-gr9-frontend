/** @type {import('tailwindcss').Config} */
exports.module = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#222224',
        'secondary-color': '#292A2B',
        'primary-font-color': '#F7F7F7',
        'primary-border-color': '#1E1E1F',
        'login-btn-color': '#E02735',
        'primary-placeholder-font-color': '#7E7E7E',
        'divider-line-color': '#202122',
        'available-students-details-font-color': '#CFCFCF',
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
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        cataman: ['Catamaran', 'Regular'],
      }
    },
  },
  plugins: [],
}

