import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes/RenderRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitTemplateProviders } from '@templates/shared-rainbowkit';

export const App = () => (
  <RainbowKitTemplateProviders>
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  </RainbowKitTemplateProviders>
);
