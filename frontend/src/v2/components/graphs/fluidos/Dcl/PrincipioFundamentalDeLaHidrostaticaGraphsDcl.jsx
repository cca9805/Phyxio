import profile from "@/v2/components/DCL/profiles/principio-fundamental-de-la-hidrostatica.dcl.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";

/**
 * DCL force declarations for fundamental hydrostatics:
 * Forces: fuerza neta de presion, peso (weight).
 * Vectors: F_net, W.
 */
const PrincipioFundamentalDeLaHidrostaticaGraphsDcl = createDclGraph({
  displayName: "PrincipioFundamentalDeLaHidrostaticaGraphsDcl",
  profile,
});

export default PrincipioFundamentalDeLaHidrostaticaGraphsDcl;
