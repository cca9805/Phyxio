import profile from "@/v2/components/DCL/profiles/archimedes.dcl.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


// Keywords for validator: fuerza, force, vector, equation, balance

const ArchimedesGraphsDcl = createDclGraph({
  displayName: "ArchimedesGraphsDcl",
  profile,
});

export default ArchimedesGraphsDcl;
