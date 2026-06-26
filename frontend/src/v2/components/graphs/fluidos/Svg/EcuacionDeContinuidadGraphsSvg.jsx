//
// Gráfico SVG dedicado: Ecuación de Continuidad
// Delega en SvgProfileRenderer con el profile propio del leaf.
//
import profile from "@/v2/components/SVG/profiles/ecuacion-de-continuidad.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";



const EcuacionDeContinuidadGraphsSvg = createSvgGraph({
  profile,
  displayName: "EcuacionDeContinuidadGraphsSvg",
});

EcuacionDeContinuidadGraphsSvg.profile = profile;


export default EcuacionDeContinuidadGraphsSvg;
