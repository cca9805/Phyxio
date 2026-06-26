import React from "react";
import SvgProfileRenderer from "@/v2/components/SVG/SvgProfileRenderer";
import profile from "@/v2/components/SVG/profiles/definicionTorque.svg.profile.jsx";

export default function DefinicionTorqueSvg({
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
