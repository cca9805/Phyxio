import profile from "@/v2/components/DCL/profiles/sistemasNoInerciales.profile";
import { createDclGraph } from "../../graphFactories.jsx";


// Force-vector DCL wrapper for non-inertial-frame scenes with real and fictitious forces.
const SistemasNoInercialesIntroGraphsDcl = createDclGraph({
  displayName: "SistemasNoInercialesIntroGraphsDcl",
  profile,
});

export default SistemasNoInercialesIntroGraphsDcl;
