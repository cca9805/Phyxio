import React from "react";
import { SVG_CONTROL_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const tt = (lang, es, en) => (lang === "en" ? en : es);

const fmt = (n, d = 1, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-efecto-venturi",
    leafId: "efecto-venturi",
    title: {
      es: "Efecto Venturi",
      en: "Venturi Effect",
    },
    subtitle: {
      es: "Menor area, mayor velocidad y menor presion en la garganta",
      en: "Smaller area, higher speed and lower pressure at the throat",
    },
    graph_identity: {
      pregunta_principal: {
        es: "Por que la presion del fluido disminuye precisamente donde su velocidad es maxima al atravesar un estrechamiento",
        en: "Why the fluid pressure decreases precisely where its velocity is highest while crossing a constriction",
      },
      magnitud_estrella: "p2",
    },
    interpretation_binding: {
      rho: "rho",
      v1: "v1",
      A1: "A1",
      A2: "A2",
      p1: "p1",
      v2: "v2",
      p2: "p2",
    },
    infoCards: [
      {
        key: "venturi-state",
        label: { es: "Estado del flujo", en: "Flow state" },
      },
      {
        key: "venturi-reading",
        label: { es: "Lectura fisica", en: "Physical reading" },
      },
    ],
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 860 460",
  svgHeight: 500,

  params: {
    schema: [
      {
        key: "rho",
        aliases: ["densidad", "density"],
        default: 1000,
        label: { es: "Densidad rho (kg/m^3)", en: "Density rho (kg/m^3)" },
        unit: "kg/m^3",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 1500,
        step: 10,
      },
      {
        key: "v1",
        aliases: ["velocidad_entrada", "inlet_speed"],
        default: 2,
        label: { es: "Velocidad v1 (m/s)", en: "Speed v1 (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.2,
        max: 12,
        step: 0.1,
      },
      {
        key: "A1",
        aliases: ["area_entrada", "inlet_area"],
        default: 0.05,
        label: { es: "Area A1 (m^2)", en: "Area A1 (m^2)" },
        unit: "m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.02,
        max: 0.15,
        step: 0.005,
      },
      {
        key: "A2",
        aliases: ["area_garganta", "throat_area"],
        default: 0.02,
        label: { es: "Area A2 (m^2)", en: "Area A2 (m^2)" },
        unit: "m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.005,
        max: 0.08,
        step: 0.005,
      },
      {
        key: "p1",
        aliases: ["presion_entrada", "inlet_pressure"],
        default: 100000,
        label: { es: "Presion p1 (Pa)", en: "Pressure p1 (Pa)" },
        unit: "Pa",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 20000,
        max: 200000,
        step: 5000,
      },
    ],
    derivations: {
      v2: ({ v1, A1, A2 }) => safeNum(v1, 2) * safeNum(A1, 0.05) / Math.max(safeNum(A2, 0.02), 1e-6),
      p2: ({ p1, rho, v1, A1, A2 }) => {
        const v1n = safeNum(v1, 2);
        const v2n = v1n * safeNum(A1, 0.05) / Math.max(safeNum(A2, 0.02), 1e-6);
        return safeNum(p1, 100000) - 0.5 * safeNum(rho, 1000) * (v2n * v2n - v1n * v1n);
      },
    },
  },

  infoCards: [
    {
      key: "venturi-state",
      label: { es: "Estado del flujo", en: "Flow state" },
      lines: ({ p, lang }) => {
        const rho = safeNum(p?.rho, 1000);
        const v1 = safeNum(p?.v1, 2);
        const A1 = safeNum(p?.A1, 0.05);
        const A2 = safeNum(p?.A2, 0.02);
        const v2 = v1 * A1 / Math.max(A2, 1e-6);
        return [
          `rho = ${fmt(rho, 0, lang)} kg/m^3`,
          `v2 = ${fmt(v2, 2, lang)} m/s`,
        ];
      },
      result: ({ p, lang }) => {
        const v1 = safeNum(p?.v1, 2);
        const A1 = safeNum(p?.A1, 0.05);
        const A2 = safeNum(p?.A2, 0.02);
        const p1 = safeNum(p?.p1, 100000);
        const rho = safeNum(p?.rho, 1000);
        const v2 = v1 * A1 / Math.max(A2, 1e-6);
        const p2 = p1 - 0.5 * rho * (v2 * v2 - v1 * v1);
        return `p2 = ${fmt(p2 / 1000, 2, lang)} kPa`;
      },
      resultColor: "#fde68a",
    },
    {
      key: "venturi-reading",
      label: { es: "Lectura fisica", en: "Physical reading" },
      lines: ({ p, lang }) => {
        const v1 = safeNum(p?.v1, 2);
        const A1 = safeNum(p?.A1, 0.05);
        const A2 = safeNum(p?.A2, 0.02);
        const ratio = A1 / Math.max(A2, 1e-6);
        return [
          tt(lang, "La garganta impone una aceleracion.", "The throat forces acceleration."),
          `A1/A2 = ${fmt(ratio, 2, lang)} ; v2 = ${fmt(v1 * ratio, 2, lang)} m/s`,
        ];
      },
      result: ({ lang }) =>
        tt(
          lang,
          "Si la garganta es mas estrecha, p2 debe bajar para que el flujo se acelere.",
          "If the throat is narrower, p2 must drop so the flow can accelerate."
        ),
      resultColor: "#93c5fd",
    },
  ],

  render({ params: rawParams = {}, lang = "es" }) {
    const rho = clamp(safeNum(rawParams.rho, 1000), 1, 1500);
    const v1 = clamp(safeNum(rawParams.v1, 2), 0.2, 12);
    const A1 = clamp(safeNum(rawParams.A1, 0.05), 0.02, 0.15);
    const A2 = clamp(safeNum(rawParams.A2, 0.02), 0.005, A1);
    const p1 = clamp(safeNum(rawParams.p1, 100000), 20000, 200000);

    const ratio = A1 / Math.max(A2, 1e-6);
    const v2 = v1 * ratio;
    const p2 = p1 - 0.5 * rho * (v2 * v2 - v1 * v1);
    const dp = p1 - p2;

    const midY = 230;
    const x1 = 90;
    const x2 = 380;
    const x3 = 720;
    const rIn = 70;
    const rTh = Math.max(26, 70 * Math.sqrt(A2 / A1));

    const path = `
      M ${x1} ${midY - rIn}
      L ${x2 - 90} ${midY - rIn}
      C ${x2 - 40} ${midY - rIn} ${x2 - 30} ${midY - rTh} ${x2} ${midY - rTh}
      L ${x2 + 40} ${midY - rTh}
      C ${x2 + 140} ${midY - rTh} ${x3 - 90} ${midY - rIn} ${x3} ${midY - rIn}
      L ${x3} ${midY + rIn}
      C ${x3 - 90} ${midY + rIn} ${x2 + 140} ${midY + rTh} ${x2 + 40} ${midY + rTh}
      L ${x2} ${midY + rTh}
      C ${x2 - 30} ${midY + rTh} ${x2 - 40} ${midY + rIn} ${x2 - 90} ${midY + rIn}
      L ${x1} ${midY + rIn}
      Z
    `;

    return (
      <g>
        <rect x="0" y="0" width="860" height="460" rx="18" fill="#0f172a" />
        <path d={path} fill="rgba(14,165,233,0.18)" stroke="#38bdf8" strokeWidth="3" />

        <SvgArrow
          x1={140}
          y1={midY}
          x2={140 + v1 * 22}
          y2={midY}
          color="#34d399"
          label={`v1 = ${fmt(v1, 1, lang)} m/s`}
        />
        <SvgArrow
          x1={x2 + 5}
          y1={midY}
          x2={x2 + 5 + Math.min(v2 * 10, 140)}
          y2={midY}
          color="#34d399"
          label={`v2 = ${fmt(v2, 1, lang)} m/s`}
        />

        <line x1={220} y1={midY - rIn} x2={220} y2={90} stroke="#cbd5e1" strokeDasharray="4 4" />
        <line x1={x2 + 20} y1={midY - rTh} x2={x2 + 20} y2={110} stroke="#cbd5e1" strokeDasharray="4 4" />

        <rect x="185" y="62" width="70" height="26" rx="6" fill="#111827" stroke="#38bdf8" />
        <rect x={x2 - 15} y="82" width="70" height="26" rx="6" fill="#111827" stroke="#fde68a" />
        <text x="220" y="79" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700">p1</text>
        <text x={x2 + 20} y="99" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="700">p2</text>

        <text x="430" y="40" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {tt(lang, "Efecto Venturi", "Venturi Effect")}
        </text>
        <text x="430" y="64" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="13">
          {tt(
            lang,
            "La garganta acelera el flujo y baja la presion estatica.",
            "The throat accelerates the flow and lowers static pressure."
          )}
        </text>

        <g transform="translate(36 324)">
          <rect width="240" height="100" rx="12" fill="rgba(15,23,42,0.78)" stroke="rgba(255,255,255,0.1)" />
          <text x="14" y="24" fill="#ffffff" fontSize="14" fontWeight="700">
            {tt(lang, "Parametros", "Parameters")}
          </text>
          <text x="14" y="48" fill="#94a3b8" fontSize="12">rho = {fmt(rho, 0, lang)} kg/m^3</text>
          <text x="14" y="66" fill="#94a3b8" fontSize="12">A1/A2 = {fmt(ratio, 2, lang)}</text>
          <text x="14" y="84" fill="#94a3b8" fontSize="12">Q = {fmt(v1 * A1, 3, lang)} m^3/s</text>
        </g>

        <g transform="translate(588 324)">
          <rect width="236" height="100" rx="12" fill="rgba(15,23,42,0.78)" stroke="rgba(255,255,255,0.1)" />
          <text x="14" y="24" fill="#ffffff" fontSize="14" fontWeight="700">
            {tt(lang, "Lectura", "Reading")}
          </text>
          <text x="14" y="48" fill="#fde68a" fontSize="12">Delta p = {fmt(dp / 1000, 2, lang)} kPa</text>
          <text x="14" y="66" fill="#fde68a" fontSize="12">p2 = {fmt(p2 / 1000, 2, lang)} kPa</text>
          <text x="14" y="84" fill="#93c5fd" fontSize="12">
            {tt(lang, "Menor area -> mayor v -> menor p", "Smaller area -> higher v -> lower p")}
          </text>
        </g>
      </g>
    );
  },
};

export default profile;
