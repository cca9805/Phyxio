import profile from "@/v2/components/SVG/profiles/introduccionFisicaModerna.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const IntroduccionAFisicaModernaGraphsSvg = createSvgGraph({
  profile,
  displayName: "IntroduccionAFisicaModernaGraphsSvg",
});

IntroduccionAFisicaModernaGraphsSvg.profile = profile;

export default IntroduccionAFisicaModernaGraphsSvg;
