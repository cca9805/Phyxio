import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import BaseComponent from "./CentroDeMasasLeafGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Qué punto resume el movimiento traslacional como promedio ponderado por masa?",
    en: "Which point summarises translational motion as a mass-weighted average?",
  },
};


function DefinicionCentroDeMasasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <BaseComponent
      {...props}
      lang={uiLang}
      leafRelPath={
        props.leafRelPath ||
        "fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/definicion-centro-de-masas"
      }
      title={props.title || tt("Definicion de centro de masas", "Definition of the center of mass")}
    />
  );
}

export default createCoordGraph({
  displayName: "DefinicionCentroDeMasasGraphsCoord",
  Component: DefinicionCentroDeMasasCoordView,
});