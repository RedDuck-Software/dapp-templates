import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { Box, Button, HStack, Image, Stack, Tag } from '@chakra-ui/react';
import { RenderIf } from '../RenderIf';
import { useIsMobile } from '../../hooks/useIsMobile';

export const ConnectWalletButton: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

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
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
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
                    onClick={openChainModal}
                    type="button"
                    colorScheme="red"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <Stack direction={isMobile ? 'column' : 'row'}>
                  <Button
                    onClick={openChainModal}
                    type="button"
                    colorScheme="red"
                    variant="ghost"
                    leftIcon={
                      chain.hasIcon ? (
                        <Box
                          background={chain.iconBackground}
                          w="24px"
                          h="24px"
                          borderRadius="full"
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              htmlWidth="24px"
                              htmlHeight="24px"
                            />
                          )}
                        </Box>
                      ) : undefined
                    }
                  >
                    {chain.name}
                  </Button>

                  <Tag
                    onClick={openAccountModal}
                    colorScheme="red"
                    cursor="pointer"
                  >
                    {account.displayName}
                  </Tag>
                  <RenderIf condition={!!account.displayBalance}>
                    <Tag colorScheme="red">{account.displayBalance}</Tag>
                  </RenderIf>
                </Stack>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
