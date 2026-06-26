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
    id: "svg-manometros",
    leafId: "manometros",
    title: {
      es: "Manometro en U",
      en: "U-tube manometer",
    },
    subtitle: {
      es: "El desnivel de columna se convierte en diferencia de presion",
      en: "Column level difference is converted into pressure difference",
    },
    graph_identity: {
      pregunta_principal: {
        es: "Como convierte un manometro un desnivel visible en una diferencia de presion util",
        en: "How does a manometer convert a visible level difference into a useful pressure difference",
      },
      magnitud_estrella: "dp",
    },
    interpretation_binding: {
      rho: "rho",
      g: "g",
      dh: "dh",
      p1: "p1",
      dp: "dp",
      p2: "p2",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como convierte un manometro un desnivel visible en una diferencia de presion util",
      en: "How does a manometer convert a visible level difference into a useful pressure difference",
    },
    magnitud_estrella: "dp",
  },

  interpretation_binding: {
    paramsIn: ["rho", "g", "dh", "p1"],
    stateOut: ["dp", "p2"],
    target: "dp",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 860 460",
  svgHeight: 500,

  params: {
    schema: [
      {
        key: "rho",
        default: 1000,
        label: { es: "Densidad rho (kg/m^3)", en: "Density rho (kg/m^3)" },
        unit: "kg/m^3",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 15000,
        step: 50,
      },
      {
        key: "g",
        default: 9.81,
        label: { es: "Gravedad g (m/s^2)", en: "Gravity g (m/s^2)" },
        unit: "m/s^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 9,
        max: 10,
        step: 0.01,
      },
      {
        key: "dh",
        default: 0.18,
        label: { es: "Desnivel dh (m)", en: "Level difference dh (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 0.5,
        step: 0.005,
      },
      {
        key: "p1",
        default: 101325,
        label: { es: "Presion p1 (Pa)", en: "Pressure p1 (Pa)" },
        unit: "Pa",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 80000,
        max: 140000,
        step: 500,
      },
    ],
    derivations: {
      dp: ({ rho, g, dh }) => safeNum(rho, 1000) * safeNum(g, 9.81) * safeNum(dh, 0.18),
      p2: ({ p1, rho, g, dh }) => safeNum(p1, 101325) + safeNum(rho, 1000) * safeNum(g, 9.81) * safeNum(dh, 0.18),
    },
  },

  infoCards: [
    {
      key: "manometer-state",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p }) => [
        `dh = ${safeNum(p?.dh, 0.18).toFixed(3)} m`,
        `rho = ${safeNum(p?.rho, 1000).toFixed(0)} kg/m^3`,
      ],
      result: ({ p, lang }) => `${tt(lang, "Delta p", "Delta p")} = ${safeNum(p?.dp, 1765.8).toFixed(1)} Pa`,
      resultColor: "#fde68a",
    },
    {
      key: "manometer-meaning",
      label: { es: "Significado", en: "Meaning" },
      lines: ({ lang }) => [
        tt(lang, "El desnivel visible codifica una diferencia de presion.", "The visible level gap encodes a pressure difference."),
      ],
      result: ({ p, lang }) => `${tt(lang, "p2", "p2")} = ${safeNum(p?.p2, 103090.8).toFixed(1)} Pa`,
      resultColor: "#93c5fd",
    },
  ],

  render({ p: rawParams = {}, lang = "es" }) {
    const rho = safeNum(rawParams.rho, 1000);
    const dh = safeNum(rawParams.dh, 0.18);
    const dp = safeNum(rawParams.dp, rho * 9.81 * dh);
    const leftLevel = 190 + Math.min(dh * 240, 120);
    const rightLevel = leftLevel - Math.min(dh * 240, 120);
    const midX1 = 280;
    const midX2 = 580;

    return (
      <g>
        <rect x="0" y="0" width="860" height="460" rx="18" fill="#0f172a" />
        <text x="430" y="40" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {tt(lang, "Manometro en U", "U-tube manometer")}
        </text>
        <text x="430" y="64" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="13">
          {tt(lang, "El peso de la columna compensa la diferencia de presion.", "Column weight balances the pressure difference.")}
        </text>

        <path d="M 280 110 L 280 340 Q 280 380 320 380 L 540 380 Q 580 380 580 340 L 580 110" fill="none" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" />
        <rect x="250" y={leftLevel} width="60" height={360 - leftLevel} fill="rgba(56,189,248,0.45)" />
        <rect x="550" y={rightLevel} width="60" height={360 - rightLevel} fill="rgba(56,189,248,0.45)" />
        <rect x="310" y="350" width="240" height="30" fill="rgba(56,189,248,0.45)" />

        <line x1="660" y1={leftLevel} x2="660" y2={rightLevel} stroke="#facc15" strokeWidth="4" />
        <line x1="646" y1={leftLevel} x2="674" y2={leftLevel} stroke="#facc15" strokeWidth="4" />
        <line x1="646" y1={rightLevel} x2="674" y2={rightLevel} stroke="#facc15" strokeWidth="4" />
        <text x="690" y={(leftLevel + rightLevel) / 2} fill="#facc15" fontSize="16" fontWeight="700">
          dh
        </text>

        <text x="215" y="118" fill="#ffffff" fontSize="14">p1</text>
        <text x="605" y="118" fill="#ffffff" fontSize="14">p2</text>

        <g transform="translate(56 316)">
          <rect width="230" height="96" rx="12" fill="rgba(15,23,42,0.78)" stroke="rgba(255,255,255,0.1)" />
          <text x="14" y="24" fill="#ffffff" fontSize="14" fontWeight="700">
            {tt(lang, "Parametros", "Parameters")}
          </text>
          <text x="14" y="48" fill="#94a3b8" fontSize="12">rho = {rho.toFixed(0)} kg/m^3</text>
          <text x="14" y="66" fill="#94a3b8" fontSize="12">dh = {dh.toFixed(3)} m</text>
          <text x="14" y="84" fill="#94a3b8" fontSize="12">Delta p = {dp.toFixed(1)} Pa</text>
        </g>
      </g>
    );
  },
};

export default profile;
