import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./PenduloGraphsSvg.profile.js";

const PenduloGraphsSvg = createSvgGraph({
  profile,
  displayName: "PenduloGraphsSvg",
});

PenduloGraphsSvg.profile = profile;

export { profile };
export default PenduloGraphsSvg;
