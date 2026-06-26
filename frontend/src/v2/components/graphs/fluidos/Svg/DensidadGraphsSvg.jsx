import profile from "../../../SVG/profiles/densidad.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const DensidadGraphsSvg = createSvgGraph({
  profile,
  displayName: "DensidadGraphsSvg",
});

DensidadGraphsSvg.profile = profile;


export default DensidadGraphsSvg;
