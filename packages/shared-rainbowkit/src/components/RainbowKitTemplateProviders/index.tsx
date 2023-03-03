import React from 'react';

import {
  Blockies,
  chains,
  ChakraProviderWithTheme,
  createWagmiClient,
} from '@templates/shared';

import { WagmiConfig } from 'wagmi';
import { rainbowConnectors } from '../../constants';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

const wagmiClient = createWagmiClient(rainbowConnectors);

export const RainbowKitTemplateProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ChakraProviderWithTheme>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          avatar={Blockies}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProviderWithTheme>
  );
};
