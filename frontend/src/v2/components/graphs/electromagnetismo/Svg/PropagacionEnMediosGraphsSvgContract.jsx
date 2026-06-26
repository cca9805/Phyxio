import profile from "@/v2/components/SVG/profiles/propagacionEnMedios.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Propagacion en medios",
      en: "Propagation in Media",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como cambia la propagacion de una onda electromagnetica al entrar en un medio material?",
      en: "How does electromagnetic-wave propagation change when entering a material medium?",
    },
    magnitud_estrella: "lambda_m",
    variable_control: "indice_de_refraccion_efectivo",
  },
};

const PropagacionEnMediosGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "PropagacionEnMediosGraphsSvgContract",
});

PropagacionEnMediosGraphsSvgContract.graphContract = graphContract;
PropagacionEnMediosGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default PropagacionEnMediosGraphsSvgContract;
