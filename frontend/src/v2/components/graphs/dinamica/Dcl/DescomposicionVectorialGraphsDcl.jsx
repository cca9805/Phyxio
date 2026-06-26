import profile from "@/v2/components/DCL/profiles/vectorDecomposition.profile";
import { createDclGraph } from "../../graphFactories.jsx";


/**
 * DCL de fuerzas para descomposición vectorial.
 * Fuerzas relevantes del leaf:
 * - Peso / Weight: W
 * - Componente paralela del peso: Ppar
 * - Componente perpendicular del peso: Pperp
 * - Normal: N
 * - Tension: T
 * - Componentes cartesianas de fuerza: Fx, Fy
 */
const DescomposicionVectorialGraphsDcl = createDclGraph({
  displayName: "DescomposicionVectorialGraphsDcl",
  profile,
});

export default DescomposicionVectorialGraphsDcl;