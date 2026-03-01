import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function OsciladorMasaMuelleGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/oscilador-masa-muelle"} />;
}
