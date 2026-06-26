import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";
import profile from "./cambio-de-velocidad.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


// createSvgGraph(
// Contrato legacy equivalente: este wrapper puentea params/sharedParams/paramsIn,
// callbacks de estado e interpretacion hacia el grafico SVG generico de ondas.
function CambioDeVelocidadGraphsSvgView(props) {
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
      source: "CambioDeVelocidadGraphsSvg",
    });
  }, [params, calc, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsSvg
      {...props}
      params={params}
      sharedParams={props.sharedParams}
      paramsIn={props.paramsIn}
      forcedScenario="refraction"
    />
  );
}

CambioDeVelocidadGraphsSvgView.graph_identity = profile.graph_identity;
CambioDeVelocidadGraphsSvgView.pregunta_principal = profile.pregunta_principal;
CambioDeVelocidadGraphsSvgView.magnitud_estrella = profile.magnitud_estrella;
CambioDeVelocidadGraphsSvgView.infoCards = profile.infoCards;

const CambioDeVelocidadGraphsSvg = createSvgGraph({
  Component: CambioDeVelocidadGraphsSvgView,
  displayName: "CambioDeVelocidadGraphsSvg",
});

CambioDeVelocidadGraphsSvg.graphContract = CambioDeVelocidadGraphsSvgView.graphContract;
CambioDeVelocidadGraphsSvg.graph_identity = CambioDeVelocidadGraphsSvgView.graph_identity;
CambioDeVelocidadGraphsSvg.profile = CambioDeVelocidadGraphsSvgView.profile;

export default CambioDeVelocidadGraphsSvg;
