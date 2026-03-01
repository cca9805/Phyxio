import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function PenduloSimpleOscGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-simple"} />;
}
