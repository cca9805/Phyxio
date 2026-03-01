// /src/v2/engine/models/cinematica/cinematica-rotacional/rodadura-sin-deslizamiento.js
// Generadores de muestras para gráficas (Recharts).

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export function sampleRollingRelations({ R = 0.3, alpha = 1, thetaMin = 0, thetaMax = Math.PI * 6, n = 200 } = {}) {
  const radius = Number(R) || 0;
  const a = Number(alpha) || 0;
  const thMin = Number(thetaMin) || 0;
  const thMax = Number(thetaMax) || 0;
  const count = clamp(Number(n) || 200, 2, 5000);

  const data = [];
  const dth = (thMax - thMin) / ((count - 1) || 1);

  for (let i = 0; i < count; i++) {
    const theta = thMin + i * dth;
    const x = radius * theta;   // x = Rθ
    const acm = a * radius;     // a_cm = αR (constante si α constante)
    data.push({
      theta,
      x,
      acm,
      R: radius,
      alpha: a,
    });
  }
  return data;
}

export function samplePointSpeedsVsOmega({ R = 0.3, omegaMin = 0, omegaMax = 25, n = 200 } = {}) {
  const radius = Number(R) || 0;
  const wMin = Number(omegaMin) || 0;
  const wMax = Number(omegaMax) || 0;
  const count = clamp(Number(n) || 200, 2, 5000);

  const data = [];
  const dw = (wMax - wMin) / ((count - 1) || 1);

  for (let i = 0; i < count; i++) {
    const omega = wMin + i * dw;
    const vcm = omega * radius;
    const vcontact = 0;
    const vtop = 2 * vcm;

    data.push({
      omega,
      vcontact,
      vcm,
      vtop,
      R: radius,
    });
  }
  return data;
}

export default {
  sampleRollingRelations,
  samplePointSpeedsVsOmega,
};
