import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { ConnectWalletButton } from '../ConnectWalletButton';
import { useIsMobile } from '../../hooks/useIsMobile';
import { HamburgerIcon } from '@chakra-ui/icons';

export type HeaderProps = {
  header: string;
};

export const Header: React.FC<HeaderProps> = ({ header }) => {
  const isMobile = useIsMobile();

  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent={isMobile ? 'flex-end' : 'space-between'}
      borderWidth="1px"
      boxShadow="md"
      p="10px"
    >
      {isMobile ? (
        <Button onClick={onToggle} colorScheme="red" variant="outline">
          <HamburgerIcon />
        </Button>
      ) : (
        <>
          <HStack>
            <Logo height="60px" />
            <Heading colorScheme="red">{header}</Heading>
          </HStack>
          <ConnectWalletButton />
        </>
      )}

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton variant="outline" colorScheme="red" />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>
            <ConnectWalletButton />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
