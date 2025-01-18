import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // base: "/vexel-ts/preview/", Use base path for while deploying the project the SSR.
  
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    host: '0.0.0.0', // Bind to all IP addresses
    port: 5177, // Set the port
    strictPort: true, // Ensure the server uses the specified port or fails
  },
  build: {
    outDir: 'dev-dist', // Custom output directory for builds
    sourcemap: true, // Include source maps for debugging
  },
})
