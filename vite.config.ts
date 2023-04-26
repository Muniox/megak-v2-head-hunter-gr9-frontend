import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssScss from 'postcss-scss';
import postcssImport from 'postcss-import';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default (config) => {
  process.env = { ...process.env, ...loadEnv(config.mode, process.cwd()) };

  return defineConfig({
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
      eslint()
    ],
    resolve: {
      alias: {
        '@backendTypes': path.resolve(__dirname, process.env.VITE_BACKEND_TYPES_PATH),
      }
    }
  })
}
