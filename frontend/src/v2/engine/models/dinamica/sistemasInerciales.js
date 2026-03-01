export function defaultParams() {
  return {
    F: 0,
    m: 1,
    tMax: 6,
    n: 240,
  };
}

export function makeSeries(params = {}) {
  const F = Number(params.F ?? 0);
  const m = Math.max(1e-6, Number(params.m ?? 1));
  const a = F / m;

  const tMax = Number(params.tMax ?? 6);
  const n = Number(params.n ?? 240);

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({
      t,
      v: a * t,
      a,
    });
  }
  return data;
}
