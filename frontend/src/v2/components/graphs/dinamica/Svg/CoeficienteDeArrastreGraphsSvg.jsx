import profile from "@/v2/components/SVG/profiles/coeficienteDeArrastre.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const CoeficienteDeArrastreGraphsSvg = createSvgGraph({
  profile,
  displayName: "CoeficienteDeArrastreGraphsSvg",
});

CoeficienteDeArrastreGraphsSvg.profile = profile;


export default CoeficienteDeArrastreGraphsSvg;
