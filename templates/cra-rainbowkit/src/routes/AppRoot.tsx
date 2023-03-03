import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from '@templates/shared';
import { Outlet } from 'react-router-dom';
import LogoImg from '../assets/img/logo.svg';
import { ConnectWalletButton } from '@templates/shared-rainbowkit';

export const AppRoot: React.FC = () => {
  return (
    <Flex direction="column" w="100%">
      <Header
        header="Create React App with Rainbow Kit"
        connectWalletButton={<ConnectWalletButton />}
        logo={LogoImg}
      />
      <Flex w="100%" justifyContent="center" px="16px">
        <Outlet />
      </Flex>
    </Flex>
  );
};
