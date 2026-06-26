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
    id: "svg-sistemas-referencia",
    leafId: "sistemas-referencia",
    title: {
      es: "Sistemas de referencia",
      en: "Reference Frames",
    },
    subtitle: {
      es: "Cómo cambia la descripción del movimiento al cambiar de observador",
      en: "How the description of motion changes when the observer changes",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo cambia la descripción del movimiento cuando se cambia de observador o de sistema de referencia?",
      en: "How does the description of motion change when the observer or reference frame changes?",
    },
    magnitud_estrella: "v_frame",
    magnitud_secundaria: "r_vec",
    variable_control: "t_global",
  },
  graph_contract: createSvgProfileContract({
    leafId: "sistemas-referencia",
    graphId: "svg-sistemas-referencia",
    purpose: {
      es: "Mostrar cómo la misma partícula A tiene posición y velocidad distintas según el marco S o S'.",
      en: "Show how the same particle A has different position and velocity depending on frame S or S'.",
    },
    level: {
      es: "universidad inicial",
      en: "early undergraduate",
    },
    expectedInputs: ["x0_A", "v_A", "v_S", "t"],
    derivedMagnitudes: ["x_A", "x_prime", "v_prime"],
    targetCandidates: ["v_prime", "x_prime"],
    equations: ["x'_A = x_A − x_S", "v'_A = v_A − v_S", "x_S = v_S·t"],
    hypotheses: ["sistemas inerciales", "transformación de Galileo"],
    validityDomain: ["velocidades no relativistas (v ≪ c)"],
    visualSimplifications: ["movimiento 1D", "orígenes coinciden en t=0"],
    alwaysVisible: ["v_prime", "x_prime"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "x0_A",
        default: 0,
        label: { es: "Posición inicial de A", en: "Initial position of A" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.5,
      },
      {
        key: "v_A",
        default: 5,
        label: { es: "Velocidad de A (en S)", en: "Velocity of A (in S)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -12,
        max: 12,
        step: 0.25,
      },
      {
        key: "v_S",
        default: 2,
        label: { es: "Velocidad de S'", en: "Velocity of S'" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -12,
        max: 12,
        step: 0.25,
      },
      {
        key: "t",
        default: 1.5,
        label: { es: "Tiempo t", en: "Time t" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 8,
        step: 0.1,
      },
    ],
    derivations: {
      x_A: ({ x0_A, v_A, t }) => safeNum(x0_A, 0) + safeNum(v_A, 5) * safeNum(t, 1.5),
      x_prime: ({ x0_A, v_A, v_S, t }) => {
        const xA = safeNum(x0_A, 0) + safeNum(v_A, 5) * safeNum(t, 1.5);
        const xS = safeNum(v_S, 2) * safeNum(t, 1.5);
        return xA - xS;
      },
      v_prime: ({ v_A, v_S }) => safeNum(v_A, 5) - safeNum(v_S, 2),
    },
  },
  infoCards: [
    {
      key: "transformacion",
      label: { es: "Transformación de Galileo", en: "Galilean transformation" },
      highlight: "x' = x − v_S·t   ·   v' = v − v_S",
      highlightColor: "#fb923c",
      description: {
        es: "La posición y velocidad de A dependen del observador elegido.",
        en: "The position and velocity of A depend on the chosen observer.",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `v_A = ${fmt(safeNum(p?.v_A, 5), 2, lang)} m/s`,
        `v_S = ${fmt(safeNum(p?.v_S, 2), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v' = ${fmt(safeNum(p?.v_prime, 0), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const x0_A = safeNum(p?.x0_A, 0);
      const v_A = safeNum(p?.v_A, 5);
      const v_S = safeNum(p?.v_S, 2);
      const xA = x0_A + v_A * t;
      const xS_origin = v_S * t;
      return { xA, xS_origin, t };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const x0_A = safeNum(p?.x0_A, 0);
    const v_A = safeNum(p?.v_A, 5);
    const v_S = safeNum(p?.v_S, 2);
    const tParam = safeNum(p?.t, 1.5);

    const xA_phys = safeNum(p?.x_A, x0_A + v_A * tParam);
    const xPrime = safeNum(p?.x_prime, xA_phys - v_S * tParam);
    const vPrime = safeNum(p?.v_prime, v_A - v_S);

    // Use animation if available
    const xA_anim = state?.xA ?? xA_phys;
    const xS_anim = state?.xS_origin ?? v_S * tParam;

    const baseY_S = 240;
    const baseY_Sp = 360;
    const originS = 200;
    const scale = 24;

    const mapX = (xPhys, origin) => clamp(origin + xPhys * scale, 80, 880);
    const particleXS = mapX(xA_anim, originS);
    const originSp = mapX(xS_anim, originS);
    const particleXSp = mapX(xA_anim - xS_anim, originSp);

    const velArrowS = clamp(v_A * 14, -180, 180);
    const velArrowSp = clamp(vPrime * 14, -180, 180);

    return (
      <g>
        <defs>
          <linearGradient id="srBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0f2438" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#srBg)" />

        <text x="480" y="46" textAnchor="middle" fill="#ffffff" fontSize="25" fontWeight="800">
          {isEs ? "Sistemas de referencia" : "Reference Frames"}
        </text>
        <text x="480" y="71" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "x'_A = x_A − x_S   ·   v'_A = v_A − v_S" : "x'_A = x_A − x_S   ·   v'_A = v_A − v_S"}
        </text>

        {/* Frame S */}
        <text x="160" y={baseY_S - 28} fill="#60a5fa" fontSize="13" fontWeight="700">{isEs ? "Marco S (fijo)" : "Frame S (fixed)"}</text>
        <line x1="120" y1={baseY_S} x2="860" y2={baseY_S} stroke="rgba(96,165,250,0.35)" strokeWidth="3" />
        {/* Origin S */}
        <circle cx={originS} cy={baseY_S} r="6" fill="#60a5fa" />
        <text x={originS} y={baseY_S + 20} textAnchor="middle" fill="#93c5fd" fontSize="11">O</text>
        {/* Particle in S */}
        <circle cx={particleXS} cy={baseY_S} r="16" fill="rgba(52,211,153,0.28)" stroke="#34d399" strokeWidth="2.5" />
        <text x={particleXS} y={baseY_S + 5} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="800">A</text>
        <SvgArrow x1={particleXS} y1={baseY_S - 28} x2={particleXS + velArrowS} y2={baseY_S - 28} color="#34d399" label={`v_A=${fmt(v_A, 2, lang)}`} />
        <text x={particleXS} y={baseY_S + 38} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11">
          x={fmt(xA_anim, 2, lang)} m
        </text>

        {/* Frame S' */}
        <text x="160" y={baseY_Sp - 28} fill="#fb923c" fontSize="13" fontWeight="700">{isEs ? "Marco S' (en movimiento)" : "Frame S' (moving)"}</text>
        <line x1="120" y1={baseY_Sp} x2="860" y2={baseY_Sp} stroke="rgba(251,146,60,0.30)" strokeWidth="3" />
        {/* Origin S' (moving) */}
        <circle cx={originSp} cy={baseY_Sp} r="6" fill="#fb923c" />
        <text x={originSp} y={baseY_Sp + 20} textAnchor="middle" fill="#fdba74" fontSize="11">O'</text>
        <SvgArrow x1={originSp} y1={baseY_Sp + 28} x2={originSp + clamp(v_S * 14, -120, 120)} y2={baseY_Sp + 28} color="#fb923c" label={`v_S=${fmt(v_S, 2, lang)}`} />
        {/* Particle in S' */}
        <circle cx={particleXSp} cy={baseY_Sp} r="16" fill="rgba(52,211,153,0.26)" stroke="#34d399" strokeWidth="2.5" />
        <text x={particleXSp} y={baseY_Sp + 5} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="800">A</text>
        <SvgArrow x1={particleXSp} y1={baseY_Sp - 28} x2={particleXSp + velArrowSp} y2={baseY_Sp - 28} color="#34d399" label={`v'=${fmt(vPrime, 2, lang)}`} />
        <text x={particleXSp} y={baseY_Sp + 38} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11">
          x'={fmt(xPrime, 2, lang)} m
        </text>

        {/* Summary */}
        <rect x="260" y="452" width="440" height="70" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="480" y="478" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="700">
          v' = {fmt(vPrime, 2, lang)} m/s   ·   x' = {fmt(xPrime, 2, lang)} m
        </text>
        <text x="480" y="506" textAnchor="middle" fill="rgba(255,255,255,0.54)" fontSize="12">
          {isEs
            ? "La misma partícula, dos descripciones distintas según el observador."
            : "Same particle, two different descriptions depending on the observer."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["x0_A", "v_A", "v_S", "t"],
    stateOut: ["x_A", "x_prime", "v_prime"],
    target: "v_prime",
  },
};

export default profile;
