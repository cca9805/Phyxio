export function sampleTiroVertical({ y0 = 0, v0 = 10, g = 9.8, tMax = 6, n = 320 } = {}) {
  const Y0 = toFinite(y0, 0);
  const V0 = toFinite(v0, 10);
  const G = Math.max(0.0001, toFinite(g, 9.8));
  const T = Math.max(0, toFinite(tMax, 6));
  const count = Math.max(2, Math.floor(toFinite(n, 320)));
  const dt = T / (count - 1 || 1);

  const tPeak = V0 > 0 ? Math.min(T, V0 / G) : 0;
  const yPeak = Y0 + V0 * tPeak - 0.5 * G * tPeak * tPeak;

  const data = [];
  for (let i = 0; i < count; i++) {
    const t = i * dt;
    const y = Y0 + V0 * t - 0.5 * G * t * t;
    const v = V0 - G * t;
    const a = -G;
    data.push({ t, y, v, a });
  }
  return { data, tPeak, yPeak };
}

function toFinite(v, fallback) {
  const n = typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
