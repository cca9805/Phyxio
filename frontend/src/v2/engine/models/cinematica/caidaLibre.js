// engine/models/caidaLibre.js
export function sampleCaidaLibre({ y0 = 10, v0 = 0, g = 9.8, tMax = 3, n = 250, groundY = 0 }) {
  const Y0 = Number(y0) || 0;
  const V0 = Number(v0) || 0;
  const G = Number(g) || 9.8;

  const safeTMax = Math.max(0, Number(tMax) || 0);
  const count = Math.max(2, Number(n) || 250);

  // tImpact: raíz positiva de y(t)=groundY
  // y = y0 + v0 t - 1/2 g t^2
  let tImpact = NaN;
  if (G > 0) {
    const A = 0.5 * G;
    const B = -V0;
    const C = -(Y0 - groundY);
    const disc = B * B - 4 * A * C; // v0^2 + 2g(y0-ground)
    if (disc >= 0) {
      const sqrt = Math.sqrt(disc);
      const t1 = (-B + sqrt) / (2 * A);
      const t2 = (-B - sqrt) / (2 * A);
      const candidates = [t1, t2].filter((t) => Number.isFinite(t) && t >= 0);
      tImpact = candidates.length ? Math.min(...candidates) : NaN;
    }
  }

  const tEnd = Number.isFinite(tImpact) ? Math.min(safeTMax, tImpact) : safeTMax;
  const dt = tEnd / (count - 1 || 1);

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;
    const y = Y0 + V0 * t - 0.5 * G * t * t;
    const v = V0 - G * t;
    const a = -G;

    data.push({ t, y: Math.max(y, groundY), v, a });

    if (y <= groundY && i > 0) break;
  }

  return { data, tImpact, tEnd };
}
