import React from "react";
import { createCoordGraphPage } from "../graphFactories.jsx";
import {
  COORD_GRAPH_CONTRACT_TEMPLATE_V1,
  GRAPH_COHERENCE_PROTOCOL_V1,
} from "./graphContractTemplates.js";

// Plantilla operativa:
// 1. Ajusta `title`, `defaultParams`, `controls` y `compute` al modelo físico del leaf.
// 2. En `render` usa `data`, `pNum`, `linked` y `loadFromCalculator` para construir la UI específica.
// 3. `extra.interpretationTarget` y `extra.interpretationValue` conectan la lectura del gráfico con interpretación.
// 4. Completa la ficha Coord y cruza el protocolo de coherencia antes de publicar el grafico.

export const graphContract = {
  ...COORD_GRAPH_CONTRACT_TEMPLATE_V1,
};

export default createCoordGraphPage({
  displayName: "GraphsCoordTemplate",
  title: {
    es: "Plantilla Coord",
    en: "Coord Template",
  },
  defaultParams: {
    xMax: 10,
    slope: 1,
  },
  controls: [
    { id: "xMax", label: { es: "Rango x", en: "x range" }, min: 1, max: 20 },
    { id: "slope", label: { es: "Pendiente", en: "Slope" }, min: -5, max: 5 },
  ],
  compute: (pNum) => {
    const xMax = Number.isFinite(pNum.xMax) ? pNum.xMax : 10;
    const slope = Number.isFinite(pNum.slope) ? pNum.slope : 1;
    const data = Array.from({ length: 25 }, (_, index) => {
      const x = (index / 24) * xMax;
      return { x, y: slope * x };
    });

    return {
      data,
      extra: {
        interpretationTarget: "pendiente",
        interpretationValue: slope,
        graphState: { xMax, slope },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => (
    <div className="v2-card" style={{ display: "grid", gap: 10 }}>
      <div className="v2-card-title">Preview</div>
      <div className="muted">
        y = {Number.isFinite(pNum.slope) ? pNum.slope : 1} x
      </div>
      <div style={{ fontSize: 13, opacity: 0.9 }}>
        Puntos generados: <strong>{data.length}</strong>
        {" · "}
        Modo: <strong>{linked ? "calculator" : "experiment"}</strong>
      </div>
      {!linked ? (
        <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
          Cargar desde calculadora
        </button>
      ) : null}
    </div>
  ),
});
