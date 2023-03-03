import { useBreakpointValue } from '@chakra-ui/react';

export const useIsMobile = (): boolean =>
  useBreakpointValue([true, true, false]) ?? true;
