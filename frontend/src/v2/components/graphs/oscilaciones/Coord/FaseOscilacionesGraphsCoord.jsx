import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Como determina phi_t el estado instantaneo y como se interpreta delta_phi entre osciladores del mismo MHS ideal",
    en: "How does phi_t determine instantaneous state and how is delta_phi interpreted between oscillators in the same ideal SHM",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function FaseOscilacionesGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/mhs/fase"} />;
}
