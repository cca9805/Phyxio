import profile from "@/v2/components/DCL/profiles/planoInclinado.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


// DCL - Plano inclinado: balance de fuerzas (Normal, Weight, Friction, applied force P)
const PlanoInclinadoGraphsDcl = createDclGraph({
  displayName: "PlanoInclinadoGraphsDcl",
  profile,
});

export default PlanoInclinadoGraphsDcl;
