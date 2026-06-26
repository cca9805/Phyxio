import profile from "@/v2/components/SVG/profiles/energiaYMomentoDeLaOndaEm.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Energia y momento de la onda EM",
      en: "Energy and Momentum of an EM Wave",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como transporta una onda electromagnetica energia y momento mediante su intensidad?",
      en: "How does an electromagnetic wave transport energy and momentum through its intensity?",
    },
    magnitud_estrella: "p_rad",
    variable_control: "intensidad_media_de_poynting",
  },
};

const EnergiaYMomentoDeLaOndaEmGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "EnergiaYMomentoDeLaOndaEmGraphsSvgContract",
});

EnergiaYMomentoDeLaOndaEmGraphsSvgContract.graphContract = graphContract;
EnergiaYMomentoDeLaOndaEmGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default EnergiaYMomentoDeLaOndaEmGraphsSvgContract;
