import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import PrincipioBase from "./PrincipioDeConservacionMomentoGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿En qué situaciones reales la conservación del momento lineal simplifica el análisis físico?",
    en: "In which real situations does momentum conservation simplify the physical analysis?",
  },
};

function AplicacionesPrincipioConservacionView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <PrincipioBase
      {...props}
      lang={uiLang}
      title={props?.title || tt("Aplicaciones del principio de conservación", "Applications of conservation principle")}
    />
  );
}

export default createCoordGraph({
  displayName: "AplicacionesPrincipioConservacionGraphsCoord",
  Component: AplicacionesPrincipioConservacionView,
});
