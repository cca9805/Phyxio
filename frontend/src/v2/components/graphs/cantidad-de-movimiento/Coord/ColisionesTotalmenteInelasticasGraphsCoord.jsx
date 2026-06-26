import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cuál es la velocidad final cuando dos cuerpos quedan unidos tras un choque totalmente inelástico?",
    en: "What is the final velocity when two bodies stick together after a perfectly inelastic collision?",
  },
};


function ColisionesTotalmenteInelasticasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="tot" title={props?.title || tt("Colisiones totalmente inelasticas (Coord)", "Perfectly inelastic collisions (Coord)")} />;
}

export default createCoordGraph({
  displayName: "ColisionesTotalmenteInelasticasGraphsCoord",
  Component: ColisionesTotalmenteInelasticasCoordView,
});

