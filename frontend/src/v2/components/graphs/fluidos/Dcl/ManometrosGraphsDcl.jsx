import profile from "@/v2/components/DCL/profiles/manometros.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


/*
  Contract for phyxio_leaf_validator:
  This Free Body Diagram represents pressure forces (fuerza, vector).
  It uses parameters: F_L, F_R, R_h, W_c.
*/
const ManometrosGraphsDcl = createDclGraph({
  displayName: "ManometrosGraphsDcl",
  profile,
});

export default ManometrosGraphsDcl;
