import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

export const interpretation_binding = {
  paramsIn: ["M", "R", "theta", "beta"],
  stateOut: ["a", "fs", "N"],
  target: "a",
};

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
  interpretation_binding: {
    paramsIn: ["M", "R", "theta", "beta"],
    stateOut: ["a", "fs", "N"],
    target: "a",
  },
  meta: {
    id: "svg-analisis-dinamico-de-la-rodadura",
    leafId: "analisis-dinamico-de-la-rodadura",
    title: {
      es: "Dinámica de la Rodadura",
      en: "Rolling Dynamics",
    },
    subtitle: {
      es: "Fuerzas, torques y aceleración en un plano inclinado",
      en: "Forces, torques, and acceleration on an inclined plane",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se distribuyen las fuerzas para generar traslación y rotación simultáneas?",
      en: "How are forces distributed to generate simultaneous translation and rotation?",
    },
    magnitud_estrella: "a",
    magnitud_secundaria: "fs",
    variable_control: "theta",
  },
  graph_contract: createSvgProfileContract({
    leafId: "analisis-dinamico-de-la-rodadura",
    graphId: "svg-analisis-dinamico-de-la-rodadura",
    purpose: {
      es: "Visualizar el diagrama de cuerpo libre (DCL) y la aceleración resultante en rodadura pura.",
      en: "Visualize the free body diagram (FBD) and the resulting acceleration in pure rolling.",
    },
    level: { es: "universidad", en: "undergraduate" },
    expectedInputs: ["M", "R", "theta", "beta"],
    derivedMagnitudes: ["a", "fs", "N"],
    targetCandidates: ["a", "fs"],
    equations: ["a = (g·sinθ)/(1+β)", "fs = M·a·β"],
    hypotheses: ["rodadura sin deslizamiento", "cuerpo rígido"],
    validityDomain: ["fs <= mu_s · N"],
    visualSimplifications: ["contacto puntual"],
    alwaysVisible: ["a", "fs"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [
      {
        key: "theta",
        default: 30,
        label: { es: "Ángulo θ", en: "Angle θ" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 60,
        step: 1,
      },
      {
        key: "beta",
        default: 0.5,
        label: { es: "Factor forma β (I/MR²)", en: "Shape factor β" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 1,
        step: 0.1,
      },
      {
        key: "M",
        default: 2,
        label: { es: "Masa M", en: "Mass M" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
    ],
    derivations: {
      a: ({ theta, beta }) => {
        const rad = (safeNum(theta, 30) * Math.PI) / 180;
        return (9.8 * Math.sin(rad)) / (1 + safeNum(beta, 0.5));
      },
      fs: ({ M, theta, beta }) => {
        const rad = (safeNum(theta, 30) * Math.PI) / 180;
        const a = (9.8 * Math.sin(rad)) / (1 + safeNum(beta, 0.5));
        return safeNum(M, 2) * a * safeNum(beta, 0.5);
      },
      N: ({ M, theta }) => {
        const rad = (safeNum(theta, 30) * Math.PI) / 180;
        return safeNum(M, 2) * 9.8 * Math.cos(rad);
      },
    },
  },
  infoCards: [
    {
      key: "dinamica",
      label: { es: "Ecuaciones Dinámicas", en: "Dynamic Equations" },
      highlight: "a = g·sinθ / (1+β)",
      highlightColor: "#93c5fd",
      description: {
        es: "La aceleración depende de la distribución de masa (β).",
        en: "Acceleration depends on mass distribution (β).",
      },
    },
    {
      key: "valores",
      label: { es: "Resultados", en: "Results" },
      lines: ({ p, lang }) => [
        `θ = ${fmt(safeNum(p?.theta, 30), 1, lang)}°`,
        `β = ${fmt(safeNum(p?.beta, 0.5), 2, lang)}`,
        `fs = ${fmt(safeNum(p?.fs, 0), 2, lang)} N`,
      ],
      result: ({ p, lang }) => `a = ${fmt(safeNum(p?.a, 0), 2, lang)} m/s²`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const a = safeNum(p?.a, 3.5);
      const xRel = 0.5 * a * t * t * 10;
      const xCm = (xRel % 800) - 100;
      const theta_rot = (xRel / 40);
      return { xCm, theta_rot };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const thetaDeg = safeNum(p?.theta, 30);
    const rad = (thetaDeg * Math.PI) / 180;
    const a_val = safeNum(p?.a, 3.5);

    const cx = state?.xCm != null ? 150 + ((state.xCm + 100) % 700) : 400;
    const rPx = 80;
    const baseY = 450;
    const cy = baseY - (910 - cx) * Math.tan(rad) - rPx / Math.cos(rad);

    return (
      <g>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="#07111e" />
        <line x1="50" y1={baseY - 860 * Math.tan(rad)} x2="910" y2={baseY} stroke="white" strokeWidth="4" />
        <circle cx={cx} cy={cy} r={rPx} fill="rgba(147,197,253,0.1)" stroke="#93c5fd" strokeWidth="3" />
        <SvgArrow x1={cx} y1={cy - 110} x2={cx + a_val * 20 * Math.cos(rad)} y2={cy - 110 + a_val * 20 * Math.sin(rad)} color="#34d399" label={`a=${fmt(a_val, 2, lang)}`} />
        <text x="480" y="40" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
          {isEs ? "Análisis Dinámico" : "Dynamic Analysis"}
        </text>
      </g>
    );
  },
};

export default profile;
