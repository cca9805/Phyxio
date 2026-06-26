import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import BaseComponent from "../../dinamica/Coord/CentroDeMasasEnCuerposExtendidosGraphsCoord.jsx";

/**
 * @graph_type_meta
 * Axes: XAxis (position x), YAxis (density ρ or mass dm)
 * Formula: x_cm = (1/M) ∫ x dm — center of mass integral for extended bodies
 * Base component provides full MathInline rendering with recharts XAxis/YAxis.
 */


function CentroDeMasasEnCuerposExtendidosCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <BaseComponent
      {...props}
      lang={uiLang}
      leafRelPath={
        props.leafRelPath ||
        "fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-en-cuerpos-extendidos"
      }
      title={props.title || tt("Centro de masas en cuerpos extendidos", "Center of mass in extended bodies")}
    />
  );
}

export default createCoordGraph({
  displayName: "CentroDeMasasEnCuerposExtendidosGraphsCoord",
  Component: CentroDeMasasEnCuerposExtendidosCoordView,
});