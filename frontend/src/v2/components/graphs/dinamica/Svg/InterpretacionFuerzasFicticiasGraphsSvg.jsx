import profile from "@/v2/components/SVG/profiles/interpretacionFuerzasFicticias.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const InterpretacionFuerzasFicticiasGraphsSvg = createSvgGraph({
  profile,
  displayName: "InterpretacionFuerzasFicticiasGraphsSvg",
});

InterpretacionFuerzasFicticiasGraphsSvg.profile = profile;


export default InterpretacionFuerzasFicticiasGraphsSvg;
