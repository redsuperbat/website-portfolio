import { translatedContent, TranslatedContent } from '@/assets/i18n';
import { defineStore } from 'pinia';

interface AppState {
  allContent: TranslatedContent;
  locale: 'sv' | 'en';
}

export const useAppStore = defineStore('app-store', {
  state: () => ({ allContent: translatedContent, locale: 'sv' } as AppState),
  actions: {
    setLocale(locale: keyof TranslatedContent) {
      this.locale = locale;
    },
  },
  getters: {
    content(state) {
      return state.allContent[state.locale];
    },
  },
});
