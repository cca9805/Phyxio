import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import BaseComponent from "./CentroDeMasasLeafGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Qué simplificación se obtiene al analizar el movimiento desde el marco del centro de masas?",
    en: "What simplification is obtained by analysing motion from the center-of-mass frame?",
  },
};


function MarcoDelCentroDeMasasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <BaseComponent
      {...props}
      lang={uiLang}
      leafRelPath={
        props.leafRelPath ||
        "fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/marco-del-centro-de-masas"
      }
      title={props.title || tt("Marco del centro de masas", "Center-of-mass frame")}
    />
  );
}

export default createCoordGraph({
  displayName: "MarcoDelCentroDeMasasGraphsCoord",
  Component: MarcoDelCentroDeMasasCoordView,
});