import profile from "@/v2/components/SVG/profiles/ecuacionDeOndaElectromagnetica.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Onda plana electromagnética",
      en: "Plane Electromagnetic Wave",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se visualiza una onda electromagnética que se propaga y transporta energía mediante su campo?",
      en: "How is a propagating electromagnetic wave visualized as it transports energy through its field?",
    },
    magnitud_estrella: "c",
    variable_control: "sharedParams",
  },
};

const EcuacionDeOndaElectromagneticaGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "EcuacionDeOndaElectromagneticaGraphsSvgContract",
});

EcuacionDeOndaElectromagneticaGraphsSvgContract.graphContract = graphContract;
EcuacionDeOndaElectromagneticaGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default EcuacionDeOndaElectromagneticaGraphsSvgContract;
