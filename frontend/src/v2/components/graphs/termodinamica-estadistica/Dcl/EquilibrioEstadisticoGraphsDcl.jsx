import { createDclGraph } from "../../graphFactories.jsx";
import profile from "../../../DCL/profiles/equilibrio-estadistico.dcl.profile.js";

// El DCL muestra dos flechas (fuerzas de flujo de probabilidad i→j y j→i)
// cuya igualdad visualiza el equilibrio estadístico (flujo neto nulo).

export default createDclGraph({
  displayName: "EquilibrioEstadisticoGraphsDcl",
  profile,
});
