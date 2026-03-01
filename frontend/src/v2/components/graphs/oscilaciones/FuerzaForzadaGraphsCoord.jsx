import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function FuerzaForzadaGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/fuerza-forzada"} />;
}
