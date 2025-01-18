import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isMainBranch = process.env.GITHUB_REF_NAME === 'main';

  return {
    plugins: [react()],
    define: {
      'process.env': {}, // Prevent issues with process.env in the browser.
    },
    base: isMainBranch ? '/' : '/dev/', // Base URL for assets. Adjust as per deployment needs.
    build: {
      outDir: isMainBranch ? 'build-main' : 'build-dev', // Output directory for the build.
      sourcemap: true, // Optional: Enables source maps for easier debugging.
    },
    server: {
      host: true, // Allows external connections.
      port: 5173, // Default port.
    },
  };
});
