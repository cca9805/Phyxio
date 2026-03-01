export function defaultParams() {
  return {
    L: 1.0,
    rho0: 1.0,
    alpha: 0.0,
    n: 300,
  };
}

export function rho(x, rho0, alpha) {
  return rho0 * (1 + alpha * x);
}

export function computeCM({ L, rho0, alpha, n }) {
  const dx = L / (n - 1);
  let M = 0;
  let num = 0;

  for (let i = 0; i < n; i++) {
    const x = i * dx;
    const r = rho(x, rho0, alpha);
    const dm = r * dx;
    M += dm;
    num += x * dm;
  }

  return num / M;
}

export function seriesDensity({ L, rho0, alpha, n }) {
  const dx = L / (n - 1);
  const data = [];

  for (let i = 0; i < n; i++) {
    const x = i * dx;
    data.push({
      x,
      rho: rho(x, rho0, alpha),
    });
  }

  return data;
}
