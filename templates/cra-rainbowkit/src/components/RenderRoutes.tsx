import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from '../routes';

export const RenderRoutes: React.FC = () => {
  return useRoutes(routesConfig);
};
