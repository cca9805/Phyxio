export function defaultParams() {
  return {
    W: 800,
    n: 4,
    dx_load: 0.3,
    nMax: 10,
  };
}

export function forceRequired({ W, n }) {
  const WW = Number(W);
  const nn = Number(n);
  if (!Number.isFinite(WW) || !Number.isFinite(nn) || nn <= 0) return NaN;
  return WW / nn;
}

export function pullDistance({ n, dx_load }) {
  const nn = Number(n);
  const dx = Number(dx_load);
  if (!Number.isFinite(nn) || !Number.isFinite(dx) || nn <= 0) return NaN;
  return nn * dx;
}

export function seriesForceVsN({ W, nMax }) {
  const WW = Number(W);
  const Nmax = Math.max(2, Math.floor(Number(nMax) || 10));
  const data = [];
  for (let n = 1; n <= Nmax; n++) {
    data.push({ n, F: WW / n, ratio: n });
  }
  return data;
}
