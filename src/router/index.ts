import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Home/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: {
      public: true,
      i18n: 'landing-page',
    },
    component: HomePage,
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      public: true,
      i18n: 'create-chat-page',
    },
    redirect: 'https://rsb.netterberg.com/chat',
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
