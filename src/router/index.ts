import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: {
      public: true,
      i18n: 'landing-page',
    },
    component: Home,
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      public: true,
      i18n: 'create-chat-page',
    },
    component: () => import('../views/CreateChat/CreateChat.vue'),
  },
  {
    path: '/chat/:id',
    name: 'chat-room',
    component: () => import('../views/ChatRoom/ChatRoom.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      public: false,
      i18n: 'blog-page',
    },
    component: () => import('../views/Blog/Blog.vue'),
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

router.beforeEach((to) => {
  document.title = to.meta.i18n as string;
});

export { router };
