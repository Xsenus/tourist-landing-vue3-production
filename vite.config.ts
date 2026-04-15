import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

const normalizeBase = (value?: string): string => {
  if (!value || value.trim() === '') {
    return '/';
  }

  let normalized = value.trim();

  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`;
  }

  return normalized;
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = normalizeBase(process.env.BASE_PATH ?? env.BASE_PATH);

  return {
    base,
    plugins: [vue()],
    server: {
      host: true
    },
    preview: {
      host: true
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    test: {
      environment: 'jsdom',
      globals: true,
      css: true,
      pool: 'forks',
      poolOptions: {
        forks: {
          singleFork: true
        }
      },
      setupFiles: ['./src/shared/test/setup.ts']
    }
  };
});
