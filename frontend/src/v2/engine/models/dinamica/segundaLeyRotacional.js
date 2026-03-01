export function defaultParams() {
  return {
    tau: 2.0,     // N·m
    I: 0.50,      // kg·m^2
    F: 20,        // N
    m: 5,         // kg
  };
}

export function computeAlpha({ tau, I }) {
  const T = Number(tau);
  const In = Number(I);
  if (!Number.isFinite(T) || !Number.isFinite(In) || In === 0) return NaN;
  return T / In;
}

export function computeA({ F, m }) {
  const FF = Number(F);
  const mm = Number(m);
  if (!Number.isFinite(FF) || !Number.isFinite(mm) || mm === 0) return NaN;
  return FF / mm;
}
