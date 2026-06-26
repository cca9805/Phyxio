import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

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
    id: "svg-interpretacion-fisica",
    leafId: "interpretacion-fisica",
    title: {
      es: "Unificación Electromagnética",
      en: "Electromagnetic Unification",
    },
    subtitle: {
      es: "Relación entre campos E, B y velocidad c",
      en: "Relationship between E, B fields and speed c",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se unifican la luz, la electricidad y el magnetismo en un solo marco conceptual?",
      en: "How are light, electricity, and magnetism unified in a single conceptual framework?",
    },
    magnitud_estrella: "vector_de_poynting",
    variable_control: "amplitud_del_campo_electrico",
  },
  infoCards: [
    {
      key: "poynting",
      label: { es: "Flujo de energía", en: "Energy Flow" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? "Describe la dirección del transporte energético" : "Describes the direction of energy transport",
          isEs ? "Es el producto vectorial de E y B" : "It's the cross product of E and B"
        ];
      },
      result: ({ p, lang }) => "S = E × B / mu0"
    }
  ],
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 560,
  params: {
    schema: [
      {
        key: "E0",
        default: 150,
        label: { es: "Amplitud Campo Eléctrico", en: "Electric Field Amplitude" },
        unit: "V/m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 500,
        step: 10,
      },
      {
        key: "n",
        default: 1,
        label: { es: "Índice de refracción", en: "Refractive index" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 3,
        step: 0.1,
      },
    ],
    derivations: {
      c: ({ n }) => 299792458 / safeNum(n, 1),
      B0: ({ E0, n }) => (safeNum(E0, 150) * safeNum(n, 1)) / 299792458,
    },
  },
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ p, lang = "es", toNum }) => {
    const isEs = lang !== "en";
    const E0 = toNum(p?.E0, 150);
    const n = toNum(p?.n, 1);
    const c = toNum(p?.c, 299792458);
    
    // Escala visual
    const eScale = E0 / 2;
    const bScale = (E0 * n) / 2; // Representación visual amplificada de B para que se vea

    return (
      <g>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="#0f172a" />
        
        <text x="480" y="60" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Interpretación Física de Maxwell" : "Maxwell's Physical Interpretation"}
        </text>

        <g transform="translate(100, 280)">
          {/* Eje de propagación */}
          <line x1="0" y1="0" x2="700" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Vectores de campo */}
          <SvgArrow x1="200" y1="0" x2="200" y2={-eScale} color="#ef4444" label={`E=${E0} V/m`} />
          <SvgArrow x1="200" y1="0" x2={200 + bScale/2} y2={bScale/2} color="#3b82f6" label={`B`} />
          
          <text x="710" y="5" fill="#ffffff" fontSize="14">{isEs ? "Dirección de propagación (c)" : "Propagation direction (c)"}</text>
        </g>

        <g transform="translate(100, 480)">
          <text x="0" y="0" fill="rgba(255,255,255,0.8)" fontSize="16">
            {isEs ? `Velocidad de fase c = ${fmt(c/1e6, 2, lang)} · 10⁶ m/s` : `Phase velocity c = ${fmt(c/1e6, 2, lang)} · 10⁶ m/s`}
          </text>
        </g>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["E0", "n"],
    stateOut: ["c", "B0"],
  },
};

export default profile;
