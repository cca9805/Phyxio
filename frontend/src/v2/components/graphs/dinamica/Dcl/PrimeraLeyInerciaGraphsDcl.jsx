import profile from "@/v2/components/DCL/profiles/firstLawInertia.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


// Force-vector DCL wrapper for Newton's first law: forces may exist while the net force is zero.
const PrimeraLeyInerciaGraphsDcl = createDclGraph({
  displayName: "PrimeraLeyInerciaGraphsDcl",
  profile,
});

export default PrimeraLeyInerciaGraphsDcl;
