// src/v2/engine/models/dinamica/marcosNoInerciales/conceptoFuerzasFicticias.js

export function defaultParams() {
  return {
    m: 10,        // kg
    a_marco: 2,   // m/s^2 (aceleración del marco respecto al inercial)
    x0: 0,        // m (en el marco no inercial)
    v0: 0,        // m/s
    tMax: 6,      // s
    nPts: 200,    // puntos serie
  };
}

// Fuerza ficticia traslacional (1D): F_fict = -m a_marco
export function fictitiousForce({ m, a_marco }) {
  return -m * a_marco;
}

// Aceleración relativa observada en el marco no inercial si no hay fuerzas reales en x:
// a' = -a_marco
export function relativeAcceleration({ a_marco }) {
  return -a_marco;
}

// Serie x'(t), v'(t) en 1D
export function seriesXandV({ x0, v0, a_rel, tMax, nPts = 200 }) {
  const N = Math.max(30, Math.round(nPts));
  const out = [];
  for (let i = 0; i <= N; i++) {
    const t = (tMax * i) / N;
    const x = x0 + v0 * t + 0.5 * a_rel * t * t;
    const v = v0 + a_rel * t;
    out.push({ t, x, v });
  }
  return out;
}
