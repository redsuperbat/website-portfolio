import '@/assets/styles/tailwind.css';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/vela-purple/theme.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import { router } from './router';

const i18n = createI18n({
  locale: 'sv',
  fallbackLocale: 'en',
});
const pinia = createPinia();

createApp(App).use(i18n).use(pinia).use(router).mount('#app');
