import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), VueI18nPlugin({})],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
