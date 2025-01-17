import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // Load environment variables based on the mode

  return {
    // Use base path when deploying SSR
    // base: mode === 'production' ? '/vexel-ts/preview/' : '/',

    plugins: [react()],
    define: {
      'process.env': env, // Dynamically load environment variables
    },
    build: {
      chunkSizeWarningLimit: 50000,
      minify: mode === 'production', // Minify only in production mode
    },
    server: {
      host: true,
      port: 5177, // Default port
    },
  };
});
