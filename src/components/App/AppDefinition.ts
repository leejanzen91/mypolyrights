import { lazy } from 'react';

export const AppDefinition = {
  pages: [
    {
      name: 'Home',
      url: '/',
      component: () => lazy(() => import('../../pages/Home'))
    },
    {
      name: 'Sources',
      url: '/sources',
      component: () => lazy(() => import('../../pages/Sources'))
    }
  ]
};