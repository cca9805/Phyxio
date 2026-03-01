// /src/v2/engine/models/cinematica/cinematica-rotacional/relacion-lineal-angular.js
// Generadores de muestras para gráficas (Recharts).

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function radToDeg(x) {
  return (Number(x) * 180) / Math.PI;
}

export function sampleArcVsAngle({ r = 0.3, thetaMin = 0, thetaMax = Math.PI * 2, n = 200 } = {}) {
  const R = Number(r) || 0;
  const thMin = Number(thetaMin) || 0;
  const thMax = Number(thetaMax) || 0;
  const count = clamp(Number(n) || 200, 2, 5000);

  const data = [];
  const dth = (thMax - thMin) / ((count - 1) || 1);

  for (let i = 0; i < count; i++) {
    const theta = thMin + i * dth;
    const s = R * theta;
    data.push({
      theta,
      thetaDeg: radToDeg(theta),
      s,
      r: R,
    });
  }
  return data;
}

export function sampleVAndAFromOmega({ r = 0.3, alpha = 1, omegaMin = 0, omegaMax = 20, n = 200 } = {}) {
  const R = Number(r) || 0;
  const a = Number(alpha) || 0;
  const wMin = Number(omegaMin) || 0;
  const wMax = Number(omegaMax) || 0;
  const count = clamp(Number(n) || 200, 2, 5000);

  const data = [];
  const dw = (wMax - wMin) / ((count - 1) || 1);

  for (let i = 0; i < count; i++) {
    const omega = wMin + i * dw;
    const vt = omega * R;
    const an = omega * omega * R;
    const at = a * R; // constante si α es constante
    data.push({
      omega,
      vt,
      an,
      at,
      r: R,
      alpha: a,
    });
  }
  return data;
}

export default {
  sampleArcVsAngle,
  sampleVAndAFromOmega,
};
