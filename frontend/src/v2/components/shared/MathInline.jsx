import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

function normalizeToLatex(s = "") {
  return s
    .replaceAll("·", "\\cdot ")
    .replaceAll("−", "-")
    .replaceAll("½", "\\tfrac{1}{2}")
    .replaceAll("²", "^2")
    .replaceAll("³", "^3")
    .replaceAll("y0", "y_0")
    .replaceAll("v0", "v_0");
}

export default function MathInline({ latex, children }) {
  const source = latex ?? children;
  if (!source) return null;

  const safe = normalizeToLatex(String(source));

  return <Latex>{`$${safe}$`}</Latex>;
}
