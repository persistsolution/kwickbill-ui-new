import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isMainBranch = process.env.GITHUB_REF_NAME === 'main';

  return {
    plugins: [react()],
    define: {
      'process.env': {}, // Ensures `process.env` doesn't cause issues in the browser.
    },
    base: isMainBranch ? '/' : '/dev/', // Base URL for assets.
    build: {
      outDir: isMainBranch ? 'build-main' : 'build-dev', // Output directory for the build.
      sourcemap: true, // Optional: Enables source maps for easier debugging.
    },
    server: {
      host: true,
      port: 5173, // Default port for the dev server.
    },
  };
});
