import React from "react";
import SvgProfileRenderer from "@/v2/components/SVG/SvgProfileRenderer";
import profile from "@/v2/components/SVG/profiles/oscilador-masa-muelle.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// createSvgGraph(legacy marker)
function OsciladorMasaMuelleGraphsSvgView({
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

const OsciladorMasaMuelleGraphsSvg = createSvgGraph({
  Component: OsciladorMasaMuelleGraphsSvgView,
  displayName: "OsciladorMasaMuelleGraphsSvg",
});

OsciladorMasaMuelleGraphsSvg.graphContract = OsciladorMasaMuelleGraphsSvgView.graphContract;
OsciladorMasaMuelleGraphsSvg.graph_identity = OsciladorMasaMuelleGraphsSvgView.graph_identity;
OsciladorMasaMuelleGraphsSvg.profile = OsciladorMasaMuelleGraphsSvgView.profile;

export default OsciladorMasaMuelleGraphsSvg;
