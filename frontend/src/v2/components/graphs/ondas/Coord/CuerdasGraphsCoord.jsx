import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./cuerdas.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "posicion sobre la cuerda",
  yAxis: "desplazamiento transversal",
};
const formulaContract = {
  id: "frecuencia_modo_cuerda",
  formula: "f_n = n * sqrt(T / mu) / (2 * L)",
  latex: "f_n = n\\sqrt{T/\\mu}/(2L)",
  equation: "f_n = n * sqrt(T / mu) / (2 * L)",
};

function readNumber(input, calcParams, id, fallback) {
  const value = input?.[id]?.value ?? input?.[id] ?? calcParams?.[id];
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback;
}

function CuerdasCoordView(props) {
  const { params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calcParams = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const L = readNumber(input, calcParams, "L", 0.8);
  const T = readNumber(input, calcParams, "T", 72);
  const mu = readNumber(input, calcParams, "mu", 0.02);
  const nRaw = readNumber(input, calcParams, "n", 3);
  const n = Math.max(1, Math.round(nRaw));
  const v = readNumber(input, calcParams, "v", Math.sqrt(T / mu));
  const lambda_n = readNumber(input, calcParams, "lambda_n", (2 * L) / n);
  const f_n = readNumber(input, calcParams, "f_n", (n * v) / (2 * L));

  const stateOut = {
    target: "f_n",
    graphType: "Coord",
    formula: formulaContract.id,
    axes: axisContract,
    L,
    T,
    mu,
    v,
    n,
    lambda_n,
    f_n,
  };

  const mergedSharedParams = {
    ...input,
    ...sharedParams,
    __calc: calcParams,
    graph_identity: profile.graph_identity,
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
        es: "El grafico Coord vincula longitud, tension, densidad lineal y modo entero con la frecuencia estacionaria de la cuerda.",
        en: "The Coord graph links length, tension, linear density, and integer mode with the standing frequency of the string.",
      },
    });
  }, [L, T, mu, v, n, lambda_n, f_n, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      params={{ ...input, L, T, mu, v, n, lambda_n, f_n }}
      sharedParams={mergedSharedParams}
      forcedScenario="standingWave"
      title={tt("Cuerdas estacionarias", "Standing strings")}
    />
  );
}

const CuerdasGraphsCoord = createCoordGraph({
  displayName: "CuerdasGraphsCoord",
  Component: CuerdasCoordView,
});

CuerdasGraphsCoord.graph_identity = profile.graph_identity;
CuerdasGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
CuerdasGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;
CuerdasGraphsCoord.axes = axisContract;
CuerdasGraphsCoord.formula = formulaContract;

export default CuerdasGraphsCoord;


