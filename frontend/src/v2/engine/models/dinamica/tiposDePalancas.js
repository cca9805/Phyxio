export function defaultParams() {
  return {
    tipo: "PAR", // PAR | ARP | APR
    P: 60,       // N
    R: 200,      // N
    d_P: 0.6,    // m
    d_R: 0.2,    // m
  };
}

function asNum(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export function buildGeometryFromArms({ tipo, d_P, d_R }) {
  const dP = Math.max(0, asNum(d_P, 0));
  const dR = Math.max(0, asNum(d_R, 0));
  const eps = 0.2;
  const a = Math.max(dP, eps);
  const b = Math.max(dR, eps);

  if (tipo === "ARP") {
    const xA = 0;
    const xR = b;
    const xP = b + a;
    const L = xP;
    return { L, xA, xR, xP };
  }

  if (tipo === "APR") {
    const xA = 0;
    const xP = a;
    const xR = a + b;
    const L = xR;
    return { L, xA, xP, xR };
  }

  // PAR default
  const xP = 0;
  const xA = a;
  const xR = a + b;
  const L = xR;
  return { L, xP, xA, xR };
}

export function compute({ P, R, d_P, d_R }) {
  const _P = Math.max(0, asNum(P, 0));
  const _R = Math.max(0, asNum(R, 0));
  const _dP = Math.max(0, asNum(d_P, 0));
  const _dR = Math.max(0, asNum(d_R, 0));

  const MP = _P * _dP;
  const MR = _R * _dR;
  const deltaM = MR - MP;

  const P_eq = _dP > 0 ? (_R * _dR) / _dP : NaN;

  return { MP, MR, deltaM, P_eq };
}
