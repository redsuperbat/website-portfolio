import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'primevue/resources/themes/vela-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '@/assets/styles/tailwind.css';
import vExpand from './directives/v-expand';

createApp(App)
  .use(store)
  .directive('expand', vExpand)
  .use(router)
  .mount('#app');
