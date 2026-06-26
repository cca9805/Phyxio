// DCL: fuerza aplicada (F), brazo de palanca (b), fuerza perpendicular (F_perp), reaccion en pivote
import profile from "@/v2/components/DCL/profiles/definicionTorque.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const DefinicionTorqueGraphsDcl = createDclGraph({
  displayName: "DefinicionTorqueGraphsDcl",
  profile,
});

export default DefinicionTorqueGraphsDcl;
