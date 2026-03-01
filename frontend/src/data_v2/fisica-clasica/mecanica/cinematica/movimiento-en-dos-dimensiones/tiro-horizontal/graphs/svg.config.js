export default {
  id: "tiro-horizontal",
  title: "Tiro horizontal",
  description: "MRU en x y caída en y. Se muestra trayectoria y posición actual.",

  frame: {
    viewBox: { xMin: 0, xMax: 20, yMin: 0, yMax: 12 },
    bounds: { floorY: 0, behavior: "clamp", hideOutside: true },
  },

  params: {
    defaults: { y0: 10, v0: 8, g: 9.81, t: 0.9 },
    schema: [
      { key: "y0", label: "Altura inicial", type: "number", min: 0, max: 12, step: 0.1, unit: "m" },
      { key: "v0", label: "Velocidad horizontal", type: "number", min: 0, max: 20, step: 0.1, unit: "m/s" },
      { key: "t", label: "Tiempo", type: "range", min: 0, max: 2, step: 0.01, unit: "s" },
    ],
    sanitize: (p) => ({
      ...p,
      y0: Math.max(0, Number(p.y0) || 0),
      v0: Math.max(0, Number(p.v0) || 0),
      t: Math.max(0, Number(p.t) || 0),
      g: Math.max(0, Number(p.g) || 9.81),
    }),
  },

  objects: [
    { type: "ground", shade: true },

    {
      type: "trajectory",
      points: ({ params }) => {
        const pts = [];
        const steps = 40;
        for (let i = 0; i <= steps; i++) {
          const tt = (params.t * i) / steps;
          pts.push({
            x: params.v0 * tt,
            y: params.y0 - 0.5 * params.g * tt ** 2,
          });
        }
        return pts;
      },
      props: { opacity: 0.25 },
    },

    {
      type: "mass",
      x: ({ params }) => params.v0 * params.t,
      y: ({ params }) => params.y0 - 0.5 * params.g * params.t ** 2,
      r: 0.22,
    },
  ],
};
