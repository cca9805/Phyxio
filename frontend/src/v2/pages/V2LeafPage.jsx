import React from "react";
import V2LeafTabs from "./V2LeafTabs";

export default function V2LeafPage(props) {
  const {
    meta,
    teoria,
    modelos,
    errores,
    ejemplos,
    aplicaciones,
    historia,
  } = props;

  // ✅ Coge fórmulas/magnitudes vengan como vengan
  const formulasDoc =
    props.formulasDoc ??
    props.formulas ??
    props.formulas_yaml ??
    props.formulasYAML ??
    props.formulasData ??
    null;

  const magnitudesDoc =
    props.magnitudesDoc ??
    props.magnitudes ??
    props.magnitudes_yaml ??
    props.magnitudesYAML ??
    props.magnitudesData ??
    null;

  return (
    <div className="page-root">
      <div className="content-card">
        <V2LeafTabs
          meta={meta}
          teoria={teoria}
          modelos={modelos}
          errores={errores}
          ejemplos={ejemplos}
          formulasDoc={formulasDoc}
          magnitudesDoc={magnitudesDoc}
          aplicaciones={aplicaciones}
          historia={historia}
        />
      </div>
    </div>
  );
}
