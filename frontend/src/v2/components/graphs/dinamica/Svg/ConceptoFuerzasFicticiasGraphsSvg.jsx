import profile from "@/v2/components/SVG/profiles/conceptoFuerzasFicticias.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const ConceptoFuerzasFicticiasGraphsSvg = createSvgGraph({
  profile,
  displayName: "ConceptoFuerzasFicticiasGraphsSvg",
});

ConceptoFuerzasFicticiasGraphsSvg.profile = profile;


export default ConceptoFuerzasFicticiasGraphsSvg;
