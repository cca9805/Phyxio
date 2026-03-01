// engine/models/mru.js
export function sampleMRU({ x0 = 0, v = 1, tMax = 10, n = 200 }) {
  const data = [];
  const safeTMax = Math.max(0, Number(tMax) || 0);
  const count = Math.max(2, Number(n) || 200);
  const dt = safeTMax / (count - 1 || 1);

  const X0 = Number(x0) || 0;
  const V = Number(v) || 0;

  for (let i = 0; i < count; i++) {
    const t = i * dt;
    data.push({
      t,
      x: X0 + V * t,
      v: V,
      a: 0,
    });
  }
  return data;
}
