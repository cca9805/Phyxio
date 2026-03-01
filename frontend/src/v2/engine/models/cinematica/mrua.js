// engine/models/mrua.js
export function sampleMRUA({ x0 = 0, v0 = 0, a = 0, tMax = 10, n = 200 }) {
  const data = [];
  const safeTMax = Math.max(0, Number(tMax) || 0);
  const count = Math.max(2, Number(n) || 200);
  const dt = safeTMax / (count - 1 || 1);

  const X0 = Number(x0) || 0;
  const V0 = Number(v0) || 0;
  const A = Number(a) || 0;

  for (let i = 0; i < count; i++) {
    const t = i * dt;
    data.push({
      t,
      x: X0 + V0 * t + 0.5 * A * t * t,
      v: V0 + A * t,
      a: A,
    });
  }
  return data;
}
