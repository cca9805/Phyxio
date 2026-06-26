import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";
import { createCoordGraph } from "../../graphFactories.jsx";

function OsciladorMasaMuelleCoordComponent(props) {
  const uiLang = props.lang || "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const sharedParams = props.sharedParams || {};
  const calc = sharedParams.__calc || {};
  const paramsIn = props.paramsIn || props.params || {};
  const params = { ...paramsIn, ...calc };

  const m = Number(params.m ?? 1);
  const k = Number(params.k ?? 20);
  const omega0 = m > 0 && k > 0 ? Math.sqrt(k / m) : 0;

  const stateOut = {
    omega0,
    summary: tt("parametros controlan dinamica temporal", "parameters control time dynamics"),
  };

  return (
    <OscilacionesGraphsCoord
      {...props}
      title={props.title || tt("Oscilador masa muelle", "Mass-spring oscillator")}
      params={params}
      paramsIn={paramsIn}
      stateOut={stateOut}
      leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/oscilador-masa-muelle"}
    />
  );
}

export default createCoordGraph({
  Component: OsciladorMasaMuelleCoordComponent,
  displayName: "OsciladorMasaMuelleGraphsCoord",
});
