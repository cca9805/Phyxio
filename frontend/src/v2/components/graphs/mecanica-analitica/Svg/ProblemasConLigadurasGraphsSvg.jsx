import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./ProblemasConLigadurasGraphsSvg.profile.js";

const ProblemasConLigadurasGraphsSvg = createSvgGraph({
  profile,
  displayName: "ProblemasConLigadurasGraphsSvg",
});

ProblemasConLigadurasGraphsSvg.profile = profile;

export { profile };
export default ProblemasConLigadurasGraphsSvg;
