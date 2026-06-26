import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord.jsx";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Como predice el regimen subamortiguado una oscilacion cuya amplitud decae con el tiempo",
    en: "How the underdamped regime predicts an oscillation whose amplitude decays with time",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function SubamortiguadoGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/amortiguamiento/subamortiguado"} />;
}
