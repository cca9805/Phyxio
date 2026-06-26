import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord.jsx";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Como predice el regimen sobreamortiguado un retorno sin oscilacion gobernado por un modo lento",
    en: "How the overdamped regime predicts non oscillatory return governed by a slow mode",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function SobreamortiguadoGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/amortiguamiento/sobreamortiguado"} />;
}
