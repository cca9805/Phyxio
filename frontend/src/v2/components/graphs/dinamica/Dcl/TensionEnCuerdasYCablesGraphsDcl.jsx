import profile from "@/v2/components/DCL/profiles/hangingMass.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const TensionEnCuerdasYCablesGraphsDcl = createDclGraph({
  displayName: "TensionEnCuerdasYCablesGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-tension-en-cuerdas-y-cables",
        leafId: "tension-en-cuerdas-y-cables",
        title: {
          es: "DCL · Tension en cuerdas y cables",
          en: "FBD · Tension in Ropes and Cables",
        },
        question: {
          es: "Comparar tension y peso en sistemas tensados",
          en: "Compare tension and weight in tensioned systems",
        },
      },
      options: {
        ...(profile?.options || {}),
        displayMode: "student",
        enableVectorSelection: true,
        showCompactLegend: true,
        showTypicalErrors: true,
        showTheoryLink: true,
      },
    };
  
  },
});

export default TensionEnCuerdasYCablesGraphsDcl;
