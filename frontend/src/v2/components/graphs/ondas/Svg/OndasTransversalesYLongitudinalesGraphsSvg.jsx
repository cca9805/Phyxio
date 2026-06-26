import React from "react";
import SvgProfileRenderer from "../../../SVG/SvgProfileRenderer.jsx";
import profile from "./ondas-transversales-y-longitudinales.svg.profile.js";
import { createSvgGraph } from "../../graphFactories.jsx";


// Extractor hints: createSvgGraph(
function OndasTransversalesYLongitudinalesGraphsSvgView({
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
    A: input?.A ?? calc?.A ?? 0.04,
    u_perp: input?.u_perp ?? calc?.u_perp ?? 0.036,
    u_parallel: input?.u_parallel ?? calc?.u_parallel ?? 0.032,
    C_T: input?.C_T ?? calc?.C_T ?? 0.9,
    C_L: input?.C_L ?? calc?.C_L ?? 0.8,
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

OndasTransversalesYLongitudinalesGraphsSvgView.profile = profile;
OndasTransversalesYLongitudinalesGraphsSvgView.graph_identity = profile.graph_identity;
OndasTransversalesYLongitudinalesGraphsSvgView.pregunta_principal = profile.graph_identity.pregunta_principal;
OndasTransversalesYLongitudinalesGraphsSvgView.magnitud_estrella = profile.graph_identity.magnitud_estrella;

const OndasTransversalesYLongitudinalesGraphsSvg = createSvgGraph({
  Component: OndasTransversalesYLongitudinalesGraphsSvgView,
  displayName: "OndasTransversalesYLongitudinalesGraphsSvg",
});

OndasTransversalesYLongitudinalesGraphsSvg.graphContract = OndasTransversalesYLongitudinalesGraphsSvgView.graphContract;
OndasTransversalesYLongitudinalesGraphsSvg.graph_identity = OndasTransversalesYLongitudinalesGraphsSvgView.graph_identity;
OndasTransversalesYLongitudinalesGraphsSvg.profile = OndasTransversalesYLongitudinalesGraphsSvgView.profile;

export default OndasTransversalesYLongitudinalesGraphsSvg;
