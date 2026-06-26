import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function CosteDeLaElectricidadGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="coste-de-la-electricidad"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Coste de la electricidad",
      en: "Cost of electricity",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como se traduce el consumo electrico en coste real y que decisiones fisicas permiten reducirlo de forma estable?",
      en: "How does electrical consumption translate into real cost and what physical decisions allow for a stable reduction?",
    },
    magnitud_estrella: "C_total",
    variable_control: "sharedParams",
  },
  axes: {
    x: "periodo de facturacion",
    y: "coste total de la factura",
  },
  formula: "C_total = C_energia + C_potencia + C_extra",
};

const axes = {
  x: "periodo de facturacion",
  y: "coste total de la factura",
};

const formula = "C_total = C_energia + C_potencia + C_extra";

CosteDeLaElectricidadGraphsCoordView.graphContract = graphContract;
CosteDeLaElectricidadGraphsCoordView.graph_identity = graphContract.graph_identity;
CosteDeLaElectricidadGraphsCoordView.axes = axes;
CosteDeLaElectricidadGraphsCoordView.formula = formula;

const CosteDeLaElectricidadGraphsCoordContract = createCoordGraph({
  Component: CosteDeLaElectricidadGraphsCoordView,
  displayName: "CosteDeLaElectricidadGraphsCoordContract",
});

CosteDeLaElectricidadGraphsCoordContract.graphContract = graphContract;
CosteDeLaElectricidadGraphsCoordContract.graph_identity = graphContract.graph_identity;
CosteDeLaElectricidadGraphsCoordContract.axes = axes;
CosteDeLaElectricidadGraphsCoordContract.formula = formula;

export default CosteDeLaElectricidadGraphsCoordContract;
