import regl from "regl";
const glsl = require('glslify')

export const square = (gl2: WebGL2RenderingContext) => {
  const rgl = regl(gl2);
  rgl({
    vert: `
      precision mediump float;
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1);
      }
    `,
    frag: `
      precision mediump float;
      uniform vec4 color;
      void main() {
        gl_FragColor = color;
      }
    `,
    attributes: {
      position: rgl.buffer([
        -0.5,  0.5, 0,
        -0.5, -0.5, 0,
         0.5, -0.5, 0,
         0.5, 0.5, 0,
      ]),
    },
    elements: [0, 1, 2, 2, 3, 0],

    uniforms: {
      color: [1, 0, 0, 1]
    },
    count: 4
  });

  rgl.frame(() => {
    rgl.clear({
      color: [0, 0, 0, 0],
      depth: 1
    })
  })
};

