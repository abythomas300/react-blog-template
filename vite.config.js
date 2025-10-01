import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'react-blog-template'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
