import React from "react";
import { SVG_SCENE_TYPES } from "../svgGrammar";

const safeNum = (v, def = 1) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toExponential(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-propagacion-en-medios",
    leafId: "propagacion-en-medios",
    title: {
      es: "Propagacion en medios",
      en: "Propagation in Media",
    },
    subtitle: {
      es: "Indice, velocidad y longitud de onda material",
      en: "Index, speed, and material wavelength",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como cambia la propagacion de una onda electromagnetica al entrar en un medio material?",
      en: "How does electromagnetic-wave propagation change when entering a material medium?",
    },
    magnitud_estrella: "lambda_m",
    variable_control: "indice_de_refraccion_efectivo",
    interpretation_binding: {
      target: "lambda_m",
      formula_ref: "longitud_onda_en_medio",
      result_key: "lambda_m",
    },
  },
  infoCards: [
    {
      key: "indice",
      label: { es: "Indice efectivo", en: "Effective index" },
      lines: ({ p, lang }) => {
        const n = Math.max(0.2, safeNum(p?.indice_de_refraccion_efectivo, 1.5));
        return [lang === "en" ? `n ${fmt(n, 2, lang)}` : `n ${fmt(n, 2, lang)}`];
      },
    },
    {
      key: "propagacion",
      label: { es: "Propagacion", en: "Propagation" },
      lines: ({ p, lang }) => {
        const n = Math.max(0.2, safeNum(p?.indice_de_refraccion_efectivo, 1.5));
        const c = 2.998e8;
        const lambda0 = safeNum(p?.lambda0, 6e-7);
        return [
          lang === "en" ? `v m ${fmt(c / n, 2, lang)} m/s` : `v m ${fmt(c / n, 2, lang)} m/s`,
          lang === "en" ? `lambda m ${fmt(lambda0 / n, 2, lang)} m` : `lambda m ${fmt(lambda0 / n, 2, lang)} m`,
        ];
      },
    },
  ],
  controls: [
    {
      id: "indice_de_refraccion_efectivo",
      label: { es: "Indice n", en: "Index n" },
      type: "slider",
      min: 1,
      max: 2.5,
      step: 0.01,
      default: 1.5,
    },
    {
      id: "lambda0",
      label: { es: "Longitud de onda vacio (m)", en: "Vacuum wavelength (m)" },
      type: "slider",
      min: 3.8e-7,
      max: 7.5e-7,
      step: 1e-9,
      default: 6e-7,
    },
  ],
  scene: SVG_SCENE_TYPES.CUSTOM,
  render: ({ p, lang = "es", dimensions = {} }) => {
    const width = dimensions.width || 920;
    const height = dimensions.height || 520;
    const n = Math.max(1, safeNum(p?.indice_de_refraccion_efectivo, 1.5));
    const c = 2.998e8;
    const lambda0 = safeNum(p?.lambda0, 6e-7);
    const vm = c / n;
    const lm = lambda0 / n;
    const isEn = lang === "en";
    const spacingVac = 78;
    const spacingMed = Math.max(24, spacingVac / n);
    const interfaceX = 380;

    const waveLines = (start, end, spacing, color) => {
      const lines = [];
      for (let x = start; x < end; x += spacing) {
        lines.push(<line key={`${color}-${x}`} x1={x} y1="110" x2={x + 55} y2="410" stroke={color} strokeWidth="3" opacity="0.8" />);
      }
      return lines;
    };

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="mediumGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
        </defs>
        <rect x="0" y="70" width={interfaceX} height="360" fill="#f8fafc" />
        <rect x={interfaceX} y="70" width={width - interfaceX} height="360" fill="url(#mediumGradient)" />
        <line x1={interfaceX} y1="70" x2={interfaceX} y2="430" stroke="#0f172a" strokeWidth="4" />
        {waveLines(40, interfaceX - 35, spacingVac, "#f59e0b")}
        {waveLines(interfaceX + 35, width - 80, spacingMed, "#2563eb")}
        <path d={`M70 260 C180 205, 270 205, ${interfaceX} 255 C520 315, 660 315, 800 270`} fill="none" stroke="#0f172a" strokeWidth="4" />
        <text x="85" y="102" fontSize="15" fill="#0f172a" fontWeight="700">{isEn ? "vacuum reference" : "referencia de vacio"}</text>
        <text x={interfaceX + 40} y="102" fontSize="15" fill="#0f172a" fontWeight="700">{isEn ? "material medium" : "medio material"}</text>
        <text x="88" y="448" fontSize="13" fill="#0f172a">{isEn ? `lambda0 ${fmt(lambda0, 2, lang)} m` : `lambda0 ${fmt(lambda0, 2, lang)} m`}</text>
        <text x={interfaceX + 42} y="448" fontSize="13" fill="#0f172a">{isEn ? `lambda m ${fmt(lm, 2, lang)} m` : `lambda m ${fmt(lm, 2, lang)} m`}</text>
        <text x={interfaceX + 42} y="470" fontSize="13" fill="#0f172a">{isEn ? `v m ${fmt(vm, 2, lang)} m/s` : `v m ${fmt(vm, 2, lang)} m/s`}</text>
        <text x={interfaceX + 42} y="492" fontSize="13" fill="#0f172a">{isEn ? `n ${fmt(n, 2, lang)}` : `n ${fmt(n, 2, lang)}`}</text>
      </svg>
    );
  },
};

export default profile;
