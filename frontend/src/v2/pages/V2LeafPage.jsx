import React from "react";
import V2LeafTabs from "./V2LeafTabs";
import PhyxioAgentFloating from "../agent/PhyxioAgentFloating";
import { normalizeLeafContext } from "../agent/normalizeLeafContext";
import { GraphContextProvider } from "../agent/GraphContextProvider";
import { getUiLanguage } from "../utils/uiLanguage";

export default function V2LeafPage(props) {
  const lang = getUiLanguage();
  const {
    meta,
    teoria,
    procedimiento,
    modelos,
    errores,
    ejemplos,
    aplicaciones,
    aplicaciones_fisicas,
    practica,
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

  const interpretationDoc =
    props.interpretationDoc ??
    props.interpretacion ??
    props.interpretacion_yaml ??
    props.interpretacionYAML ??
    props.interpretacionData ??
    null;

  const graphsDoc =
    props.graphs ??
    props.graficos ??
    props.graphsDoc ??
    props.graficosDoc ??
    props.graphsData ??
    props.graficosData ??
    meta?.graphs ??
    meta?.graficos ??
    [];

  const safeGraphsDoc = Array.isArray(graphsDoc) ? graphsDoc : [];

  const leafId =
    meta?.id ||
    props.leaf_id ||
    props.leafId ||
    "segunda-ley-fuerza-masa";

  const agentLeafContextBase = normalizeLeafContext({
    id: leafId,
    language: lang,
    locale: lang,
    meta,
    magnitudes: magnitudesDoc,
    formulas: formulasDoc,

    graphs: safeGraphsDoc,
    graficos: safeGraphsDoc,
    graphsDoc: safeGraphsDoc,

    interpretacion: interpretationDoc,
    teoria,
    modelos,
    errores,
    ejemplos,
    aplicaciones: aplicaciones || aplicaciones_fisicas,
    historia,
  });

  const agentLeafContext = {
    ...agentLeafContextBase,

    graphs: safeGraphsDoc,
    graficos: safeGraphsDoc,
    graphsDoc: safeGraphsDoc,

    hasGraphs: safeGraphsDoc.length > 0,
    graphsCount: safeGraphsDoc.length,
  };

  return (
    <GraphContextProvider>
      <div className="page-root">
        <div className="content-card">
          <V2LeafTabs
            meta={meta}
            teoria={teoria}
            procedimiento={procedimiento}
            modelos={modelos}
            errores={errores}
            ejemplos={ejemplos}
            graphs={safeGraphsDoc}
            graficos={safeGraphsDoc}
            graphsDoc={safeGraphsDoc}
            formulasDoc={formulasDoc}
            magnitudesDoc={magnitudesDoc}
            interpretationDoc={interpretationDoc}
            aplicaciones={aplicaciones || aplicaciones_fisicas}
            practica={practica}
            historia={historia}
          />

          <PhyxioAgentFloating
            leafId={leafId}
            locale={lang}
            level="BACHILLERATO"
            leafContext={agentLeafContext}
          />
        </div>
      </div>
    </GraphContextProvider>
  );
}
