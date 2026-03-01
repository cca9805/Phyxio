import OscilacionesGraphsSvg from "./OscilacionesGraphsSvg";

export default function PenduloSimpleOscGraphsSvg(props) {
  return <OscilacionesGraphsSvg {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-simple"} />;
}
