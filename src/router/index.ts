import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: {
      public: true,
      i18n: 'landingPage',
    },
    component: Home,
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      public: true,
      i18n: 'createChatPage',
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
      i18n: 'blogPage',
    },
    component: () => import('../views/Blog/Blog.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
