// v2/engine/models/dinamica/rozamiento.js
// Modelo simple de fricción de Coulomb para gráficos.

export function sampleRozamiento({ mu_s = 0.4, mu_k = 0.3, Nmax = 200, n = 200 } = {}) {
  const ms = Math.max(0, Number(mu_s) || 0);
  const mk = Math.max(0, Number(mu_k) || 0);
  const NMAX = Math.max(0, Number(Nmax) || 0);
  const count = Math.max(2, Number(n) || 200);

  const data = [];
  const dN = NMAX / (count - 1 || 1);

  for (let i = 0; i < count; i++) {
    const N = i * dN;
    data.push({
      N,
      Fr_max: ms * N,
      Fr_k: mk * N,
      mu_s: ms,
      mu_k: mk,
    });
  }
  return data;
}

export function sampleTrabajoRozamiento({ mu_k = 0.3, N = 100, dMax = 20, n = 200 } = {}) {
  const mk = Math.max(0, Number(mu_k) || 0);
  const NN = Math.max(0, Number(N) || 0);
  const DMAX = Math.max(0, Number(dMax) || 0);
  const count = Math.max(2, Number(n) || 200);

  const data = [];
  const dd = DMAX / (count - 1 || 1);
  const Fr_k = mk * NN;

  for (let i = 0; i < count; i++) {
    const d = i * dd;
    data.push({
      d,
      Wf: -Fr_k * d,
      Fr_k,
      mu_k: mk,
      N: NN,
    });
  }
  return data;
}
