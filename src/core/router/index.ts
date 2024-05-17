// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;