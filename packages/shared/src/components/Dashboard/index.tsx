import React, { useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { useIsMobile, useIsMounted } from '../../hooks';
import { useAccount, useBalance } from 'wagmi';
import { CardItem } from '../CardItem';
import { Blockies } from '../Blockies';

export type DashboardProps = {
  ssr?: boolean;
};

export const Dashboard: React.FC<DashboardProps> = ({ ssr }) => {
  const isMounted = useIsMounted();
  const isMobile = useIsMobile();
  const { isConnected, address } = useAccount();
  const { data: balance, isSuccess } = useBalance({ address });
  const { onCopy, hasCopied } = useClipboard(isMounted ? address ?? '' : '');
  const toast = useToast();
  const displayedAddress =
    useBreakpointValue(
      address
        ? [
            address.substring(0, 4) +
              '...' +
              address.substring(address.length - 4),
            address,
          ]
        : ['', ''],
      {
        ssr,
      },
    ) ?? '';

  useEffect(() => {
    if (isConnected && isMounted) {
      toast({
        title: 'Wallet connected.',
        description: "You've successfully connected wallet.",
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme: 'red',
        variant: 'left-accent',
        position: 'top-right',
      });
    }
  }, [isConnected, isMounted]);

  return (
    <Grid
      w="100%"
      templateColumns={isMobile ? '1fr' : 'repeat(3, 1fr)'}
      gap={4}
      mt={4}
    >
      <GridItem>
        <Card variant="outline" w="100%">
          <CardHeader>
            <Heading size="md">Account details</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing={4}>
              <CardItem
                header={
                  <Flex gap={4} alignItems="baseline">
                    Address
                    {address && isMounted && (
                      <Button
                        size="xs"
                        onClick={() => {
                          onCopy();
                        }}
                        textTransform="uppercase"
                      >
                        {hasCopied ? 'copied' : 'copy'}
                      </Button>
                    )}
                  </Flex>
                }
              >
                <Stack
                  direction={isMobile ? 'column' : 'row'}
                  alignItems="center"
                  spacing={4}
                  mt={4}
                >
                  <SkeletonCircle
                    isLoaded={isConnected && isMounted}
                    size="48px"
                  >
                    <Blockies address={address!} size={48} />
                  </SkeletonCircle>
                  {isConnected && isMounted ? (
                    <Text isTruncated textAlign="center" as="span">
                      {displayedAddress}
                    </Text>
                  ) : (
                    <SkeletonText
                      noOfLines={1}
                      w={isMobile ? '100%' : 'auto'}
                      flexGrow="1"
                    />
                  )}
                </Stack>
              </CardItem>
              <CardItem header="Balance">
                <Flex alignItems="center" gap={4} mt={4}>
                  <SkeletonText isLoaded={!!balance && isMounted} noOfLines={1}>
                    {isMounted && (
                      <Text>
                        {balance?.formatted} <b>{balance?.symbol}</b>
                      </Text>
                    )}
                  </SkeletonText>
                </Flex>
              </CardItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
