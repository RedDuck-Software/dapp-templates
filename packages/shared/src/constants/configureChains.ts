import {
  Chain,
  ChainProviderFn,
  configureChains,
  Connector,
  createClient,
} from 'wagmi';
import { SUPPORTED_NETWORKS } from './networks';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { Provider, WebSocketProvider } from '@wagmi/core';

type SupportedChain = (typeof SUPPORTED_NETWORKS)[number];

export const configureChainsWithProviders = <
  TProvider extends Provider = Provider,
  TWebSocketProvider extends WebSocketProvider = WebSocketProvider,
>(
  providers: ChainProviderFn<SupportedChain, TProvider, TWebSocketProvider>[],
) =>
  configureChains<SupportedChain, TProvider, TWebSocketProvider>(
    SUPPORTED_NETWORKS,
    providers,
  );

export const createWagmiClientWithParams = <
  TProvider extends Provider = Provider,
>(
  connectors: (() => Connector[]) | Connector[],
  provider: ((config: { chainId?: number }) => TProvider) | TProvider,
) =>
  createClient({
    autoConnect: true,
    connectors,
    provider,
  });
