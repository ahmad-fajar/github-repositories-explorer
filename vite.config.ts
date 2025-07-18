import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { terser } from 'rollup-plugin-terser';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    base: '/github-repositories-explorer/',
    build: {
      sourcemap: !isProduction,
      minify: isProduction ? 'terser' : false,
      rollupOptions: {
        plugins: isProduction ? [
          terser({
            mangle: true,
            compress: { drop_debugger: true },
            format: { comments: false },
          }),
        ] : [],
      },
    },
    plugins: [react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', {
            displayName: !isProduction,
            fileName: false,
          }],
        ],
      },
    })],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@/constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
        '@/helper': fileURLToPath(new URL('./src/helper', import.meta.url)),
        '@/hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
        '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
        '@/utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    },
  };
});
