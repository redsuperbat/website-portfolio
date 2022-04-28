import '@/assets/styles/tailwind.css';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/vela-purple/theme.css';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(pinia);
app.use(router);
app.mount('#app');
