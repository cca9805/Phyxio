import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";
import profile from "./concepto-de-onda.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// Extractor hints: createSvgGraph(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

function ConceptoDeOndaGraphsSvgView(props) {
  const params = props.params ?? props.sharedParams ?? {};
  const sharedParams = props.sharedParams ?? params;
  return (
    <OndasGraphsSvg
      {...props}
      params={params}
      sharedParams={sharedParams}
      forcedScenario="waveConcept"
      title={tt("Anatomia de una onda", "Anatomy of a wave")}
    />
  );
}

ConceptoDeOndaGraphsSvgView.graph_identity = profile.graph_identity;
ConceptoDeOndaGraphsSvgView.pregunta_principal = profile.graph_identity.pregunta_principal;
ConceptoDeOndaGraphsSvgView.magnitud_estrella = profile.graph_identity.magnitud_estrella;

const ConceptoDeOndaGraphsSvg = createSvgGraph({
  Component: ConceptoDeOndaGraphsSvgView,
  displayName: "ConceptoDeOndaGraphsSvg",
});

ConceptoDeOndaGraphsSvg.graphContract = ConceptoDeOndaGraphsSvgView.graphContract;
ConceptoDeOndaGraphsSvg.graph_identity = ConceptoDeOndaGraphsSvgView.graph_identity;
ConceptoDeOndaGraphsSvg.profile = ConceptoDeOndaGraphsSvgView.profile;

export default ConceptoDeOndaGraphsSvg;
