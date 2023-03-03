import * as React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './components/RenderRoutes';
import { chains, createWagmiClient } from './constants/configureChains';
import { rainbowConnectors } from './constants/wallets';
import Blockies from './components/Blockies';

const wagmiClient = createWagmiClient(rainbowConnectors);

export const App = () => (
  <ChakraProvider theme={theme}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact" avatar={Blockies}>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </ChakraProvider>
);
