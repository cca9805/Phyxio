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

const clampArrow = (value, scale = 18) => Math.max(-160, Math.min(160, value * scale));

const profile = {
  meta: {
    id: "svg-balance-de-momento-con-flujo-de-masa",
    leafId: "balance-de-momento-con-flujo-de-masa",
    title: {
      es: "Balance de momento con flujo de masa",
      en: "Momentum balance with mass flow",
    },
    subtitle: {
      es: "Volumen de control, flujo de momento y fuerza externa en la misma escena",
      en: "Control volume, momentum flux, and external force in the same scene",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "balance-de-momento-con-flujo-de-masa",
    graphId: "svg-balance-de-momento-con-flujo-de-masa",
    purpose: {
      es: "Mostrar que el momento del subsistema puede cambiar por fuerza externa y por transporte de momento a traves de la frontera.",
      en: "Show that the subsystem momentum can change due to external force and due to momentum transport across the boundary.",
    },
    level: {
      es: "universidad | extracurricular",
      en: "undergraduate | extracurricular",
    },
    expectedInputs: ["m", "v", "u", "mdot", "Fext"],
    derivedMagnitudes: ["P", "flux", "dPdt"],
    targetCandidates: ["P", "dPdt", "Fext"],
    equations: ["P = m v", "flux = mdot u", "dPdt = Fext + mdot u"],
    hypotheses: ["volumen de control bien definido", "lectura unidimensional del balance"],
    validityDomain: ["convencion de signos consistente", "mdot y u referidos a la misma frontera"],
    visualSimplifications: ["subsistema tipo tobera o carro-reactor", "flujo concentrado en un solo conducto"],
    alwaysVisible: ["P", "flux", "dPdt", "Fext"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      { key: "m", default: 4, label: { es: "Masa", en: "Mass" }, unit: "kg", type: SVG_CONTROL_TYPES.RANGE, min: 0.5, max: 10, step: 0.1 },
      { key: "v", default: 3, label: { es: "Velocidad del sistema", en: "System velocity" }, unit: "m/s", type: SVG_CONTROL_TYPES.RANGE, min: -8, max: 8, step: 0.1 },
      { key: "u", default: -5, label: { es: "Velocidad de flujo", en: "Flow speed" }, unit: "m/s", type: SVG_CONTROL_TYPES.RANGE, min: -10, max: 10, step: 0.1 },
      { key: "mdot", default: 1.4, label: { es: "Caudal masico", en: "Mass flow rate" }, unit: "kg/s", type: SVG_CONTROL_TYPES.RANGE, min: -4, max: 4, step: 0.1 },
      { key: "Fext", default: 0.8, label: { es: "Fuerza externa", en: "External force" }, unit: "N", type: SVG_CONTROL_TYPES.RANGE, min: -8, max: 8, step: 0.1 },
    ],
    derivations: {
      P: ({ m, v }) => safeNum(m, 4) * safeNum(v, 3),
      flux: ({ mdot, u }) => safeNum(mdot, 1.4) * safeNum(u, -5),
      dPdt: ({ mdot, u, Fext }) => safeNum(Fext, 0.8) + safeNum(mdot, 1.4) * safeNum(u, -5),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación de balance", en: "Balance equation" },
      highlight: "\\frac{dP}{dt} = F_{ext} + \\dot{m} u",
      highlightColor: "#f59e0b",
      description: {
        es: "El cambio de momento neto depende tanto de fuerzas externas como del flujo de masa.",
        en: "Net momentum change depends on both external forces and mass flow.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `F_{ext} = ${fmt(safeNum(p?.Fext, 0), 2, lang)} N`,
        `\\dot{m} u = ${fmt(safeNum(p?.flux, 0), 2, lang)} kg m/s²`,
      ],
      result: ({ p, lang }) => `\\frac{dP}{dt} = ${fmt(safeNum(p?.dPdt, 0), 2, lang)} kg m/s²`,
      resultColor: "#f59e0b",
    },
    {
      key: "transport",
      label: { es: "Transporte", en: "Transport" },
      bg: "rgba(52,211,153,0.10)",
      border: "rgba(52,211,153,0.18)",
      description: {
        es: "El término mdot·u representa el momento que entra o sale del volumen de control.",
        en: "The mdot·u term represents the momentum entering or leaving the control volume.",
      },
      highlightColor: "#34d399",
    },
  ],
  motion: { type: SVG_MOTION_TYPES.STATIC },
  render: ({ p, lang = "es" }) => {
    const isEs = lang !== "en";
    const m = safeNum(p?.m, 4);
    const v = safeNum(p?.v, 3);
    const u = safeNum(p?.u, -5);
    const mdot = safeNum(p?.mdot, 1.4);
    const Fext = safeNum(p?.Fext, 0.8);
    const P = safeNum(p?.P, m * v);
    const flux = safeNum(p?.flux, mdot * u);
    const dPdt = safeNum(p?.dPdt, Fext + mdot * u);
    const flowDir = flux >= 0 ? 1 : -1;
    const flowColor = flux >= 0 ? "#34d399" : "#f87171";

    return (
      <g>
        <defs>
          <linearGradient id="flowBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#09131f" />
            <stop offset="100%" stopColor="#15304f" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#flowBg)" />
        <text x="480" y="48" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">
          {isEs ? "Balance de momento con flujo de masa" : "Momentum balance with mass flow"}
        </text>
        <text x="480" y="76" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="13">
          {isEs ? "El cambio de momento combina fuerza externa y transporte por la frontera del volumen de control." : "Momentum change combines external force and transport across the control-volume boundary."}
        </text>
        <rect x="205" y="176" width="550" height="190" rx="20" fill="rgba(15,23,42,0.34)" stroke="rgba(255,255,255,0.2)" strokeDasharray="10 8" strokeWidth="3" />
        <text x="480" y="206" textAnchor="middle" fill="rgba(255,255,255,0.76)" fontSize="14" fontWeight="800">
          {isEs ? "Volumen de control" : "Control volume"}
        </text>
        <rect x="340" y="230" width="280" height="82" rx="18" fill="rgba(96,165,250,0.18)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x="480" y="276" textAnchor="middle" fill="#dbeafe" fontSize="15" fontWeight="800">
          {isEs ? "Subsistema seguido" : "Tracked subsystem"}
        </text>
        <text x="480" y="302" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="13">
          {`P = ${fmt(P, 2, lang)} kg m/s`}
        </text>
        <SvgArrow x1="300" y1="346" x2={300 + clampArrow(v, 20)} y2="346" color="#60a5fa" label={`v = ${fmt(v, 2, lang)}`} />
        <SvgArrow x1={flowDir > 0 ? 120 : 840} y1="255" x2={flowDir > 0 ? 120 + clampArrow(flux, 8) : 840 + clampArrow(flux, 8)} y2="255" color={flowColor} label={`mdot u = ${fmt(flux, 2, lang)}`} />
        <SvgArrow x1="480" y1="150" x2={480 + clampArrow(Fext, 18)} y2="150" color="#f59e0b" label={`Fext = ${fmt(Fext, 2, lang)}`} />
        <circle cx="235" cy="255" r="14" fill="rgba(255,255,255,0.12)" stroke={flowColor} strokeWidth="2" />
        <circle cx="725" cy="255" r="14" fill="rgba(255,255,255,0.12)" stroke={flowColor} strokeWidth="2" />
        <text x="235" y="260" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">m.</text>
        <text x="725" y="260" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">m.</text>
        <rect x="110" y="420" width="740" height="94" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="148" y="452" fill="#f8fafc" fontSize="14" fontWeight="800">
          {`dP/dt = ${fmt(dPdt, 2, lang)}`}
        </text>
        <text x="148" y="478" fill="rgba(255,255,255,0.7)" fontSize="12">
          {`m = ${fmt(m, 2, lang)} kg, mdot = ${fmt(mdot, 2, lang)} kg/s, u = ${fmt(u, 2, lang)} m/s`}
        </text>
        <text x="480" y="454" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="12">
          {isEs ? "Si el termino de flujo compensa a Fext, el momento del subsistema deja de cambiar." : "If the flow term compensates Fext, the subsystem momentum stops changing."}
        </text>
        <text x="480" y="500" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">
          {isEs ? "Convencion mostrada: dP/dt = Fext + mdot u. Lo importante es mantener el mismo criterio de signos en todo el balance." : "Displayed convention: dP/dt = Fext + mdot u. The key is to keep the same sign convention throughout the balance."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m", "v", "u", "mdot", "Fext"],
    stateOut: ["P", "flux", "dPdt"],
    target: "dPdt",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo separa un volumen de control el efecto de la fuerza externa y el del flujo de momento a traves de su frontera?",
      en: "How does a control volume separate the effect of external force from the momentum flow crossing its boundary?",
    },
    magnitud_estrella: "dPdt",
  },
};

export default profile;
