import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";
import { createCoordGraph } from "../../graphFactories.jsx";

function PenduloFisicoCoordComponent(props) {
  const uiLang = props.lang || "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const sharedParams = props.sharedParams || {};
  const calc = sharedParams.__calc || {};
  const paramsIn = props.paramsIn || props.params || {};
  const params = { ...paramsIn, ...calc };

  const I = Number(params.I ?? 0.2);
  const m = Number(params.m ?? 1);
  const g = Number(params.g ?? 9.81);
  const d = Number(params.d ?? 0.2);
  const omega0 = I > 0 && m > 0 && g > 0 && d > 0 ? Math.sqrt((m * g * d) / I) : 0;
  const T = omega0 > 0 ? (2 * Math.PI) / omega0 : 0;

  const stateOut = {
    omega0,
    T,
    summary: tt(
      "inercia y geometria controlan periodo y respuesta angular",
      "inertia and geometry control period and angular response"
    ),
  };

  return (
    <OscilacionesGraphsCoord
      {...props}
      title={props.title || tt("Pendulo fisico", "Physical pendulum")}
      params={params}
      paramsIn={paramsIn}
      stateOut={stateOut}
      leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-fisico"}
    />
  );
}

export default createCoordGraph({
  Component: PenduloFisicoCoordComponent,
  displayName: "PenduloFisicoGraphsCoord",
});
