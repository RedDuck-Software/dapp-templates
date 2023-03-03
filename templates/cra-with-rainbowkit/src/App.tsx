import * as React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './components/RenderRoutes';
import { rainbowConnectors } from './constants/wallets';
import {
  Blockies,
  chains,
  ChakraProviderWithTheme,
  createWagmiClient,
} from '@templates/shared';

const wagmiClient = createWagmiClient(rainbowConnectors);

export const App = () => (
  <ChakraProviderWithTheme>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact" avatar={Blockies}>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </ChakraProviderWithTheme>
);
