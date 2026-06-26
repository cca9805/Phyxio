import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";

// Extractor hints: XAxis, YAxis, createCoordGraphPage(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Cuales son las frecuencias y patrones de vibracion que puede adoptar una cuerda con extremos fijos?",
    en: "What are the frequencies and vibration patterns that a string with fixed ends can adopt?",
  },
  keywords: [
    "frecuencias",
    "patrones",
    "vibracion",
    "cuerda",
    "extremos",
    "fijos",
    "frequencies",
    "vibration",
    "patterns",
    "string",
    "fixed",
    "ends",
  ],
  variable_control: "numero_armonico",
  magnitud_estrella: "frecuencia_fundamental",
  formula: "f_n = n * f_1",
  target_interpretable: true,
};

const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "numero de modo",
  yAxis: "frecuencia permitida",
};

function CuerdasOndasEstacionariasCoordView(props) {
  const params = props.params ?? props.paramsIn ?? props.sharedParams ?? {};
  const calcParams = props.sharedParams?.__calc ?? props.paramsIn?.__calc ?? params.__calc ?? {};
  const sharedParams = {
    ...params,
    ...props.sharedParams,
    __calc: calcParams,
    graph_identity,
    axes: axisContract,
    interpretation_binding: {
      targets: [
        "longitud_cuerda",
        "numero_armonico",
        "frecuencia_fundamental",
        "frecuencia_modo",
        "longitud_onda_estacionaria",
      ],
      graph_reading: {
        es: "El Coord muestra como los extremos fijos seleccionan frecuencias y patrones discretos de vibracion.",
        en: "The Coord shows how fixed ends select discrete vibration frequencies and patterns.",
      },
    },
  };

  return (
    <OndasGraphsCoord
      {...props}
      params={params}
      sharedParams={sharedParams}
      forcedScenario="standing"
      leafProfileId="cuerdas-ondas-estacionarias"
      title={tt("Ondas estacionarias en cuerda", "Standing waves on a string")}
    />
  );
}

const CuerdasOndasEstacionariasGraphsCoord = createCoordGraph({
  displayName: "CuerdasOndasEstacionariasGraphsCoord",
  Component: CuerdasOndasEstacionariasCoordView,
});

CuerdasOndasEstacionariasGraphsCoord.graph_identity = graph_identity;
CuerdasOndasEstacionariasGraphsCoord.pregunta_principal = graph_identity.pregunta_principal;
CuerdasOndasEstacionariasGraphsCoord.magnitud_estrella = graph_identity.magnitud_estrella;
CuerdasOndasEstacionariasGraphsCoord.axes = axisContract;
CuerdasOndasEstacionariasGraphsCoord.formula = {
  id: "frecuencia_modo",
  formula: "f_n = n * f_1",
  equation: "f_n = n * f_1",
};

export default CuerdasOndasEstacionariasGraphsCoord;


