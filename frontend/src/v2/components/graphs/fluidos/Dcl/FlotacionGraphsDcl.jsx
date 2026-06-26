import profile from "@/v2/components/DCL/profiles/flotacion.dcl.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


const FlotacionGraphsDcl = createDclGraph({
  displayName: "FlotacionGraphsDcl",
  profile,
});

export default FlotacionGraphsDcl;

FlotacionGraphsDcl.forces = ["weight", "buoyancy"];
