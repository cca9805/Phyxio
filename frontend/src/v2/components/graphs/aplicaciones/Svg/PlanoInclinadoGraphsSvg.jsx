import React, { useMemo } from "react";
import profile from "@/v2/components/SVG/profiles/planoInclinado.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const PlanoInclinadoGraphsSvg = createSvgGraph({
  profile,
  displayName: "PlanoInclinadoGraphsSvg",
});

PlanoInclinadoGraphsSvg.profile = profile;


export default PlanoInclinadoGraphsSvg;
