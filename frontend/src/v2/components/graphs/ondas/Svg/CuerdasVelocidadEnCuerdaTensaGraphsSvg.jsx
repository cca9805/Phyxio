import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";
import profile from "./velocidad-en-cuerda-tensa.svg.profile.js";
import SvgProfileRenderer from "../../../SVG/SvgProfileRenderer.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// Extractor hints: createSvgGraph(

function CuerdasVelocidadEnCuerdaTensaGraphsSvgView(props) {
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
  void onApplyToCalculator;
  void onSharedParamsChange;
  void onInterpretationContextChange;
  void onGraphStateChange;
  const calc = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const bridgedParams = {
    ...(paramsIn ?? params ?? sharedParams),
    T: params?.T ?? calc?.T ?? 100,
    mu: params?.mu ?? calc?.mu ?? 0.01,
    v: params?.v ?? calc?.v ?? 100,
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
      forcedScenario="stringPropagation"
      leafProfileId="velocidad-en-cuerda-tensa"
    />
  );
}

CuerdasVelocidadEnCuerdaTensaGraphsSvgView.profile = profile;
CuerdasVelocidadEnCuerdaTensaGraphsSvgView.graph_identity = profile.graph_identity;
CuerdasVelocidadEnCuerdaTensaGraphsSvgView.pregunta_principal = profile.graph_identity.pregunta_principal;
CuerdasVelocidadEnCuerdaTensaGraphsSvgView.magnitud_estrella = profile.graph_identity.magnitud_estrella;

const CuerdasVelocidadEnCuerdaTensaGraphsSvg = createSvgGraph({
  Component: CuerdasVelocidadEnCuerdaTensaGraphsSvgView,
  displayName: "CuerdasVelocidadEnCuerdaTensaGraphsSvg",
});

CuerdasVelocidadEnCuerdaTensaGraphsSvg.graphContract = CuerdasVelocidadEnCuerdaTensaGraphsSvgView.graphContract;
CuerdasVelocidadEnCuerdaTensaGraphsSvg.graph_identity = CuerdasVelocidadEnCuerdaTensaGraphsSvgView.graph_identity;
CuerdasVelocidadEnCuerdaTensaGraphsSvg.profile = CuerdasVelocidadEnCuerdaTensaGraphsSvgView.profile;

export default CuerdasVelocidadEnCuerdaTensaGraphsSvg;
