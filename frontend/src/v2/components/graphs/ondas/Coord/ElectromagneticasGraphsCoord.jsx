import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord.jsx";
import profile from "./electromagneticas.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
  xAxis: "posicion de propagacion",
  yAxis: "campo electrico transversal",
};
const formulaContract = {
  id: "relacion_campos_em",
  formula: "E0 = c * B0",
  latex: "E_0 = c B_0",
};

export default function ElectromagneticasGraphsCoord(props) {
  const params = props.params ?? props.sharedParams ?? {};
  const calcParams = props.sharedParams?.__calc ?? props.paramsIn ?? params.__calc ?? {};
  const sharedParams = {
    ...params,
    ...props.sharedParams,
    __calc: calcParams,
    graph_identity: profile.graph_identity,
    axes: axisContract,
    formula: formulaContract,
  };

  return (
    <OndasGraphsCoord
      {...props}
      params={params}
      sharedParams={sharedParams}
      forcedScenario="electromagnetic"
      title={tt("Ondas electromagneticas", "Electromagnetic waves")}
    />
  );
}

ElectromagneticasGraphsCoord.graph_identity = profile.graph_identity;
ElectromagneticasGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
ElectromagneticasGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;
ElectromagneticasGraphsCoord.axes = axisContract;
ElectromagneticasGraphsCoord.formula = formulaContract;


