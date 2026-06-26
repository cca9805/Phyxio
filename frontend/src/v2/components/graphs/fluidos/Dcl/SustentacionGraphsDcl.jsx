import profile from "@/v2/components/DCL/profiles/sustentacion.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const SustentacionGraphsDcl = createDclGraph({
  displayName: "SustentacionGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-sustentacion",
        leafId: "sustentacion",
        title: {
          es: "DCL · Sustentación aerodinámica — fuerzas sobre el ala",
          en: "FBD · Aerodynamic lift — forces on the wing",
        },
        question: {
          es: "¿Qué fuerzas actúan sobre el ala y cómo se equilibran en vuelo nivelado?",
          en: "What forces act on the wing and how do they balance in level flight?",
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

export default SustentacionGraphsDcl;
