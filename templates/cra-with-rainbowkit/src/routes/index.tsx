import { RouteObject } from 'react-router-dom';
import { AppRoot } from '../components/AppRoot';
import { Dashboard } from '../pages/Dashboard';

export const ROUTES = {
  Root: '/',
  Dashboard: '/',
} as const;

export const routesConfig: RouteObject[] = [
  {
    path: ROUTES.Root,
    element: <AppRoot />,
    children: [{ path: ROUTES.Dashboard, element: <Dashboard /> }],
  },
];
