export function defaultParams() {
  return {
    Fx: 10,
    m: 2,
    tMax: 10,
    n: 240,
    tObs: 4,
    v0: 0,
    x0: 0,
  };
}

// Modelo: fuerza neta constante en 1D → a constante → MRUA
export function makeSeries(params = {}) {
  const Fx = Number(params.Fx ?? 0);
  const m = Number(params.m ?? 1);
  const a = m !== 0 ? Fx / m : 0;

  const v0 = Number(params.v0 ?? 0);
  const x0 = Number(params.x0 ?? 0);

  const tMax = Number(params.tMax ?? 10);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    const v = v0 + a * t;
    const x = x0 + v0 * t + 0.5 * a * t * t;
    data.push({ t, x, v, a, Fx, m });
  }
  return data;
}
