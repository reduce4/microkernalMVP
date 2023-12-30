import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [react()],
  build: {
    lib: {
      name: 'button',
      entry: 'src/main'
    }
  }
})
