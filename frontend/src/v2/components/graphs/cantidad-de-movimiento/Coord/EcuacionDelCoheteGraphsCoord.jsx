import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import MomentumBase from "./CantidadDeMovimientoLeafGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo se vinculan la masa variable, velocidad de eyección y el cambio de velocidad en un cohete?",
    en: "How are variable mass, exhaust speed, and velocity change linked in a rocket?",
  },
};

function EcuacionDelCoheteView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <MomentumBase
      {...props}
      lang={uiLang}
      title={props?.title || tt("Ecuación del cohete", "Rocket equation")}
    />
  );
}

export default createCoordGraph({
  displayName: "EcuacionDelCoheteGraphsCoord",
  Component: EcuacionDelCoheteView,
});
