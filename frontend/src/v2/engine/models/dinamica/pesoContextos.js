export function defaultParams() {
  return {
    m: 1,        // kg
    g: 9.81,     // m/s^2
    tMax: 6,     // s
    n: 240,
    tObs: 2,
  };
}

export function makeSeries(params = {}) {
  const m = Math.max(1e-9, Number(params.m ?? 1));
  const g = Number(params.g ?? 9.81);

  const P = m * g;

  const tMax = Number(params.tMax ?? 6);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({ t, P, m, g });
  }
  return data;
}
