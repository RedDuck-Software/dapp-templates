import * as React from 'react';

export const useIsMounted = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => setMounted(true), []);

  return mounted;
};
