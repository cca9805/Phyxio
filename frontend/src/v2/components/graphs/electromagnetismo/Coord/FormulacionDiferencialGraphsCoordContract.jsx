import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function FormulacionDiferencialGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="formulacion-diferencial"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Formulación diferencial",
      en: "Differential Formulation",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo describen las ecuaciones de Maxwell el comportamiento local de los campos en cada punto del espacio?",
      en: "How do Maxwell's equations describe the local behavior of fields at every point in space?",
    },
    magnitud_estrella: "divE",
    variable_control: "sharedParams",
  },
  axes: {
    x: "densidad de carga (rho)",
    y: "divergencia de E (divE)",
  },
  formula: "divE = rho / epsilon0",
};

const axes = {
  x: "densidad de carga (rho)",
  y: "divergencia de E (divE)",
};

const formula = "divE = rho / epsilon0";

FormulacionDiferencialGraphsCoordView.graphContract = graphContract;
FormulacionDiferencialGraphsCoordView.graph_identity = graphContract.graph_identity;
FormulacionDiferencialGraphsCoordView.axes = axes;
FormulacionDiferencialGraphsCoordView.formula = formula;

const FormulacionDiferencialGraphsCoordContract = createCoordGraph({
  Component: FormulacionDiferencialGraphsCoordView,
  displayName: "FormulacionDiferencialGraphsCoordContract",
});

FormulacionDiferencialGraphsCoordContract.graphContract = graphContract;
FormulacionDiferencialGraphsCoordContract.graph_identity = graphContract.graph_identity;
FormulacionDiferencialGraphsCoordContract.axes = axes;
FormulacionDiferencialGraphsCoordContract.formula = formula;

export default FormulacionDiferencialGraphsCoordContract;
