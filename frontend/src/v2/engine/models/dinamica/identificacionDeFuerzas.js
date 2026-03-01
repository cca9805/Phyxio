export function defaultParams() {
  return {
    m: 5,
    g: 9.81,
    mu: 0.2,
    tMax: 6,
    n: 240,
    tObs: 2,
  };
}

export function makeSeries(params = {}) {
  const m = Math.max(1e-9, Number(params.m ?? 5));
  const g = Number(params.g ?? 9.81);
  const mu = Math.max(0, Number(params.mu ?? 0.2));

  const tMax = Number(params.tMax ?? 6);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  const P = m * g;
  const N = P;        // caso horizontal simple (sin otras fuerzas verticales)
  const fk = mu * N;

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({ t, P, N, fk });
  }
  return data;
}
