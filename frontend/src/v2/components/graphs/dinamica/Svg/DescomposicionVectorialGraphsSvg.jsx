import profile from "@/v2/components/SVG/profiles/descomposicionVectorial.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const DescomposicionVectorialGraphsSvg = createSvgGraph({
  profile,
  displayName: "DescomposicionVectorialGraphsSvg",
});

DescomposicionVectorialGraphsSvg.profile = profile;


export default DescomposicionVectorialGraphsSvg;
