import profile from "@/v2/components/SVG/profiles/sobreCargasEnMovimiento.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

export const graphContract = {
  meta: {
    title: {
      es: "Carga movil en campo magnetico",
      en: "Moving charge in a magnetic field",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se visualiza la fuerza magnetica perpendicular sobre una carga movil?",
      en: "How is the perpendicular magnetic force on a moving charge visualized?",
    },
    magnitud_estrella: "radio_de_trayectoria",
    variable_control: "campo_magnetico",
  },
};

const SobreCargasEnMovimientoGraphsSvgContract = createSvgGraph({
  profile,
  displayName: "SobreCargasEnMovimientoGraphsSvgContract",
});

SobreCargasEnMovimientoGraphsSvgContract.graphContract = graphContract;
SobreCargasEnMovimientoGraphsSvgContract.graph_identity = graphContract.graph_identity;

export default SobreCargasEnMovimientoGraphsSvgContract;
