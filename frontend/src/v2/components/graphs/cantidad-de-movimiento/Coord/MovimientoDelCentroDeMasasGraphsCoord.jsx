import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import BaseComponent from "./CentroDeMasasLeafGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo la fuerza externa neta determina la aceleración del centro de masas?",
    en: "How does the net external force determine the center-of-mass acceleration?",
  },
};


function MovimientoDelCentroDeMasasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <BaseComponent
      {...props}
      lang={uiLang}
      leafRelPath={
        props.leafRelPath ||
        "fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/movimiento-del-centro-de-masas"
      }
      title={props.title || tt("Movimiento del centro de masas", "Motion of the center of mass")}
    />
  );
}

export default createCoordGraph({
  displayName: "MovimientoDelCentroDeMasasGraphsCoord",
  Component: MovimientoDelCentroDeMasasCoordView,
});