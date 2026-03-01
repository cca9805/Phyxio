// src/v2/engine/models/tiroParabolico.js
//
// Convención:
// - eje x horizontal, eje y vertical (positivo hacia arriba)
// - gravedad g positiva como magnitud, aceleración vertical = -g
//
// Entrada:
// - x0, y0: posición inicial
// - v0, theta: velocidad inicial y ángulo (theta en RADIANES)
// - g: gravedad (positiva)
// - tMax: tiempo máximo de dibujo
// - groundY: altura del suelo (0 por defecto)
// - n: número de muestras
//
// Salida:
// - data: [{t,x,y,vx,vy,v,ax,ay}]
// - tImpact, tEnd, xImpact, R, tPeak, yPeak
//
export function sampleTiroParabolico({
  x0 = 0,
  y0 = 10,
  v0 = 10,
  theta = Math.PI / 4,
  g = 9.8,
  tMax = 5,
  n = 320,
  groundY = 0,

  // Opcional: si algún día quieres pasar componentes directamente
  vx0,
  vy0,
} = {}) {
  const X0 = toFiniteNumber(x0, 0);
  const Y0 = toFiniteNumber(y0, 0);
  const V0 = toFiniteNumber(v0, 0);
  const TH = toFiniteNumber(theta, Math.PI / 4);
  const G = toFiniteNumber(g, 9.8);

  const safeTMax = Math.max(0, toFiniteNumber(tMax, 0));
  const count = Math.max(2, toFiniteNumber(n, 320));

  // Componentes iniciales
  const VX0 = Number.isFinite(vx0) ? Number(vx0) : V0 * Math.cos(TH);
  const VY0 = Number.isFinite(vy0) ? Number(vy0) : V0 * Math.sin(TH);

  // Tiempo de impacto: y(t) = groundY
  // y = y0 + vy0 t - 0.5 g t^2
  let tImpact = NaN;
  if (G > 0) {
    const A = 0.5 * G;
    const B = -VY0;
    const C = -(Y0 - groundY);
    const disc = B * B - 4 * A * C; // vy0^2 + 2g(y0-ground)
    if (disc >= 0) {
      const s = Math.sqrt(disc);
      const t1 = (-B + s) / (2 * A);
      const t2 = (-B - s) / (2 * A);
      const candidates = [t1, t2].filter((t) => Number.isFinite(t) && t >= 0);
      tImpact = candidates.length ? Math.min(...candidates) : NaN;
    }
  }

  const tEnd = Number.isFinite(tImpact) ? Math.min(safeTMax, tImpact) : safeTMax;
  const dt = tEnd / (count - 1 || 1);

  // Pico (altura máxima), si existe
  let tPeak = NaN;
  let yPeak = NaN;
  if (G > 0 && VY0 > 0) {
    tPeak = VY0 / G;
    yPeak = Y0 + (VY0 * VY0) / (2 * G);
  }

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;

    const x = X0 + VX0 * t;
    const y = Y0 + VY0 * t - 0.5 * G * t * t;

    const vx = VX0;
    const vy = VY0 - G * t;
    const v = Math.sqrt(vx * vx + vy * vy);

    data.push({
      t,
      x,
      y: Math.max(y, groundY),
      vx,
      vy,
      v,
      ax: 0,
      ay: -G,
    });

    // corta si toca suelo (por robustez numérica)
    if (y <= groundY && i > 0) break;
  }

  const xImpact = Number.isFinite(tImpact) ? X0 + VX0 * tImpact : NaN;
  const R = Number.isFinite(xImpact) ? xImpact - X0 : NaN;

  return { data, tImpact, tEnd, xImpact, R, tPeak, yPeak, vx0: VX0, vy0: VY0 };
}

function toFiniteNumber(v, fallback) {
  const n = typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
