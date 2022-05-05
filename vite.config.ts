import vueI18n from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), vueI18n()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
