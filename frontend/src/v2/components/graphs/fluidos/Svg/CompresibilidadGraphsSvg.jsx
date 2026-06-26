import React from "react";
import SvgProfileRenderer from "../../../SVG/SvgProfileRenderer.jsx";
import profile from "../../../SVG/profiles/compresibilidad.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


function CompresibilidadGraphsSvgView({ onSharedParamsChange, sharedParams, paramsIn, ...props }) {
  // createSvgGraph( legacy-compatible wrapper; paramsIn/sharedParams bridge for validation.
  return (
    <SvgProfileRenderer
      profile={profile}
      sharedParams={sharedParams}
      paramsIn={paramsIn}
      onApplyToCalculator={onSharedParamsChange}
      {...props}
    />
  );
}

const CompresibilidadGraphsSvg = createSvgGraph({
  Component: CompresibilidadGraphsSvgView,
  displayName: "CompresibilidadGraphsSvg",
});

CompresibilidadGraphsSvg.graphContract = CompresibilidadGraphsSvgView.graphContract;
CompresibilidadGraphsSvg.graph_identity = CompresibilidadGraphsSvgView.graph_identity;
CompresibilidadGraphsSvg.profile = CompresibilidadGraphsSvgView.profile;

export default CompresibilidadGraphsSvg;
