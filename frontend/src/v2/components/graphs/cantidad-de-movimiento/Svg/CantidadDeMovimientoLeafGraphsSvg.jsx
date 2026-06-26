import profile from "@/v2/components/SVG/profiles/definicionMomentoAngular.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const CantidadDeMovimientoLeafGraphsSvg = createSvgGraph({
  profile,
  displayName: "CantidadDeMovimientoLeafGraphsSvg",
});

CantidadDeMovimientoLeafGraphsSvg.profile = profile;


export default CantidadDeMovimientoLeafGraphsSvg;
