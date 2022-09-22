import React, { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import AppLayout from '../components/Layout/AppLayout';
const Home = lazy(() => import('../views/Home'));
const SSH = lazy(() => import('../views/SSH'));
const Sftp = lazy(() => import('../views/Sftp'));
const Config = lazy(() => import('../views/Config'));
const Extend = lazy(() => import('../views/Extend'));

const lazyLoad = (children: ReactNode): ReactNode => {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
};

export const URL = {
  home: '/home',
  ssh: '/ssh',
  config: '/config',
  sftp:'/sftp',
  extend:'/extend',
};

const router:RouteObject[]=[
  // {
  //   path: '/',
  //   element: lazyLoad(<AppLayout />),
  //   children: [
  //     { path: URL.home, element: lazyLoad(<Home />) },
  //     { path: URL.ssh, element: lazyLoad(<SSH />) },
  //     { path: URL.config, element: lazyLoad(<Config />) },
  //     { path: URL.sftp, element: lazyLoad(<Sftp />) },
  //     { path: URL.extend, element: lazyLoad(<Extend />) },
  //   ],
  // },

  {
    path: URL.home,
    element:lazyLoad(<Home />),
  },
  {
    path: URL.ssh,
    element:lazyLoad(<AppLayout><SSH /></AppLayout>),
  },
  {
    path: URL.config,
    element:lazyLoad(<AppLayout><Config /></AppLayout>),
  }
  ,
  {
    path: URL.sftp, 
    element:lazyLoad(<AppLayout><Sftp /></AppLayout>),
  },
  { 
    path: URL.extend, 
    element:lazyLoad(<AppLayout><Extend /></AppLayout>),
  },  
  
]

export default router;
