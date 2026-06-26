import profile from "@/v2/components/SVG/profiles/sistemasConMuelles.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const SistemasConMuellesGraphsSvg = createSvgGraph({
  profile,
  displayName: "SistemasConMuellesGraphsSvg",
});

SistemasConMuellesGraphsSvg.profile = profile;


export default SistemasConMuellesGraphsSvg;
