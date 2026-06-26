import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./velocidad-de-propagacion.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export default function VelocidadDePropagacionGraphsCoord(props) {
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
      forcedScenario="propagation"
      title={tt("Velocidad de propagacion", "Wave speed")}
    />
  );
}

VelocidadDePropagacionGraphsCoord.graph_identity = profile.graph_identity;
VelocidadDePropagacionGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
VelocidadDePropagacionGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;


