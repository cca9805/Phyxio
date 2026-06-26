// frontend/src/v2/components/graphs/dinamica/engine/descomposicionVectorialInterpretation.js
import { getResolvedVector } from "./descomposicionVectorialEngine";

export function interpretVector(params = {}, lang = "es") {
  const { Fx, Fy, theta } = getResolvedVector(params);

  if (theta > 60) {
    return lang === "es"
      ? "Predomina la componente vertical."
      : "The vertical component dominates.";
  }

  if (theta < 30) {
    return lang === "es"
      ? "Predomina la componente horizontal."
      : "The horizontal component dominates.";
  }

  const ratio = Math.abs(Fx) > 1e-9 ? Math.abs(Fy / Fx) : Infinity;
  return lang === "es"
    ? `Las componentes son comparables. Cociente |Fy/Fx| ≈ ${Number.isFinite(ratio) ? ratio.toFixed(2) : "∞"}.`
    : `The components are comparable. Ratio |Fy/Fx| ≈ ${Number.isFinite(ratio) ? ratio.toFixed(2) : "∞"}.`;
}