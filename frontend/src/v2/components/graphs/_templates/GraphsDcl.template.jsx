import { createDclGraph } from "../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import {
  DCL_GRAPH_CONTRACT_TEMPLATE_V1,
  GRAPH_COHERENCE_PROTOCOL_V1,
} from "./graphContractTemplates.js";

// Plantilla operativa:
// 1. Sustituye el import de `profile` por el profile real del leaf.
// 2. Ajusta `displayName` al nombre final del wrapper.
// 3. Si necesitas personalizar meta/opciones sin duplicar el profile, usa `mapProfile`.
// 4. Completa la ficha DCL y cruza el protocolo de coherencia antes de cerrar el leaf.

export const graphContract = {
  ...DCL_GRAPH_CONTRACT_TEMPLATE_V1,
};

export default createDclGraph({
  displayName: "GraphsDclTemplate",
  profile,
});
