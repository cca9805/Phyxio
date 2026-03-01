export function computeResultant({ Rx, Ry }) {
  const _Rx = Number(Rx);
  const _Ry = Number(Ry);
  const RxN = Number.isFinite(_Rx) ? _Rx : 0;
  const RyN = Number.isFinite(_Ry) ? _Ry : 0;

  const R = Math.sqrt(RxN * RxN + RyN * RyN);
  const theta = Math.atan2(RyN, RxN); // rad

  return { Rx: RxN, Ry: RyN, R, theta };
}

export function nearZero(x, eps = 1e-9) {
  return Math.abs(x) < eps;
}
