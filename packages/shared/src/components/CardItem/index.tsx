import React from 'react';
import { Box, BoxProps, Heading } from '@chakra-ui/react';

type CardItemProps = {
  header: React.ReactNode;
} & BoxProps;
export const CardItem: React.FC<CardItemProps> = ({
  header,
  children,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Heading size="xs" textTransform="uppercase">
        {header}
      </Heading>
      {children}
    </Box>
  );
};
