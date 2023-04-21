/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      width: {
        '91': '91px',
        '350': '350px',
      },
      height: {
        '39': '39px',
        '40': '40px',
        '200': '200px',
      },
      spacing: {
        '666': '666px',
        '660': '660px',
        '1044': '1044px',
      }
    },
    colors: {
      'unnamed-color-4d4d4d': '#4D4D4D',
      'unnamed-color-0b8bd4': '#0B8BD4',
      'unnamed-color-1ecb40': '#1ECB40',
      'unnamed-color-e02735': '#E02735',
      'unnamed-color-666666': '#666666',
      'unnamed-color-7e7e7e': '#7E7E7E',
      'unnamed-color-9e9e9e': '#9E9E9E',
      'unnamed-color-cfcfcf': '#CFCFCF',
      'unnamed-color-f7f7f7': '#F7F7F7',
      'unnamed-color-ff0004': '#FF0004',
      'unnamed-color-ee4540': '#EE4540',
      'unnamed-color-c92929': '#C92929',
      'unnamed-color-811336': '#811336',
      'unnamed-color-510a0a': '#510A0A',
      'unnamed-color-2d1414': '#2D1414',
      'unnamed-color-0a0a0a': '#0A0A0A',
      'unnamed-color-222224': '#222224',
      'unnamed-color-292A2B': '#292A2B',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      cataman: ['Catamaran', 'Regular'],
    },
  },
  plugins: [],
}

