import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo cambia el momento lineal al chocar contra una pared rígida?",
    en: "How does linear momentum change upon collision with a rigid wall?",
  },
};


function ColisionConParedCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return <CollisionGraphsCoordBase {...props} lang={uiLang} type="elastic" title={props?.title || tt("Colision con pared (Coord)", "Collision with wall (Coord)")} />;
}

export default createCoordGraph({
  displayName: "ColisionConParedGraphsCoord",
  Component: ColisionConParedCoordView,
});