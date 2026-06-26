import profile from "@/v2/components/SVG/profiles/sistemasNoInerciales.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const SistemasNoInercialesIntroGraphsSvg = createSvgGraph({
  profile,
  displayName: "SistemasNoInercialesIntroGraphsSvg",
});

SistemasNoInercialesIntroGraphsSvg.profile = profile;


export default SistemasNoInercialesIntroGraphsSvg;
