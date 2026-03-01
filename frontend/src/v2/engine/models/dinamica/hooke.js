export function defaultParams() {
  return {
    k: 200,
    xMin: -0.10,
    xMax: 0.10,
    n: 240,

    m: 1,
    g: 9.81,

    xObs: 0.05,
    kObs: 200,
  };
}

export function seriesFvsX({ k = 200, xMin = -0.1, xMax = 0.1, n = 200 } = {}) {
  const K = Number(k) || 0;
  const a = Number(xMin) || 0;
  const b = Number(xMax) || 0;
  const count = Math.max(2, Number(n) || 200);

  const data = [];
  const dx = (b - a) / ((count - 1) || 1);
  for (let i = 0; i < count; i++) {
    const x = a + i * dx;
    const Fx = -K * x;          // con signo (restauradora)
    const F = Math.abs(Fx);     // módulo
    data.push({ x, Fx, F, k: K });
  }
  return data;
}

export function equilibriumX({ m = 1, g = 9.81, k = 200 } = {}) {
  const M = Number(m) || 0;
  const G = Number(g) || 0;
  const K = Number(k) || 0;
  if (!Number.isFinite(K) || K === 0) return NaN;
  return (M * G) / K;
}
