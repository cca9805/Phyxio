// src/v2/engine/models/mcua.js
//
// MCUA: α constante
// ω(t) = ω0 + α t
// θ(t) = θ0 + ω0 t + 0.5 α t^2
//
// Centro: (cx, cy), radio R constante
//
// Devuelve: { data, tEnd }
// data: [{t, theta, x, y, omega, alpha, v, at, ac, ax, ay}]

export function sampleMCUA({
  cx = 0,
  cy = 0,
  R = 1,
  theta0 = 0,
  omega0 = 0,
  alpha = 0.5,
  tMax = 10,
  n = 320,
} = {}) {
  const CX = toFinite(cx, 0);
  const CY = toFinite(cy, 0);
  const r = Math.max(0, toFinite(R, 1));
  const th0 = toFinite(theta0, 0);
  const w0 = toFinite(omega0, 0);
  const a = toFinite(alpha, 0);
  const T = Math.max(0, toFinite(tMax, 10));
  const count = Math.max(2, Math.floor(toFinite(n, 320)));
  const dt = T / (count - 1 || 1);

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;

    const omega = w0 + a * t;
    const theta = th0 + w0 * t + 0.5 * a * t * t;

    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    const x = CX + r * cos;
    const y = CY + r * sin;

    // magnitudes lineales
    const v = Math.abs(omega) * r;
    const at = Math.abs(a) * r;         // magnitud tangencial (constante)
    const ac = omega * omega * r;       // magnitud centrípeta (cambia con t)

    // vector aceleración: a = a_t * t_hat + a_c * (-r_hat)
    // t_hat = (-sinθ, cosθ)
    // r_hat = (cosθ, sinθ)
    // componente tangencial vectorial: (α r) * t_hat  (con signo de α)
    const aTx = (a * r) * (-sin);
    const aTy = (a * r) * (cos);

    // componente centrípeta vectorial: -(ω² r) * r_hat
    const aCx = -(omega * omega * r) * (cos);
    const aCy = -(omega * omega * r) * (sin);

    const ax = aTx + aCx;
    const ay = aTy + aCy;

    data.push({
      t,
      theta,
      x,
      y,
      omega,
      alpha: a,
      v,
      at,
      ac,
      ax,
      ay,
    });
  }

  return { data, tEnd: T };
}

function toFinite(v, fallback) {
  const n =
    typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
