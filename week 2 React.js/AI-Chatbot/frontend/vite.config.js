import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 allows access from LAN (e.g. your mobile)
    port: 5173, // optional (default is 5173)
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
