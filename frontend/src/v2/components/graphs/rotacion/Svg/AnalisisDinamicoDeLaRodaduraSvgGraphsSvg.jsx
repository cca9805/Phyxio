import profile from "@/v2/components/SVG/profiles/analisisDinamicoDeLaRodadura.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


export const interpretation_binding = {
  paramsIn: ["M", "R", "theta", "beta"],
  stateOut: ["a", "fs", "N"],
  target: "a",
};


const AnalisisDinamicoDeLaRodaduraSvgGraphsSvg = createSvgGraph({
  profile,
  displayName: "AnalisisDinamicoDeLaRodaduraSvgGraphsSvg",
});

AnalisisDinamicoDeLaRodaduraSvgGraphsSvg.profile = profile;


export default AnalisisDinamicoDeLaRodaduraSvgGraphsSvg;
