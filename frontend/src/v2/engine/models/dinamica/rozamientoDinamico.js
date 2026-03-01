export function defaultParams() {
  return {
    N: 100,        // N
    mu_k: 0.25,    // -
    v: 1,          // m/s (solo para contexto: movimiento)
    Nmax: 300,     // para barrido
    muMax: 1.0,    // para barrido

    nN: 240,
    nMu: 200,

    Nobs: 100,     // marcador
    muObs: 0.25,   // marcador
  };
}

// Barrido 1: f_k vs N (mu_k fijo)
export function seriesVsN(params = {}) {
  const mu_k = Math.max(0, Number(params.mu_k ?? 0.25));
  const Nmax = Math.max(1e-6, Number(params.Nmax ?? 300));
  const n = Math.max(30, Math.min(800, Number(params.nN ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const N = (Nmax * i) / n;
    const fk = mu_k * N;
    data.push({ N, fk, mu_k });
  }
  return data;
}

// Barrido 2: f_k vs mu_k (N fijo)
export function seriesVsMu(params = {}) {
  const N = Math.max(0, Number(params.N ?? 100));
  const muMax = Math.max(1e-6, Number(params.muMax ?? 1.0));
  const n = Math.max(30, Math.min(800, Number(params.nMu ?? 200)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const mu_k = (muMax * i) / n;
    const fk = mu_k * N;
    data.push({ mu_k, fk, N });
  }
  return data;
}
