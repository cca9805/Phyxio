import OscilacionesGraphsSvg from "./OscilacionesGraphsSvg";

export default function PenduloFisicoGraphsSvg(props) {
  return <OscilacionesGraphsSvg {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-fisico"} />;
}
