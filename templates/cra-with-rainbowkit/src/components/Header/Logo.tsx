import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';
import LogoImg from '../../assets/img/logo.svg';

export const Logo: React.FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => {
  return <Image src={LogoImg} alt="logo" {...props} />;
};
