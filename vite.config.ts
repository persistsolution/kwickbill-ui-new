import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const port = parseInt(process.env.VITE_APP_PORT || '5173', 10);

  return {
    server: {
      port,
    },
    build: {
      outDir: `dist-${mode}`,
    },
  };
});
