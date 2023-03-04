import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './index';

export const RenderRoutes: React.FC = () => {
  return useRoutes(routesConfig);
};
