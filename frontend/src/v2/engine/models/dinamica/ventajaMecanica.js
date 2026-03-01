export function computeVM({ P, R, d_P, d_R }) {
  const _P = Math.max(0, Number(P));
  const _R = Math.max(0, Number(R));
  const _dP = Math.max(0, Number(d_P));
  const _dR = Math.max(0, Number(d_R));

  const VM_def = _P > 0 ? _R / _P : NaN;
  const VM_brazos = _dR > 0 ? _dP / _dR : NaN;

  const P_eq = _dP > 0 ? (_R * _dR) / _dP : NaN;

  return { VM_def, VM_brazos, P_eq };
}

export function buildSeriesVM({ d_R }, n = 201) {
  const _dR = Math.max(1e-9, Number(d_R));
  const N = Math.max(60, Math.min(800, Math.round(n)));

  // Curva VM = dP/dR variando dP
  const dPmax = 8 * _dR; // rango útil
  const data = [];
  for (let i = 0; i < N; i++) {
    const d_P = (dPmax * i) / (N - 1);
    const VM = d_P / _dR;
    data.push({ d_P, VM, d_R: _dR });
  }
  return data;
}
