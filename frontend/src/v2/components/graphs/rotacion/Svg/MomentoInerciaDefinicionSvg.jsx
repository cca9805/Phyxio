import React from "react";
import SvgProfileRenderer from "@/v2/components/SVG/SvgProfileRenderer";
import profile from "@/v2/components/SVG/profiles/momentoInerciaDefinicion.svg.profile.jsx";

export default function MomentoInerciaDefinicionSvg({
  lang = "es",
  sharedParams = null,
  paramsIn = null,
  onSharedParamsChange = null,
  interpretationDoc = null,
  onGraphStateChange = null,
  onInterpretationContextChange = null,
}) {
  const combinedParams = {
    ...(paramsIn ?? {}),
    ...(sharedParams ?? {}),
  };

  return (
    <SvgProfileRenderer
      profile={profile}
      lang={lang}
      sharedParams={combinedParams}
      interpretationDoc={interpretationDoc}
      onGraphStateChange={onGraphStateChange}
      onInterpretationContextChange={onInterpretationContextChange}
      onApplyToCalculator={onSharedParamsChange}
    />
  );
}
