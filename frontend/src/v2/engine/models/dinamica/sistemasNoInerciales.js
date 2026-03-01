export function defaultParams() {
  return {
    m: 2,
    aref: 2,  // m/s^2 (aceleración del marco)
    tMax: 6,
    n: 240,
    tObs: 2,
  };
}

export function makeSeries(params = {}) {
  const m = Math.max(1e-9, Number(params.m ?? 2));
  const aref = Number(params.aref ?? 0);

  const tMax = Number(params.tMax ?? 6);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  const Ff = -m * aref;

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({
      t,
      aref,
      Ff,
    });
  }
  return data;
}
