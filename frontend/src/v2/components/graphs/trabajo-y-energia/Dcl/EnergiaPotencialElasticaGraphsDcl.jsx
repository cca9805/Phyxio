import { createDclGraph } from "../../graphFactories.jsx";
import profile from "./EnergiaPotencialElasticaDclProfile";

const graph_identity = {
  pregunta_principal: {
    es: "Como se representa en el DCL la fuerza elastica que acompana la deformacion de un resorte?",
    en: "How is the elastic force that accompanies a spring deformation represented in the FBD?",
  },
  variable_control: "x",
  magnitud_estrella: "We",
  formula: "We = -dUe",
  target_interpretable: true,
};

const EnergiaPotencialElasticaGraphsDcl = createDclGraph({
  profile,
  displayName: "EnergiaPotencialElasticaGraphsDcl",
});

EnergiaPotencialElasticaGraphsDcl.graph_identity = graph_identity;

export default EnergiaPotencialElasticaGraphsDcl;

