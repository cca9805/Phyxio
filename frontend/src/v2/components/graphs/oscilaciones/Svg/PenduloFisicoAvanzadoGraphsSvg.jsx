import React from "react";
import SvgProfileRenderer from "@/v2/components/SVG/SvgProfileRenderer";
import profile from "@/v2/components/SVG/profiles/pendulo-fisico-avanzado.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// createSvgGraph(legacy marker)
function PenduloFisicoAvanzadoGraphsSvgView({
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

const PenduloFisicoAvanzadoGraphsSvg = createSvgGraph({
  Component: PenduloFisicoAvanzadoGraphsSvgView,
  displayName: "PenduloFisicoAvanzadoGraphsSvg",
});

PenduloFisicoAvanzadoGraphsSvg.graphContract = PenduloFisicoAvanzadoGraphsSvgView.graphContract;
PenduloFisicoAvanzadoGraphsSvg.graph_identity = PenduloFisicoAvanzadoGraphsSvgView.graph_identity;
PenduloFisicoAvanzadoGraphsSvg.profile = PenduloFisicoAvanzadoGraphsSvgView.profile;

export default PenduloFisicoAvanzadoGraphsSvg;
