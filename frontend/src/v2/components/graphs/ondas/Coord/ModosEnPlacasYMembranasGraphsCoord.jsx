import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como determinan la geometria y el material las frecuencias modales de placas y membranas?",
    en: "How do geometry and material properties determine modal frequencies in plates and membranes?",
  },
  variable_control: "m",
  magnitud_estrella: "D_placa",
  formula: "f_mn grows with modal indices and material stiffness",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "ModosEnPlacasYMembranasGraphsCoord",
  title: {
    es: "Espectro modal bidimensional",
    en: "Two-dimensional modal spectrum",
  },
  defaultParams: {
    stiffness: 1.0,
    mass: 1.0,
    aspect: 1.0,
    maxMode: 5,
  },
  controls: [
    { id: "stiffness", label: { es: "rigidez relativa", en: "relative stiffness" }, min: 0.4, max: 2.5, step: 0.1 },
    { id: "mass", label: { es: "masa superficial relativa", en: "relative surface mass" }, min: 0.4, max: 2.5, step: 0.1 },
    { id: "aspect", label: { es: "a/b", en: "a/b" }, min: 0.6, max: 1.8, step: 0.1 },
    { id: "maxMode", label: { es: "modo maximo", en: "maximum mode" }, min: 3, max: 8, step: 1 },
  ],
  compute: (pNum) => {
    const stiffness = Number.isFinite(pNum.stiffness) ? pNum.stiffness : 1;
    const mass = Number.isFinite(pNum.mass) ? pNum.mass : 1;
    const aspect = Number.isFinite(pNum.aspect) ? pNum.aspect : 1;
    const maxMode = Math.max(3, Math.round(Number.isFinite(pNum.maxMode) ? pNum.maxMode : 5));
    const scale = Math.sqrt(stiffness / mass);
    const data = [];

    for (let m = 1; m <= maxMode; m += 1) {
      for (let n = 1; n <= maxMode; n += 1) {
        data.push({
          x: m,
          y: scale * ((m / aspect) ** 2 + n ** 2),
          n,
          label: `(${m},${n})`,
        });
      }
    }

    data.sort((a, b) => a.y - b.y);
    return {
      data,
      extra: {
        interpretationTarget: "f_mn",
        interpretationValue: data[0]?.y ?? 0,
        graphState: { stiffness, mass, aspect, maxMode },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const stiffness = Number.isFinite(pNum.stiffness) ? pNum.stiffness : 1;
    const mass = Number.isFinite(pNum.mass) ? pNum.mass : 1;
    const yMax = Math.max(...data.map((d) => d.y), 1);
    const points = data.slice(0, 18);
    const width = 720;
    const height = 300;
    const left = 46;
    const bottom = 260;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Frecuencias relativas por modo", "Relative frequencies by mode")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Espectro modal", "Modal spectrum")}>
          <line x1={left} y1={bottom} x2="690" y2={bottom} stroke="#64748b" />
          <line x1={left} y1="30" x2={left} y2={bottom} stroke="#64748b" />
          {points.map((pt, i) => {
            const x = left + 24 + i * 35;
            const y = bottom - (pt.y / yMax) * 215;
            return (
              <g key={pt.label}>
                <circle cx={x} cy={y} r="5" fill="#2563eb" />
                <text x={x} y={bottom + 18} textAnchor="middle" fontSize="10" fill="#475569">
                  {pt.label}
                </text>
              </g>
            );
          })}
          <text x="370" y="292" textAnchor="middle" fontSize="12" fill="#475569">
            {t("modos ordenados por frecuencia", "modes ordered by frequency")}
          </text>
          <text x="16" y="150" textAnchor="middle" fontSize="12" fill="#475569" transform="rotate(-90,16,150)">
            {t("frecuencia relativa", "relative frequency")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Escala", "Scale")}: <strong>{Math.sqrt(stiffness / mass).toFixed(2)}</strong>
          {" · "}
          {t("primer modo", "first mode")}: <strong>{points[0]?.label}</strong>
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


