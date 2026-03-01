export function defaultParams() {
  return {
    Fx: 0,
    Fy: 0,
    // demo cinemática consecuencia (1D):
    vx: 4,
    x0: 0,
    tMax: 10,
    n: 200,
    tObs: 4,
  };
}

export function makeSeries(params = {}) {
  const Fx = Number(params.Fx ?? 0);
  const Fy = Number(params.Fy ?? 0);

  // Para visualizar, hacemos:
  // - si Fx=0 -> ax=0 (modelo "primera ley" en marco inercial)
  // - vx constante
  const vx = Number(params.vx ?? 0);
  const x0 = Number(params.x0 ?? 0);

  const tMax = Number(params.tMax ?? 10);
  const n = Math.max(20, Math.min(600, Number(params.n ?? 200)));

  const ax = 0; // consecuencia ideal de ΣF=0 (en este leaf)
  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    const x = x0 + vx * t; // MRU (consecuencia)
    const v = vx;
    data.push({ t, x, v, Fx, Fy, ax });
  }
  return data;
}
