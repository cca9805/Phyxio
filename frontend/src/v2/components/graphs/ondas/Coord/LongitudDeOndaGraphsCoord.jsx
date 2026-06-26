import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./longitud-de-onda.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export default function LongitudDeOndaGraphsCoord(props) {
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
      forcedScenario="wavelength"
      title={tt("Longitud de onda", "Wavelength")}
    />
  );
}

LongitudDeOndaGraphsCoord.graph_identity = profile.graph_identity;
LongitudDeOndaGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
LongitudDeOndaGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;


