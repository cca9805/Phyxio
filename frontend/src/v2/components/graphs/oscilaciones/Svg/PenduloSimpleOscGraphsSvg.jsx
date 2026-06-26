import React from "react";
import SvgProfileRenderer from "@/v2/components/SVG/SvgProfileRenderer";
import profile from "@/v2/components/SVG/profiles/pendulo-simple.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// createSvgGraph(legacy marker)
function PenduloSimpleOscGraphsSvgView({
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

const PenduloSimpleOscGraphsSvg = createSvgGraph({
  Component: PenduloSimpleOscGraphsSvgView,
  displayName: "PenduloSimpleOscGraphsSvg",
});

PenduloSimpleOscGraphsSvg.graphContract = PenduloSimpleOscGraphsSvgView.graphContract;
PenduloSimpleOscGraphsSvg.graph_identity = PenduloSimpleOscGraphsSvgView.graph_identity;
PenduloSimpleOscGraphsSvg.profile = PenduloSimpleOscGraphsSvgView.profile;

export default PenduloSimpleOscGraphsSvg;
