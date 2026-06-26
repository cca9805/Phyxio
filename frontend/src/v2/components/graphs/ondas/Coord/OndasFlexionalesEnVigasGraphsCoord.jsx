import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como depende la velocidad de propagacion de una onda de flexion en una viga de la frecuencia, el material y la geometria de la seccion?",
    en: "How does the propagation speed of a bending wave in a beam depend on frequency, material and cross-section geometry?",
  },
  variable_control: "freq",
  magnitud_estrella: "v_grupo_flex",
  formula: "v_fase_flex = (E_young * I_seccion * omega^2 / rho_lin)^(1/4)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "OndasFlexionalesEnVigasGraphsCoord",
  title: {
    es: "Dispersion flexional en vigas",
    en: "Flexural dispersion in beams",
  },
  defaultParams: {
    material: 1.0,
    inertia: 1.0,
    mass: 1.0,
    fMax: 5000,
  },
  controls: [
    { id: "material", label: { es: "rigidez material", en: "material stiffness" }, min: 0.4, max: 2.5, step: 0.1 },
    { id: "inertia", label: { es: "inercia seccion", en: "section inertia" }, min: 0.4, max: 3.0, step: 0.1 },
    { id: "mass", label: { es: "masa lineal", en: "linear mass" }, min: 0.4, max: 3.0, step: 0.1 },
    { id: "fMax", label: { es: "frecuencia max Hz", en: "max frequency Hz" }, min: 500, max: 10000, step: 500 },
  ],
  compute: (pNum) => {
    const material = Number.isFinite(pNum.material) ? pNum.material : 1;
    const inertia = Number.isFinite(pNum.inertia) ? pNum.inertia : 1;
    const mass = Number.isFinite(pNum.mass) ? pNum.mass : 1;
    const fMax = Number.isFinite(pNum.fMax) ? pNum.fMax : 5000;
    const scale = (material * inertia / mass) ** 0.25;

    const data = Array.from({ length: 56 }, (_, i) => {
      const freq = 50 + (i / 55) * (fMax - 50);
      const vPhase = 120 * scale * Math.sqrt(freq / 1000);
      return {
        x: freq,
        y: vPhase,
        group: 2 * vPhase,
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "v_fase_flex",
        interpretationValue: data[Math.floor(data.length / 2)]?.y ?? 0,
        graphState: { material, inertia, mass, fMax },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const fMax = Number.isFinite(pNum.fMax) ? pNum.fMax : 5000;
    const yMax = Math.max(...data.map((d) => d.group), 1);
    const width = 720;
    const height = 320;
    const left = 54;
    const top = 24;
    const plotW = 610;
    const plotH = 230;
    const xOf = (x) => left + ((x - 50) / Math.max(fMax - 50, 1)) * plotW;
    const yOf = (y) => top + plotH - (y / yMax) * plotH;
    const phasePath = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");
    const groupPath = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.group)}`).join(" ");
    const sample = data[Math.floor(data.length * 0.55)] ?? data[0];

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Velocidad frente a frecuencia", "Velocity versus frequency")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Curvas de velocidad flexional", "Flexural velocity curves")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <path d={phasePath} fill="none" stroke="#2563eb" strokeWidth="3" />
          <path d={groupPath} fill="none" stroke="#f97316" strokeWidth="3" />
          <circle cx={xOf(sample.x)} cy={yOf(sample.y)} r="5" fill="#2563eb" />
          <circle cx={xOf(sample.x)} cy={yOf(sample.group)} r="5" fill="#f97316" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            {t("frecuencia de excitacion", "excitation frequency")}
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            {t("velocidad", "velocity")}
          </text>
          <text x="560" y="46" fontSize="12" fill="#2563eb">v_fase_flex</text>
          <text x="560" y="66" fontSize="12" fill="#f97316">v_grupo_flex</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("la velocidad de grupo duplica la fase", "group velocity doubles phase velocity")}</strong>
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


