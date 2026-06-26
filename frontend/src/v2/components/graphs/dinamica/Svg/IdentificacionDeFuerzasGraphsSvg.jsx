import React from "react";
import profile from "@/v2/components/SVG/profiles/identificacionDeFuerzas.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const IdentificacionDeFuerzasGraphsSvg = createSvgGraph({
  profile,
  displayName: "IdentificacionDeFuerzasGraphsSvg",
});

IdentificacionDeFuerzasGraphsSvg.profile = profile;


export default IdentificacionDeFuerzasGraphsSvg;
