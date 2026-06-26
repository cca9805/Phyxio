import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import BaseComponent from "./CentroDeMasasLeafGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo se calcula el centro de masas de un conjunto de partículas discretas?",
    en: "How is the center of mass of a set of discrete particles calculated?",
  },
};


function CentroDeMasasSistemasDiscretosCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <BaseComponent
      {...props}
      lang={uiLang}
      leafRelPath={
        props.leafRelPath ||
        "fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-sistemas-discretos"
      }
      title={props.title || tt("Centro de masas en sistemas discretos", "Center of mass in discrete systems")}
    />
  );
}

export default createCoordGraph({
  displayName: "CentroDeMasasSistemasDiscretosGraphsCoord",
  Component: CentroDeMasasSistemasDiscretosCoordView,
});