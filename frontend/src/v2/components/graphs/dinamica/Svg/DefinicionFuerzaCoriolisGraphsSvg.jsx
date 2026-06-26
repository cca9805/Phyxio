import profile from "@/v2/components/SVG/profiles/definicionFuerzaCoriolis.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const DefinicionFuerzaCoriolisGraphsSvg = createSvgGraph({
  profile,
  displayName: "DefinicionFuerzaCoriolisGraphsSvg",
});

DefinicionFuerzaCoriolisGraphsSvg.profile = profile;


export default DefinicionFuerzaCoriolisGraphsSvg;
