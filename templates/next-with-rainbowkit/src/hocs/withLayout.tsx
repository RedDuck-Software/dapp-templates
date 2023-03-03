import { Header } from '@templates/shared';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const withLayout =
  <T extends Record<string, unknown>>(Component: React.FC<T>) =>
  (props: T) =>
    (
      <Flex direction="column" w="100%">
        <Header
          header="Next with Rainbow Kit"
          connectWalletButton={<ConnectWalletButton />}
          logo="./img/logo.svg"
        />
        <Flex w="100%" justifyContent="center" px="16px">
          <Component {...props} />
        </Flex>
      </Flex>
    );
