// Relative acceleration DCL: vectors a_A (absolute force-like cause), a_B (frame acceleration), a_rel (relative vector = a_A - a_B)
// Displays vector arrows for acceleration composition between reference frames
import profile from "@/v2/components/DCL/profiles/aceleracionRelativa.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


const AceleracionRelativaGraphsDcl = createDclGraph({
  displayName: "AceleracionRelativaGraphsDcl",
  profile,
});

export default AceleracionRelativaGraphsDcl;
