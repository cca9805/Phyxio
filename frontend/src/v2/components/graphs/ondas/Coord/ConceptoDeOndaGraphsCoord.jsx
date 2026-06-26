import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";
import profile from "./concepto-de-onda.coord.profile.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// createCoordGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export default function ConceptoDeOndaGraphsCoord(props) {
  const params = props.params ?? props.sharedParams ?? {};
  const sharedParams = props.sharedParams ?? params;
  return (
    <OndasGraphsCoord
      {...props}
      params={params}
      sharedParams={sharedParams}
      forcedScenario="waveConcept"
      title={tt("Concepto de onda", "Concept of a wave")}
    />
  );
}

ConceptoDeOndaGraphsCoord.graph_identity = profile.graph_identity;
ConceptoDeOndaGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
ConceptoDeOndaGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;


