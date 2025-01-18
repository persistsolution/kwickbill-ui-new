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
    outDir: 'dev-dist', // Specify your desired output directory for development builds
    sourcemap: true, // Include source maps for easier debugging in development
  },
  server: {
    host: true,
    port: 5177, // Default port
  }
})
