import React from "react";
import MathInline from "@/v2/components/shared/MathInline";

/**
 * fmt - Formateo de números inteligente (separador de miles, max decimales)
 */
const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const locale = lang === "en" ? "en-US" : "es-ES";
  return n.toLocaleString(locale, { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: d 
  });
};

export default function GraphResultsPanel({ results = [], lang = "es" }) {
  if (!results || results.length === 0) return null;

  const t = (label) => {
    if (typeof label === "string") return label;
    return label?.[lang] || label?.es || "";
  };

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
      gap: 12, 
      marginTop: 10 
    }}>
      {results.map((res, idx) => (
        <div key={res.id || idx} className="v2-panel" style={{ padding: 10, textAlign: "center" }}>
          <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>
            {res.latex && <MathInline latex={res.latex} />} {t(res.label)}
          </div>
          <div style={{ fontSize: 16, fontWeight: 900 }}>
            {fmt(res.value, 2, lang)}{" "}
            {res.unit && (
              <small style={{ fontWeight: 400, opacity: 0.6 }}>{res.unit}</small>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
