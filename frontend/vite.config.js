import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy: {
      '/api': 'https://rest-api-cors.vercel.app/:3000',
    }
  },
  plugins: [react()],
})
