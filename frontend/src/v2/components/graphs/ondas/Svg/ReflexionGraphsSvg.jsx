import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./reflexion.svg.profile.jsx";

const ReflexionGraphsSvg = createSvgGraph({
  profile,
  displayName: "ReflexionGraphsSvg",
});

ReflexionGraphsSvg.graph_identity = profile.graph_identity;
ReflexionGraphsSvg.pregunta_principal = profile.pregunta_principal;
ReflexionGraphsSvg.magnitud_estrella = profile.magnitud_estrella;

export default ReflexionGraphsSvg;


