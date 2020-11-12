import { lang } from '@/store';
import { UiLabels } from '@/types/uiLabels';
import { computed, reactive } from 'vue';
import store from '@/store';

export const useLang = () => {
  const uiLabels = computed(() => store.state.uiLabels);
  const currentLang = computed<string>(() => store.state.currentLang);
  const setLang = (lang: lang) => store.dispatch('GET_UI_LABELS', lang);
  return { uiLabels, setLang, currentLang };
};
