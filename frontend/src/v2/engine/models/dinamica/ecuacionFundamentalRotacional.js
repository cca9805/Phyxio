export function defaultParams() {
  return {
    sum_tau: 3.0, // N·m
    I: 0.75,      // kg·m^2
  };
}

export function computeAlpha({ sum_tau, I }) {
  const T = Number(sum_tau);
  const In = Number(I);
  if (!Number.isFinite(T) || !Number.isFinite(In) || In === 0) return NaN;
  return T / In;
}
