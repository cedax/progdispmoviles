// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import DownNav from '../../views/components/DownNav.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: DownNav,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('../../views/Home.vue'),
      },
      {
        path: 'account',
        component: () => import('../../views/Account.vue'),
      }
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;