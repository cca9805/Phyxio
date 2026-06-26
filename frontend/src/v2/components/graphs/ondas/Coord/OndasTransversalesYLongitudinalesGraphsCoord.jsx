import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./ondas-transversales-y-longitudinales.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export default function OndasTransversalesYLongitudinalesGraphsCoord(props) {
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
      forcedScenario="transLong"
      title={tt("Ondas transversales y longitudinales", "Transverse and longitudinal waves")}
    />
  );
}

OndasTransversalesYLongitudinalesGraphsCoord.graph_identity = profile.graph_identity;
OndasTransversalesYLongitudinalesGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
OndasTransversalesYLongitudinalesGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;


