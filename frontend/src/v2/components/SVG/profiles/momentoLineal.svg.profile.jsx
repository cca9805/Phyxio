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
    id: "svg-momento-lineal",
    leafId: "momento-lineal",
    title: {
      es: "Momento lineal",
      en: "Linear momentum",
    },
    subtitle: {
      es: "p = m·v — magnitud vectorial que mide la dificultad de frenar un cuerpo",
      en: "p = m·v — vector quantity measuring how hard it is to stop a body",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "momento-lineal",
    graphId: "svg-momento-lineal",
    purpose: {
      es: "Leer cómo masa y velocidad determinan el momento lineal de un cuerpo.",
      en: "Read how mass and velocity determine the linear momentum of a body.",
    },
    level: {
      es: "ESO | bachillerato",
      en: "secondary | high school",
    },
    expectedInputs: ["m", "v"],
    derivedMagnitudes: ["p", "K"],
    targetCandidates: ["p"],
    equations: ["p = m·v", "K = p²/(2m)"],
    hypotheses: ["masa constante", "velocidad no relativista"],
    validityDomain: ["v ≪ c"],
    visualSimplifications: ["un solo cuerpo sobre un eje"],
    alwaysVisible: ["p"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 520",
  svgHeight: 580,
  params: {
    schema: [
      {
        key: "m",
        default: 4,
        label: { es: "Masa m", en: "Mass m" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 20,
        step: 0.5,
      },
      {
        key: "v",
        default: 3,
        label: { es: "Velocidad v", en: "Velocity v" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.25,
      },
    ],
    derivations: {
      p: ({ m, v }) => safeNum(m, 4) * safeNum(v, 3),
      K: ({ m, v }) => 0.5 * safeNum(m, 4) * safeNum(v, 3) ** 2,
    },
  },
  infoCards: [
    {
      key: "definition",
      label: { es: "Definición", en: "Definition" },
      highlight: "p = m·v",
      highlightColor: "#86efac",
      description: {
        es: "El momento lineal es el producto de la masa por la velocidad. Es una magnitud vectorial.",
        en: "Linear momentum is the product of mass and velocity. It is a vector quantity.",
      },
    },
    {
      key: "energy",
      label: { es: "Relación con K", en: "Relation with K" },
      highlight: "K = p²/(2m)",
      highlightColor: "#fde68a",
      description: {
        es: "La energía cinética puede expresarse en función del momento lineal.",
        en: "Kinetic energy can be expressed in terms of linear momentum.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `m = ${fmt(safeNum(p?.m, 4), 1, lang)} kg`,
        `v = ${fmt(safeNum(p?.v, 3), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `p = ${fmt(safeNum(p?.p, 0), 2, lang)} kg·m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const v = safeNum(p?.v, 3);
      const xPhys = -5 + v * (t % 6);
      const clamped = Math.max(-5, Math.min(5, xPhys));
      return { x: clamped };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m = safeNum(p?.m, 4);
    const v = safeNum(p?.v, 3);
    const mom = m * v;
    const K = 0.5 * m * v * v;

    const posToX = (xPhys) => Math.max(120, Math.min(840, 480 + xPhys * 60));
    const bodyX = posToX(safeNum(state?.x, 0));
    const bodyW = Math.max(50, Math.min(120, 30 + m * 4));
    const bodyH = Math.max(40, Math.min(90, 26 + m * 3));
    const scaleArrow = (val) => Math.max(-260, Math.min(260, val * 18));

    return (
      <g>
        <defs>
          <linearGradient id="mlBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="520" rx="18" fill="url(#mlBg)" />

        {/* Título */}
        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Momento lineal" : "Linear momentum"}
        </text>
        <text x="480" y="75" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="13">
          {isEs
            ? "p = m·v — el producto de masa y velocidad"
            : "p = m·v — the product of mass and velocity"}
        </text>

        {/* Eje horizontal */}
        <line x1="100" y1="300" x2="860" y2="300" stroke="rgba(255,255,255,0.20)" strokeWidth="3" />
        {[-4, -2, 0, 2, 4].map((tick) => (
          <g key={tick}>
            <line x1={posToX(tick)} y1="295" x2={posToX(tick)} y2="305"
              stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
            <text x={posToX(tick)} y="320" textAnchor="middle"
              fill="rgba(255,255,255,0.35)" fontSize="11">
              {tick} m
            </text>
          </g>
        ))}

        {/* Cuerpo */}
        <rect
          x={bodyX - bodyW / 2} y={300 - bodyH}
          width={bodyW} height={bodyH} rx="10"
          fill="rgba(96,165,250,0.22)" stroke="#93c5fd" strokeWidth="2.5"
        />
        <text x={bodyX} y={300 - bodyH / 2 + 5} textAnchor="middle"
          fill="#dbeafe" fontSize="13" fontWeight="700">
          m = {fmt(m, 1, lang)} kg
        </text>

        {/* Flecha velocidad */}
        {Math.abs(v) > 0.01 && (
          <SvgArrow
            x1={bodyX} y1={300 - bodyH - 20}
            x2={bodyX + scaleArrow(v)} y2={300 - bodyH - 20}
            color="#60a5fa"
            label={`v = ${fmt(v, 2, lang)} m/s`}
          />
        )}

        {/* Panel de resultados */}
        <rect x="160" y="346" width="640" height="130" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

        {/* Momento lineal */}
        <text x="320" y="374" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs ? "Momento lineal p" : "Linear momentum p"}
        </text>
        <SvgArrow
          x1={320} y1={396}
          x2={320 + scaleArrow(mom / 4)} y2={396}
          color="#34d399" label=""
        />
        <text x="320" y="430" textAnchor="middle" fill="#86efac" fontSize="16" fontWeight="800">
          {fmt(mom, 2, lang)} kg·m/s
        </text>

        {/* Energía cinética */}
        <text x="640" y="374" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="700">
          {isEs ? "Energía cinética K" : "Kinetic energy K"}
        </text>
        <text x="640" y="420" textAnchor="middle" fill="#fde68a" fontSize="16" fontWeight="800">
          {fmt(K, 2, lang)} J
        </text>

        {/* Fórmulas */}
        <text x="320" y="460" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="12">
          p = m·v = {fmt(m, 1, lang)} × {fmt(v, 2, lang)} = {fmt(mom, 2, lang)}
        </text>
        <text x="640" y="460" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="12">
          K = p²/(2m) = {fmt(mom * mom, 1, lang)} / {fmt(2 * m, 1, lang)} = {fmt(K, 2, lang)}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m", "v"],
    stateOut: ["p", "K"],
    target: "p",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué magnitud vectorial mide la dificultad para cambiar el estado de movimiento de un cuerpo?",
      en: "What vector quantity measures how hard it is to change a body's state of motion?",
    },
    magnitud_estrella: "p",
  },
};

export default profile;
