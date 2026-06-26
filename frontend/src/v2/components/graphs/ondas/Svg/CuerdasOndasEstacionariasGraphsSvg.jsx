import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";
import profile from "./ondas-estacionarias.svg.profile.js";
import SvgProfileRenderer from "../../../SVG/SvgProfileRenderer.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// Extractor hints: createSvgGraph(
function CuerdasOndasEstacionariasGraphsSvgView(props) {
  const {
    params,
    paramsIn,
    sharedParams = {},
    onSharedParamsChange,
    onApplyToCalculator,
    onInterpretationContextChange,
    onGraphStateChange,
  } = props;
  void SvgProfileRenderer;
  const calc = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const bridgedParams = {
    ...(paramsIn ?? params ?? sharedParams),
    graph_identity: profile.graph_identity,
    interpretation_binding: profile.interpretation_binding,
  };

  return (
    <OndasGraphsSvg
      {...props}
      params={bridgedParams}
      paramsIn={bridgedParams}
      sharedParams={{ ...sharedParams, __calc: calc }}
      onApplyToCalculator={onApplyToCalculator ?? onSharedParamsChange}
      onInterpretationContextChange={onInterpretationContextChange}
      onGraphStateChange={onGraphStateChange}
      forcedScenario="standing"
      leafProfileId="cuerdas-ondas-estacionarias"
    />
  );
}

CuerdasOndasEstacionariasGraphsSvgView.profile = profile;
CuerdasOndasEstacionariasGraphsSvgView.graph_identity = profile.graph_identity;
CuerdasOndasEstacionariasGraphsSvgView.pregunta_principal = profile.graph_identity.pregunta_principal;
CuerdasOndasEstacionariasGraphsSvgView.magnitud_estrella = profile.graph_identity.magnitud_estrella;

const CuerdasOndasEstacionariasGraphsSvg = createSvgGraph({
  Component: CuerdasOndasEstacionariasGraphsSvgView,
  displayName: "CuerdasOndasEstacionariasGraphsSvg",
});

CuerdasOndasEstacionariasGraphsSvg.graphContract = CuerdasOndasEstacionariasGraphsSvgView.graphContract;
CuerdasOndasEstacionariasGraphsSvg.graph_identity = CuerdasOndasEstacionariasGraphsSvgView.graph_identity;
CuerdasOndasEstacionariasGraphsSvg.profile = CuerdasOndasEstacionariasGraphsSvgView.profile;

export default CuerdasOndasEstacionariasGraphsSvg;
