import dotenv from 'dotenv';
dotenv.config();  // Ensure environment variables are loaded

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = process.env.VITE_BASE_URL || "http://localhost:3000/api/v1"; 

// Vite config
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/v1', // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
