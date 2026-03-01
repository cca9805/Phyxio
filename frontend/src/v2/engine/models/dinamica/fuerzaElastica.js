// v2/engine/models/dinamica/fuerzaElastica.js
// Modelo de muelle ideal (Ley de Hooke) para gráficos.
// Convención: x>0 (estiramiento), x<0 (compresión). Fuerza elástica: F = -k·x

export function sampleFuerzaElastica({ k = 100, xMax = 0.2, n = 200 } = {}) {
  const K = Number(k) || 0;
  const XMAX = Math.max(0, Number(xMax) || 0);
  const count = Math.max(2, Number(n) || 200);

  const data = [];
  const xMin = -XMAX;
  const dx = (XMAX - xMin) / (count - 1 || 1);

  for (let i = 0; i < count; i++) {
    const x = xMin + i * dx;
    const F = -K * x;
    const Fmod = Math.abs(F);
    const Ee = 0.5 * K * x * x;
    data.push({ x, F, Fmod, Ee, k: K });
  }
  return data;
}
