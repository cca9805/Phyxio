import profile from "@/v2/components/SVG/profiles/espejos.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Espejos",
      en: "Mirrors",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determinan la distancia del objeto al espejo y la curvatura de la superficie la posicion y el tamano de la imagen formada?",
      en: "How do the object distance and the surface curvature determine the position and size of the image formed?",
    },
    magnitud_estrella: "d_i",
    variable_control: "d_o",
  },
};

const EspejosGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "EspejosGraphsSvgContract",
});

EspejosGraphsSvgContract.graphContract = graphContract;
EspejosGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default EspejosGraphsSvgContract;
