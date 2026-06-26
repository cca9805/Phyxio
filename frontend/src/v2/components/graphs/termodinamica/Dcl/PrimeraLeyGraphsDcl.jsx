import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/primera-ley-de-la-termodinamica.dcl.profile";

export const graph_identity = {
  pregunta_principal: {
    es: "Como se distribuyen el calor y el trabajo que cruzan la frontera para determinar la variacion de energia interna del sistema?",
    en: "How do the heat and work that cross the boundary determine the change in internal energy of the thermodynamic system?",
  },
  variable_control: "Q",
  magnitud_estrella: "DeltaU",
  formula: "DeltaU = Q + W",
  target_interpretable: true,
};

export const graphContract = {
  forceSemantics: ["calor que cruza la frontera", "trabajo sobre el sistema", "variacion de energia interna"],
  equationSemantics: ["DeltaU = Q + W", "first law energy balance"],
};

export default createDclGraph({
  displayName: "PrimeraLeyGraphsDcl",
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
