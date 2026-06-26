import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cuánta energía cinética se disipa en un choque conservando el momento lineal?",
    en: "How much kinetic energy is dissipated in a collision while conserving linear momentum?",
  },
};


function ColisionesInelasticasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="inelastic" title={props?.title || tt("Colisiones inelasticas (Coord)", "Inelastic collisions (Coord)")} />;
}

export default createCoordGraph({
  displayName: "ColisionesInelasticasGraphsCoord",
  Component: ColisionesInelasticasCoordView,
});

