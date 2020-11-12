import { createStore } from 'vuex';
import { UiLabels } from '@/types/uiLabels';

export type lang = 'sv' | 'en';

const store = createStore({
  state: {
    currentLang: 'sv',
    uiLabels: require('@/assets/static/ui_sv.json') as UiLabels,
  },
  mutations: {
    SET_UI_LABELS: (state, labels: UiLabels) => (state.uiLabels = labels),
    SET_LANG: (state, lang: lang) => (state.currentLang = lang),
  },
  actions: {
    async GET_UI_LABELS({ commit }, lang: lang) {
      const json = await import(`@/assets/static/ui_${lang}.json`);
      commit('SET_LANG', lang);
      commit('SET_UI_LABELS', json.default);
    },
  },
  modules: {},
});

export default store;
