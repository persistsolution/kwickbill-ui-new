import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // base: "/vexel-ts/preview/", Use base path for while deploying the project the SSR.
  
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    chunkSizeWarningLimit: 50000,
    minify: true,
  },
  server: {
    host: true,
  }
})


