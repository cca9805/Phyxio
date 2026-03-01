// v2/engine/models/cinematica/cinematica-rotacional/magnitudes-angulares.js
// Generadores de muestras para gráficas (Recharts).

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function radToDeg(x) {
  return (Number(x) * 180) / Math.PI;
}

export function sampleUniformOmega({ theta0 = 0, omega = 1, tMin = 0, tMax = 10, n = 200 } = {}) {
  const th0 = Number(theta0) || 0;
  const w = Number(omega) || 0;
  const tmin = Number(tMin) || 0;
  const tmax = Number(tMax) || 0;
  const count = clamp(Number(n) || 200, 2, 5000);

  const data = [];
  const dt = (tmax - tmin) / ((count - 1) || 1);

  for (let i = 0; i < count; i++) {
    const t = tmin + i * dt;
    const theta = th0 + w * t;
    data.push({
      t,
      theta,
      thetaDeg: radToDeg(theta),
      theta0: th0,
      omega: w,
    });
  }
  return data;
}

export function sampleUniformAlpha({ theta0 = 0, omega0 = 1, alpha = 0.5, tMin = 0, tMax = 10, n = 200 } = {}) {
  const th0 = Number(theta0) || 0;
  const w0 = Number(omega0) || 0;
  const a = Number(alpha) || 0;
  const tmin = Number(tMin) || 0;
  const tmax = Number(tMax) || 0;
  const count = clamp(Number(n) || 200, 2, 5000);

  const data = [];
  const dt = (tmax - tmin) / ((count - 1) || 1);

  for (let i = 0; i < count; i++) {
    const t = tmin + i * dt;
    const omega = w0 + a * t;
    const theta = th0 + w0 * t + 0.5 * a * t * t;

    data.push({
      t,
      omega,
      alpha: a,
      theta,
      thetaDeg: radToDeg(theta),
      theta0: th0,
      omega0: w0,
    });
  }
  return data;
}

// Export por defecto opcional (por si algún import antiguo lo esperaba)
export default {
  sampleUniformOmega,
  sampleUniformAlpha,
};
