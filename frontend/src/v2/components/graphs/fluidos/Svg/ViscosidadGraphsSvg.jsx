import profile from "../../../SVG/profiles/viscosidad.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const ViscosidadGraphsSvg = createSvgGraph({
  profile,
  displayName: "ViscosidadGraphsSvg",
});

ViscosidadGraphsSvg.profile = profile;


export default ViscosidadGraphsSvg;
