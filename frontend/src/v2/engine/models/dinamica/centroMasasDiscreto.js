export function defaultParams() {
  return {
    // 1D (2 masas)
    m1: 2,
    x1: 0,
    m2: 6,
    x2: 4,

    // 2D (3 masas)
    m3: 3,
    x3: 2,
    y1: 0,
    y2: 2,
    y3: 1,

    // y para 2D, reutilizamos x1,x2 y definimos y1,y2 arriba
    n: 200,
  };
}

export function xcm2({ m1, x1, m2, x2 }) {
  const M = Number(m1) + Number(m2);
  if (!Number.isFinite(M) || M === 0) return NaN;
  return (Number(m1) * Number(x1) + Number(m2) * Number(x2)) / M;
}

export function xcm3({ m1, x1, m2, x2, m3, x3 }) {
  const M = Number(m1) + Number(m2) + Number(m3);
  if (!Number.isFinite(M) || M === 0) return NaN;
  return (Number(m1) * Number(x1) + Number(m2) * Number(x2) + Number(m3) * Number(x3)) / M;
}

export function ycm3({ m1, y1, m2, y2, m3, y3 }) {
  const M = Number(m1) + Number(m2) + Number(m3);
  if (!Number.isFinite(M) || M === 0) return NaN;
  return (Number(m1) * Number(y1) + Number(m2) * Number(y2) + Number(m3) * Number(y3)) / M;
}

export function seriesXcmVsX2({ m1, x1, m2, x2Min, x2Max, n }) {
  const a = Number(x2Min);
  const b = Number(x2Max);
  const N = Math.max(50, Number(n) || 200);
  const dx = (b - a) / (N - 1);

  const data = [];
  for (let i = 0; i < N; i++) {
    const x2 = a + i * dx;
    const xcm = xcm2({ m1, x1, m2, x2 });
    data.push({ x2, xcm });
  }
  return data;
}
