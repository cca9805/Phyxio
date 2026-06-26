import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import CinematicaLeafGraphsCoord from "./CinematicaLeafGraphsCoord.jsx";

function AnalisisGraficoCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  return (
    <CinematicaLeafGraphsCoord
      {...props}
      lang={uiLang}
      title={
        props?.title ||
        tt(
          "Análisis gráfico del movimiento (Coord)",
          "Graphical Analysis of Motion (Coord)"
        )
      }
    />
  );
}

export default createCoordGraph({
  displayName: "AnalisisGraficoGraphsCoord",
  Component: AnalisisGraficoCoordView,
});
