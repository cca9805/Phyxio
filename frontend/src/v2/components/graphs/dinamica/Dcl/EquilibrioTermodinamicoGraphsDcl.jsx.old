import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/equilibrio-termodinamico.dcl.profile";

export const graphContract = {
  forceSemantics: ["fuerza de presion izquierda", "fuerza de presion derecha", "net pressure force"],
  equationSemantics: ["DeltaP = 0", "force balance on movable boundary"],
};

export default createDclGraph({
  displayName: "EquilibrioTermodinamicoGraphsDcl",
  profile,
  mapProfile: (baseProfile, { sharedParams, paramsIn }) => {
    const calc = sharedParams?.__calc || paramsIn?.__calc || {};
    return {
      ...baseProfile,
      params: {
        ...(baseProfile.params || {}),
        __calc: calc,
      },
    };
  },
});
