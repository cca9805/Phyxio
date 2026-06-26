import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo se conserva el momento lineal por componentes en un choque bidimensional?",
    en: "How is linear momentum conserved by components in a two-dimensional collision?",
  },
};


function Colisiones2dCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="elastic" title={props?.title || tt("Colisiones 2D (Coord)", "2D collisions (Coord)")} />;
}

export default createCoordGraph({
  displayName: "Colisiones2dGraphsCoord",
  Component: Colisiones2dCoordView,
});