import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
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
