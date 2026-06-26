import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
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

const profile = {
  meta: {
    id: "svg-marco-del-centro-de-masas-en-colisiones",
    leafId: "marco-del-centro-de-masas-en-colisiones",
    title: {
      es: "Marco del centro de masas en colisiones",
      en: "Center-of-mass frame in collisions",
    },
    subtitle: {
      es: "La colision se lee sin arrastre global",
      en: "The collision is read without global drift",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "marco-del-centro-de-masas-en-colisiones",
    graphId: "svg-marco-del-centro-de-masas-en-colisiones",
    purpose: {
      es: "Mostrar la lectura de una colision cuando el arrastre global se elimina en el marco del centro de masas.",
      en: "Show how a collision is read once global drift is removed in the center-of-mass frame.",
    },
    level: {
      es: "universidad inicial",
      en: "early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2"],
    derivedMagnitudes: ["vcm", "v1cm_i", "v2cm_i", "v1cm_f", "v2cm_f", "pTotCm", "Vcm", "u1", "v1", "u2", "v2"],
    targetCandidates: ["Vcm", "u1", "v1", "u2", "v2"],
    equations: ["vcm = (m1v1+m2v2)/M", "v1_cm = v1 - vcm", "v1_cm_f = -v1_cm_i (elastico)"],
    hypotheses: ["choque elástico unidimensional", "sistema aislado"],
    validityDomain: ["marco galileano"],
    visualSimplifications: ["dos cuerpos ideales", "lectura sobre un eje", "e=1 para simplificar"],
    alwaysVisible: ["v1cm_i", "v2cm_i", "v1cm_f", "v2cm_f", "pTotCm"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "m1",
        default: 3,
        label: { es: "Masa m1 (kg)", en: "Mass m1 (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "m2",
        default: 2,
        label: { es: "Masa m2 (kg)", en: "Mass m2 (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "v1",
        default: 6,
        label: { es: "Velocidad m1 (m/s)", en: "Velocity m1 (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.5,
      },
      {
        key: "v2",
        default: -2,
        label: { es: "Velocidad m2 (m/s)", en: "Velocity m2 (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.5,
      },
    ],
    derivations: {
      vcm: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        return M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
      },
      // Pre-choque en marco CM
      v1cm_i: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return safeNum(v1, 6) - vcm;
      },
      v2cm_i: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return safeNum(v2, -2) - vcm;
      },
      // Post-choque elástico: velocidades se invierten en el marco CM
      v1cm_f: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return -(safeNum(v1, 6) - vcm); // inversión elástica
      },
      v2cm_f: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return -(safeNum(v2, -2) - vcm); // inversión elástica
      },
      pTotCm: () => 0,
      Vcm: ({ vcm }) => safeNum(vcm, 0),
      u1: ({ v1cm_i }) => safeNum(v1cm_i, 0),
      v1: ({ v1cm_f }) => safeNum(v1cm_f, 0),
      u2: ({ v2cm_i }) => safeNum(v2cm_i, 0),
      v2: ({ v2cm_f }) => safeNum(v2cm_f, 0),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "v'_{f} = -e \\cdot v'_{i}",
      highlightColor: "#34d399",
      description: {
        es: "En el marco CM, las velocidades se invierten (si e=1) simplificando el análisis.",
        en: "In the CM frame, velocities invert (if e=1) simplifying the analysis.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `v'_{1i} = ${fmt(safeNum(p?.v1cm_i, 0), 2, lang)} m/s`,
        `v'_{2i} = ${fmt(safeNum(p?.v2cm_i, 0), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v'_{1f} = ${fmt(safeNum(p?.v1cm_f, 0), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
    {
      key: "drift",
      label: { es: "Arrastre", en: "Drift" },
      bg: "rgba(250,204,21,0.10)",
      border: "rgba(250,204,21,0.18)",
      description: {
        es: "El marco CM elimina el movimiento global del sistema.",
        en: "The CM frame eliminates the global drift of the system.",
      },
      highlight: ({ p, lang }) => `v_{cm} = ${fmt(safeNum(p?.vcm, 0), 2, lang)} m/s`,
      highlightColor: "#facc15",
    },
  ],
  motion: { type: SVG_MOTION_TYPES.NONE },
  render: ({ p, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 3);
    const m2 = safeNum(p?.m2, 2);
    const v1 = safeNum(p?.v1, 6);
    const v2 = safeNum(p?.v2, -2);
    const M = m1 + m2;
    const vcm = M > 0 ? (m1 * v1 + m2 * v2) / M : 0;
    const v1cm_i = v1 - vcm;
    const v2cm_i = v2 - vcm;
    const v1cm_f = -v1cm_i; // choque elástico en CM: inversión
    const v2cm_f = -v2cm_i;
    const p1cm_i = m1 * v1cm_i;
    const p2cm_i = m2 * v2cm_i;
    const p1cm_f = m1 * v1cm_f;
    const p2cm_f = m2 * v2cm_f;

    const SC = 22; // px por m/s
    const rowPre = 200;
    const rowPost = 380;
    const cx1 = 280;
    const cx2 = 680;
    const clamp = (val) => Math.max(-160, Math.min(160, val * SC));

    return (
      <g>
        <defs>
          <linearGradient id="mcolBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0a1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#mcolBg)" />

        {/* Título */}
        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Marco CM en colisiones (e = 1)" : "CM frame in collisions (e = 1)"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? "En el marco CM los momentos se invierten; el total sigue siendo cero."
            : "In the CM frame momenta invert; the total remains zero."}
        </text>

        {/* Etiqueta vcm */}
        <text x="480" y="100" textAnchor="middle" fill="#facc15" fontSize="12">
          vcm = {fmt(vcm, 2, lang)} m/s  (M = {fmt(M, 1, lang)} kg)
        </text>

        {/* --- PRE-CHOQUE CM --- */}
        <rect x="60" y="130" width="840" height="120" rx="10"
          fill="rgba(96,165,250,0.07)" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" />
        <text x="88" y="155" fill="#60a5fa" fontSize="13" fontWeight="700">
          {isEs ? "Antes del choque — Marco CM" : "Before collision — CM frame"}
        </text>
        <line x1="120" y1={rowPre} x2="840" y2={rowPre} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        <circle cx={cx1} cy={rowPre} r="14" fill="#3b82f6" />
        <text x={cx1} y={rowPre + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m1</text>
        {v1cm_i !== 0 && (
          <SvgArrow x1={cx1} y1={rowPre} x2={cx1 + clamp(v1cm_i)} y2={rowPre}
            color="#60a5fa" label={`v1'=${fmt(v1cm_i, 1, lang)}`} />
        )}

        <circle cx={cx2} cy={rowPre} r="14" fill="#ef4444" />
        <text x={cx2} y={rowPre + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m2</text>
        {v2cm_i !== 0 && (
          <SvgArrow x1={cx2} y1={rowPre} x2={cx2 + clamp(v2cm_i)} y2={rowPre}
            color="#f87171" label={`v2'=${fmt(v2cm_i, 1, lang)}`} />
        )}

        <text x="480" y={rowPre + 50} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="12">
          {isEs
            ? `Σp_cm = ${fmt(p1cm_i + p2cm_i, 2, lang)} kg·m/s`
            : `Σp_cm = ${fmt(p1cm_i + p2cm_i, 2, lang)} kg·m/s`}
        </text>

        {/* Flecha de separación */}
        <text x="480" y="308" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="16">↓</text>
        <text x="480" y="322" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">
          {isEs ? "choque elástico" : "elastic collision"}
        </text>

        {/* --- POST-CHOQUE CM --- */}
        <rect x="60" y="310" width="840" height="120" rx="10"
          fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.25)" strokeWidth="1.5" />
        <text x="88" y="335" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs ? "Despues del choque — Marco CM" : "After collision — CM frame"}
        </text>
        <line x1="120" y1={rowPost} x2="840" y2={rowPost} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        <circle cx={cx1} cy={rowPost} r="14" fill="#3b82f6" />
        <text x={cx1} y={rowPost + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m1</text>
        {v1cm_f !== 0 && (
          <SvgArrow x1={cx1} y1={rowPost} x2={cx1 + clamp(v1cm_f)} y2={rowPost}
            color="#34d399" label={`v1'f=${fmt(v1cm_f, 1, lang)}`} />
        )}

        <circle cx={cx2} cy={rowPost} r="14" fill="#ef4444" />
        <text x={cx2} y={rowPost + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m2</text>
        {v2cm_f !== 0 && (
          <SvgArrow x1={cx2} y1={rowPost} x2={cx2 + clamp(v2cm_f)} y2={rowPost}
            color="#86efac" label={`v2'f=${fmt(v2cm_f, 1, lang)}`} />
        )}

        <text x="480" y={rowPost + 50} textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs
            ? `Σp_cm = ${fmt(p1cm_f + p2cm_f, 2, lang)} kg·m/s ≈ 0  ✓`
            : `Σp_cm = ${fmt(p1cm_f + p2cm_f, 2, lang)} kg·m/s ≈ 0  ✓`}
        </text>

        {/* Panel inferior */}
        <rect x="100" y="450" width="760" height="80" rx="10"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="480" y="476" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12">
          {isEs
            ? "En el marco CM: v'_f = −v'_i  y  Σp_cm = 0 antes y después."
            : "In the CM frame: v'_f = −v'_i  and  Σp_cm = 0 before and after."}
        </text>
        <text x="480" y="498" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">
          vcm = {fmt(vcm, 3, lang)} m/s  |  M = {fmt(M, 1, lang)} kg
        </text>
        <text x="480" y="518" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">
          {isEs
            ? "El gráfico asume colisión elástica (e=1) para mostrar la inversión limpia."
            : "Graph assumes elastic collision (e=1) to show clean momentum inversion."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2"],
    stateOut: ["vcm", "v1cm_i", "v2cm_i", "v1cm_f", "v2cm_f", "pTotCm", "Vcm", "u1", "v1", "u2", "v2"],
    target: "Vcm",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Por qué el análisis de colisiones resulta más simétrico en el marco del centro de masas?",
      en: "Why is the collision analysis more symmetric in the center-of-mass frame?",
    },
    magnitud_estrella: "Vcm",
  },
};

export default profile;
