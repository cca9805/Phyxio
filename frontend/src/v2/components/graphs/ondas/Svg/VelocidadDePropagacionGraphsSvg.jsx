import React from "react";
import SvgProfileRenderer from "../../../SVG/SvgProfileRenderer.jsx";
import profile from "./velocidad-de-propagacion.svg.profile.js";
import { createSvgGraph } from "../../graphFactories.jsx";


// Extractor hints: createSvgGraph(
function VelocidadDePropagacionGraphsSvgView({
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
    v: input?.v ?? calc?.v ?? 2.4,
    Delta_x: input?.Delta_x ?? calc?.Delta_x ?? 2.4,
    Delta_t: input?.Delta_t ?? calc?.Delta_t ?? 1,
    lambda: input?.lambda ?? calc?.lambda ?? 0.8,
    f: input?.f ?? calc?.f ?? 3,
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

VelocidadDePropagacionGraphsSvgView.profile = profile;
VelocidadDePropagacionGraphsSvgView.graph_identity = profile.graph_identity;
VelocidadDePropagacionGraphsSvgView.pregunta_principal = profile.graph_identity.pregunta_principal;
VelocidadDePropagacionGraphsSvgView.magnitud_estrella = profile.graph_identity.magnitud_estrella;

const VelocidadDePropagacionGraphsSvg = createSvgGraph({
  Component: VelocidadDePropagacionGraphsSvgView,
  displayName: "VelocidadDePropagacionGraphsSvg",
});

VelocidadDePropagacionGraphsSvg.graphContract = VelocidadDePropagacionGraphsSvgView.graphContract;
VelocidadDePropagacionGraphsSvg.graph_identity = VelocidadDePropagacionGraphsSvgView.graph_identity;
VelocidadDePropagacionGraphsSvg.profile = VelocidadDePropagacionGraphsSvgView.profile;

export default VelocidadDePropagacionGraphsSvg;
