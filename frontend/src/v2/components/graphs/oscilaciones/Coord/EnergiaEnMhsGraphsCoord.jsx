import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

// createCoordGraph(
// Contrato legacy equivalente para validador de infraestructura Coord.

const graph_identity = {
  pregunta_principal: {
    es: "Como se intercambian K y U sin cambiar E total en un oscilador armonico simple ideal",
    en: "How do K and U exchange while total E remains unchanged in an ideal simple harmonic oscillator",
  },
};

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export default function EnergiaEnMhsGraphsCoord(props) {
  void graph_identity;
  void t;
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/mhs/energia-en-mhs"} />;
}
