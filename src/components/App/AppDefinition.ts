import { lazy } from 'react';

export const AppDefinition = {
  pages: [
    {
      name: 'Home',
      url: '/',
      component: () => lazy(() => import('../../Pages/Home'))
    },
    {
      name: 'Sources',
      url: '/sources',
      component: () => lazy(() => import('../../Pages/Sources'))
    }
  ]
};