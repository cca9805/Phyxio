// v2/engine/models/cinematica/sistemasReferencia.js
// Serie simple para visualizar x(t) en S y x'(t) en S' (modelo 1D, v0 constante)

export function makeSeries(params = {}) {
  const x0 = Number(params.x0 ?? 0);
  const v0 = Number(params.v0 ?? 2);

  const xp0 = Number(params.xp0 ?? 0);
  const vp = Number(params.vp ?? 1);

  const tMax = Number(params.tMax ?? 10);
  const n = Math.max(20, Math.min(400, Number(params.n ?? 120)));

  const series = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    const xp = xp0 + vp * t;           // posición medida en S'
    const x = xp + x0 + v0 * t;        // transformación galileana
    series.push({ t, x, xp });
  }
  return series;
}

export function defaultParams() {
  return {
    x0: 100,   // m
    v0: 6,     // m/s (S' respecto a S)
    xp0: 0,    // m
    vp: 1.5,   // m/s (móvil respecto a S')
    tMax: 12,
    n: 120,
  };
}
