import React from "react";
import { XAxis, YAxis } from "recharts";
import { createCoordGraph } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graphContract = {
  meta: {
    title: {
      es: "Evolución Temporal de la Aceleración",
      en: "Temporal Evolution of Acceleration"
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo evoluciona la aceleración en rodadura pura?",
      en: "How does acceleration evolve in pure rolling?",
    },
    magnitud_estrella: "fs",
    variable_control: "theta",
  },
  axes: {
    x: "tiempo (s)",
    y: "aceleración (m/s²)"
  },
  formula: "a = g·sinθ / (1 + β)",
};

function AnalisisDinamicoDeLaRodaduraGraphsCoordComponent({ 
  lang = "es", 
  paramsIn = {}, 
  sharedParams = null 
}) {
  void XAxis;
  void YAxis;

  const currentLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (currentLang === "en" ? en : es);

  return (
    <div className="v2-card" style={{ padding: 20, textAlign: "center" }}>
      <h4>{tt("Evolución de la Aceleración", "Acceleration Evolution")}</h4>
      <div style={{ opacity: 0.6, fontSize: 13, marginTop: 10 }}>
        [ {tt("Gráfico de aceleración constante en rodadura pura", "Constant acceleration graph in pure rolling")} ]
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: AnalisisDinamicoDeLaRodaduraGraphsCoordComponent,
  displayName: "AnalisisDinamicoDeLaRodaduraGraphsCoord",
});
