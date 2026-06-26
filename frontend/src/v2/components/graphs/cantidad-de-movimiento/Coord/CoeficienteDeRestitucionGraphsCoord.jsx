import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Qué fracción de la velocidad relativa se recupera tras el choque?",
    en: "What fraction of the relative speed is recovered after the collision?",
  },
};


function CoeficienteDeRestitucionCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="inelastic" title={props?.title || tt("Coeficiente de restitucion (Coord)", "Coefficient of restitution (Coord)")} />;
}

export default createCoordGraph({
  displayName: "CoeficienteDeRestitucionGraphsCoord",
  Component: CoeficienteDeRestitucionCoordView,
});