import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = distancia radial r (m) | YAxis = campo eléctrico E (V/m)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function CampoDeDistribucionesGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="campo-de-distribuciones"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Campo de distribuciones",
      en: "Field of distributions",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varía el campo eléctrico E con la distancia r para distintas geometrías de distribución de carga continua?",
      en: "How does the electric field E vary with distance r for different continuous charge distribution geometries?",
    },
    magnitud_estrella: "E",
    variable_control: "sharedParams",
  },
  axes: {
    x: "distancia radial r (m)",
    y: "campo eléctrico E (V/m)",
  },
  formula: "E_hilo = λ/(2πε₀r)  |  E_plano = σ/(2ε₀)  |  E_puntual = kq/r²",
};

const axes = {
  x: "distancia radial r (m)",
  y: "campo eléctrico E (V/m)",
};

const formula = "E_hilo = λ/(2πε₀r)  |  E_plano = σ/(2ε₀)  |  E_puntual = kq/r²";

CampoDeDistribucionesGraphsCoordView.graphContract = graphContract;
CampoDeDistribucionesGraphsCoordView.graph_identity = graphContract.graph_identity;
CampoDeDistribucionesGraphsCoordView.axes = axes;
CampoDeDistribucionesGraphsCoordView.formula = formula;

const CampoDeDistribucionesGraphsCoordContract = createCoordGraph({
  Component: CampoDeDistribucionesGraphsCoordView,
  displayName: "CampoDeDistribucionesGraphsCoordContract",
});

CampoDeDistribucionesGraphsCoordContract.graphContract = graphContract;
CampoDeDistribucionesGraphsCoordContract.graph_identity = graphContract.graph_identity;
CampoDeDistribucionesGraphsCoordContract.axes = axes;
CampoDeDistribucionesGraphsCoordContract.formula = formula;

export default CampoDeDistribucionesGraphsCoordContract;
