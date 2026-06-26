import React from "react";
import profile from "@/v2/components/SVG/profiles/diagramasCuerpoLibre.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const DiagramasCuerpoLibreGraphsSvg = createSvgGraph({
  profile,
  displayName: "DiagramasCuerpoLibreGraphsSvg",
});

DiagramasCuerpoLibreGraphsSvg.profile = profile;


export default DiagramasCuerpoLibreGraphsSvg;
