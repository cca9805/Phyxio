export function sampleEncuentroMRU({ xA0=0, xB0=0, vA=0, vB=0, dt=0, tMax=20, n=320 } = {}) {
  const XA0 = toFinite(xA0, 0), XB0 = toFinite(xB0, 0);
  const VA = toFinite(vA, 0), VB = toFinite(vB, 0);
  const DT = Math.max(0, toFinite(dt, 0));
  const T = Math.max(0, toFinite(tMax, 20));
  const count = Math.max(2, Math.floor(toFinite(n, 320)));
  const step = T / (count - 1 || 1);

  // Encuentro (t desde que sale A). B se mueve solo si t>=DT.
  // Resolver: XA0 + VA*t = XB0 + VB*(t - DT)  => t = (XB0 - XA0 - VB*DT)/(VA - VB)
  let tMeet = NaN;
  if (Math.abs(VA - VB) > 1e-12) {
    tMeet = (XB0 - XA0 - VB * DT) / (VA - VB);
    if (!(tMeet >= 0 && tMeet <= T && tMeet >= DT)) {
      // si cae fuera del intervalo o antes de la salida de B, lo consideramos no válido para el gráfico
      tMeet = NaN;
    }
  }

  const xMeet = Number.isFinite(tMeet) ? (XA0 + VA * tMeet) : NaN;

  const data = [];
  for (let i=0;i<count;i++){
    const t = i*step;
    const xA = XA0 + VA*t;
    const xB = (t >= DT) ? (XB0 + VB*(t - DT)) : XB0;
    data.push({ t, xA, xB });
  }
  return { data, tMeet, xMeet };
}

function toFinite(v, fallback){
  const n = typeof v === "number" ? v : Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
