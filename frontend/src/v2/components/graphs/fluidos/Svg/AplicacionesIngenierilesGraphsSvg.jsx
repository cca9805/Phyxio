import profile from "@/v2/components/SVG/profiles/aplicaciones-ingenieriles.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";



const AplicacionesIngenierilesGraphsSvg = createSvgGraph({
  profile,
  displayName: "AplicacionesIngenierilesGraphsSvg",
});

AplicacionesIngenierilesGraphsSvg.profile = profile;


export default AplicacionesIngenierilesGraphsSvg;
