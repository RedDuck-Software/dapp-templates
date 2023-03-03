import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const AppRoot: React.FC = () => {
  return (
    <Flex direction="column" w="100%">
      <Header header="Create React App with Rainbow Kit" />
      <Flex w="100%" justifyContent="center" px="16px">
        <Outlet />
      </Flex>
    </Flex>
  );
};
