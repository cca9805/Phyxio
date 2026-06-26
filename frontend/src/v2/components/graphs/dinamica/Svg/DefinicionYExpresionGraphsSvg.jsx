import profile from "@/v2/components/SVG/profiles/definicionYExpresion.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const DefinicionYExpresionGraphsSvg = createSvgGraph({
  profile,
  displayName: "DefinicionYExpresionGraphsSvg",
});

DefinicionYExpresionGraphsSvg.profile = profile;


export default DefinicionYExpresionGraphsSvg;
