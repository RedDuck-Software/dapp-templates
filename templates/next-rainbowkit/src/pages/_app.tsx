import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitTemplateProviders } from '@templates/shared-rainbowkit';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as unknown as any).getLayout ??
    ((page: typeof Component) => page);

  return (
    <RainbowKitTemplateProviders>
      {getLayout(<Component {...pageProps} />)}
    </RainbowKitTemplateProviders>
  );
}
