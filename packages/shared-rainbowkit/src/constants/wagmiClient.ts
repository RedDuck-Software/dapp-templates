import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import {
  configureChainsWithProviders,
  createWagmiClientWithParams,
} from '@templates/shared';
import { rainbowConnectors } from './wallets';

export const { chains, provider } = configureChainsWithProviders([
  jsonRpcProvider({
    priority: 0,
    rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
  }),
  publicProvider({ priority: 1 }),
]);

export const rainbowKitWagmiClient = createWagmiClientWithParams(
  rainbowConnectors,
  provider,
);
