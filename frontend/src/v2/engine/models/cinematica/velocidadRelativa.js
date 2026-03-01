export function defaultParams() {
  return { vAB: 1.5, vBC: 20, tMax: 10, n: 240 };
}

export function makeSeries(params = {}) {
  const vAB = Number(params.vAB ?? 0);
  const vBC = Number(params.vBC ?? 0);
  const vAC = vAB + vBC;

  const tMax = Number(params.tMax ?? 10);
  const n = Math.max(20, Math.min(600, Number(params.n ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({
      t,
      xAB: vAB * t,
      xBC: vBC * t,
      xAC: vAC * t,
    });
  }
  return data;
}
