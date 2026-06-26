import { createSvgGraph } from "../graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/poleasSimples.svg.profile.jsx";
import {
  SVG_GRAPH_CONTRACT_TEMPLATE_V1,
  GRAPH_COHERENCE_PROTOCOL_V1,
} from "./graphContractTemplates.js";

// Plantilla operativa:
// 1. Sustituye el import de `profile` por el profile real del leaf.
// 2. Ajusta `displayName` al nombre final del wrapper.
// 3. Si el leaf necesita mutar meta/opciones del profile, usa `mapProfile`.
// 4. Rellena la ficha SVG en `SVG_GRAPH_CONTRACT_TEMPLATE_V1` y verifica cada bloque del
//    protocolo `GRAPH_COHERENCE_PROTOCOL_V1` antes de dar el grafico por cerrado.

export const graphContract = {
  ...SVG_GRAPH_CONTRACT_TEMPLATE_V1,
};

export default createSvgGraph({
  displayName: "GraphsSvgTemplate",
  profile,
});
