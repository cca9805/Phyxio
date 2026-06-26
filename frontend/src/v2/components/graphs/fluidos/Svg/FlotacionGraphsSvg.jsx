import profile from "@/v2/components/SVG/profiles/flotacion.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const FlotacionGraphsSvg = createSvgGraph({
  profile,
  displayName: "FlotacionGraphsSvg",
});

FlotacionGraphsSvg.profile = profile;


export default FlotacionGraphsSvg;
