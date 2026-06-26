import profile from "@/v2/components/DCL/profiles/blockOnIncline.profile";
import { createDclGraph } from "../../graphFactories.jsx";

const SinRozamientoGraphsDcl = createDclGraph({
  displayName: "SinRozamientoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-sin-rozamiento",
        leafId: "sin-rozamiento",
      },
      vectors: vectors
        .filter((v) => v?.id !== "friction_main")
        .map((v) => {
          if (v?.id === "weight_main") {
            return { ...v, magnitudeId: "P", symbol: "P" };
          }
          if (v?.id === "normal_main") {
            return { ...v, magnitudeId: "N", symbol: "N" };
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

export default SinRozamientoGraphsDcl;
