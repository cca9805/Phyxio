import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";

export default function EnergiaEnMhsGraphsCoord(props) {
  return <OscilacionesGraphsCoord {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/mhs/energia-en-mhs"} />;
}
