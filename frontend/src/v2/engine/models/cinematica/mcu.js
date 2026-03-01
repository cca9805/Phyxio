// src/v2/engine/models/mcu.js
//
// MCU: ω constante
// Convención:
// - θ en radianes
// - ω puede ser + (antihorario) o - (horario)
// - Centro de la circunferencia: (cx, cy)
// - Posición: x = cx + R cosθ, y = cy + R sinθ
//
// Devuelve: { data, v, ac }
// data: [{t, theta, x, y, omega, alpha, v, at, ac, ax, ay}]

export function sampleMCU({
  cx = 0,
  cy = 0,
  R = 1,
  theta0 = 0,
  omega = 1,
  tMax = 10,
  n = 320,
} = {}) {
  const CX = toFinite(cx, 0);
  const CY = toFinite(cy, 0);
  const r = Math.max(0, toFinite(R, 1));
  const th0 = toFinite(theta0, 0);
  const w = toFinite(omega, 1);
  const T = Math.max(0, toFinite(tMax, 10));
  const count = Math.max(2, Math.floor(toFinite(n, 320)));

  const dt = T / (count - 1 || 1);

  const v = Math.abs(w) * r;     // rapidez tangencial
  const acMag = w * w * r;       // centrípeta (magnitud), siempre >= 0

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;
    const theta = th0 + w * t;

    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    const x = CX + r * cos;
    const y = CY + r * sin;

    // vectores:
    // a = -ω² r (cosθ, sinθ)  (hacia el centro)
    const ax = -w * w * r * cos;
    const ay = -w * w * r * sin;

    // ac (magnitud) y at (magnitud tangencial)
    const ac = acMag;
    const at = 0;

    data.push({
      t,
      theta,
      x,
      y,
      omega: w,
      alpha: 0,
      v,
      at,
      ac,
      ax,
      ay,
    });
  }

  return { data, v, ac: acMag };
}

function toFinite(v, fallback) {
  const n =
    typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

