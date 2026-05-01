import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173  // Changed from 3001 to avoid conflict with AMIS Admin
  }
})
