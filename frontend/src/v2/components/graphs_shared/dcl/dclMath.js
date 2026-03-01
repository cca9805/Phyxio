export function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}

export function rad2deg(rad) {
  return (rad * 180) / Math.PI;
}

export function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

export function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export function componentsFromPolar(F, thetaRad) {
  const fx = F * Math.cos(thetaRad);
  const fy = F * Math.sin(thetaRad);
  return { Fx: fx, Fy: fy };
}

/**
 * forces:
 *  - basic: { id, label, F, thetaDeg, active }
 *  - adv:   { id, label, F, thetaDeg, x, y, active }
 */
export function sumForces(forces) {
  let Rx = 0;
  let Ry = 0;

  for (const f of forces || []) {
    if (!f?.active) continue;
    const F = Math.max(0, toNum(f.F, 0));
    const thetaDeg = toNum(f.thetaDeg, 0);
    const theta = deg2rad(thetaDeg);
    const { Fx, Fy } = componentsFromPolar(F, theta);
    Rx += Fx;
    Ry += Fy;
  }

  const R = Math.sqrt(Rx * Rx + Ry * Ry);
  const thetaRad = Math.atan2(Ry, Rx);
  const thetaDeg = rad2deg(thetaRad);

  return { Rx, Ry, R, thetaRad, thetaDeg };
}

/**
 * Momento (2D, eje z) de una fuerza aplicada en (x,y) respecto a un punto (x0,y0)
 * τz = r x F = (x-x0)*Fy - (y-y0)*Fx
 * (solo para avanzado, por si luego conectas con ΣM=0)
 */
export function momentAbout(point, force) {
  const x0 = toNum(point?.x, 0);
  const y0 = toNum(point?.y, 0);

  const x = toNum(force?.x, 0);
  const y = toNum(force?.y, 0);

  const F = Math.max(0, toNum(force?.F, 0));
  const thetaDeg = toNum(force?.thetaDeg, 0);
  const theta = deg2rad(thetaDeg);
  const { Fx, Fy } = componentsFromPolar(F, theta);

  const rx = x - x0;
  const ry = y - y0;

  return rx * Fy - ry * Fx;
}

export function sumMoments(forces, aboutPoint = { x: 0, y: 0 }) {
  let Mz = 0;
  for (const f of forces || []) {
    if (!f?.active) continue;
    Mz += momentAbout(aboutPoint, f);
  }
  return Mz;
}
