import profile from "@/v2/components/DCL/profiles/sistemasInerciales.profile";
import { createDclGraph } from "../../graphFactories.jsx";


export const graphContract = {
  es: "DCL de fuerzas reales en un sistema inercial: muestra cuando la fuerza neta es nula y por que no aparecen fuerzas ficticias.",
  en: "FBD of real forces in an inertial frame: shows when net force is zero and why fictitious forces do not appear.",
};

const SistemasInercialesGraphsDcl = createDclGraph({
  displayName: "SistemasInercialesGraphsDcl",
  profile,
});

export default SistemasInercialesGraphsDcl;
