// engine/models/tiroHorizontal.js
export function sampleTiroHorizontal({
  x0 = 0,
  y0 = 10,
  v0 = 6,     // vx inicial
  g = 9.8,
  tMax = 3,
  n = 260,
  groundY = 0,
}) {
  const X0 = Number(x0) || 0;
  const Y0 = Number(y0) || 0;
  const V0 = Number(v0) || 0;
  const G = Number(g) || 9.8;

  const safeTMax = Math.max(0, Number(tMax) || 0);
  const count = Math.max(2, Number(n) || 260);

  // tiempo de impacto: y0 - 1/2 g t^2 = groundY  => t = sqrt(2(y0-ground)/g)
  let tImpact = NaN;
  if (G > 0 && Y0 >= groundY) {
    tImpact = Math.sqrt((2 * (Y0 - groundY)) / G);
  }

  const tEnd = Number.isFinite(tImpact) ? Math.min(safeTMax, tImpact) : safeTMax;
  const dt = tEnd / (count - 1 || 1);

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;

    const x = X0 + V0 * t;
    const y = Y0 - 0.5 * G * t * t;

    const vx = V0;
    const vy = -G * t;
    const v = Math.sqrt(vx * vx + vy * vy);

    data.push({
      t,
      x,
      y: Math.max(y, groundY),
      vx,
      vy,
      v,
      ax: 0,
      ay: -G,
    });

    if (y <= groundY && i > 0) break;
  }

  return { data, tImpact, tEnd };
}
