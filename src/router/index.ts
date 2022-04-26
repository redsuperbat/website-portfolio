import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: {
      public: true,
      title: 'Landing Page',
    },
    component: Home,
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      public: true,
      title: 'Chat with me!',
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
      title: 'My blogging space',
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
