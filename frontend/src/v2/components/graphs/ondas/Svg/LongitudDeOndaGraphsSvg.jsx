import React from "react";
import SvgProfileRenderer from "../../../SVG/SvgProfileRenderer.jsx";
import profile from "./longitud-de-onda.svg.profile.js";
import { createSvgGraph } from "../../graphFactories.jsx";


// Extractor hints: createSvgGraph(
function LongitudDeOndaGraphsSvgView({
  lang = "es",
  sharedParams = {},
  params,
  paramsIn,
  onSharedParamsChange,
  onApplyToCalculator,
  onInterpretationContextChange,
  onGraphStateChange,
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calc = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const paramsOut = {
    ...input,
    lambda: input?.lambda ?? calc?.lambda ?? 2,
    Delta_x: input?.Delta_x ?? calc?.Delta_x ?? 6,
    n: input?.n ?? calc?.n ?? 3,
  };

  return (
    <SvgProfileRenderer
      profile={profile}
      lang={uiLang}
      sharedParams={sharedParams}
      paramsIn={paramsOut}
      onApplyToCalculator={onApplyToCalculator ?? onSharedParamsChange}
      onInterpretationContextChange={onInterpretationContextChange}
      onGraphStateChange={onGraphStateChange}
    />
  );
}

LongitudDeOndaGraphsSvgView.profile = profile;
LongitudDeOndaGraphsSvgView.graph_identity = profile.interpretation_binding;

const LongitudDeOndaGraphsSvg = createSvgGraph({
  Component: LongitudDeOndaGraphsSvgView,
  displayName: "LongitudDeOndaGraphsSvg",
});

LongitudDeOndaGraphsSvg.graphContract = LongitudDeOndaGraphsSvgView.graphContract;
LongitudDeOndaGraphsSvg.graph_identity = LongitudDeOndaGraphsSvgView.graph_identity;
LongitudDeOndaGraphsSvg.profile = LongitudDeOndaGraphsSvgView.profile;

export default LongitudDeOndaGraphsSvg;
