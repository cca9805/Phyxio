import profile from "@/v2/components/SVG/profiles/hidrodinamica.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";



const HidrodinamicaGraphsSvg = createSvgGraph({
  profile,
  displayName: "HidrodinamicaGraphsSvg",
});

HidrodinamicaGraphsSvg.profile = profile;


export default HidrodinamicaGraphsSvg;
