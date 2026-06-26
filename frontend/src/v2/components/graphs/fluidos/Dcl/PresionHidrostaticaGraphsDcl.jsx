import profile from "@/v2/components/DCL/profiles/presion-hidrostatica.dcl.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";

/**
 * DCL force declarations for hydrostatic pressure:
 * Forces: fuerza de presion, peso (weight).
 * Vectors: v_presion, v_peso.
 */
const PresionHidrostaticaGraphsDcl = createDclGraph({
  displayName: "PresionHidrostaticaGraphsDcl",
  profile,
});

export default PresionHidrostaticaGraphsDcl;
