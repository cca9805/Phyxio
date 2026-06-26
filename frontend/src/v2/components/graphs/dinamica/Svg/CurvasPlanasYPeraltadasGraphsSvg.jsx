import profile from "@/v2/components/SVG/profiles/curvasPlanasYPeraltadas.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const CurvasPlanasYPeraltadasGraphsSvg = createSvgGraph({
  profile,
  displayName: "CurvasPlanasYPeraltadasGraphsSvg",
});

CurvasPlanasYPeraltadasGraphsSvg.profile = profile;


export default CurvasPlanasYPeraltadasGraphsSvg;
