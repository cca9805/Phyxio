import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const graphIdentity = {
  id: "cuerdas-armonicos",
  graph_type: "Coord",
  pregunta_principal: {
    es: "Como determinan la longitud de la cuerda y la velocidad de propagacion las frecuencias discretas que puede emitir un instrumento musical?",
    en: "How do the string length and propagation velocity determine the discrete frequencies a musical instrument can emit?",
  },
  keywords: [
    "longitud",
    "cuerda",
    "velocidad",
    "propagacion",
    "frecuencias",
    "discretas",
    "instrumento",
    "musical",
    "string",
    "length",
    "propagation",
    "velocity",
    "discrete",
    "frequencies",
  ],
  magnitud_estrella: "f_n",
  formula: "f_n = n * v / (2 * L)",
  physical_role: {
    es: "concepto fisico",
    en: "physical concept",
  },
};

const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "numero de armonico",
  yAxis: "frecuencia discreta",
};

const formulaContract = {
  id: "frecuencia_armonica",
  formula: "f_n = n * v / (2 * L)",
  latex: "f_n = n v/(2 L)",
  equation: "f_n = n * v / (2 * L)",
};

function readNumber(input, calcParams, id, fallback) {
  const value = input?.[id]?.value ?? input?.[id] ?? calcParams?.[id];
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback;
}

function CuerdasArmonicosCoordView(props) {
  const { params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calcParams = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const L = readNumber(input, calcParams, "L", 0.65);
  const v = readNumber(input, calcParams, "v", 312);
  const n = Math.max(1, Math.round(readNumber(input, calcParams, "n", 5)));
  const f_1 = readNumber(input, calcParams, "f_1", v / (2 * L));
  const f_n = readNumber(input, calcParams, "f_n", n * f_1);
  const lambda_n = readNumber(input, calcParams, "lambda_n", (2 * L) / n);

  const stateOut = {
    target: "f_n",
    graphType: "Coord",
    formula: formulaContract.id,
    axes: axisContract,
    L,
    v,
    n,
    f_1,
    f_n,
    lambda_n,
  };

  const mergedSharedParams = {
    ...input,
    ...sharedParams,
    __calc: calcParams,
    graph_identity: graphIdentity,
    axes: axisContract,
    formula: formulaContract,
    stateOut,
  };

  React.useEffect(() => {
    onGraphStateChange?.(stateOut);
    onInterpretationContextChange?.({
      source: "coord",
      target: "f_n",
      values: stateOut,
      reading: {
        es: "El grafico Coord muestra que la longitud de la cuerda y la velocidad de propagacion fijan una serie de frecuencias discretas para el instrumento.",
        en: "The Coord graph shows that string length and propagation velocity set a series of discrete frequencies for the instrument.",
      },
    });
  }, [L, v, n, f_1, f_n, lambda_n, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      params={{ ...input, L, v, n, f_1, f_n, lambda_n }}
      sharedParams={mergedSharedParams}
      forcedScenario="standingWave"
      title={tt("Armonicos en cuerda", "String harmonics")}
    />
  );
}

const CuerdasArmonicosGraphsCoord = createCoordGraph({
  displayName: "CuerdasArmonicosGraphsCoord",
  Component: CuerdasArmonicosCoordView,
});

CuerdasArmonicosGraphsCoord.graph_identity = graphIdentity;
CuerdasArmonicosGraphsCoord.pregunta_principal = graphIdentity.pregunta_principal;
CuerdasArmonicosGraphsCoord.magnitud_estrella = graphIdentity.magnitud_estrella;
CuerdasArmonicosGraphsCoord.axes = axisContract;
CuerdasArmonicosGraphsCoord.formula = formulaContract;

export default CuerdasArmonicosGraphsCoord;


