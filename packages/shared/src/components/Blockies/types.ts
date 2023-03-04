declare module '@download/blockies' {
  export function renderIcon(
    opts: {
      seed?: string;
      color?: string;
      bgcolor?: string;
      size?: number;
      scale?: number;
    },
    canvas: HTMLCanvasElement,
  ): void;
}
