import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/particleFree.profile";

export default createDclGraph({
  displayName: "ConceptoFuerzasFicticiasGraphsDcl",
  profile,
  mapProfile: (baseProfile) => ({
    ...baseProfile,
    meta: {
      ...(baseProfile?.meta || {}),
      id: "dcl-concepto-fuerzas-ficticias",
      leafId: "concepto-fuerzas-ficticias",
    },
    options: {
      ...(baseProfile?.options || {}),
      displayMode: "student",
      enableVectorSelection: true,
      showTypicalErrors: true,
      showTheoryLink: true,
    },
  }),
});
