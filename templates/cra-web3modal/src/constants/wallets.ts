import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';
import {
  configureChainsWithProviders,
  createWagmiClientWithParams,
  SUPPORTED_NETWORKS,
} from '@templates/shared';

export const projectId = '8c480619b72d6645b862bccb99949d87';

const connectors = modalConnectors({
  projectId,
  version: '2',
  appName: 'web3Modal',
  chains: SUPPORTED_NETWORKS,
});

const { provider } = configureChainsWithProviders([
  walletConnectProvider({ projectId }),
]);

export const web3ModalWagmiClient = createWagmiClientWithParams(
  connectors,
  provider,
);

export const ethereumClient = new EthereumClient(
  web3ModalWagmiClient,
  SUPPORTED_NETWORKS,
);
