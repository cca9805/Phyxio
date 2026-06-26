import profile from "@/v2/components/DCL/profiles/blockOnTable.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const CurvasPlanasYPeraltadasGraphsDcl = createDclGraph({
  displayName: "CurvasPlanasYPeraltadasGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-curvas-planas-y-peraltadas",
        leafId: "curvas-planas-y-peraltadas",
        title: {
          es: "DCL - Curvas planas y peraltadas",
          en: "FBD - Flat and banked curves",
        },
        question: {
          es: "Leer como normal y rozamiento aportan componente radial",
          en: "Read how normal force and friction provide the radial component",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "weight_main") return { ...vector, magnitudeId: "P", symbol: "P" };
        if (vector?.id === "normal_main") return { ...vector, magnitudeId: "N", symbol: "N" };
        if (vector?.id === "friction_main") {
          return {
            ...vector,
            magnitudeId: "f_s",
            symbol: "f_s",
            directionMode: "left",
            style: { ...(vector?.style || {}), visible: true },
          };
        }
        if (vector?.id === "applied_main") {
          return {
            ...vector,
            style: { ...(vector?.style || {}), visible: false },
          };
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

export default CurvasPlanasYPeraltadasGraphsDcl;
