import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function PenduloFisicoGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-fisico"} />;
}
