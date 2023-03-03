import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import {
  Blockies,
  chains,
  ChakraProviderWithTheme,
  createWagmiClient,
} from '@templates/shared';
import { rainbowConnectors } from '@/constants/wallets';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

const wagmiClient = createWagmiClient(rainbowConnectors);

declare type NextComponentType<T1, T2, T3> = {
  getLayout: (
    page: NextComponentType<T1, T2, T3>,
  ) => NextComponentType<T1, T2, T3>;
};

export default function App({ Component, pageProps }: AppProps) {
  // const isMounted = useIsMounted();
  //
  // if (!isMounted) {
  //   return null;
  // }

  const getLayout =
    (Component as unknown as any).getLayout ??
    ((page: typeof Component) => page);

  return (
    <ChakraProviderWithTheme>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          avatar={Blockies}
        >
          {getLayout(<Component {...pageProps} />)}
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProviderWithTheme>
  );
}
