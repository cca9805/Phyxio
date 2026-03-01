// v2/engine/models/dinamica/tension.js

export function defaultParams() {
  return {
    m: 1,
    g: 9.81,
    aMin: -5,
    aMax: 5,
    n: 240,
    T: 10,
    thetaMaxDeg: 90,
  };
}

export function sampleTensionVertical({ m = 1, g = 9.81, aMin = -5, aMax = 5, n = 200 } = {}) {
  const M = Number(m) || 0;
  const G = Number(g) || 0;
  const amin = Number.isFinite(Number(aMin)) ? Number(aMin) : -5;
  const amax = Number.isFinite(Number(aMax)) ? Number(aMax) : 5;
  const count = Math.max(2, Number(n) || 200);

  const data = [];
  const da = (amax - amin) / ((count - 1) || 1);
  for (let i = 0; i < count; i++) {
    const a = amin + i * da;
    const T = M * (G + a);
    data.push({ a, T, m: M, g: G });
  }
  return data;
}

export function sampleComponentes({ T = 10, thetaMin = 0, thetaMax = Math.PI / 2, n = 181 } = {}) {
  const TT = Number(T) || 0;
  const tmin = Number(thetaMin) || 0;
  const tmax = Number(thetaMax) || 0;
  const count = Math.max(2, Number(n) || 181);

  const data = [];
  const dth = (tmax - tmin) / ((count - 1) || 1);
  for (let i = 0; i < count; i++) {
    const theta = tmin + i * dth;
    const Tx = TT * Math.cos(theta);
    const Ty = TT * Math.sin(theta);
    data.push({ theta, Tx, Ty, T: TT });
  }
  return data;
}

export default {
  defaultParams,
  sampleTensionVertical,
  sampleComponentes,
};
