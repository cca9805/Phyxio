import OscilacionesGraphsSvg from "./OscilacionesGraphsSvg";

export default function PenduloFisicoAvanzadoGraphsSvg(props) {
  return <OscilacionesGraphsSvg {...props} leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-fisico-avanzado"} />;
}
