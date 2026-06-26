import profile from "@/v2/components/SVG/profiles/sistemasReales.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const SistemasRealesGraphsSvg = createSvgGraph({
  profile,
  displayName: "SistemasRealesGraphsSvg",
});

SistemasRealesGraphsSvg.profile = profile;


export default SistemasRealesGraphsSvg;
