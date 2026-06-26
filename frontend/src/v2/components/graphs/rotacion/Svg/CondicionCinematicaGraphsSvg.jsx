import profile from "@/v2/components/SVG/profiles/condicionCinematica.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const CondicionCinematicaGraphsSvg = createSvgGraph({
  profile,
  displayName: "CondicionCinematicaGraphsSvg",
});

CondicionCinematicaGraphsSvg.profile = profile;


export default CondicionCinematicaGraphsSvg;
