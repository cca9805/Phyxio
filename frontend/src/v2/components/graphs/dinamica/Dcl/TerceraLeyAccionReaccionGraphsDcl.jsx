// DCL: TerceraLeyAccionReaccionGraphsDcl
// Forces declared: FAB (force A on B), FBA (force B on A) — action-reaction pair
// Vectors: applied_force FAB on bodyB (right), applied_force FBA on bodyA (left)
import profile from "@/v2/components/DCL/profiles/thirdLawActionReaction.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const TerceraLeyAccionReaccionGraphsDcl = createDclGraph({
  displayName: "TerceraLeyAccionReaccionGraphsDcl",
  profile,
});

export default TerceraLeyAccionReaccionGraphsDcl;
