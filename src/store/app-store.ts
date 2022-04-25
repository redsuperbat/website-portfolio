import { Content, translatedContent, TranslatedContent } from '@/assets/i18n';
import { defineStore } from 'pinia';

interface AppState {
  content: Content;
}

export const useAppStore = defineStore('app-store', {
  state(): AppState {
    return { content: translatedContent.sv };
  },
  actions: {
    switchLang(lang: keyof TranslatedContent) {
      this.content = translatedContent[lang];
    },
  },
  getters: {},
});
