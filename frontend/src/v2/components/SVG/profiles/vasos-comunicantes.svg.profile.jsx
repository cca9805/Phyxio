import React from "react";
import { SVG_CONTROL_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const tt = (lang, es, en) => (lang === "en" ? en : es);

const profile = {
  meta: {
    id: "svg-vasos-comunicantes",
    leafId: "vasos-comunicantes",
    title: {
      es: "Vasos comunicantes",
      en: "Communicating vessels",
    },
    subtitle: {
      es: "La altura de equilibrio depende de densidad y referencia comun",
      en: "Equilibrium height depends on density and common reference",
    },
    graph_identity: {
      pregunta_principal: {
        es: "Como se igualan los niveles en vasos conectados cuando la presion coincide a una misma profundidad",
        en: "How does level equalization emerge in connected vessels when pressure matches at the same depth",
      },
      magnitud_estrella: "h2",
    },
    interpretation_binding: {
      h1: "h1",
      rho1: "rho1",
      rho2: "rho2",
      h2: "h2",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como se igualan los niveles en vasos conectados cuando la presion coincide a una misma profundidad",
      en: "How does level equalization emerge in connected vessels when pressure matches at the same depth",
    },
    magnitud_estrella: "h2",
  },

  interpretation_binding: {
    paramsIn: ["h1", "rho1", "rho2"],
    stateOut: ["h2"],
    target: "h2",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 860 460",
  svgHeight: 500,

  params: {
    schema: [
      {
        key: "h1",
        default: 0.24,
        label: { es: "Altura h1 (m)", en: "Height h1 (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.05,
        max: 0.8,
        step: 0.01,
      },
      {
        key: "rho1",
        default: 1000,
        label: { es: "Densidad rho1 (kg/m^3)", en: "Density rho1 (kg/m^3)" },
        unit: "kg/m^3",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 200,
        max: 1600,
        step: 10,
      },
      {
        key: "rho2",
        default: 800,
        label: { es: "Densidad rho2 (kg/m^3)", en: "Density rho2 (kg/m^3)" },
        unit: "kg/m^3",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 200,
        max: 1600,
        step: 10,
      },
    ],
    derivations: {
      h2: ({ h1, rho1, rho2 }) => (safeNum(rho1, 1000) * safeNum(h1, 0.24)) / Math.max(1, safeNum(rho2, 800)),
    },
  },

  infoCards: [
    {
      key: "column-state",
      label: { es: "Equilibrio", en: "Equilibrium" },
      lines: ({ p }) => [
        `h1 = ${safeNum(p?.h1, 0.24).toFixed(3)} m`,
        `rho1 = ${safeNum(p?.rho1, 1000).toFixed(0)} kg/m^3`,
        `rho2 = ${safeNum(p?.rho2, 800).toFixed(0)} kg/m^3`,
      ],
      result: ({ p, lang }) => `${tt(lang, "h2", "h2")} = ${safeNum(p?.h2, 0.3).toFixed(3)} m`,
      resultColor: "#fde68a",
    },
    {
      key: "column-meaning",
      label: { es: "Lectura fisica", en: "Physical reading" },
      lines: ({ lang }) => [
        tt(
          lang,
          "La columna menos densa necesita mas altura para equilibrar la misma horizontal.",
          "The less dense column needs more height to balance the same horizontal level."
        ),
      ],
      result: ({ p, lang }) =>
        safeNum(p?.rho2, 800) < safeNum(p?.rho1, 1000)
          ? tt(lang, "La rama 2 debe quedar mas alta", "Branch 2 must end higher")
          : tt(lang, "La rama 2 puede quedar igual o mas baja", "Branch 2 can end equal or lower"),
      resultColor: "#93c5fd",
    },
  ],

  render({ p: rawParams = {}, lang = "es" }) {
    const h1 = safeNum(rawParams.h1, 0.24);
    const rho1 = safeNum(rawParams.rho1, 1000);
    const rho2 = safeNum(rawParams.rho2, 800);
    const h2 = safeNum(rawParams.h2, (rho1 * h1) / Math.max(1, rho2));
    const maxHeight = Math.max(h1, h2, 0.35);
    const pxPerM = 220 / maxHeight;
    const leftLevel = 350 - h1 * pxPerM;
    const rightLevel = 350 - h2 * pxPerM;

    return (
      <g>
        <rect x="0" y="0" width="860" height="460" rx="18" fill="#0f172a" />
        <text x="430" y="40" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {tt(lang, "Vasos comunicantes", "Communicating vessels")}
        </text>
        <text x="430" y="64" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="13">
          {tt(lang, "La presion se iguala a una misma profundidad.", "Pressure becomes equal at the same depth.")}
        </text>

        <path d="M 280 110 L 280 350 Q 280 390 320 390 L 540 390 Q 580 390 580 350 L 580 110" fill="none" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" />
        <rect x="250" y={leftLevel} width="60" height={350 - leftLevel} fill="rgba(56,189,248,0.55)" />
        <rect x="550" y={rightLevel} width="60" height={350 - rightLevel} fill="rgba(245,158,11,0.55)" />
        <rect x="310" y="360" width="240" height="30" fill="rgba(100,116,139,0.45)" />

        <line x1="640" y1="350" x2="720" y2="350" stroke="rgba(255,255,255,0.4)" strokeDasharray="4 4" />
        <text x="730" y="354" fill="rgba(255,255,255,0.72)" fontSize="12">
          {tt(lang, "Horizontal comun", "Common horizontal")}
        </text>

        <line x1="660" y1="350" x2="660" y2={rightLevel} stroke="#facc15" strokeWidth="4" />
        <line x1="646" y1="350" x2="674" y2="350" stroke="#facc15" strokeWidth="4" />
        <line x1="646" y1={rightLevel} x2="674" y2={rightLevel} stroke="#facc15" strokeWidth="4" />
        <text x="690" y={(350 + rightLevel) / 2} fill="#facc15" fontSize="16" fontWeight="700">
          h2
        </text>

        <line x1="200" y1="350" x2="200" y2={leftLevel} stroke="#93c5fd" strokeWidth="4" />
        <line x1="186" y1="350" x2="214" y2="350" stroke="#93c5fd" strokeWidth="4" />
        <line x1="186" y1={leftLevel} x2="214" y2={leftLevel} stroke="#93c5fd" strokeWidth="4" />
        <text x="150" y={(350 + leftLevel) / 2} fill="#93c5fd" fontSize="16" fontWeight="700">
          h1
        </text>

        <text x="225" y="118" fill="#ffffff" fontSize="14">rho1</text>
        <text x="605" y="118" fill="#ffffff" fontSize="14">rho2</text>

        <g transform="translate(56 308)">
          <rect width="250" height="104" rx="12" fill="rgba(15,23,42,0.78)" stroke="rgba(255,255,255,0.1)" />
          <text x="14" y="24" fill="#ffffff" fontSize="14" fontWeight="700">
            {tt(lang, "Parametros", "Parameters")}
          </text>
          <text x="14" y="48" fill="#94a3b8" fontSize="12">h1 = {h1.toFixed(3)} m</text>
          <text x="14" y="66" fill="#94a3b8" fontSize="12">rho1 = {rho1.toFixed(0)} kg/m^3</text>
          <text x="14" y="84" fill="#94a3b8" fontSize="12">rho2 = {rho2.toFixed(0)} kg/m^3</text>
          <text x="14" y="102" fill="#fde68a" fontSize="12">h2 = {h2.toFixed(3)} m</text>
        </g>
      </g>
    );
  },
};

export default profile;
