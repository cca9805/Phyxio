import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/sistemasAisladosYFuerzasExternas.profile";

/**
 * DCL force declarations:
 * Fuerzas: peso, normal, par interno (F₁₂, F₂₁), fuerza externa (F_ext)
 * Forces: weight, normal, internal pair (F₁₂, F₂₁), external force (F_ext)
 * Internal forces cancel (3rd law); only F_ext alters ΣP.
 */

export default createDclGraph({
  displayName: "SistemasAisladosYFuerzasExternasGraphsDcl",
  profile,
});
