import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/estrategiaParaProblemasDeRodadura.profile.js";

// Forces declared by the DCL profile: WEIGHT, NORMAL, FRICTION, and acceleration cue.
export default createDclGraph({
  displayName: "EstrategiaParaProblemasDeRodaduraGraphsDcl",
  profile,
});
