import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHashHistory } from 'vue-router';

import { routes } from './routes';
import { i18n } from '@/locales';
import { useUserStore } from '@/stores/modules/user';

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, _from, next) => {
  NProgress.start();

  const userStore = useUserStore();
  const appTitle = import.meta.env.VITE_APP_TITLE;
  const routeTitle = to.meta.title ? i18n.global.t(String(to.meta.title)) : '';
  document.title = routeTitle ? `${appTitle} - ${routeTitle}` : appTitle;

  if (to.meta.public || userStore.token) {
    next();
    return;
  }

  next({
    path: '/login',
    query: { redirect: to.fullPath }
  });
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
