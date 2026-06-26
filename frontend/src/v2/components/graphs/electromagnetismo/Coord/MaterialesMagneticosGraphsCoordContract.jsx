import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function MaterialesMagneticosGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="materiales-magneticos"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Materiales magneticos",
      en: "Magnetic Materials",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como se decide si un material refuerza, debilita o concentra un campo magnetico aplicado?",
      en: "How do we decide whether a material strengthens, weakens, or concentrates an applied magnetic field?",
    },
    magnitud_estrella: "mu_r",
    variable_control: "H",
  },
  axes: {
    x: "intensidad magnetica H (A/m)",
    y: "campo magnetico B (T)",
  },
  formula: "B = mu0 * mu_r * H",
};

const axes = {
  x: "intensidad magnetica H (A/m)",
  y: "campo magnetico B (T)",
};

const formula = "B = mu0 * mu_r * H";

MaterialesMagneticosGraphsCoordView.graphContract = graphContract;
MaterialesMagneticosGraphsCoordView.graph_identity = graphContract.graph_identity;
MaterialesMagneticosGraphsCoordView.axes = axes;
MaterialesMagneticosGraphsCoordView.formula = formula;

const MaterialesMagneticosGraphsCoordContract = createCoordGraph({
  Component: MaterialesMagneticosGraphsCoordView,
  displayName: "MaterialesMagneticosGraphsCoordContract",
});

MaterialesMagneticosGraphsCoordContract.graphContract = graphContract;
MaterialesMagneticosGraphsCoordContract.graph_identity = graphContract.graph_identity;
MaterialesMagneticosGraphsCoordContract.axes = axes;
MaterialesMagneticosGraphsCoordContract.formula = formula;

export default MaterialesMagneticosGraphsCoordContract;
