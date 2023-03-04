import React from 'react';

import { Blockies, ChakraProviderWithTheme } from '@templates/shared';

import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { rainbowKitWagmiClient, chains } from '../../constants/wagmiClient';

export const RainbowKitTemplateProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ChakraProviderWithTheme>
      <WagmiConfig client={rainbowKitWagmiClient}>
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
