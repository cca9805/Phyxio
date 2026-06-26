import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord.jsx";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Que condicion fisica define el amortiguamiento critico y como cambia la respuesta temporal del sistema frente a otros regimenes",
    en: "What physical condition defines critical damping and how it changes the system time response compared with other regimes",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function CriticoGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/amortiguamiento/critico"} />;
}
