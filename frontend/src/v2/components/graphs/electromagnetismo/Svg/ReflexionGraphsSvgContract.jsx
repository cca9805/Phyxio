import profile from "@/v2/components/SVG/profiles/reflexion.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Reflexión",
      en: "Reflection",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina el angulo de incidencia la direccion del rayo reflejado y cuando se produce reflexion total interna?",
      en: "How does the angle of incidence determine the direction of the reflected ray and when does total internal reflection occur?",
    },
    magnitud_estrella: "theta_r",
    variable_control: "theta_i",
  },
};

const ReflexionGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "ReflexionGraphsSvgContract",
});

ReflexionGraphsSvgContract.graphContract = graphContract;
ReflexionGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default ReflexionGraphsSvgContract;
