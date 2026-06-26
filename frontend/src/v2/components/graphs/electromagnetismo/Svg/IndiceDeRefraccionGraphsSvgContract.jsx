import profile from "@/v2/components/SVG/profiles/indice-de-refraccion.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Índice de refracción",
      en: "Refractive Index",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina el indice de refraccion la velocidad y la trayectoria de la luz al cruzar una interfaz?",
      en: "How does the refractive index determine the speed and trajectory of light when crossing an interface?",
    },
    magnitud_estrella: "indice_de_refraccion",
    variable_control: "theta_1",
  },
};

const IndiceDeRefraccionGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "IndiceDeRefraccionGraphsSvgContract",
});

IndiceDeRefraccionGraphsSvgContract.graphContract = graphContract;
IndiceDeRefraccionGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default IndiceDeRefraccionGraphsSvgContract;
