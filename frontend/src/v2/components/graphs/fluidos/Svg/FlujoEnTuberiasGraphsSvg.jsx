import profile from "@/v2/components/SVG/profiles/flujo-en-tuberias.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";



const FlujoEnTuberiasGraphsSvg = createSvgGraph({
  profile,
  displayName: "FlujoEnTuberiasGraphsSvg",
});

FlujoEnTuberiasGraphsSvg.profile = profile;


export default FlujoEnTuberiasGraphsSvg;
