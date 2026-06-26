//
// Gráfico SVG dedicado: Ecuación de Bernoulli
// Delega en SvgProfileRenderer con el profile propio del leaf.
//
import profile from "@/v2/components/SVG/profiles/ecuacion-de-bernoulli.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";



const EcuacionDeBernoulliGraphsSvg = createSvgGraph({
  profile,
  displayName: "EcuacionDeBernoulliGraphsSvg",
});

EcuacionDeBernoulliGraphsSvg.profile = profile;


export default EcuacionDeBernoulliGraphsSvg;
