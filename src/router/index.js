import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/index';
// import Todos from '@/pages/todos';
// import Tabs from '@/pages/tabs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('@/pages/todos'),
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: () => import('@/pages/tabs'), // 非同期読み込み
    },
  ],
});

