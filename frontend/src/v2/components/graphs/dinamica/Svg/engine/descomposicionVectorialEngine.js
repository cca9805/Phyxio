// frontend/src/v2/components/graphs/dinamica/engine/descomposicionVectorialEngine.js
export function getResolvedVector(params = {}) {
  const F = Number(params.F ?? 10);
  const theta = Number(params.theta ?? 30);
  const rad = (theta * Math.PI) / 180;

  const Fx = F * Math.cos(rad);
  const Fy = F * Math.sin(rad);

  return { F, theta, rad, Fx, Fy };
}

export function getSteps(params = {}) {
  const { Fx, Fy } = getResolvedVector(params);
  return [
    { id: "x", label: "Componente X", visible: ["Fx"], Fx, Fy: 0 },
    { id: "y", label: "Componente Y", visible: ["Fx", "Fy"], Fx, Fy },
    { id: "total", label: "Vector total", visible: ["Fx", "Fy", "F"], Fx, Fy },
  ];
}