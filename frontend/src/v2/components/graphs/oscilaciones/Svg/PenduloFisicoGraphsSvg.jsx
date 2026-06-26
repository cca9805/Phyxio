import React from "react";
import SvgProfileRenderer from "@/v2/components/SVG/SvgProfileRenderer";
import profile from "@/v2/components/SVG/profiles/pendulo-fisico.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// createSvgGraph(legacy marker)
function PenduloFisicoGraphsSvgView({
  lang = "es",
  sharedParams = null,
  paramsIn = null,
  onSharedParamsChange = null,
  interpretationDoc = null,
  onGraphStateChange = null,
  onInterpretationContextChange = null,
}) {
  return (
    <SvgProfileRenderer
      profile={profile}
      lang={lang}
      sharedParams={sharedParams ?? paramsIn}
      interpretationDoc={interpretationDoc}
      onGraphStateChange={onGraphStateChange}
      onInterpretationContextChange={onInterpretationContextChange}
      onApplyToCalculator={onSharedParamsChange}
    />
  );
}

const PenduloFisicoGraphsSvg = createSvgGraph({
  Component: PenduloFisicoGraphsSvgView,
  displayName: "PenduloFisicoGraphsSvg",
});

PenduloFisicoGraphsSvg.graphContract = PenduloFisicoGraphsSvgView.graphContract;
PenduloFisicoGraphsSvg.graph_identity = PenduloFisicoGraphsSvgView.graph_identity;
PenduloFisicoGraphsSvg.profile = PenduloFisicoGraphsSvgView.profile;

export default PenduloFisicoGraphsSvg;
