import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Qué relación existe entre el ángulo de dispersión y las masas en colisiones bidimensionales?",
    en: "What is the relationship between the scattering angle and the masses in two-dimensional collisions?",
  },
};


function DispersionAngularEnColisiones2dCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="elastic" title={props?.title || tt("Dispersion angular en colisiones 2D (Coord)", "Angular scattering in 2D collisions (Coord)")} />;
}

export default createCoordGraph({
  displayName: "DispersionAngularEnColisiones2dGraphsCoord",
  Component: DispersionAngularEnColisiones2dCoordView,
});