import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function SubamortiguadoGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/amortiguamiento/subamortiguado"} />;
}
