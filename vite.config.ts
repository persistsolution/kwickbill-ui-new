import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd());

  // Set NODE_ENV explicitly
  process.env.NODE_ENV = mode === 'production' ? 'production' : 'development';

  return {
    plugins: [react()],
    define: {
      'process.env': {
        ...env, // Include all environment variables
        NODE_ENV: process.env.NODE_ENV, // Ensure NODE_ENV is correctly set
      },
    },
    build: {
      chunkSizeWarningLimit: 50000,
      minify: mode === 'production', // Disable minification for development
      sourcemap: mode === 'development', // Enable source maps for easier debugging
    },
    server: {
      host: true,
      port: 5177, // Development server runs on port 5177
      open: true, // Automatically opens the browser on server start
    },
  };
});
