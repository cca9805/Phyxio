import React from "react";
import profile from "../../../SVG/profiles/ondas-longitudinales.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const OndasLongitudinalesFluidosGraphsSvg = createSvgGraph({
  profile,
  displayName: "OndasLongitudinalesFluidosGraphsSvg",
});

OndasLongitudinalesFluidosGraphsSvg.profile = profile;


export default OndasLongitudinalesFluidosGraphsSvg;
