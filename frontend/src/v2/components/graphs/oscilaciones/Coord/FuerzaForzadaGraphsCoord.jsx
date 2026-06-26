import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord.jsx";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Como determina una fuerza periodica externa la amplitud y el desfase de la respuesta estacionaria",
    en: "How an external periodic force determines the amplitude and phase lag of the steady response",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function FuerzaForzadaGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/fuerza-forzada"} />;
}
