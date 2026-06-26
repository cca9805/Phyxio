import profile from "@/v2/components/SVG/profiles/poleasCompuestas.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const PoleasCompuestasGraphsSvg = createSvgGraph({
  profile,
  displayName: "PoleasCompuestasGraphsSvg",
});

PoleasCompuestasGraphsSvg.profile = profile;


export default PoleasCompuestasGraphsSvg;
