import React from "react";
import baseProfile from "./cantidadDeMovimientoLeaf.svg.profile.jsx";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";
import { createSvgProfileContract } from "./svgProfileContracts.js";

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

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const profile = {
  ...baseProfile,
  meta: {
    id: "svg-definicion-centro-de-masas",
    leafId: "definicion-centro-de-masas",
    title: {
      es: "Definición de centro de masas",
      en: "Definition of the Center of Mass",
    },
    subtitle: {
      es: "Dos masas sobre un eje y una lectura ponderada",
      en: "Two masses on one axis and a weighted reading",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "definicion-centro-de-masas",
    graphId: "svg-definicion-centro-de-masas",
    purpose: {
      es: "Visualizar que el centro de masas es una posicion ponderada por las masas y no un promedio simple.",
      en: "Show that the center of mass is a mass-weighted position rather than a simple average.",
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
    derivedMagnitudes: ["M", "xcm"],
    targetCandidates: ["xcm", "M"],
    equations: ["M = m1 + m2", "xcm = (m1 x1 + m2 x2)/(m1 + m2)"],
    hypotheses: ["masas puntuales", "eje unidimensional"],
    validityDomain: ["masas positivas", "geometria discreta sobre un eje"],
    visualSimplifications: ["bloques ideales", "escala lineal del eje"],
    alwaysVisible: ["m1", "m2", "x1", "x2", "xcm"],
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
      xcm: ({ m1, m2, x1, x2 }) => {
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
      label: { es: "Definición", en: "Definition" },
      highlight: "xcm = (m1·x1 + m2·x2)/(m1 + m2)",
      highlightColor: "#93c5fd",
      description: {
        es: "La posición colectiva se desplaza hacia la masa mayor.",
        en: "The collective position shifts toward the larger mass.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `M = ${fmt(safeNum(p?.M, 8), 2, lang)} kg`,
        `xcm = ${fmt(safeNum(p?.xcm, 2), 3, lang)} m`,
      ],
      result: ({ p, lang }) =>
        lang === "en"
          ? `Heavier body: ${safeNum(p?.m2, 6) > safeNum(p?.m1, 2) ? "m2" : "m1"}`
          : `Masa dominante: ${safeNum(p?.m2, 6) > safeNum(p?.m1, 2) ? "m2" : "m1"}`,
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
    const xcm = toNum(p?.xcm, (m1 * x1 + m2 * x2) / (m1 + m2));

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
          <linearGradient id="cmDefBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#142a43" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#cmDefBg)" />

        <text x="480" y="54" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Definición de centro de masas" : "Definition of the Center of Mass"}
        </text>
        <text x="480" y="84" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="14">
          {isEs ? "Dos masas positivas sobre un eje común" : "Two positive masses on one shared axis"}
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
          xcm = {fmt(xcm, 3, lang)} m
        </text>

        <text x="480" y="500" textAnchor="middle" fill="rgba(255,255,255,0.56)" fontSize="13">
          {isEs
            ? "El punto verde resume la distribución y se acerca a la masa dominante."
            : "The green point summarizes the distribution and moves toward the dominant mass."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "x1", "x2"],
    stateOut: ["M", "xcm"],
    target: "xcm",
    selectableMagnitudes: ["xcm", "M"],
    supportsFocusTarget: true,
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué punto resume el movimiento traslacional promediando las posiciones ponderadas por masa?",
      en: "Which point summarises translational motion by averaging positions weighted by mass?",
    },
    magnitud_estrella: "xcm",
  },
};

export default profile;
