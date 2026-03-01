export function defaultParams() {
  return {
    m: 70,
    rMin: 1,
    rMax: 30,
    v: 10,
    omega: 1.2,
    n: 200,
    rObs: 10,
  };
}

export function Fcf_v(m, v, r) {
  if (r === 0) return NaN;
  return m * v * v / r;
}

export function Fcf_omega(m, omega, r) {
  return m * omega * omega * r;
}

export function seriesFcf({ m, v, omega, rMin, rMax, n }) {
  const a = Number(rMin);
  const b = Number(rMax);
  const N = Math.max(20, Number(n) || 200);
  const dr = (b - a) / (N - 1);

  const data = [];
  for (let i = 0; i < N; i++) {
    const r = a + i * dr;
    data.push({
      r,
      F_v: Fcf_v(m, v, r),
      F_omega: Fcf_omega(m, omega, r),
    });
  }
  return data;
}
