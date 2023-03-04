import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes/RenderRoutes';
import { ChakraProviderWithTheme, PREFERRED_NETWORK } from '@templates/shared';
import { WagmiConfig } from 'wagmi';
import {
  ethereumClient,
  projectId,
  web3ModalWagmiClient,
} from './constants/wallets';
import { Web3Modal } from '@web3modal/react';

export const App = () => (
  <>
    <ChakraProviderWithTheme>
      <WagmiConfig client={web3ModalWagmiClient}>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </WagmiConfig>
    </ChakraProviderWithTheme>
    <Web3Modal
      projectId={projectId}
      ethereumClient={ethereumClient}
      themeColor="magenta"
      themeBackground="themeColor"
      defaultChain={PREFERRED_NETWORK}
    />
  </>
);
