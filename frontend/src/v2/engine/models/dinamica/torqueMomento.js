// src/v2/engine/models/dinamica/torqueMomento.js

export function defaultParams() {
  return {
    F: 20,                 // N
    r: 0.35,               // m
    theta: Math.PI / 2,    // rad
  };
}

/**
 * Torque (módulo) a partir del ángulo entre r y F:
 * τ = r · F · sin(theta)
 */
export function computeTau({ F, r, theta }) {
  const FF = Number(F);
  const rr = Number(r);
  const th = Number(theta);

  if (!Number.isFinite(FF) || !Number.isFinite(rr) || !Number.isFinite(th)) return NaN;
  return rr * FF * Math.sin(th);
}

/**
 * Brazo efectivo:
 * d = r · sin(theta)
 */
export function computeD({ r, theta }) {
  const rr = Number(r);
  const th = Number(theta);

  if (!Number.isFinite(rr) || !Number.isFinite(th)) return NaN;
  return rr * Math.sin(th);
}
