import { createDclGraph } from "../../graphFactories.jsx";
import profile from "./RozamientoYDisipacionDclProfile.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "Como cuantifica el rozamiento la perdida de energia mecanica y su conversion en disipacion",
    en: "How friction quantifies mechanical energy loss and its conversion into dissipation",
  },
  variable_control: "mu",
  magnitud_estrella: "Edis",
  formula: "Edis = mu m g d",
  target_interpretable: true,
};

// force normal weight friction vector

const RozamientoYDisipacionGraphsDcl = createDclGraph({
  profile,
  displayName: "RozamientoYDisipacionGraphsDcl",
});

RozamientoYDisipacionGraphsDcl.graph_identity = graph_identity;

export default RozamientoYDisipacionGraphsDcl;

