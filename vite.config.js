import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        contact: resolve(__dirname, './contact.html'),
        projects: resolve(__dirname, './projects.html'),
        landing: resolve(__dirname, './pages/landing-page.html'),
        practicad8: resolve(__dirname, './pages/practica-d8.html'),
        practicajs: resolve(__dirname, './pages/practica-js.html'),
        precalif5: resolve(__dirname, './pages/precalif-5.html'),
      },
    },
  },
})
