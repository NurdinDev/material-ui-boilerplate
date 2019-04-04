import * as React from 'react';

const SignIn = React.lazy(() => import('../pages/SignIn'));
const SignUp = React.lazy(() => import('../pages/SignUp'));

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  type?: 'public' | 'private';
}

export const routes: IRoute[] = [
  {
    path: '/sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    component: SignUp,
  }
];
