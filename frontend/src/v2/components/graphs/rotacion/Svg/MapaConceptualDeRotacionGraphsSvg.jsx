import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/mapaConceptualDeRotacion.svg.profile.jsx";

/**
 * Gráfico para el Mapa Conceptual de Rotación.
 * Representa la relación dinámica fundamental entre torque, inercia y aceleración.
 */
export default createSvgGraph({
  displayName: "MapaConceptualDeRotacionGraphsSvg",
  profile,
});
