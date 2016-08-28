import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';

export const routes: RouterConfig = [
  {
    path: '',
    component: Home
  }
];

export const asyncRoutes: AsyncRoutes = {
};

export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
];
