export function defaultParams() {
  return {
    // "observaciones" (marcadores) típicas
    Nobs: 60,
    fsMaxObs: 18,
    fkObs: 12,

    // rangos para barridos
    Nmax: 200,
    n: 240,

    // ángulo crítico (grados para UI)
    thetaCdeg: 20,
    thetaMaxDeg: 60,
    nTheta: 240,
  };
}

export function seriesFvsN(params = {}) {
  const Nmax = Math.max(1e-6, Number(params.Nmax ?? 200));
  const n = Math.max(30, Math.min(800, Number(params.n ?? 240)));

  const Nobs = Math.max(0, Number(params.Nobs ?? 60));
  const fsMaxObs = Math.max(0, Number(params.fsMaxObs ?? 18));
  const fkObs = Math.max(0, Number(params.fkObs ?? 12));

  const muS = Nobs > 0 ? fsMaxObs / Nobs : 0;
  const muK = Nobs > 0 ? fkObs / Nobs : 0;

  const data = [];
  for (let i = 0; i <= n; i++) {
    const N = (Nmax * i) / n;
    data.push({
      N,
      fsMaxLine: muS * N,
      fkLine: muK * N,
      muS,
      muK,
    });
  }
  return { data, muS, muK };
}

export function seriesMuFromTheta(params = {}) {
  const thetaMaxDeg = Math.max(0, Math.min(89.9, Number(params.thetaMaxDeg ?? 60)));
  const n = Math.max(30, Math.min(800, Number(params.nTheta ?? 240)));

  const data = [];
  for (let i = 0; i <= n; i++) {
    const thetaDeg = (thetaMaxDeg * i) / n;
    const theta = (thetaDeg * Math.PI) / 180;
    const muS = Math.tan(theta);
    data.push({ thetaDeg, muS });
  }
  return data;
}
