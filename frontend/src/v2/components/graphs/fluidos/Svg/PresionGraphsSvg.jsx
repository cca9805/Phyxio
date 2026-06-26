import profile from "../../../SVG/profiles/presion.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const PresionGraphsSvg = createSvgGraph({
  profile,
  displayName: "PresionGraphsSvg",
});

PresionGraphsSvg.profile = profile;


export default PresionGraphsSvg;
