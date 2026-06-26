import profile from "@/v2/components/SVG/profiles/interpretacionFisica.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Esquema de Ondas",
      en: "Wave Scheme",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se unifican la luz, la electricidad y el magnetismo en un solo marco conceptual?",
      en: "How are light, electricity, and magnetism unified in a single conceptual framework?",
    },
    magnitud_estrella: "vector_de_poynting",
    variable_control: "amplitud_del_campo_electrico",
  },
  graph_infocards: {
    cards: [
      {
        id: "poynting",
        title: { es: "Flujo de energía", en: "Energy Flow" },
        text: { 
          es: "El vector de Poynting describe la dirección y magnitud del transporte energético.",
          en: "The Poynting vector describes the direction and magnitude of energy transport."
        }
      }
    ]
  }
};

const InterpretacionFisicaGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "InterpretacionFisicaGraphsSvgContract"
});

InterpretacionFisicaGraphsSvgContract.graphContract = graphContract;
InterpretacionFisicaGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default InterpretacionFisicaGraphsSvgContract;
