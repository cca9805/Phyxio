import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord.jsx";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Cuando alcanza un oscilador forzado su maxima respuesta y como la limita el amortiguamiento",
    en: "When a forced oscillator reaches its maximum response and how damping limits it",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function ResonanciaOscGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/resonancia"} />;
}
