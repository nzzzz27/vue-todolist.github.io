import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/index';
import Todos from '@/pages/todos';
import Tabs from '@/pages/tabs';

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
      component: Todos,
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,
    },
  ],
});

