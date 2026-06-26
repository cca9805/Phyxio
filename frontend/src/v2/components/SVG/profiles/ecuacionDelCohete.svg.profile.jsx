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
    id: "svg-ecuacion-del-cohete",
    leafId: "ecuacion-del-cohete",
    title: {
      es: "Ecuacion del cohete",
      en: "Rocket equation",
    },
    subtitle: {
      es: "DeltaV, razon de masas y velocidad de eyeccion en una sola lectura visual",
      en: "DeltaV, mass ratio, and exhaust speed in a single visual reading",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "ecuacion-del-cohete",
    graphId: "svg-ecuacion-del-cohete",
    purpose: {
      es: "Mostrar que la ganancia de velocidad depende de ve y del coste logaritmico de reducir la masa desde m0 hasta mf.",
      en: "Show that velocity gain depends on ve and on the logarithmic cost of reducing mass from m0 to mf.",
    },
    level: {
      es: "universidad | extracurricular",
      en: "undergraduate | extracurricular",
    },
    expectedInputs: ["m0", "mf", "ve"],
    derivedMagnitudes: ["DeltaV", "massRatio", "propellant"],
    targetCandidates: ["DeltaV", "mf", "m0", "ve"],
    equations: ["DeltaV = ve ln(m0/mf)", "massRatio = m0 / mf"],
    hypotheses: ["sin gravedad ni drag en la fase ideal", "ve aproximadamente constante"],
    validityDomain: ["mf > 0", "m0 >= mf"],
    visualSimplifications: ["vehiculo de una etapa", "combustible resumido como deposito unico"],
    alwaysVisible: ["DeltaV", "massRatio", "propellant", "ve"],
    hasInternalTime: true,
    hasPlayPause: true,
    timeSemantics: "engine plume pulse",
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      { key: "m0", default: 12, label: { es: "Masa inicial", en: "Initial mass" }, unit: "kg", type: SVG_CONTROL_TYPES.RANGE, min: 2, max: 30, step: 0.2 },
      { key: "mf", default: 4.5, label: { es: "Masa final", en: "Final mass" }, unit: "kg", type: SVG_CONTROL_TYPES.RANGE, min: 0.5, max: 20, step: 0.1 },
      { key: "ve", default: 2500, label: { es: "Velocidad de eyeccion", en: "Exhaust speed" }, unit: "m/s", type: SVG_CONTROL_TYPES.RANGE, min: 500, max: 4500, step: 50 },
    ],
    derivations: {
      massRatio: ({ m0, mf }) => {
        const m0v = Math.max(0.001, safeNum(m0, 12));
        const mfv = Math.max(0.001, Math.min(m0v, safeNum(mf, 4.5)));
        return m0v / mfv;
      },
      DeltaV: ({ m0, mf, ve }) => {
        const m0v = Math.max(0.001, safeNum(m0, 12));
        const mfv = Math.max(0.001, Math.min(m0v, safeNum(mf, 4.5)));
        return safeNum(ve, 2500) * Math.log(m0v / mfv);
      },
      propellant: ({ m0, mf }) => {
        const m0v = Math.max(0.001, safeNum(m0, 12));
        const mfv = Math.max(0.001, Math.min(m0v, safeNum(mf, 4.5)));
        return m0v - mfv;
      },
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación de Tsiolkovsky", en: "Tsiolkovsky equation" },
      highlight: "\\Delta V = v_e \\ln\\left(\\frac{m_0}{m_f}\\right)",
      highlightColor: "#34d399",
      description: {
        es: "La ganancia de velocidad depende de la velocidad de eyección y del logaritmo de la razón de masas.",
        en: "Velocity gain depends on exhaust speed and the logarithm of the mass ratio.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `v_e = ${fmt(safeNum(p?.ve, 0), 0, lang)} m/s`,
        `m_0/m_f = ${fmt(safeNum(p?.massRatio, 0), 2, lang)}`,
      ],
      result: ({ p, lang }) => `\\Delta V = ${fmt(safeNum(p?.DeltaV, 0), 0, lang)} m/s`,
      resultColor: "#34d399",
    },
    {
      key: "propellant",
      label: { es: "Propelente", en: "Propellant" },
      bg: "rgba(249,115,22,0.10)",
      border: "rgba(249,115,22,0.18)",
      description: {
        es: "Masa de combustible expulsada para lograr el cambio de velocidad.",
        en: "Mass of fuel expelled to achieve the velocity change.",
      },
      highlight: ({ p, lang }) => `m_p = ${fmt(safeNum(p?.propellant, 0), 2, lang)} kg`,
      highlightColor: "#f97316",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 4,
    loop: true,
    state: (t) => ({
      flame: 0.55 + 0.45 * Math.sin((2 * Math.PI * t) / 4) ** 2,
      shimmer: 0.4 + 0.6 * Math.sin((2 * Math.PI * t) / 2) ** 2,
    }),
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m0 = Math.max(0.001, safeNum(p?.m0, 12));
    const mf = Math.max(0.001, Math.min(m0, safeNum(p?.mf, 4.5)));
    const ve = safeNum(p?.ve, 2500);
    const massRatio = safeNum(p?.massRatio, m0 / mf);
    const DeltaV = safeNum(p?.DeltaV, ve * Math.log(m0 / mf));
    const propellant = safeNum(p?.propellant, m0 - mf);
    const fuelFrac = Math.max(0, Math.min(1, propellant / m0));
    const flame = safeNum(state?.flame, 0.8);
    const shimmer = safeNum(state?.shimmer, 0.7);
    const plumeLen = 95 + 55 * flame;

    return (
      <g>
        <defs>
          <linearGradient id="rocketBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#05101d" />
            <stop offset="100%" stopColor="#10243a" />
          </linearGradient>
          <linearGradient id="tankFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#rocketBg)" />
        <circle cx="120" cy="92" r={2 + 2 * shimmer} fill="rgba(255,255,255,0.8)" />
        <circle cx="208" cy="142" r="2" fill="rgba(255,255,255,0.55)" />
        <circle cx="812" cy="108" r={1.5 + shimmer} fill="rgba(255,255,255,0.72)" />
        <circle cx="700" cy="62" r="2.4" fill="rgba(255,255,255,0.65)" />
        <text x="480" y="48" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">
          {isEs ? "Ecuacion del cohete" : "Rocket equation"}
        </text>
        <text x="480" y="76" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="13">
          {isEs ? "El DeltaV crece con ve, pero tambien con el coste logaritmico de expulsar masa." : "DeltaV grows with ve, but also with the logarithmic cost of expelling mass."}
        </text>
        <g transform="translate(270 170)">
          <rect x="0" y="70" width="260" height="88" rx="28" fill="rgba(226,232,240,0.12)" stroke="#e2e8f0" strokeWidth="2.5" />
          <polygon points="260,70 330,114 260,158" fill="rgba(226,232,240,0.18)" stroke="#e2e8f0" strokeWidth="2.5" />
          <polygon points="-20,114 -95,76 -95,152" fill={`rgba(251,146,60,${0.28 + 0.22 * flame})`} stroke="#fb923c" strokeWidth="2" />
          <polygon points={`-20,114 ${-20 - plumeLen},102 ${-20 - plumeLen},126`} fill={`rgba(251,191,36,${0.22 + 0.28 * flame})`} stroke="none" />
          <rect x="58" y="85" width="110" height="58" rx="12" fill="rgba(15,23,42,0.7)" stroke="rgba(255,255,255,0.18)" />
          <rect x="64" y={91 + (1 - fuelFrac) * 46} width="98" height={46 * fuelFrac} rx="9" fill="url(#tankFill)" />
          <text x="113" y="121" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">
            {isEs ? "Deposito" : "Tank"}
          </text>
          <text x="113" y="174" textAnchor="middle" fill="#f8fafc" fontSize="12">
            {`${fmt(propellant, 2, lang)} kg ${isEs ? "de propelente" : "of propellant"}`}
          </text>
        </g>
        <SvgArrow x1="305" y1="284" x2={305 - plumeLen} y2="284" color="#f59e0b" label={`ve = ${fmt(ve, 0, lang)} m/s`} />
        <SvgArrow x1="640" y1="250" x2={640 + Math.min(180, DeltaV * 0.04)} y2="250" color="#34d399" label={`DeltaV = ${fmt(DeltaV, 0, lang)} m/s`} />
        <rect x="92" y="418" width="776" height="98" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="132" y="452" fill="#f8fafc" fontSize="14" fontWeight="800">{`m0 = ${fmt(m0, 2, lang)} kg`}</text>
        <text x="304" y="452" fill="#f8fafc" fontSize="14" fontWeight="800">{`mf = ${fmt(mf, 2, lang)} kg`}</text>
        <text x="480" y="452" fill="#f8fafc" fontSize="14" fontWeight="800" textAnchor="middle">{`m0/mf = ${fmt(massRatio, 2, lang)}`}</text>
        <text x="730" y="452" fill="#34d399" fontSize="14" fontWeight="800" textAnchor="end">{`DeltaV = ${fmt(DeltaV, 0, lang)} m/s`}</text>
        <rect x="130" y="474" width="240" height="14" rx="7" fill="rgba(255,255,255,0.09)" />
        <rect x="130" y="474" width={240 * (mf / m0)} height="14" rx="7" fill="#60a5fa" />
        <rect x="490" y="474" width="240" height="14" rx="7" fill="rgba(255,255,255,0.09)" />
        <rect x="490" y="474" width={240 * Math.min(1, Math.log(Math.max(1.0001, massRatio)) / Math.log(6))} height="14" rx="7" fill="#34d399" />
        <text x="250" y="505" textAnchor="middle" fill="rgba(255,255,255,0.64)" fontSize="11">
          {isEs ? "fraccion de masa final" : "final-mass fraction"}
        </text>
        <text x="610" y="505" textAnchor="middle" fill="rgba(255,255,255,0.64)" fontSize="11">
          {isEs ? "crecimiento logaritmico del DeltaV" : "logarithmic DeltaV growth"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m0", "mf", "ve"],
    stateOut: ["DeltaV", "massRatio", "propellant"],
    target: "DeltaV",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se combinan la velocidad de eyeccion y la razon de masas para fijar el DeltaV util de un cohete ideal?",
      en: "How do exhaust speed and mass ratio combine to set the useful DeltaV of an ideal rocket?",
    },
    magnitud_estrella: "DeltaV",
  },
};

export default profile;
