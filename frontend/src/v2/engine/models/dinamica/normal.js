// src/v2/engine/models/dinamica/normal.js
// Normal: N = m*g (horizontal) y N = m*g*cos(theta) (plano inclinado)

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export function sampleNormal({
  mode = "horizontal", // "horizontal" | "inclinado"
  g = 9.8,
  thetaRad = 0,
  mMin = 0,
  mMax = 50,
  n = 240,
}) {
  const data = [];

  const G = Number(g);
  const th = Number(thetaRad);

  const M_MIN = Math.max(0, Number(mMin) || 0);
  const M_MAX = Math.max(M_MIN, Number(mMax) || 0);
  const count = clamp(Math.round(Number(n) || 240), 10, 600);

  const dm = (M_MAX - M_MIN) / (count - 1 || 1);

  const k = mode === "inclinado" ? Math.cos(th) : 1; // factor multiplicativo
  const kk = Number.isFinite(k) ? k : 1;

  for (let i = 0; i < count; i++) {
    const m = M_MIN + i * dm;
    const N = m * (Number.isFinite(G) ? G : 9.8) * kk;
    data.push({
      m,
      N,
    });
  }

  return data;
}

// Curva N(theta) para masa fija (didáctico)
export function sampleNormalTheta({
  g = 9.8,
  m = 10,
  thetaMinRad = 0,
  thetaMaxRad = Math.PI / 2,
  n = 240,
}) {
  const data = [];
  const G = Number(g);
  const M = Number(m);

  const tMin = Number(thetaMinRad);
  const tMax = Number(thetaMaxRad);

  const count = Math.max(10, Math.min(600, Math.round(Number(n) || 240)));
  const dt = (tMax - tMin) / (count - 1 || 1);

  for (let i = 0; i < count; i++) {
    const theta = tMin + i * dt;
    const N = (Number.isFinite(M) ? M : 10) * (Number.isFinite(G) ? G : 9.8) * Math.cos(theta);
    data.push({ theta, N });
  }
  return data;
}
