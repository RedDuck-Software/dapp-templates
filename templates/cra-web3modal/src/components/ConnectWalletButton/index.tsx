import React, { useMemo } from 'react';
import {
  PREFERRED_NETWORK,
  useIsMobile,
  useIsMounted,
} from '@templates/shared';
import { useAccount, useBalance, useNetwork } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { Box, Button, Image, Stack, Tag } from '@chakra-ui/react';
import { getChainIcon } from '../../utils/getChainIcon';
import { NetworkIcon } from '../NetworkIcon';

const ConnectWalletButton = () => {
  const isMobile = useIsMobile();
  const isMounted = useIsMounted();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { open, close } = useWeb3Modal();
  const { data: balance } = useBalance({ address });

  const ready = isMounted;

  const chainIcon = useMemo(
    () => (chain?.id ? getChainIcon(chain.id) : ''),
    [chain?.id],
  );

  return (
    <div
      {...(!ready && {
        'aria-hidden': true,
        style: {
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        },
      })}
    >
      {(() => {
        if (!address || !chain) {
          return (
            <Button
              onClick={() => open({ route: 'ConnectWallet' })}
              type="button"
              variant="ghost"
              colorScheme="red"
            >
              Connect Wallet
            </Button>
          );
        }

        if (chain.unsupported) {
          return (
            <Button
              onClick={() => open({ route: 'SelectNetwork' })}
              type="button"
              colorScheme="red"
            >
              Wrong Network
            </Button>
          );
        }

        return (
          <Stack direction={isMobile ? 'column' : 'row'}>
            <Button
              onClick={() => open({ route: 'SelectNetwork' })}
              type="button"
              colorScheme="red"
              variant="ghost"
              leftIcon={
                <Box w="28px" h="28px">
                  <NetworkIcon src={chainIcon} />
                </Box>
              }
            >
              {chain.name}
            </Button>
            <Tag
              onClick={() => open({ route: 'Account' })}
              colorScheme="red"
              cursor="pointer"
            >
              {address.substring(0, 4)}...
              {address.substring(address.length - 4)}
            </Tag>
            {balance && (
              <Tag colorScheme="red">
                {parseFloat(balance.formatted).toFixed(2)} {balance.symbol}
              </Tag>
            )}
          </Stack>
        );
      })()}
    </div>
  );
};

export default ConnectWalletButton;
