import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se aprovechan la propagacion y reflexion del sonido para convertir tiempo de vuelo en distancia tecnologica o medica?",
    en: "How are sound propagation and reflection used to convert travel time into technological or medical distance?",
  },
  variable_control: "t_vuelo",
  magnitud_estrella: "d_eco",
  formula: "d_eco = v_sonido * t_vuelo / 2",
  target_interpretable: true,
};

const media = [
  { id: "air", label: { es: "aire", en: "air" }, v: 340, color: "#64748b" },
  { id: "water", label: { es: "agua", en: "water" }, v: 1500, color: "#2563eb" },
  { id: "tissue", label: { es: "tejido", en: "tissue" }, v: 1540, color: "#16a34a" },
];

export default createCoordGraphPage({
  displayName: "AplicacionesSonidoGraphsCoord",
  title: {
    es: "Distancia por eco segun el medio",
    en: "Echo distance by medium",
  },
  defaultParams: {
    tMax: 4,
    medium: 1500,
  },
  controls: [
    { id: "tMax", label: { es: "tiempo max s", en: "max time s" }, min: 0.5, max: 8, step: 0.5 },
    { id: "medium", label: { es: "v sonido m/s", en: "sound speed m/s" }, min: 300, max: 1600, step: 10 },
  ],
  compute: (pNum) => {
    const tMax = Number.isFinite(pNum.tMax) ? pNum.tMax : 4;
    const v = Number.isFinite(pNum.medium) ? pNum.medium : 1500;
    const data = Array.from({ length: 48 }, (_, i) => {
      const tv = (i / 47) * tMax;
      return { x: tv, y: (v * tv) / 2 };
    });
    return {
      data,
      extra: {
        interpretationTarget: "d_eco",
        interpretationValue: data[Math.floor(data.length * 0.65)]?.y ?? 0,
        graphState: { tMax, v_sonido: v },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const tMax = Number.isFinite(pNum.tMax) ? pNum.tMax : 4;
    const v = Number.isFinite(pNum.medium) ? pNum.medium : 1500;
    const width = 720;
    const height = 320;
    const left = 56;
    const top = 24;
    const plotW = 610;
    const plotH = 230;
    const yMax = Math.max((Math.max(v, 1540) * tMax) / 2, 1);
    const xOf = (x) => left + (x / Math.max(tMax, 0.1)) * plotW;
    const yOf = (y) => top + plotH - (y / yMax) * plotH;
    const pathFor = (speed) =>
      Array.from({ length: 32 }, (_, i) => {
        const tv = (i / 31) * tMax;
        const d = (speed * tv) / 2;
        return `${i === 0 ? "M" : "L"} ${xOf(tv)} ${yOf(d)}`;
      }).join(" ");
    const selectedPath = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Eco: tiempo de vuelo a distancia", "Echo: travel time to distance")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Distancia de eco frente a tiempo de vuelo", "Echo distance versus travel time")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          {media.map((m) => (
            <path key={m.id} d={pathFor(m.v)} fill="none" stroke={m.color} strokeWidth="2" opacity="0.45" />
          ))}
          <path d={selectedPath} fill="none" stroke="#ef4444" strokeWidth="3" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            {t("tiempo de vuelo t_vuelo", "travel time t_vuelo")}
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            {t("distancia d_eco", "distance d_eco")}
          </text>
          {media.map((m, i) => (
            <text key={m.id} x="550" y={42 + i * 18} fontSize="12" fill={m.color}>
              {t(m.label.es, m.label.en)}
            </text>
          ))}
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("la pendiente es v_sonido/2", "the slope is v_sonido/2")}</strong>
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {t("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});

export { graph_identity };


