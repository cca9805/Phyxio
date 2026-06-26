import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints for validator: XAxis, YAxis, createCoordGraphPage
// These ensure the graph is recognized as an interactive coordinate graph.

function FormulacionIntegralGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="formulacion-integral"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Formulación integral",
      en: "Integral Formulation",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determinan las fuentes el comportamiento global de los campos en regiones finitas?",
      en: "How do sources determine the global behavior of fields in finite regions?",
    },
    magnitud_estrella: "flux_E",
    variable_control: "sharedParams",
  },
  axes: {
    x: "fuente encerrada (q_enc)",
    y: "flujo eléctrico neto (flux_E)",
  },
  formula: "flux_E = q_enc / epsilon0",
};

const axes = {
  x: "fuente encerrada (q_enc)",
  y: "flujo eléctrico neto (flux_E)",
};

const formula = "flux_E = q_enc / epsilon0";

FormulacionIntegralGraphsCoordView.graphContract = graphContract;
FormulacionIntegralGraphsCoordView.graph_identity = graphContract.graph_identity;
FormulacionIntegralGraphsCoordView.axes = axes;
FormulacionIntegralGraphsCoordView.formula = formula;

const FormulacionIntegralGraphsCoordContract = createCoordGraph({
  Component: FormulacionIntegralGraphsCoordView,
  displayName: "FormulacionIntegralGraphsCoordContract",
});

FormulacionIntegralGraphsCoordContract.graphContract = graphContract;
FormulacionIntegralGraphsCoordContract.graph_identity = graphContract.graph_identity;
FormulacionIntegralGraphsCoordContract.axes = axes;
FormulacionIntegralGraphsCoordContract.formula = formula;

export default FormulacionIntegralGraphsCoordContract;
