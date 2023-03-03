import {
  connectorsForWallets,
  getDefaultWallets,
  WalletList,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  imTokenWallet,
  ledgerWallet,
  omniWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { SUPPORTED_NETWORKS } from '@templates/shared';

const chains = SUPPORTED_NETWORKS;
const shimDisconnect = true;

const { wallets: defaultWallets } = getDefaultWallets({
  appName: 'Create React App with Rainbow Kit',
  chains: SUPPORTED_NETWORKS,
});

const otherWallets: WalletList = [
  {
    groupName: 'Other',
    wallets: [
      trustWallet({ chains, shimDisconnect }),
      argentWallet({ chains }),
      imTokenWallet({ chains }),
      ledgerWallet({ chains }),
      omniWallet({ chains }),
    ],
  },
];

const wallets: WalletList = [...defaultWallets, ...otherWallets];

export const rainbowConnectors = connectorsForWallets(wallets);
