import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-centro-de-masas-en-sistemas-discretos",
    leafId: "centro-de-masas-en-sistemas-discretos",
    title: {
      es: "Centro de masas en sistemas discretos",
      en: "Center of Mass in Discrete Systems",
    },
    subtitle: {
      es: "Dos masas sobre un eje con lectura ponderada",
      en: "Two masses on one axis with weighted reading",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "centro-de-masas-en-sistemas-discretos",
    graphId: "svg-centro-de-masas-en-sistemas-discretos",
    purpose: {
      es: "Mostrar cómo la suma discreta de aportes m_i x_i determina la posición efectiva x_cm.",
      en: "Show how the discrete sum of m_i x_i contributions determines the effective x_cm position.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "m2", "x1", "x2"],
    acceptedAliases: {
      m1: ["masa1"],
      m2: ["masa2"],
      x1: ["pos1"],
      x2: ["pos2"],
    },
    derivedMagnitudes: ["M", "x_cm"],
    targetCandidates: ["x_cm", "M"],
    equations: ["M = m1 + m2", "x_cm = (m1 x1 + m2 x2)/(m1 + m2)"],
    hypotheses: ["masas puntuales", "mismo eje", "mismo origen"],
    validityDomain: ["masas positivas", "sistema discreto finito"],
    visualSimplifications: ["marcadores puntuales", "eje unidimensional"],
    alwaysVisible: ["m1", "m2", "x1", "x2", "x_cm"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "m1",
        aliases: ["masa1"],
        default: 2,
        label: { es: "Masa m1", en: "Mass m1" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "m2",
        aliases: ["masa2"],
        default: 6,
        label: { es: "Masa m2", en: "Mass m2" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "x1",
        aliases: ["pos1"],
        default: -1,
        label: { es: "Posición x1", en: "Position x1" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -4,
        max: 4,
        step: 0.25,
      },
      {
        key: "x2",
        aliases: ["pos2"],
        default: 3,
        label: { es: "Posición x2", en: "Position x2" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -4,
        max: 4,
        step: 0.25,
      },
    ],
    derivations: {
      M: ({ m1, m2 }) => safeNum(m1, 2) + safeNum(m2, 6),
      x_cm: ({ m1, m2, x1, x2 }) => {
        const a = safeNum(m1, 2);
        const b = safeNum(m2, 6);
        const xa = safeNum(x1, -1);
        const xb = safeNum(x2, 3);
        return (a * xa + b * xb) / (a + b);
      },
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Fórmula base", en: "Base formula" },
      highlight: "x_cm = (m1·x1 + m2·x2)/(m1 + m2)",
      highlightColor: "#93c5fd",
      description: {
        es: "La masa mayor desplaza el marcador hacia su propia posición.",
        en: "The larger mass shifts the marker toward its own position.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `m1 = ${fmt(safeNum(p?.m1, 2), 2, lang)} kg`,
        `m2 = ${fmt(safeNum(p?.m2, 6), 2, lang)} kg`,
      ],
      result: ({ p, lang }) => `x_cm = ${fmt(safeNum(p?.x_cm, 2), 3, lang)} m`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ p, lang = "es", toNum }) => {
    const isEs = lang !== "en";
    const m1 = clamp(toNum(p?.m1, 2), 0.5, 10);
    const m2 = clamp(toNum(p?.m2, 6), 0.5, 10);
    const x1 = clamp(toNum(p?.x1, -1), -4, 4);
    const x2 = clamp(toNum(p?.x2, 3), -4, 4);
    const xcm = toNum(p?.x_cm, (m1 * x1 + m2 * x2) / (m1 + m2));

    const left = 140;
    const right = 820;
    const axisY = 320;
    const scale = (x) => left + ((x + 4) / 8) * (right - left);
    const px1 = scale(x1);
    const px2 = scale(x2);
    const pxcm = scale(xcm);
    const r1 = 18 + m1 * 3;
    const r2 = 18 + m2 * 3;

    return (
      <g>
        <defs>
          <linearGradient id="cmDiscBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#142a43" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#cmDiscBg)" />

        <text x="480" y="54" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Centro de masas en sistemas discretos" : "Center of Mass in Discrete Systems"}
        </text>
        <text x="480" y="84" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="14">
          {isEs ? "Dos masas positivas sobre un eje" : "Two positive masses on one axis"}
        </text>

        <line x1={left} y1={axisY} x2={right} y2={axisY} stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />

        {[-4, -2, 0, 2, 4].map((tick) => {
          const px = scale(tick);
          return (
            <g key={tick}>
              <line x1={px} y1={axisY - 8} x2={px} y2={axisY + 8} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <text x={px} y={axisY + 28} textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="12">
                {tick}
              </text>
            </g>
          );
        })}

        <circle cx={px1} cy={axisY - 50} r={r1} fill="rgba(96,165,250,0.78)" stroke="#bfdbfe" strokeWidth="2" />
        <circle cx={px2} cy={axisY - 50} r={r2} fill="rgba(248,113,113,0.78)" stroke="#fecaca" strokeWidth="2" />

        <text x={px1} y={axisY - 46} textAnchor="middle" fill="#08111f" fontSize="13" fontWeight="800">m1</text>
        <text x={px2} y={axisY - 46} textAnchor="middle" fill="#2b0b0b" fontSize="13" fontWeight="800">m2</text>

        <line x1={pxcm} y1={axisY - 94} x2={pxcm} y2={axisY + 56} stroke="#34d399" strokeWidth="3" strokeDasharray="7 6" />
        <circle cx={pxcm} cy={axisY + 76} r="15" fill="rgba(52,211,153,0.18)" stroke="#34d399" strokeWidth="2.5" />
        <text x={pxcm} y={axisY + 81} textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="800">CM</text>

        <text x={px1} y={axisY - 95} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12">
          x1 = {fmt(x1, 2, lang)} m
        </text>
        <text x={px2} y={axisY - 95} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12">
          x2 = {fmt(x2, 2, lang)} m
        </text>
        <text x={pxcm} y={axisY + 118} textAnchor="middle" fill="#6ee7b7" fontSize="13" fontWeight="700">
          x_cm = {fmt(xcm, 3, lang)} m
        </text>

        <text x="480" y="500" textAnchor="middle" fill="rgba(255,255,255,0.56)" fontSize="13">
          {isEs
            ? "El marcador verde debe quedar entre ambas masas y acercarse a la más pesada."
            : "The green marker should lie between both masses and move toward the heavier one."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "x1", "x2"],
    stateOut: ["M", "x_cm"],
    target: "x_cm",
    selectableMagnitudes: ["x_cm", "M"],
    supportsFocusTarget: true,
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se desplaza x_cm cuando una masa puntual domina la suma ponderada de posiciones?",
      en: "How does x_cm shift when one point mass dominates the weighted sum of positions?",
    },
    magnitud_estrella: "xcm",
  },
};

export default profile;
