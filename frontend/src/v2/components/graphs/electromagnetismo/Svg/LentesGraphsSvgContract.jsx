import profile from "@/v2/components/SVG/profiles/lentes.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Lentes",
      en: "Lenses",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la distancia focal de una lente delgada la posicion y el tamano de la imagen formada?",
      en: "How does the focal length of a thin lens determine the position and size of the image formed?",
    },
    magnitud_estrella: "d_i",
    variable_control: "d_o",
  },
};

const LentesGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "LentesGraphsSvgContract",
});

LentesGraphsSvgContract.graphContract = graphContract;
LentesGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default LentesGraphsSvgContract;
