import OscilacionesGraphsSvg from "./OscilacionesGraphsSvg";

export default function OsciladorMasaMuelleGraphsSvg(props) {
  return <OscilacionesGraphsSvg {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/oscilador-masa-muelle"} />;
}
