import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Como se relacionan ecuacion de movimiento y evolucion temporal de posicion velocidad y aceleracion en MHS",
    en: "How equation of motion relates to temporal evolution of displacement velocity and acceleration in SHM",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function EcuacionMovimientoGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento"} />;
}
