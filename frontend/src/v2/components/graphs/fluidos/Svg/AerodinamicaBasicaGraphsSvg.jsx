import profile from "@/v2/components/SVG/profiles/aerodinamica-basica.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const AerodinamicaBasicaGraphsSvg = createSvgGraph({
  profile,
  displayName: "AerodinamicaBasicaGraphsSvg",
});

AerodinamicaBasicaGraphsSvg.profile = profile;


export default AerodinamicaBasicaGraphsSvg;
