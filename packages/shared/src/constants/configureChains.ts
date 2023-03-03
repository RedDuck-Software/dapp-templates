import { configureChains, Connector, createClient } from 'wagmi';
import { SUPPORTED_NETWORKS } from './networks';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(SUPPORTED_NETWORKS, [
  jsonRpcProvider({
    priority: 0,
    rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
  }),
  publicProvider({ priority: 1 }),
]);

export const createWagmiClient = (
  connectors: Connector[] | (() => Connector[]),
) =>
  createClient({
    autoConnect: true,
    connectors,
    provider,
  });
