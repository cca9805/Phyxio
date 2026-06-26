import profile from "@/v2/components/DCL/profiles/aerodinamica-basica.profile.js";
import { createDclGraph } from "../../graphFactories.jsx";


const AerodinamicaBasicaGraphsDcl = createDclGraph({
  displayName: "AerodinamicaBasicaGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-aerodinamica-basica",
        leafId: "aerodinamica-basica",
        title: {
          es: "DCL · Fuerzas Aerodinámicas",
          en: "FBD · Aerodynamic Forces",
        },
        question: {
          es: "¿Cómo se equilibran la sustentación, el arrastre, el peso y el empuje?",
          en: "How do lift, drag, weight, and thrust balance?",
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

export default AerodinamicaBasicaGraphsDcl;
