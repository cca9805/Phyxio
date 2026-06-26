import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";
import profile from "./superposicion.coord.profile.jsx";

const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const clampSigned = (value, fallback) => {
  const n = Number.isFinite(value) ? value : fallback;
  return Math.min(0.03, Math.max(-0.03, n));
};

const clampAmplitude = (value, fallback) => {
  const n = Number.isFinite(value) ? value : fallback;
  return Math.min(0.05, Math.max(0, n));
};

const fmtMm = (value) => (Number.isFinite(value) ? (value * 1000).toFixed(1).replace(".", ",") : "-");

const computeSuperposition = (pNum) => {
  const y_2 = clampSigned(pNum.y_2, 0.012);
  const A_1 = clampAmplitude(pNum.A_1, 0.018);
  const A_2 = clampAmplitude(pNum.A_2, 0.012);
  const y1Sample = 0.018;
  const y_resultante = y1Sample + y_2;
  const A_resultante = A_1 + A_2;
  const I_relativa = A_resultante * A_resultante;

  const data = Array.from({ length: 61 }, (_, index) => {
    const y_1 = -0.03 + (0.06 * index) / 60;
    return {
      x: y_1,
      y_resultante: y_1 + y_2,
      referencia_y2: y_2,
    };
  });

  return {
    data,
    extra: {
      interpretationTarget: "y_resultante",
      interpretationValue: y_resultante,
      graphState: {
        y_1: y1Sample,
        y_2,
        y_resultante,
        A_1,
        A_2,
        A_resultante,
        I_relativa,
      },
    },
  };
};

const SuperposicionGraphsCoord = createCoordGraphPage({
  displayName: "SuperposicionGraphsCoord",
  title: {
    es: "Superposicion lineal",
    en: "Linear superposition",
  },
  defaultParams: {
    y_2: 0.012,
    A_1: 0.018,
    A_2: 0.012,
  },
  controls: [
    { id: "y_2", label: { es: "y_2 (m)", en: "y_2 (m)" }, min: -0.03, max: 0.03, step: 0.001 },
    { id: "A_1", label: { es: "A_1 (m)", en: "A_1 (m)" }, min: 0, max: 0.05, step: 0.001 },
    { id: "A_2", label: { es: "A_2 (m)", en: "A_2 (m)" }, min: 0, max: 0.05, step: 0.001 },
  ],
  compute: computeSuperposition,
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const y_2 = clampSigned(pNum.y_2, 0.012);
    const A_1 = clampAmplitude(pNum.A_1, 0.018);
    const A_2 = clampAmplitude(pNum.A_2, 0.012);
    const y1Sample = 0.018;
    const y_resultante = y1Sample + y_2;
    const A_resultante = A_1 + A_2;
    const I_relativa = A_resultante * A_resultante;
    const minBar = -0.03;
    const maxBar = 0.06;
    const toWidth = (value) => `${Math.max(2, ((value - minBar) / (maxBar - minBar)) * 100)}%`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">{tt("Perturbacion resultante", "Resultant disturbance")}</div>
        <div className="muted">
          {tt("y_1 de lectura", "reading y_1")} = {fmtMm(y1Sample)} mm
          {" - "}
          y_2 = {fmtMm(y_2)} mm
          {" - "}
          y = {fmtMm(y_resultante)} mm
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          {data.filter((_, index) => index % 10 === 0).map((point) => (
            <div
              key={point.x}
              style={{
                display: "grid",
                gridTemplateColumns: "76px 1fr 72px",
                gap: 8,
                alignItems: "center",
                fontSize: 13,
              }}
            >
              <span>y_1 {fmtMm(point.x)} mm</span>
              <div style={{ height: 12, borderRadius: 999, background: "rgba(148,163,184,0.18)", overflow: "hidden" }}>
                <div
                  style={{
                    width: toWidth(point.y_resultante),
                    height: "100%",
                    background: "#0f766e",
                  }}
                />
              </div>
              <strong>{fmtMm(point.y_resultante)} mm</strong>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, opacity: 0.92 }}>
          {tt("En fase", "In phase")}: A = {fmtMm(A_resultante)} mm
          {" - "}
          {tt("I relativa", "relative I")} = {I_relativa.toExponential(2)}
        </div>

        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {tt("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});

SuperposicionGraphsCoord.graph_identity = profile.graph_identity;
SuperposicionGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
SuperposicionGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;

export default SuperposicionGraphsCoord;


