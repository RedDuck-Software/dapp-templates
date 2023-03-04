import React, { useEffect, useRef, useState } from 'react';
import './types';
import { renderIcon } from '@download/blockies';
import { isAddress } from '@ethersproject/address';
import { Image } from '@chakra-ui/react';

export type BlockiesProps = {
  address: string;
  size: number;
};

export const Blockies: React.FC<BlockiesProps> = ({ size, address }) => {
  const [dataUrl, setDataUrl] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && isAddress(address)) {
      const canvas = canvasRef.current;
      renderIcon({ seed: address.toLowerCase(), size: 8, scale: size }, canvas);
      if (canvas) {
        const updatedDataUrl = canvas.toDataURL();
        if (updatedDataUrl !== dataUrl) {
          setDataUrl(updatedDataUrl);
        }
      }
    }
  }, [address]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Image
        src={dataUrl}
        height={`${size}px`}
        width={`${size}px`}
        rounded="full"
        alt={address}
      />
    </>
  );
};
