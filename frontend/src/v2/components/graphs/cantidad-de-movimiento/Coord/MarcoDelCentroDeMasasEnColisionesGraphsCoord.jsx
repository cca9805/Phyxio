import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Por qué el análisis de colisiones es más simétrico en el marco del centro de masas?",
    en: "Why is the collision analysis more symmetric in the center-of-mass frame?",
  },
};


function MarcoDelCentroDeMasasEnColisionesCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="elastic" title={props?.title || tt("Marco del centro de masas en colisiones (Coord)", "Center-of-mass frame in collisions (Coord)")} />;
}

export default createCoordGraph({
  displayName: "MarcoDelCentroDeMasasEnColisionesGraphsCoord",
  Component: MarcoDelCentroDeMasasEnColisionesCoordView,
});