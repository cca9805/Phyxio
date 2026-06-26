import profile from "@/v2/components/SVG/profiles/tiposDePalancas.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const TiposDePalancasGraphsSvg = createSvgGraph({
  profile,
  displayName: "TiposDePalancasGraphsSvg",
});

TiposDePalancasGraphsSvg.profile = profile;


export default TiposDePalancasGraphsSvg;
