import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

// createCoordGraph(
// Contrato legacy equivalente: este wrapper puentea params/sharedParams/paramsIn,
// callbacks de estado e interpretacion hacia el grafico generico de ondas.
export default function CambioDeVelocidadGraphsCoord(props) {
  void t;
  const params = React.useMemo(
    () => props.params ?? props.sharedParams ?? props.paramsIn ?? {},
    [props.params, props.sharedParams, props.paramsIn]
  );
  const calc = props.sharedParams?.__calc ?? null;
  const onGraphStateChange = props.onGraphStateChange;
  const onInterpretationContextChange = props.onInterpretationContextChange;

  React.useEffect(() => {
    onGraphStateChange?.({
      target: "v_medio",
      params,
      calc,
      graphState: {
        target: "v_medio",
        dependsOn: ["c_vacio", "n_indice", "lambda_medio"],
      },
    });
    onInterpretationContextChange?.({
      target: "v_medio",
      source: "CambioDeVelocidadGraphsCoord",
    });
  }, [params, calc, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      params={params}
      sharedParams={props.sharedParams}
      paramsIn={props.paramsIn}
      forcedScenario="refraction"
    />
  );
}


