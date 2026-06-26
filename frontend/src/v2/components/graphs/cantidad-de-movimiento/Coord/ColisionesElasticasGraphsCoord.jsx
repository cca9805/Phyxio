import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo se conservan momento lineal y energía cinética en colisiones elásticas?",
    en: "How are linear momentum and kinetic energy conserved in elastic collisions?",
  },
};


function ColisionesElasticasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="elastic" title={props?.title || tt("Colisiones elasticas (Coord)", "Elastic collisions (Coord)")} />;
}

export default createCoordGraph({
  displayName: "ColisionesElasticasGraphsCoord",
  Component: ColisionesElasticasCoordView,
});

