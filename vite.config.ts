import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssScss from 'postcss-scss';
import postcssImport from 'postcss-import';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      parser: postcssScss,
      plugins: [
        postcssImport,
        tailwindcss(),
        autoprefixer({}),
      ]
    }
  },
  plugins: [
      react(),
      eslint({useEslintrc: true}),
  ],
})
