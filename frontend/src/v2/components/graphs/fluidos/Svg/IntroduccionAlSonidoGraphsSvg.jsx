import profile from "@/v2/components/SVG/profiles/introduccion-al-sonido.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const IntroduccionAlSonidoGraphsSvg = createSvgGraph({
  profile,
  displayName: "IntroduccionAlSonidoGraphsSvg",
});

IntroduccionAlSonidoGraphsSvg.profile = profile;

export default IntroduccionAlSonidoGraphsSvg;
