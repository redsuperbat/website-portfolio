import '@/assets/styles/tailwind.css';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/vela-purple/theme.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
