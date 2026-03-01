export function defaultParams() {
  return {
    F: 10,
    thetaDeg: 30,
    tMax: 6,
    n: 240,
    tObs: 2,
  };
}

export function makeSeries(params = {}) {
  const F = Number(params.F ?? 10);
  const thetaDeg = Number(params.thetaDeg ?? 30);
  const theta = (thetaDeg * Math.PI) / 180;

  const Fx = F * Math.cos(theta);
  const Fy = F * Math.sin(theta);

  const tMax = Number(params.tMax ?? 6);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({ t, Fx, Fy, F });
  }
  return data;
}
