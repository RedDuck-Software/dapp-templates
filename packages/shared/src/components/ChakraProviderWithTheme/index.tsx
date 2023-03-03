import React from 'react';
import { ChakraProvider, ChakraProviderProps, theme } from '@chakra-ui/react';

export const ChakraProviderWithTheme: React.FC<
  Omit<ChakraProviderProps, 'theme'>
> = ({ children, ...props }) => {
  return (
    <ChakraProvider theme={theme} {...props}>
      {children}
    </ChakraProvider>
  );
};
