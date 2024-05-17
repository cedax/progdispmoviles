import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  optimizeDeps: {
    exclude: [
      'swipe-back', // Ajusta esto según el nombre real de la dependencia
      'index9',     // Ajusta esto según el nombre real de la dependencia
      'hardware-back-button' // Ajusta esto según el nombre real de la dependencia
    ]
  }
})
