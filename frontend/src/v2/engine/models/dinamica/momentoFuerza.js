export function defaultParams() {
  return {
    F: 10,
    r: 0.4,
    theta: Math.PI / 2,
  };
}

export function computeTau({ F, r, theta }) {
  return r * F * Math.sin(theta);
}
