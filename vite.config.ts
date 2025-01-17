import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd());

  // Get the branch name or environment name (default to 'prod' for production)
  const branch = process.env.production || 'main'; // Use 'prod' if no branch is specified
  const outputDir = `dist/${branch}`; // Output directory for production builds

  return {
    plugins: [react()],
    define: {
      'process.env': {
        ...env, // Include all environment variables
        NODE_ENV: mode === 'production' ? 'production' : 'development', // Ensure NODE_ENV is correctly set
      },
    },
    build: {
      outDir: outputDir, // Dynamic output directory for production
      chunkSizeWarningLimit: 500, // Reduce warning limits for better insights
      minify: true, // Always minify for production
      sourcemap: false, // Disable source maps in production for security and performance
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor'; // Separate vendor code
            }
          },
        },
      },
    },
    server: {
      host: true, // Allow external access if needed
      port: 5173, // Development server port
      open: false, // Do not open the browser in production
    },
  };
});
