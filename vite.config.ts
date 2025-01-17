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
      minify: mode === 'production',
    },
    server: {
      host: true,
      port: mode === 'production' ? 5173 : 5173, // Example port logic
    },
  };
});
