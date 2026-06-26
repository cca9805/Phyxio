import { createCoordGraph } from "../../graphFactories.jsx";
import profile from "./flujo-de-energia.coord.profile.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.
// El profile declara XAxis, YAxis y formula para el render Coord.
void t;

const FlujoDeEnergiaGraphsCoord = createCoordGraph({
  profile,
  displayName: "FlujoDeEnergiaGraphsCoord",
});

export default FlujoDeEnergiaGraphsCoord;


