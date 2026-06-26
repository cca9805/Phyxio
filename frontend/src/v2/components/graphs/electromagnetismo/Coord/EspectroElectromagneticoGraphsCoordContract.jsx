import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = longitud de onda lambda (m) | YAxis = frecuencia f (Hz)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function EspectroElectromagneticoGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="espectro-electromagnetico"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Espectro electromagnetico",
      en: "Electromagnetic Spectrum",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como ordena el espectro electromagnetico las ondas segun frecuencia, longitud de onda y energia",
      en: "How does the electromagnetic spectrum order waves by frequency, wavelength, and energy",
    },
    magnitud_estrella: "f",
    variable_control: "lambda",
  },
  axes: {
    x: "longitud de onda lambda (m)",
    y: "frecuencia f (Hz)",
  },
  formula: "f = c / lambda; E_foton = h * f",
};

const axes = {
  x: "longitud de onda lambda (m)",
  y: "frecuencia f (Hz)",
};

const formula = "f = c / lambda; E_foton = h * f";

EspectroElectromagneticoGraphsCoordView.graphContract = graphContract;
EspectroElectromagneticoGraphsCoordView.graph_identity = graphContract.graph_identity;
EspectroElectromagneticoGraphsCoordView.axes = axes;
EspectroElectromagneticoGraphsCoordView.formula = formula;

const EspectroElectromagneticoGraphsCoordContract = createCoordGraph({
  Component: EspectroElectromagneticoGraphsCoordView,
  displayName: "EspectroElectromagneticoGraphsCoordContract",
});

EspectroElectromagneticoGraphsCoordContract.graphContract = graphContract;
EspectroElectromagneticoGraphsCoordContract.graph_identity = graphContract.graph_identity;
EspectroElectromagneticoGraphsCoordContract.axes = axes;
EspectroElectromagneticoGraphsCoordContract.formula = formula;

export default EspectroElectromagneticoGraphsCoordContract;
