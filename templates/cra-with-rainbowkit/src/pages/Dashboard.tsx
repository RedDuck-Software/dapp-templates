import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  Grid,
  GridItem,
  Heading,
  StackDivider,
  Stack,
  SkeletonText,
  SkeletonCircle,
  Flex,
  BoxProps,
  useBreakpointValue,
  Button,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { useAccount, useBalance } from 'wagmi';
import { Blockies, useIsMobile } from '@templates/shared';

type CardItemProps = {
  header: React.ReactNode;
} & BoxProps;
const CardItem: React.FC<CardItemProps> = ({ header, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Heading size="xs" textTransform="uppercase">
        {header}
      </Heading>
      {children}
    </Box>
  );
};

export const Dashboard = () => {
  const isMobile = useIsMobile();
  const { isConnected, address } = useAccount();
  const { data: balance, isSuccess } = useBalance({ address });
  const { onCopy, hasCopied } = useClipboard(address ?? '');
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
    ) ?? '';

  useEffect(() => {
    if (isConnected) {
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
  }, [isConnected]);

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
                    {address && (
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
                  <SkeletonCircle isLoaded={isConnected} size="48px">
                    <Blockies address={address!} size={48} />
                  </SkeletonCircle>
                  {isConnected ? (
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
                  <SkeletonText isLoaded={!!balance} noOfLines={1}>
                    <Text>
                      {balance?.formatted} <b>{balance?.symbol}</b>
                    </Text>
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
