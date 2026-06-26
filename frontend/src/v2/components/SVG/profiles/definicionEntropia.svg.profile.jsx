import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (value, digits = 1, lang = "es") => {
  if (!Number.isFinite(value)) return "-";
  const s = value.toFixed(digits);
  return lang === "en" ? s : s.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-definicion-entropia",
    leafId: "definicion",
    title: {
      es: "Direccion entropica del proceso",
      en: "Entropic direction of the process",
    },
    subtitle: {
      es: "Sistema, entorno y balance total",
      en: "System, surroundings, and total balance",
    },
  },

  graph_identity: {
    graph_type: "Svg",
    pregunta_principal: {
      es: "Que mide la variacion de entropia y por que define la direccion irreversible de los procesos naturales?",
      en: "What does entropy change measure and why does it define the irreversible direction of natural processes?",
    },
    keywords: ["variacion", "entropia", "direccion", "irreversible", "procesos", "naturales", "entropy", "change", "direction"],
    magnitud_estrella: "S",
    target_interpretable: true,
  },

  interpretation_binding: {
    paramsIn: ["Q_rev", "T_abs"],
    stateOut: ["DeltaS"],
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 860 520",
  svgHeight: 560,

  params: {
    schema: [
      {
        key: "Q_rev",
        default: 1200,
        label: { es: "Calor reversible", en: "Reversible heat" },
        unit: "J",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -5000,
        max: 5000,
        step: 100,
      },
      {
        key: "T_abs",
        default: 300,
        label: { es: "Temperatura absoluta", en: "Absolute temperature" },
        unit: "K",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 900,
        step: 25,
      },
    ],
    derivations: {
      DeltaS: ({ Q_rev, T_abs }) => safeNum(Q_rev, 1200) / Math.max(safeNum(T_abs, 300), 1),
    },
  },

  infoCards: [
    {
      key: "system",
      label: { es: "Sistema", en: "System" },
      highlight: "DeltaS = Q_rev / T_abs",
      highlightColor: "#38bdf8",
      description: {
        es: "DeltaS positiva indica mayor dispersion energetica del sistema.",
        en: "Positive DeltaS means greater energy dispersal in the system.",
      },
    },
    {
      key: "surroundings",
      label: { es: "Entorno", en: "Surroundings" },
      description: {
        es: "El entorno debe compensar la perdida o ganancia del sistema.",
        en: "The surroundings must compensate the system gain or loss.",
      },
    },
    {
      key: "direction",
      label: { es: "Direccion", en: "Direction" },
      result: ({ p, lang }) => {
        const ds = safeNum(p?.DeltaS, 0);
        if (ds > 0) return lang === "en" ? "system gains entropy" : "el sistema gana entropia";
        if (ds < 0) return lang === "en" ? "system loses entropy" : "el sistema pierde entropia";
        return lang === "en" ? "reversible limit" : "limite reversible";
      },
      resultColor: "#fbbf24",
    },
  ],

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 5,
    loop: true,
    state: (t) => ({ pulse: 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / 5) }),
  },

  render: ({ p, state, lang = "es", toNum }) => {
    const q = toNum(p?.Q_rev, 1200);
    const t = Math.max(toNum(p?.T_abs, 300), 1);
    const ds = q / t;
    const isGain = ds >= 0;
    const pulse = toNum(state?.pulse, 0.5);
    const arrowStart = isGain ? 230 : 620;
    const arrowEnd = isGain ? 620 : 230;
    const arrowMid = arrowStart + (arrowEnd - arrowStart) * (0.45 + 0.1 * pulse);
    const label = lang === "en" ? "total entropy balance" : "balance total de entropia";

    return (
      <svg viewBox="0 0 860 520" role="img" aria-label="Definicion entropia">
        <rect x="0" y="0" width="860" height="520" rx="18" fill="#0f172a" />
        <rect x="110" y="135" width="220" height="190" rx="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
        <rect x="530" y="135" width="220" height="190" rx="16" fill="#1e293b" stroke="#f97316" strokeWidth="3" />
        <text x="220" y="185" textAnchor="middle" fill="#e0f2fe" fontSize="26" fontWeight="700">
          {lang === "en" ? "System" : "Sistema"}
        </text>
        <text x="640" y="185" textAnchor="middle" fill="#ffedd5" fontSize="26" fontWeight="700">
          {lang === "en" ? "Surroundings" : "Entorno"}
        </text>
        <text x="220" y="245" textAnchor="middle" fill="#f8fafc" fontSize="22">
          DeltaS = {fmt(ds, 2, lang)} J/K
        </text>
        <text x="640" y="245" textAnchor="middle" fill="#f8fafc" fontSize="22">
          Q_rev = {fmt(-q, 0, lang)} J
        </text>
        <line x1={arrowStart} y1="230" x2={arrowMid} y2="230" stroke="#fbbf24" strokeWidth="10" strokeLinecap="round" />
        <polygon
          points={isGain ? `${arrowMid},230 ${arrowMid - 24},214 ${arrowMid - 24},246` : `${arrowMid},230 ${arrowMid + 24},214 ${arrowMid + 24},246`}
          fill="#fbbf24"
        />
        <rect x="185" y="380" width="490" height="70" rx="14" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.38)" />
        <text x="430" y="410" textAnchor="middle" fill="#e0f2fe" fontSize="20" fontWeight="700">
          {label}
        </text>
        <text x="430" y="438" textAnchor="middle" fill="#f8fafc" fontSize="18">
          {lang === "en" ? "natural direction requires non-negative total DeltaS" : "la direccion natural exige DeltaS total no negativa"}
        </text>
      </svg>
    );
  },
};

export default profile;
