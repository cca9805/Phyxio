import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./condicion-de-estacionariedad.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "posicion en la cavidad",
  yAxis: "desplazamiento estacionario",
};
const formulaContract = {
  id: "condicion_estacionaria_cuerda",
  formula: "L = n * lambda / 2",
  latex: "L = n\\lambda/2",
  equation: "L = n * lambda / 2",
};

function CondicionDeEstacionariedadCoordView(props) {
  const { params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calcParams = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const n = Number(input?.n?.value ?? input?.n ?? calcParams?.n ?? 2);
  const L = Number(input?.L?.value ?? input?.L ?? calcParams?.L ?? 1);
  const lambda = Number(input?.lambda?.value ?? input?.lambda ?? calcParams?.lambda ?? (2 * L) / Math.max(n, 1));
  const v = Number(input?.v?.value ?? input?.v ?? calcParams?.v ?? 20);
  const f_n = Number(input?.f_n?.value ?? input?.f_n ?? calcParams?.f_n ?? (n * v) / Math.max(2 * L, 1e-12));
  const stateOut = {
    target: "f_n",
    graphType: "Coord",
    formula: formulaContract.id,
    axes: axisContract,
    L,
    lambda,
    n,
    v,
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
        es: "El grafico Coord vincula longitud de cavidad, modo entero, longitud de onda y frecuencia modal.",
        en: "The Coord graph links cavity length, integer mode, wavelength, and modal frequency.",
      },
    });
  }, [L, lambda, n, v, f_n, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      params={{ ...input, L, lambda, n, v, f_n }}
      sharedParams={mergedSharedParams}
      forcedScenario="standingWave"
      title={tt("Condicion de estacionariedad", "Standing-wave condition")}
    />
  );
}

const CondicionDeEstacionariedadGraphsCoord = createCoordGraph({
  displayName: "CondicionDeEstacionariedadGraphsCoord",
  Component: CondicionDeEstacionariedadCoordView,
});

CondicionDeEstacionariedadGraphsCoord.graph_identity = profile.graph_identity;
CondicionDeEstacionariedadGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
CondicionDeEstacionariedadGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;
CondicionDeEstacionariedadGraphsCoord.axes = axisContract;
CondicionDeEstacionariedadGraphsCoord.formula = formulaContract;

export default CondicionDeEstacionariedadGraphsCoord;


