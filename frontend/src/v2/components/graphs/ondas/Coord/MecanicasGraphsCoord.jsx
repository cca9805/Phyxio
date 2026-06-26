import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./mecanicas.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "posicion del medio",
  yAxis: "desplazamiento mecanico",
};
const formulaContract = {
  id: "onda_mecanica_velocidad",
  formula: "v = lambda * f",
  latex: "v = \\lambda f",
  equation: "v = lambda * f",
};

function MecanicasCoordView(props) {
  const { params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calcParams = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const lambda = Number(input?.lambda?.value ?? input?.lambda ?? calcParams?.lambda ?? 2);
  const f = Number(input?.f?.value ?? input?.f ?? calcParams?.f ?? 5);
  const v = Number(input?.v?.value ?? input?.v ?? calcParams?.v ?? lambda * f);
  const A = Number(input?.A?.value ?? input?.A ?? calcParams?.A ?? 0.1);
  const stateOut = {
    target: "v",
    graphType: "Coord",
    formula: formulaContract.id,
    axes: axisContract,
    v,
    lambda,
    f,
    A,
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
      target: "v",
      values: stateOut,
      reading: {
        es: "El grafico Coord vincula medio material, desplazamiento, longitud de onda, frecuencia y velocidad.",
        en: "The Coord graph links material medium, displacement, wavelength, frequency, and speed.",
      },
    });
  }, [v, lambda, f, A, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      params={{ ...input, v, lambda, f, A }}
      sharedParams={mergedSharedParams}
      forcedScenario="mechanical"
      title={tt("Ondas mecanicas", "Mechanical waves")}
    />
  );
}

const MecanicasGraphsCoord = createCoordGraph({
  displayName: "MecanicasGraphsCoord",
  Component: MecanicasCoordView,
});

MecanicasGraphsCoord.graph_identity = profile.graph_identity;
MecanicasGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
MecanicasGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;
MecanicasGraphsCoord.axes = axisContract;
MecanicasGraphsCoord.formula = formulaContract;

export default MecanicasGraphsCoord;


