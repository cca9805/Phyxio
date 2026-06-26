import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const InterpretacionFuerzasFicticiasGraphsDcl = createDclGraph({
  displayName: "InterpretacionFuerzasFicticiasGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-interpretacion-fuerzas-ficticias",
        leafId: "interpretacion",
      },
      options: {
        ...(profile?.options || {}),
        displayMode: "student",
        enableVectorSelection: true,
        showTypicalErrors: true,
        showTheoryLink: true,
      },
    };
  },
});

export default InterpretacionFuerzasFicticiasGraphsDcl;
