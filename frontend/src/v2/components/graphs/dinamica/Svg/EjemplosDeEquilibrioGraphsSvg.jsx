import profile from "@/v2/components/SVG/profiles/ejemplosDeEquilibrio.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const EjemplosDeEquilibrioGraphsSvg = createSvgGraph({
  profile,
  displayName: "EjemplosDeEquilibrioGraphsSvg",
});

EjemplosDeEquilibrioGraphsSvg.profile = profile;


export default EjemplosDeEquilibrioGraphsSvg;
