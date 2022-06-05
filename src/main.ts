import '@/assets/styles/tailwind.css';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-purple/theme.css';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n/instance';
import { router } from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(ToastService);
app.use(pinia);
app.use(router);
app.mount('#app');
