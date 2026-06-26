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
    id: "svg-coeficiente-de-restitucion",
    leafId: "coeficiente-de-restitucion",
    title: {
      es: "Coeficiente de restitucion",
      en: "Coefficient of restitution",
    },
    subtitle: {
      es: "Relacion entre separacion y aproximacion normal",
      en: "Ratio between separation and approach speed",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "coeficiente-de-restitucion",
    graphId: "svg-coeficiente-de-restitucion",
    purpose: {
      es: "Visualizar la diferencia entre aproximacion y separacion en una colision segun la restitucion.",
      en: "Visualize the difference between approach and separation in a collision according to restitution.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2", "e"],
    derivedMagnitudes: ["vRelApprox", "vRelSep", "v1f", "v2f", "eCalc"],
    targetCandidates: ["e", "eCalc"],
    equations: ["e = |v2f - v1f| / |v1 - v2|", "v1f = (m1-e·m2)v1+(1+e)m2·v2)/(m1+m2)"],
    hypotheses: ["choque unidimensional", "linea de impacto definida"],
    validityDomain: ["velocidades normales sobre el eje de impacto"],
    visualSimplifications: ["dos cuerpos ideales", "lectura unidimensional"],
    alwaysVisible: ["vRelApprox", "vRelSep", "e"],
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
        label: { es: "Velocidad m1 antes (m/s)", en: "Velocity m1 before (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.5,
      },
      {
        key: "v2",
        default: -2,
        label: { es: "Velocidad m2 antes (m/s)", en: "Velocity m2 before (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.5,
      },
      {
        key: "e",
        default: 0.7,
        label: { es: "Coef. de restitucion e", en: "Restitution coeff. e" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ],
    derivations: {
      v1f: ({ m1, m2, v1, v2, e }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        if (M === 0) return 0;
        const ev = safeNum(e, 0.7);
        return ((safeNum(m1, 3) - ev * safeNum(m2, 2)) * safeNum(v1, 6) + (1 + ev) * safeNum(m2, 2) * safeNum(v2, -2)) / M;
      },
      v2f: ({ m1, m2, v1, v2, e }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        if (M === 0) return 0;
        const ev = safeNum(e, 0.7);
        return ((safeNum(m2, 2) - ev * safeNum(m1, 3)) * safeNum(v2, -2) + (1 + ev) * safeNum(m1, 3) * safeNum(v1, 6)) / M;
      },
      vRelApprox: ({ v1, v2 }) => Math.abs(safeNum(v1, 6) - safeNum(v2, -2)),
      vRelSep: ({ m1, m2, v1, v2, e }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        if (M === 0) return 0;
        const ev = safeNum(e, 0.7);
        const v1f = ((safeNum(m1, 3) - ev * safeNum(m2, 2)) * safeNum(v1, 6) + (1 + ev) * safeNum(m2, 2) * safeNum(v2, -2)) / M;
        const v2f = ((safeNum(m2, 2) - ev * safeNum(m1, 3)) * safeNum(v2, -2) + (1 + ev) * safeNum(m1, 3) * safeNum(v1, 6)) / M;
        return Math.abs(v2f - v1f);
      },
      eCalc: ({ m1, m2, v1, v2, e }) => {
        const vRelA = Math.abs(safeNum(v1, 6) - safeNum(v2, -2));
        if (vRelA === 0) return 0;
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        if (M === 0) return 0;
        const ev = safeNum(e, 0.7);
        const v1f = ((safeNum(m1, 3) - ev * safeNum(m2, 2)) * safeNum(v1, 6) + (1 + ev) * safeNum(m2, 2) * safeNum(v2, -2)) / M;
        const v2f = ((safeNum(m2, 2) - ev * safeNum(m1, 3)) * safeNum(v2, -2) + (1 + ev) * safeNum(m1, 3) * safeNum(v1, 6)) / M;
        return Math.abs(v2f - v1f) / vRelA;
      },
    },
  },
  motion: { type: SVG_MOTION_TYPES.NONE },
  render: ({ p, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 3);
    const m2 = safeNum(p?.m2, 2);
    const v1 = safeNum(p?.v1, 6);
    const v2 = safeNum(p?.v2, -2);
    const e = safeNum(p?.e, 0.7);
    const M = m1 + m2;

    let v1f = 0, v2f = 0;
    if (M > 0) {
      v1f = ((m1 - e * m2) * v1 + (1 + e) * m2 * v2) / M;
      v2f = ((m2 - e * m1) * v2 + (1 + e) * m1 * v1) / M;
    }
    const vRelApprox = Math.abs(v1 - v2);
    const vRelSep = Math.abs(v2f - v1f);
    const eCalc = vRelApprox > 0 ? vRelSep / vRelApprox : 0;

    // Posiciones fijas para visualización
    const cx1 = 260;
    const cx2 = 700;
    const rowPre = 200;
    const rowPost = 360;
    const SC = 22;
    const clamp = (val) => Math.max(-160, Math.min(160, val * SC));

    // color según e
    const eColor = e < 0.3 ? "#f87171" : e < 0.7 ? "#fbbf24" : "#34d399";
    const eTypes = e === 1 ? (isEs ? "Elástico" : "Elastic")
      : e === 0 ? (isEs ? "Totalmente inelástico" : "Perfectly inelastic")
      : (isEs ? "Parcialmente inelástico" : "Partially inelastic");

    return (
      <g>
        <defs>
          <linearGradient id="restBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0a1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#restBg)" />

        {/* Título */}
        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Coeficiente de restitución" : "Coefficient of restitution"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? "e = velocidad relativa de separación / velocidad relativa de aproximación"
            : "e = relative separation speed / relative approach speed"}
        </text>

        {/* Indicador de e */}
        <rect x="380" y="86" width="200" height="30" rx="8"
          fill={`${eColor}22`} stroke={eColor} strokeWidth="1.5" />
        <text x="480" y="106" textAnchor="middle" fill={eColor} fontSize="14" fontWeight="800">
          e = {fmt(e, 2, lang)}  ({eTypes})
        </text>

        {/* --- PRE-CHOQUE --- */}
        <rect x="60" y="130" width="840" height="110" rx="10"
          fill="rgba(96,165,250,0.07)" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" />
        <text x="88" y="152" fill="#60a5fa" fontSize="13" fontWeight="700">
          {isEs ? "Antes del choque" : "Before collision"}
        </text>

        <line x1="120" y1={rowPre} x2="840" y2={rowPre} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        <circle cx={cx1} cy={rowPre} r={Math.min(30, 10 + m1 * 2)} fill="#3b82f6" />
        <text x={cx1} y={rowPre + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m1</text>
        {v1 !== 0 && (
          <SvgArrow x1={cx1} y1={rowPre} x2={cx1 + clamp(v1)} y2={rowPre}
            color="#60a5fa" label={`v1=${fmt(v1, 1, lang)}`} />
        )}

        <circle cx={cx2} cy={rowPre} r={Math.min(30, 10 + m2 * 2)} fill="#ef4444" />
        <text x={cx2} y={rowPre + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m2</text>
        {v2 !== 0 && (
          <SvgArrow x1={cx2} y1={rowPre} x2={cx2 + clamp(v2)} y2={rowPre}
            color="#f87171" label={`v2=${fmt(v2, 1, lang)}`} />
        )}

        {/* Velocidad relativa de aproximación */}
        <text x="480" y={rowPre + 46} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">
          {isEs
            ? `v_rel aprox = |v1 − v2| = ${fmt(vRelApprox, 2, lang)} m/s`
            : `v_rel approach = |v1 − v2| = ${fmt(vRelApprox, 2, lang)} m/s`}
        </text>

        {/* Flecha de separación */}
        <text x="480" y="296" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="16">↓</text>
        <text x="480" y="310" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">
          e = {fmt(e, 2, lang)}
        </text>

        {/* --- POST-CHOQUE --- */}
        <rect x="60" y="320" width="840" height="110" rx="10"
          fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.25)" strokeWidth="1.5" />
        <text x="88" y="342" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs ? "Despues del choque" : "After collision"}
        </text>

        <line x1="120" y1={rowPost} x2="840" y2={rowPost} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

        <circle cx={cx1} cy={rowPost} r={Math.min(30, 10 + m1 * 2)} fill="#3b82f6" />
        <text x={cx1} y={rowPost + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m1</text>
        {v1f !== 0 && (
          <SvgArrow x1={cx1} y1={rowPost} x2={cx1 + clamp(v1f)} y2={rowPost}
            color="#34d399" label={`v1f=${fmt(v1f, 1, lang)}`} />
        )}

        <circle cx={cx2} cy={rowPost} r={Math.min(30, 10 + m2 * 2)} fill="#ef4444" />
        <text x={cx2} y={rowPost + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">m2</text>
        {v2f !== 0 && (
          <SvgArrow x1={cx2} y1={rowPost} x2={cx2 + clamp(v2f)} y2={rowPost}
            color="#86efac" label={`v2f=${fmt(v2f, 1, lang)}`} />
        )}

        <text x="480" y={rowPost + 46} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">
          {isEs
            ? `v_rel sep = |v2f − v1f| = ${fmt(vRelSep, 2, lang)} m/s`
            : `v_rel separation = |v2f − v1f| = ${fmt(vRelSep, 2, lang)} m/s`}
        </text>

        {/* Panel de cociente */}
        <rect x="100" y="450" width="760" height="86" rx="10"
          fill="rgba(255,255,255,0.04)" stroke={eColor} strokeWidth="1.5" />
        <text x="480" y="474" textAnchor="middle" fill={eColor} fontSize="15" fontWeight="800">
          e = {fmt(vRelSep, 2, lang)} / {fmt(vRelApprox, 2, lang)} = {fmt(eCalc, 3, lang)}
        </text>
        <text x="480" y="498" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">
          {isEs
            ? `Σp antes = ${fmt(m1 * v1 + m2 * v2, 2, lang)} kg·m/s  |  Σp despues = ${fmt(m1 * v1f + m2 * v2f, 2, lang)} kg·m/s`
            : `Σp before = ${fmt(m1 * v1 + m2 * v2, 2, lang)} kg·m/s  |  Σp after = ${fmt(m1 * v1f + m2 * v2f, 2, lang)} kg·m/s`}
        </text>
        <text x="480" y="524" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">
          {isEs
            ? "e=1 elástico · 0<e<1 inelástico · e=0 totalmente inelástico"
            : "e=1 elastic · 0<e<1 inelastic · e=0 perfectly inelastic"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2", "e"],
    stateOut: ["v1f", "v2f", "vRelApprox", "vRelSep", "eCalc"],
    target: "e",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué fracción de la velocidad relativa normal se recupera tras el impacto entre dos cuerpos?",
      en: "What fraction of the normal relative speed is recovered after the impact between two bodies?",
    },
    magnitud_estrella: "e",
  },
};

export default profile;