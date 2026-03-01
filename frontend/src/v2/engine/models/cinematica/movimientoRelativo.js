// src/v2/engine/models/movimientoRelativo.js
//
// Movimiento relativo (Galileo):
// vAO = vAB + vBO  (vectorial; en 2D por componentes)
//
// Incluye muestreo 1D para posiciones: xA(t), xB(t), xRel(t)
// (ideal para tren/andén, etc.)

export function computeRelative2D({
  uAB = 0,
  wAB = 0,
  uBO = 0,
  wBO = 0,
} = {}) {
  const UAB = toFinite(uAB, 0);
  const WAB = toFinite(wAB, 0);
  const UBO = toFinite(uBO, 0);
  const WBO = toFinite(wBO, 0);

  const UAO = UAB + UBO;
  const WAO = WAB + WBO;

  const mag = (x, y) => Math.sqrt(x * x + y * y);

  return {
    uAB: UAB,
    wAB: WAB,
    uBO: UBO,
    wBO: WBO,
    uAO: UAO,
    wAO: WAO,
    vAB: mag(UAB, WAB),
    vBO: mag(UBO, WBO),
    vAO: mag(UAO, WAO),
  };
}

export function sampleRelative1D({
  xA0 = 0,
  xB0 = 0,
  vAB = 0,
  vBO = 0,
  tMax = 10,
  n = 220,
} = {}) {
  const XA0 = toFinite(xA0, 0);
  const XB0 = toFinite(xB0, 0);
  const VAB = toFinite(vAB, 0);
  const VBO = toFinite(vBO, 0);

  const VAO = VAB + VBO;

  const T = Math.max(0, toFinite(tMax, 10));
  const count = Math.max(2, Math.floor(toFinite(n, 220)));
  const dt = T / (count - 1 || 1);

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;
    const xA = XA0 + VAO * t;
    const xB = XB0 + VBO * t;
    const xRel = xA - xB; // posición de A vista por B (en 1D)

    data.push({ t, xA, xB, xRel, vAO: VAO, vBO: VBO, vAB: VAB });
  }

  return { data, vAO: VAO };
}

function toFinite(v, fallback) {
  const n =
    typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
