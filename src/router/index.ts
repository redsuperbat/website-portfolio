import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ChatRoomPage from '../views/ChatRoom/ChatRoom.vue';
import CreateChatPage from '../views/CreateChat/CreateChat.vue';
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
    component: CreateChatPage,
  },
  {
    path: '/chat/:id',
    name: 'chat-room',
    component: ChatRoomPage,
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

export { router };
