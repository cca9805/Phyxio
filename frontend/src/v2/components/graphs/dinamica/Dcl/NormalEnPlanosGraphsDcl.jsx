import profile from "@/v2/components/DCL/profiles/normalForce.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const NormalEnPlanosGraphsDcl = createDclGraph({
  displayName: "NormalEnPlanosGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-normal-en-planos",
        leafId: "normal-en-planos",
        title: {
          es: "DCL · Normal en planos",
          en: "FBD · Normal Force on Inclined Planes",
        },
        pregunta_principal: {
          es: "¿Como determina la geometria del plano la fuerza normal?",
          en: "How does plane geometry determine the normal force?",
        },
      },
      params: {
        theta: "theta",
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

export default NormalEnPlanosGraphsDcl;
