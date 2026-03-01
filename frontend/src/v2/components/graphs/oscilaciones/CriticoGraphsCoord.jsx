import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function CriticoGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/amortiguamiento/critico"} />;
}
