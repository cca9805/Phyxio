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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const profile = {
  meta: {
    id: "svg-encuentros-y-persecuciones",
    leafId: "encuentros-y-persecuciones",
    title: {
      es: "Encuentros y persecuciones",
      en: "Pursuit and Interception Problems",
    },
    subtitle: {
      es: "Condición x₁(t) = x₂(t) para determinar el instante y lugar de encuentro",
      en: "Condition x₁(t) = x₂(t) to determine the meeting time and place",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué condición cinemática permite predecir el instante y la posición de encuentro entre móviles distintos?",
      en: "Which kinematic condition predicts the meeting time and position between different moving bodies?",
    },
    magnitud_estrella: "t_e",
    magnitud_secundaria: "x_e",
    variable_control: "v_rel",
  },
  graph_contract: createSvgProfileContract({
    leafId: "encuentros-y-persecuciones",
    graphId: "svg-encuentros-y-persecuciones",
    purpose: {
      es: "Visualizar dos móviles con MRU y resaltar el instante y posición de encuentro cuando se igualan sus posiciones.",
      en: "Visualize two MRU bodies and highlight the meeting time and position when their positions coincide.",
    },
    level: {
      es: "ESO | bachillerato",
      en: "secondary | high school",
    },
    expectedInputs: ["x10", "v1", "x20", "v2"],
    derivedMagnitudes: ["t_encuentro", "x_encuentro"],
    targetCandidates: ["t_encuentro", "x_encuentro"],
    equations: ["x1(t) = x10 + v1·t", "x2(t) = x20 + v2·t", "t_enc = (x20−x10)/(v1−v2)"],
    hypotheses: ["MRU para ambos móviles", "v1 ≠ v2 para que haya encuentro"],
    validityDomain: ["v1 ≠ v2"],
    visualSimplifications: ["movimiento 1D", "partículas puntuales"],
    alwaysVisible: ["t_encuentro"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "x10",
        default: -6,
        label: { es: "Posición inicial 1", en: "Initial position 1" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -15,
        max: 15,
        step: 0.5,
      },
      {
        key: "v1",
        default: 4,
        label: { es: "Velocidad v1", en: "Velocity v1" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -12,
        max: 12,
        step: 0.25,
      },
      {
        key: "x20",
        default: 6,
        label: { es: "Posición inicial 2", en: "Initial position 2" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -15,
        max: 15,
        step: 0.5,
      },
      {
        key: "v2",
        default: -2,
        label: { es: "Velocidad v2", en: "Velocity v2" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -12,
        max: 12,
        step: 0.25,
      },
    ],
    derivations: {
      t_encuentro: ({ x10, v1, x20, v2 }) => {
        const dv = safeNum(v1, 4) - safeNum(v2, -2);
        if (Math.abs(dv) < 0.001) return Infinity;
        return (safeNum(x20, 6) - safeNum(x10, -6)) / dv;
      },
      x_encuentro: ({ x10, v1, x20, v2 }) => {
        const dv = safeNum(v1, 4) - safeNum(v2, -2);
        if (Math.abs(dv) < 0.001) return Infinity;
        const t = (safeNum(x20, 6) - safeNum(x10, -6)) / dv;
        return safeNum(x10, -6) + safeNum(v1, 4) * t;
      },
    },
  },
  infoCards: [
    {
      key: "condicion",
      label: { es: "Condición de encuentro", en: "Meeting condition" },
      highlight: "t_enc = (x₂₀ − x₁₀) / (v₁ − v₂)",
      highlightColor: "#fbbf24",
      description: {
        es: "El encuentro ocurre cuando las posiciones de ambos móviles son iguales: x₁(t) = x₂(t).",
        en: "Meeting occurs when both bodies share the same position: x₁(t) = x₂(t).",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `v₁ = ${fmt(safeNum(p?.v1, 4), 2, lang)} m/s`,
        `v₂ = ${fmt(safeNum(p?.v2, -2), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `t_enc = ${fmt(safeNum(p?.t_encuentro, 0), 2, lang)} s`,
      resultColor: "#fbbf24",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const x10 = safeNum(p?.x10, -6);
      const v1 = safeNum(p?.v1, 4);
      const x20 = safeNum(p?.x20, 6);
      const v2 = safeNum(p?.v2, -2);
      const x1 = x10 + v1 * t;
      const x2 = x20 + v2 * t;
      return { x1, x2, t };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const x10 = safeNum(p?.x10, -6);
    const v1 = safeNum(p?.v1, 4);
    const x20 = safeNum(p?.x20, 6);
    const v2 = safeNum(p?.v2, -2);

    const dv = v1 - v2;
    const tEnc = safeNum(p?.t_encuentro, Math.abs(dv) > 0.001 ? (x20 - x10) / dv : Infinity);
    const xEnc = safeNum(p?.x_encuentro, Number.isFinite(tEnc) ? x10 + v1 * tEnc : Infinity);

    const trackY = 260;
    const originX = 480;
    const scale = 30;

    const mapX = (xPhys) => clamp(originX + xPhys * scale, 80, 880);

    const x1_anim = state?.x1 ?? x10;
    const x2_anim = state?.x2 ?? x20;
    const tAnim = state?.t ?? 0;

    const px1 = mapX(x1_anim);
    const px2 = mapX(x2_anim);
    const pxEnc = Number.isFinite(xEnc) ? mapX(xEnc) : null;

    // Are they close? (encounter zone)
    const isNearMeeting = Number.isFinite(tEnc) && tEnc > 0 && Math.abs(tAnim - tEnc) < 0.2;

    return (
      <g>
        <defs>
          <linearGradient id="encBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0d2035" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#encBg)" />

        <text x="480" y="46" textAnchor="middle" fill="#ffffff" fontSize="25" fontWeight="800">
          {isEs ? "Encuentros y persecuciones" : "Pursuit and Interception"}
        </text>
        <text x="480" y="72" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? "t_enc = (x₂₀ − x₁₀) / (v₁ − v₂)"
            : "t_enc = (x₂₀ − x₁₀) / (v₁ − v₂)"}
        </text>

        {/* Track */}
        <line x1="80" y1={trackY} x2="880" y2={trackY} stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
        {/* Origin marker */}
        <line x1={originX} y1={trackY - 10} x2={originX} y2={trackY + 10} stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <text x={originX} y={trackY + 26} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">0</text>

        {/* Meeting point */}
        {pxEnc != null && Number.isFinite(tEnc) && tEnc > 0 && (
          <>
            <line x1={pxEnc} y1={trackY - 30} x2={pxEnc} y2={trackY + 30} stroke="rgba(251,191,36,0.55)" strokeWidth="2" strokeDasharray="5 4" />
            <text x={pxEnc} y={trackY - 40} textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">
              {isEs ? "encuentro" : "meeting"}
            </text>
          </>
        )}

        {/* Particle 1 */}
        <circle cx={px1} cy={trackY} r="20" fill={isNearMeeting ? "rgba(250,204,21,0.45)" : "rgba(96,165,250,0.28)"} stroke={isNearMeeting ? "#fbbf24" : "#93c5fd"} strokeWidth="2.5" />
        <text x={px1} y={trackY + 5} textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">1</text>
        <SvgArrow x1={px1} y1={trackY - 30} x2={px1 + clamp(v1 * 14, -160, 160)} y2={trackY - 30} color="#60a5fa" label={`v₁=${fmt(v1, 2, lang)}`} />

        {/* Particle 2 */}
        <circle cx={px2} cy={trackY} r="20" fill={isNearMeeting ? "rgba(250,204,21,0.45)" : "rgba(248,113,113,0.25)"} stroke={isNearMeeting ? "#fbbf24" : "#fca5a5"} strokeWidth="2.5" />
        <text x={px2} y={trackY + 5} textAnchor="middle" fill="#fee2e2" fontSize="13" fontWeight="800">2</text>
        <SvgArrow x1={px2} y1={trackY + 30} x2={px2 + clamp(v2 * 14, -160, 160)} y2={trackY + 30} color="#f87171" label={`v₂=${fmt(v2, 2, lang)}`} />

        {/* Info */}
        <rect x="200" y="340" width="560" height="155" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="480" y="368" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="13" fontWeight="700">
          {isEs ? "Resultado" : "Result"}
        </text>
        <text x="300" y="400" fill="rgba(255,255,255,0.72)" fontSize="13">x₁₀ = {fmt(x10, 2, lang)} m   ·   v₁ = {fmt(v1, 2, lang)} m/s</text>
        <text x="300" y="424" fill="rgba(255,255,255,0.72)" fontSize="13">x₂₀ = {fmt(x20, 2, lang)} m   ·   v₂ = {fmt(v2, 2, lang)} m/s</text>
        {Number.isFinite(tEnc) && tEnc > 0 ? (
          <>
            <text x="300" y="450" fill="#fbbf24" fontSize="14" fontWeight="700">
              t_enc = {fmt(tEnc, 2, lang)} s
            </text>
            <text x="300" y="474" fill="#fbbf24" fontSize="14" fontWeight="700">
              x_enc = {fmt(xEnc, 2, lang)} m
            </text>
          </>
        ) : (
          <text x="300" y="458" fill="#f87171" fontSize="13">
            {isEs ? "Sin encuentro (v₁ = v₂ o ya se cruzaron)" : "No meeting (v₁ = v₂ or already crossed)"}
          </text>
        )}
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["x10", "v1", "x20", "v2"],
    stateOut: ["t_encuentro", "x_encuentro"],
    target: "t_encuentro",
  },
};

export default profile;
