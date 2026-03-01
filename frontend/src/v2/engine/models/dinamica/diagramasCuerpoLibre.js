export function defaultParams() {
  return {
    m: 5,         // kg
    g: 9.81,      // m/s^2
    mu: 0.2,      // —
    Fapp: 0,      // N (fuerza aplicada horizontal)
    tMax: 6,      // s
    n: 240,
    tObs: 2,
  };
}

export function makeSeries(params = {}) {
  const m = Math.max(1e-9, Number(params.m ?? 5));
  const g = Number(params.g ?? 9.81);
  const mu = Math.max(0, Number(params.mu ?? 0.2));
  const Fapp = Number(params.Fapp ?? 0);

  const tMax = Number(params.tMax ?? 6);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  // Caso horizontal ideal
  const P = m * g;
  const N = P;

  // Rozamiento cinético simple (si hay tendencia a moverse, lo ilustramos como mu*N)
  const fk = mu * N;

  // Fuerza neta horizontal (modelo: rozamiento se opone al empuje)
  // Si Fapp=0, neto=0.
  const Fnetx = Fapp === 0 ? 0 : (Math.abs(Fapp) - fk) * Math.sign(Fapp);
  const ax = Fnetx / m;

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({
      t,
      P,
      N,
      fk,
      Fapp,
      Fnetx,
      ax,
    });
  }
  return data;
}
