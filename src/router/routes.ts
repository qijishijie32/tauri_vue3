import type { RouteRecordRaw } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'route.login',
      public: true
    }
  },
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',
    meta: {
      title: 'route.root'
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'route.dashboard',
          icon: 'i-ep-data-analysis'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: 'route.about',
          icon: 'i-ep-info-filled'
        }
      },
      {
        path: 'demo',
        name: 'Demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: 'route.demo',
          icon: 'i-ep-magic-stick'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: 'route.notFound',
      public: true
    }
  }
];
