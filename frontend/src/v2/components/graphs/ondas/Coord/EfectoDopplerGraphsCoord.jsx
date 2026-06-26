import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como cambia la frecuencia observada cuando se mueven la fuente o el receptor?",
    en: "How does observed frequency change when the source or receiver moves?",
  },
  variable_control: "v_fuente",
  magnitud_estrella: "f_obs",
  formula: "f_obs = f_fuente * v_sonido / (v_sonido - v_fuente)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "EfectoDopplerGraphsCoord",
  title: {
    es: "Frecuencia observada segun velocidad de la fuente",
    en: "Observed frequency by source speed",
  },
  defaultParams: {
    fFuente: 1000,
    vSonido: 343,
    vMax: 120,
  },
  controls: [
    { id: "fFuente", label: { es: "f fuente Hz", en: "source f Hz" }, min: 100, max: 3000, step: 10 },
    { id: "vSonido", label: { es: "v sonido m/s", en: "sound speed m/s" }, min: 250, max: 1600, step: 1 },
    { id: "vMax", label: { es: "rango v fuente", en: "source v range" }, min: 10, max: 250, step: 5 },
  ],
  compute: (pNum) => {
    const fFuente = Number.isFinite(pNum.fFuente) ? pNum.fFuente : 1000;
    const vSonido = Number.isFinite(pNum.vSonido) ? pNum.vSonido : 343;
    const rawVMax = Number.isFinite(pNum.vMax) ? pNum.vMax : 120;
    const vMax = Math.min(Math.max(rawVMax, 10), Math.max(10, 0.85 * vSonido));
    const data = Array.from({ length: 81 }, (_, i) => {
      const vFuente = -vMax + (2 * vMax * i) / 80;
      const fObs = (fFuente * vSonido) / (vSonido - vFuente);
      return { x: vFuente, y: fObs };
    });
    return {
      data,
      extra: {
        interpretationTarget: "f_obs",
        interpretationValue: fFuente,
        graphState: { f_fuente: fFuente, v_sonido: vSonido, v_fuente: 0, f_obs: fFuente },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const fFuente = Number.isFinite(pNum.fFuente) ? pNum.fFuente : 1000;
    const vSonido = Number.isFinite(pNum.vSonido) ? pNum.vSonido : 343;
    const vMax = Math.min(Number.isFinite(pNum.vMax) ? pNum.vMax : 120, Math.max(10, 0.85 * vSonido));
    const width = 720;
    const height = 320;
    const left = 58;
    const top = 24;
    const plotW = 604;
    const plotH = 232;
    const yValues = data.map((pt) => pt.y);
    const yMin = Math.max(0, Math.min(...yValues, fFuente) * 0.9);
    const yMax = Math.max(...yValues, fFuente) * 1.08;
    const xOf = (x) => left + ((x + vMax) / (2 * vMax)) * plotW;
    const yOf = (y) => top + plotH - ((y - yMin) / Math.max(yMax - yMin, 1)) * plotH;
    const path = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");
    const yBase = yOf(fFuente);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Doppler: fuente movil", "Doppler: moving source")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Frecuencia observada frente a velocidad de la fuente", "Observed frequency versus source speed")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <line x1={xOf(0)} y1={top} x2={xOf(0)} y2={top + plotH} stroke="#94a3b8" strokeDasharray="4 4" />
          <line x1={left} y1={yBase} x2={left + plotW} y2={yBase} stroke="#16a34a" strokeDasharray="5 5" />
          <path d={path} fill="none" stroke="#2563eb" strokeWidth="3" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            {t("velocidad de la fuente v_fuente", "source speed v_fuente")}
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            {t("frecuencia observada f_obs", "observed frequency f_obs")}
          </text>
          <text x={left + plotW - 170} y={yBase - 8} fontSize="12" fill="#16a34a">
            {t("sin desplazamiento: f_obs = f_fuente", "no shift: f_obs = f_fuente")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("si la fuente se acerca, f_obs sube; si se aleja, f_obs baja", "approach raises f_obs; recession lowers f_obs")}</strong>
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


