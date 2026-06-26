import profile from "@/v2/components/DCL/profiles/blockOnIncline.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const ConRozamientoGraphsDcl = createDclGraph({
  displayName: "ConRozamientoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-con-rozamiento",
        leafId: "con-rozamiento",
      },
      vectors: vectors.map((v) => {
        if (v?.id === "friction_main") {
          return { ...v, magnitudeId: "f_r", symbol: "f_r" };
        }
        return v;
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

export default ConRozamientoGraphsDcl;
