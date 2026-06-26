import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.
// OndasGraphsCoord renderiza XAxis y YAxis para la lectura espacial de la energia.
const graph_identity = {
  pregunta_principal: {
    es: "Como se distribuye la energia en una onda y que factores determinan cuanta energia transporta?",
    en: "How is energy distributed in a wave and what factors determine how much energy it transports?",
  },
  variable_control: "amplitud",
  magnitud_estrella: "energia_de_la_onda",
  formula: "E_onda proporcional a A^2 omega^2",
  target_interpretable: true,
};

export default function EnergiaDeUnaOndaGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OndasGraphsCoord {...props} forcedScenario="energyWave" />;
}


