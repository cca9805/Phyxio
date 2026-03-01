export function sampleMovimiento2D({ x0=0, y0=0, vx0=0, vy0=0, ax=0, ay=0, tMax=10, tObs=0, n=320 } = {}) {
  const X0 = toFinite(x0, 0), Y0 = toFinite(y0, 0);
  const VX0 = toFinite(vx0, 0), VY0 = toFinite(vy0, 0);
  const AX = toFinite(ax, 0), AY = toFinite(ay, 0);
  const T = Math.max(0, toFinite(tMax, 10));
  const count = Math.max(2, Math.floor(toFinite(n, 320)));
  const dt = T / (count - 1 || 1);

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const tobs = clamp(toFinite(tObs, 0), 0, T);

  const xObs = X0 + VX0*tobs + 0.5*AX*tobs*tobs;
  const yObs = Y0 + VY0*tobs + 0.5*AY*tobs*tobs;
  const vxObs = VX0 + AX*tobs;
  const vyObs = VY0 + AY*tobs;

  const data = [];
  for (let i=0;i<count;i++){
    const t = i*dt;
    const x = X0 + VX0*t + 0.5*AX*t*t;
    const y = Y0 + VY0*t + 0.5*AY*t*t;
    const vx = VX0 + AX*t;
    const vy = VY0 + AY*t;
    data.push({ t, x, y_t: y, y, vx, vy });
  }
  return { data, xObs, yObs, vxObs, vyObs };
}

function toFinite(v, fallback){
  const n = typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
