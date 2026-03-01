import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function EcuacionMovimientoGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento"} />;
}
