import React from 'react';

export type RenderIfProps = {
  condition: boolean;
} & React.PropsWithChildren;

export const RenderIf: React.FC<RenderIfProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};
