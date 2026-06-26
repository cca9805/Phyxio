import profile from "@/v2/components/SVG/profiles/tubo-de-pitot.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const TuboDePitotGraphsSvg = createSvgGraph({
  profile,
  displayName: "TuboDePitotGraphsSvg",
});

TuboDePitotGraphsSvg.profile = profile;


export default TuboDePitotGraphsSvg;
