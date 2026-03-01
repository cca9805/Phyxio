export function defaultParams() {
  return {
    m: 5,
    g: 9.81,

    // ángulo del plano (entrada humana en grados para el modo experimento)
    thetaDeg: 30,

    // barridos para gráficas
    thetaMaxDeg: 80,
    mMax: 20,

    nTheta: 240,
    nM: 200,

    // selector visual (marcador)
    thetaObsDeg: 30,
    mObs: 5,
  };
}

export function thetaSeries(params = {}) {
  const m = Math.max(1e-9, Number(params.m ?? 5));
  const g = Number(params.g ?? 9.81);

  const thetaMaxDeg = Math.max(0, Math.min(89.9, Number(params.thetaMaxDeg ?? 80)));
  const n = Math.max(30, Math.min(800, Number(params.nTheta ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const thetaDeg = (thetaMaxDeg * i) / n;
    const theta = (thetaDeg * Math.PI) / 180;
    const N = m * g * Math.cos(theta);
    data.push({ thetaDeg, N, m, g });
  }
  return data;
}

export function massSeries(params = {}) {
  const g = Number(params.g ?? 9.81);
  const thetaDeg = Number(params.thetaDeg ?? 30);
  const theta = (thetaDeg * Math.PI) / 180;

  const mMax = Math.max(0.1, Number(params.mMax ?? 20));
  const n = Math.max(30, Math.min(800, Number(params.nM ?? 200)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const m = (mMax * i) / n;
    const N = m * g * Math.cos(theta);
    data.push({ m, N, g, thetaDeg });
  }
  return data;
}
