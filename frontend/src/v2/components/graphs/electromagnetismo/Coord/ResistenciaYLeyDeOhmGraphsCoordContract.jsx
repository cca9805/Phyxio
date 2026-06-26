import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function ResistenciaYLeyDeOhmGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="resistencia-y-ley-de-ohm"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Resistencia y ley de ohm",
      en: "Resistance and Ohm's Law",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determina la naturaleza y geometría de un material su oposición al flujo de carga eléctrica?",
      en: "How do the nature and geometry of a material determine its opposition to electric charge flow?",
    },
    magnitud_estrella: "R",
    variable_control: "sharedParams",
  },
  axes: {
    x: "tensión, longitud o área",
    y: "intensidad de corriente o resistencia",
  },
  formula: "V = IR y R = rho*L/A",
};

const axes = {
  x: "tensión, longitud o área",
  y: "intensidad de corriente o resistencia",
};

const formula = "V = IR y R = rho*L/A";

ResistenciaYLeyDeOhmGraphsCoordView.graphContract = graphContract;
ResistenciaYLeyDeOhmGraphsCoordView.graph_identity = graphContract.graph_identity;
ResistenciaYLeyDeOhmGraphsCoordView.axes = axes;
ResistenciaYLeyDeOhmGraphsCoordView.formula = formula;

const ResistenciaYLeyDeOhmGraphsCoordContract = createCoordGraph({
  Component: ResistenciaYLeyDeOhmGraphsCoordView,
  displayName: "ResistenciaYLeyDeOhmGraphsCoordContract",
});

ResistenciaYLeyDeOhmGraphsCoordContract.graphContract = graphContract;
ResistenciaYLeyDeOhmGraphsCoordContract.graph_identity = graphContract.graph_identity;
ResistenciaYLeyDeOhmGraphsCoordContract.axes = axes;
ResistenciaYLeyDeOhmGraphsCoordContract.formula = formula;

export default ResistenciaYLeyDeOhmGraphsCoordContract;
