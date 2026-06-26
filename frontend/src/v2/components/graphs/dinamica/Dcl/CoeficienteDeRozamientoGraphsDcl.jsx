import profile from "@/v2/components/DCL/profiles/blockOnTable.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const CoeficienteDeRozamientoGraphsDcl = createDclGraph({
  displayName: "CoeficienteDeRozamientoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-coeficiente-de-rozamiento",
        leafId: "coeficiente-de-rozamiento",
        title: {
          es: "DCL · Coeficiente de rozamiento",
          en: "FBD · Coefficient of Friction",
        },
        question: {
          es: "Relacionar rozamiento, normal y coeficiente",
          en: "Relate friction, normal force, and coefficient",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "friction_main") {
          return { ...vector, magnitudeId: "f", symbol: "f" };
        }
        if (vector?.id === "normal_main") {
          return { ...vector, magnitudeId: "N", symbol: "N" };
        }
        return vector;
      }),
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

export default CoeficienteDeRozamientoGraphsDcl;
