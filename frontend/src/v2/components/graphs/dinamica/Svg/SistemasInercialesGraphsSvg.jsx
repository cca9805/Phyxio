import profile from "@/v2/components/SVG/profiles/sistemasInerciales.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const SistemasInercialesGraphsSvg = createSvgGraph({
  profile,
  displayName: "SistemasInercialesGraphsSvg",
});

SistemasInercialesGraphsSvg.profile = profile;


export default SistemasInercialesGraphsSvg;
