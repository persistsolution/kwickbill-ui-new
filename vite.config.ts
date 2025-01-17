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
      chunkSizeWarningLimit: 2000, // Lowered the warning limit for better feedback
      minify: true, // Always minify in production
      sourcemap: false, // Disable source maps in production for better security
      outDir: 'dist', // Output directory for production builds
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'], // Separate vendor code into its own chunk
          },
        },
      },
    },
    server: {
      host: true,
      port: 5173, // Default production port
      open: false, // Do not automatically open the browser in production
    },
    preview: {
      host: true,
      port: 5173, // Preview server port for production builds
    },
  };
});
