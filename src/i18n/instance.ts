import { createI18n } from 'vue-i18n';

export const availableLocales = ['sv', 'en'];

export const i18n = createI18n({
  locale: 'sv',
  availableLocales,
  fallbackLocale: 'en',
  globalInjection: true,
});
