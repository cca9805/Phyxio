import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function FaseOscilacionesGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/mhs/fase"} />;
}
