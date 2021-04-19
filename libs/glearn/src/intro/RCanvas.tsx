import React, { useEffect, useRef } from "react";
import regl from 'regl';

export interface RCanvasProps {
  border?: string;
  width?: string;
  height?: string;
  margin?: string;
  error?: string;
  glColors?: [number, number, number, number]
}

const defaultGl = (gl2: WebGL2RenderingContext, glColor: [number, number, number, number]) => {
  const reGl = regl(gl2);
  reGl.frame(() => {
    reGl.clear({
      color: glColor
    })
  })

  return reGl({
    vert: `
    precision mediump float;
    void main() {
    }
    `,
    frag: `
    precision mediump float;
    void main() {

    }
    `,
    count: 0
  });
}

export const RCanvas: React.FC<RCanvasProps> = ({
  border = 'none',
  width = '100%',
  height = '100%',
  margin = '10px',
  error = 'Your browser does not support the HTML5 canvas element.',
  glColors = [0.2, 0.8, 0.2, 1.0],
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvasElem = canvasRef.current as HTMLCanvasElement;
    const context = canvasElem.getContext("webgl2");
    if (!context)
      throw Error('Unable to get WebGL2 context')
    const reGl = defaultGl(context, glColors);
    reGl()
    // context?.clearColor(...glColors);
    // context?.clear(context.COLOR_BUFFER_BIT);
    // context?.viewport(0, 0, 0, 0);
  })
  return (
    <>
      <canvas 
        ref={canvasRef}
        className={'rcanvas'}
        style={{ border, width, height, margin }}
      >
        {error}
      </canvas>
    </>
  );
};
