// src/v2/components/graphs/_base/dclGeometry.js
export function polarToXY(r, deg) {
  const a = (deg * Math.PI) / 180;
  return { x: r * Math.cos(a), y: r * Math.sin(a) };
}
