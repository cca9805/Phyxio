export function defaultParams() {
  return {
    N: 100,      // N
    mu_s: 0.4,   // -
    Fmax: 120,   // N (rango del eje x)
    n: 240,
    Fobs: 30,    // N (marcador)
  };
}

export function makeSeries(params = {}) {
  const N = Math.max(0, Number(params.N ?? 100));
  const mu_s = Math.max(0, Number(params.mu_s ?? 0.4));
  const fsMax = mu_s * N;

  const Fmax = Math.max(1e-6, Number(params.Fmax ?? 120));
  const n = Math.max(30, Math.min(800, Number(params.n ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const F = (Fmax * i) / n;
    const fs = Math.min(F, fsMax);
    const regime = F <= fsMax ? 0 : 1; // 0: estático (aguanta), 1: supera umbral (empieza deslizamiento)
    data.push({ F, fs, fsMax, N, mu_s, regime });
  }
  return data;
}
