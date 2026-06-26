import profile from "../../../SVG/profiles/concepto-de-fluido.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const ConceptoDeFluidoGraphsSvg = createSvgGraph({
  profile,
  displayName: "ConceptoDeFluidoGraphsSvg",
});

ConceptoDeFluidoGraphsSvg.profile = profile;


export default ConceptoDeFluidoGraphsSvg;
