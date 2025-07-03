import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 أضف هذا السطر لتفعيل fallback بشكل صحيح
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
