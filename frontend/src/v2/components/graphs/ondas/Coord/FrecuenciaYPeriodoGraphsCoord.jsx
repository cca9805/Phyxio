import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./frecuencia-y-periodo.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export default function FrecuenciaYPeriodoGraphsCoord(props) {
  const params = props.params ?? props.sharedParams ?? {};
  const calcParams = props.sharedParams?.__calc ?? props.paramsIn ?? params.__calc ?? {};
  const sharedParams = {
    ...params,
    ...props.sharedParams,
    __calc: calcParams,
    graph_identity: profile.graph_identity,
  };

  return (
    <OndasGraphsCoord
      {...props}
      params={params}
      sharedParams={sharedParams}
      forcedScenario="freqPeriod"
      title={tt("Frecuencia y periodo", "Frequency and period")}
    />
  );
}

FrecuenciaYPeriodoGraphsCoord.graph_identity = profile.graph_identity;
FrecuenciaYPeriodoGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
FrecuenciaYPeriodoGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;


