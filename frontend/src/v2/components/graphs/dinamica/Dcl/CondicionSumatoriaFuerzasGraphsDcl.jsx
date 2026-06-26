import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const CondicionSumatoriaFuerzasGraphsDcl = createDclGraph({
  displayName: "CondicionSumatoriaFuerzasGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-condicion-sumatoria-fuerzas",
        leafId: "condicion-sumatoria-fuerzas",
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

export default CondicionSumatoriaFuerzasGraphsDcl;
