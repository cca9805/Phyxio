import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./tubos.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "posicion en el tubo",
  yAxis: "desplazamiento acustico",
};
const formulaContract = {
  id: "frecuencia_tubo_abierto",
  formula: "f_n = n * v / (2 * L_eff)",
  latex: "f_n = n v/(2L_eff)",
  equation: "f_n = n * v / (2 * L_eff)",
};

function readNumber(input, calcParams, id, fallback) {
  const value = input?.[id]?.value ?? input?.[id] ?? calcParams?.[id];
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : fallback;
}

function TubosCoordView(props) {
  const { params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calcParams = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const L = readNumber(input, calcParams, "L", 0.5);
  const L_eff = readNumber(input, calcParams, "L_eff", L);
  const v = readNumber(input, calcParams, "v", 340);
  const n = Math.max(1, Math.round(readNumber(input, calcParams, "n", 1)));
  const m = Math.max(1, Math.round(readNumber(input, calcParams, "m", 1)));
  const lambda_n = readNumber(input, calcParams, "lambda_n", (2 * L_eff) / n);
  const f_n = readNumber(input, calcParams, "f_n", (n * v) / (2 * L_eff));

  const stateOut = {
    target: "f_n",
    graphType: "Coord",
    formula: formulaContract.id,
    axes: axisContract,
    L,
    L_eff,
    v,
    n,
    m,
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
        es: "El grafico Coord vincula longitud efectiva, velocidad del sonido y tipo de extremo con la frecuencia estacionaria del tubo.",
        en: "The Coord graph links effective length, sound speed, and end type with the standing frequency of the tube.",
      },
    });
  }, [L, L_eff, v, n, m, lambda_n, f_n, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      params={{ ...input, L, L_eff, v, n, m, lambda_n, f_n }}
      sharedParams={mergedSharedParams}
      forcedScenario="standingWave"
      title={tt("Tubos estacionarios", "Standing tubes")}
    />
  );
}

const TubosGraphsCoord = createCoordGraph({
  displayName: "TubosGraphsCoord",
  Component: TubosCoordView,
});

TubosGraphsCoord.graph_identity = profile.graph_identity;
TubosGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
TubosGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;
TubosGraphsCoord.axes = axisContract;
TubosGraphsCoord.formula = formulaContract;

export default TubosGraphsCoord;


