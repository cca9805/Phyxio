// engine/models/dinamica/peso.js
export function samplePeso({ g = 9.8, mMin = 0, mMax = 50, n = 200 }) {
  const data = [];
  const G = Number(g);
  const M_MIN = Math.max(0, Number(mMin) || 0);
  const M_MAX = Math.max(M_MIN, Number(mMax) || 0);

  const count = Math.max(2, Number(n) || 200);

  const dm = (M_MAX - M_MIN) / (count - 1 || 1);

  for (let i = 0; i < count; i++) {
    const m = M_MIN + i * dm;
    data.push({
      m,
      w: m * (Number.isFinite(G) ? G : 9.8),
    });
  }
  return data;
}
