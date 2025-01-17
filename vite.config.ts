import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  process.env.NODE_ENV = mode === 'production' ? 'production' : 'development';

  return {
    plugins: [react()],
    define: {
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
        ...env,
      },
    },
    build: {
      chunkSizeWarningLimit: 50000,
      minify: mode === 'production',
    },
    server: {
      host: true,
      port: mode === 'production' ? 5173 :
            mode === 'staging' ? 5175 :
            mode === 'testing' ? 5174 : 5177,
    },
  };
});
