import profile from "@/v2/components/SVG/profiles/presion-hidrostatica.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const PresionHidrostaticaGraphsSvg = createSvgGraph({
  profile,
  displayName: "PresionHidrostaticaGraphsSvg",
});

PresionHidrostaticaGraphsSvg.profile = profile;


export default PresionHidrostaticaGraphsSvg;
