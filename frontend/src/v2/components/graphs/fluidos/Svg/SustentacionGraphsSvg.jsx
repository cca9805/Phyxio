import profile from "@/v2/components/SVG/profiles/sustentacion.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const SustentacionGraphsSvg = createSvgGraph({
  profile,
  displayName: "SustentacionGraphsSvg",
});

SustentacionGraphsSvg.profile = profile;


export default SustentacionGraphsSvg;
