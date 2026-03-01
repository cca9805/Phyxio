export function defaultParams() {
  return {
    k1: 200,
    k2: 300,
    xMin: 0,
    xMax: 0.2,
    n: 220,
    xObs: 0.08,

    m: 1.0,
    g: 9.81,
  };
}

export function keqParalelo(k1, k2) {
  const K1 = Number(k1), K2 = Number(k2);
  return (Number.isFinite(K1) ? K1 : 0) + (Number.isFinite(K2) ? K2 : 0);
}

export function keqSerie(k1, k2) {
  const K1 = Number(k1), K2 = Number(k2);
  if (!Number.isFinite(K1) || !Number.isFinite(K2)) return NaN;
  const den = K1 + K2;
  if (den === 0) return NaN;
  return (K1 * K2) / den;
}

export function seriesFvsX({ k1, k2, xMin, xMax, n }) {
  const kp = keqParalelo(k1, k2);
  const ks = keqSerie(k1, k2);

  const a = Number(xMin) || 0;
  const b = Number(xMax) || 0;
  const count = Math.max(2, Number(n) || 200);
  const dx = (b - a) / ((count - 1) || 1);

  const data = [];
  for (let i = 0; i < count; i++) {
    const x = a + i * dx;
    data.push({
      x,
      F_paralelo: kp * x,
      F_serie: Number.isFinite(ks) ? ks * x : NaN,
      kp,
      ks,
    });
  }
  return data;
}

export function xEqVertical({ m, g, keq }) {
  const M = Number(m) || 0;
  const G = Number(g) || 0;
  const K = Number(keq);
  if (!Number.isFinite(K) || K === 0) return NaN;
  return (M * G) / K;
}
