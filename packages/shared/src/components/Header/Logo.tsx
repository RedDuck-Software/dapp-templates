import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

export const Logo: React.FC<Omit<ImageProps, 'alt'>> = ({ src, ...props }) => {
  return <Image src={src} alt="logo" {...props} />;
};
