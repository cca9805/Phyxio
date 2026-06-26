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
    id: "svg-marco-del-centro-de-masas",
    leafId: "marco-del-centro-de-masas",
    title: {
      es: "Marco del centro de masas",
      en: "Center-of-mass frame",
    },
    subtitle: {
      es: "Cambio de referencia hasta anular el momento total",
      en: "Frame change until total momentum vanishes",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "marco-del-centro-de-masas",
    graphId: "svg-marco-del-centro-de-masas",
    purpose: {
      es: "Mostrar el cambio de referencia que anula el momento total del sistema.",
      en: "Show the frame change that cancels the system's total momentum.",
    },
    level: {
      es: "universidad inicial",
      en: "early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2"],
    derivedMagnitudes: ["vcm", "v1cm", "v2cm", "p1cm", "p2cm", "pTotCm", "u1", "u2", "ptot"],
    targetCandidates: ["vcm", "u1", "u2", "ptot"],
    equations: ["vcm = (m1v1 + m2v2)/(m1+m2)", "v1_cm = v1 - vcm", "Σp_cm = 0"],
    hypotheses: ["sistema aislado", "movimiento unidimensional"],
    validityDomain: ["marco galileano", "velocidades no relativistas"],
    visualSimplifications: ["dos cuerpos ideales", "lectura unidimensional"],
    alwaysVisible: ["vcm", "v1cm", "v2cm", "pTotCm"],
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
      v1cm: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return safeNum(v1, 6) - vcm;
      },
      v2cm: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return safeNum(v2, -2) - vcm;
      },
      p1cm: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return safeNum(m1, 3) * (safeNum(v1, 6) - vcm);
      },
      p2cm: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        const vcm = M > 0 ? (safeNum(m1, 3) * safeNum(v1, 6) + safeNum(m2, 2) * safeNum(v2, -2)) / M : 0;
        return safeNum(m2, 2) * (safeNum(v2, -2) - vcm);
      },
      pTotCm: () => 0,
      u1: ({ v1cm }) => safeNum(v1cm, 0),
      u2: ({ v2cm }) => safeNum(v2cm, 0),
      ptot: ({ pTotCm }) => safeNum(pTotCm, 0),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "v_{cm} = \\frac{\\sum m_i v_i}{\\sum m_i}",
      highlightColor: "#facc15",
      description: {
        es: "La velocidad del centro de masas es el promedio ponderado de las velocidades de los cuerpos.",
        en: "The velocity of the center of mass is the weighted average of the velocities of the bodies.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `m1 = ${fmt(safeNum(p?.m1, 3), 1, lang)} kg, m2 = ${fmt(safeNum(p?.m2, 2), 1, lang)} kg`,
        `v1 = ${fmt(safeNum(p?.v1, 6), 1, lang)} m/s, v2 = ${fmt(safeNum(p?.v2, -2), 1, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v_{cm} = ${fmt(safeNum(p?.vcm, 0), 2, lang)} m/s`,
      resultColor: "#facc15",
    },
    {
      key: "property",
      label: { es: "Propiedad CM", en: "CM Property" },
      bg: "rgba(52,211,153,0.10)",
      border: "rgba(52,211,153,0.18)",
      description: {
        es: "En este marco de referencia, el momento lineal total es idénticamente nulo.",
        en: "In this reference frame, the total linear momentum is identically zero.",
      },
      highlight: "Σp' = 0",
      highlightColor: "#34d399",
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
    const v1cm = v1 - vcm;
    const v2cm = v2 - vcm;
    const p1 = m1 * v1;
    const p2 = m2 * v2;
    const pTot = p1 + p2;
    const p1cm = m1 * v1cm;
    const p2cm = m2 * v2cm;

    const SC = 20; // px por m/s
    const rowLab = 200; // y fila marco LAB
    const rowCm = 380;  // y fila marco CM
    const cx1Lab = 280;
    const cx2Lab = 680;
    const cx1Cm = 280;
    const cx2Cm = 680;

    const clamp = (val) => Math.max(-160, Math.min(160, val * SC));

    return (
      <g>
        <defs>
          <linearGradient id="mcmBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0a1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#mcmBg)" />

        {/* Título */}
        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Marco del centro de masas" : "Center-of-mass frame"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? "En el marco CM el momento total es siempre cero."
            : "In the CM frame the total momentum is always zero."}
        </text>

        {/* --- FILA MARCO LAB --- */}
        <rect x="60" y="130" width="840" height="120" rx="10"
          fill="rgba(96,165,250,0.07)" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" />
        <text x="88" y="155" fill="#60a5fa" fontSize="13" fontWeight="700">
          {isEs ? "Marco LAB" : "Lab frame"}
        </text>
        {/* Eje horizontal LAB */}
        <line x1="120" y1={rowLab} x2="840" y2={rowLab} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        {/* m1 LAB */}
        <circle cx={cx1Lab} cy={rowLab} r="14" fill="#3b82f6" />
        <text x={cx1Lab} y={rowLab + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m1</text>
        {v1 !== 0 && (
          <SvgArrow x1={cx1Lab} y1={rowLab} x2={cx1Lab + clamp(v1)} y2={rowLab}
            color="#60a5fa" label={`v1=${fmt(v1, 1, lang)}`} />
        )}

        {/* m2 LAB */}
        <circle cx={cx2Lab} cy={rowLab} r="14" fill="#ef4444" />
        <text x={cx2Lab} y={rowLab + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m2</text>
        {v2 !== 0 && (
          <SvgArrow x1={cx2Lab} y1={rowLab} x2={cx2Lab + clamp(v2)} y2={rowLab}
            color="#f87171" label={`v2=${fmt(v2, 1, lang)}`} />
        )}

        {/* vcm */}
        <SvgArrow x1={480} y1={rowLab - 10} x2={480 + clamp(vcm)} y2={rowLab - 10}
          color="#facc15" label={`vcm=${fmt(vcm, 2, lang)}`} />

        {/* pTot LAB */}
        <text x="480" y={rowLab + 50} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">
          {isEs
            ? `Σp = ${fmt(pTot, 2, lang)} kg·m/s  (p1=${fmt(p1, 2, lang)}, p2=${fmt(p2, 2, lang)})`
            : `Σp = ${fmt(pTot, 2, lang)} kg·m/s  (p1=${fmt(p1, 2, lang)}, p2=${fmt(p2, 2, lang)})`}
        </text>

        {/* --- FILA MARCO CM --- */}
        <rect x="60" y="310" width="840" height="120" rx="10"
          fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.25)" strokeWidth="1.5" />
        <text x="88" y="335" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs ? "Marco CM  (v' = v − vcm)" : "CM frame  (v' = v − vcm)"}
        </text>
        {/* Eje horizontal CM */}
        <line x1="120" y1={rowCm} x2="840" y2={rowCm} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        {/* m1 CM */}
        <circle cx={cx1Cm} cy={rowCm} r="14" fill="#3b82f6" />
        <text x={cx1Cm} y={rowCm + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m1</text>
        {v1cm !== 0 && (
          <SvgArrow x1={cx1Cm} y1={rowCm} x2={cx1Cm + clamp(v1cm)} y2={rowCm}
            color="#60a5fa" label={`v1'=${fmt(v1cm, 1, lang)}`} />
        )}

        {/* m2 CM */}
        <circle cx={cx2Cm} cy={rowCm} r="14" fill="#ef4444" />
        <text x={cx2Cm} y={rowCm + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m2</text>
        {v2cm !== 0 && (
          <SvgArrow x1={cx2Cm} y1={rowCm} x2={cx2Cm + clamp(v2cm)} y2={rowCm}
            color="#f87171" label={`v2'=${fmt(v2cm, 1, lang)}`} />
        )}

        {/* pTot CM = 0 */}
        <text x="480" y={rowCm + 50} textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs
            ? `Σp_cm = ${fmt(p1cm + p2cm, 2, lang)} kg·m/s ≈ 0  ✓`
            : `Σp_cm = ${fmt(p1cm + p2cm, 2, lang)} kg·m/s ≈ 0  ✓`}
        </text>

        {/* Panel inferior fórmulas */}
        <rect x="100" y="450" width="760" height="80" rx="10"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="480" y="476" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12">
          vcm = (m1·v1 + m2·v2) / (m1+m2) = {fmt(vcm, 3, lang)} m/s
        </text>
        <text x="480" y="498" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">
          M = {fmt(M, 1, lang)} kg  |  v1' = {fmt(v1cm, 2, lang)} m/s  |  v2' = {fmt(v2cm, 2, lang)} m/s
        </text>
        <text x="480" y="518" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10">
          {isEs
            ? "En cualquier sistema aislado, el marco CM cancela el momento total."
            : "In any isolated system, the CM frame cancels total momentum."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2"],
    stateOut: ["vcm", "v1cm", "v2cm", "p1cm", "p2cm", "pTotCm", "u1", "u2", "ptot"],
    target: "vcm",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué simplificación se obtiene cuando el momento lineal total es nulo en el marco del centro de masas?",
      en: "What simplification is obtained when total linear momentum is zero in the center-of-mass frame?",
    },
    magnitud_estrella: "m1",
  },
};

export default profile;
