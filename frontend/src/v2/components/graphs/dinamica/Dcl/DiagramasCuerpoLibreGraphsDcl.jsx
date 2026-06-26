
import profile from "@/v2/components/DCL/profiles/diagramasCuerpoLibre.profile";
import { createDclGraph } from "../../graphFactories.jsx";


/**
 * Fuerzas propias del DCL de este leaf:
 * - Peso / Weight: P
 * - Normal: N
 * - Rozamiento / Friction: fk
 * - Tension: T
 * - Fuerza aplicada externa / External applied force: Fext
 */
const DiagramasCuerpoLibreGraphsDcl = createDclGraph({
  displayName: "DiagramasCuerpoLibreGraphsDcl",
  profile,
});

export default DiagramasCuerpoLibreGraphsDcl;
