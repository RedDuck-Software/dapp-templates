import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from '@templates/shared';
import { Outlet } from 'react-router-dom';
import LogoImg from '../assets/img/logo.svg';
import ConnectWalletButton from '../components/ConnectWalletButton';

export const AppRoot: React.FC = () => {
  useEffect(() => {
    document
      .getElementById('root')
      ?.style.setProperty('--w3m-color-fg-accent', '#c53030');
  }, []);

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
