import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const spring = (x, y, w) => `M ${x} ${y} l 16 0 l 10 -18 l 18 36 l 18 -36 l 18 36 l 18 -36 l 18 36 l 18 -36 l ${w - 134} 0`;

const profile = {
  meta: {
    id: "svg-sistemas-con-muelles",
    leafId: "sistemas-con-muelles",
    title: {
      es: "Sistemas con muelles",
      en: "Spring systems",
    },
    subtitle: {
      es: "Serie y paralelo cambian la rigidez equivalente y el reparto interno",
      en: "Series and parallel change equivalent stiffness and internal distribution",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como cambia la rigidez equivalente de un sistema con muelles cuando se conectan en serie o en paralelo, y como se reparte internamente la deformacion o la fuerza?",
      en: "How does the equivalent stiffness of a spring system change when springs are connected in series or in parallel, and how is deformation or force distributed internally?",
    },
    magnitud_estrella: "x1",
    magnitud_secundaria: "keq",
    variable_control: "x",
  },
  interpretation_binding: {
    paramsIn: ["k1", "k2", "x", "config"],
    stateOut: ["keq", "x1", "x2", "F1", "F2"],
  },
  visual_mapping: {
    keq: {
      es: "La longitud y el texto central resumen la rigidez equivalente del conjunto.",
      en: "The central text summarizes the equivalent stiffness of the whole set.",
    },
    x1: {
      es: "En serie, la longitud visual de cada muelle sugiere el reparto de deformacion x1 y x2.",
      en: "In series, the visible spring lengths suggest the deformation split x1 and x2.",
    },
    F1: {
      es: "En paralelo, las etiquetas F1 y F2 representan el reparto de fuerza total.",
      en: "In parallel, the labels F1 and F2 represent the sharing of total force.",
    },
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [],
  },
  infoCards: [
    {
      key: "structuralReading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ lang }) => [
        lang === "en" ? "Series: same force, distributed deformation" : "Serie: misma fuerza, deformacion repartida",
        lang === "en" ? "Parallel: same deformation, distributed force" : "Paralelo: misma deformacion, fuerza repartida",
      ],
      result: ({ lang }) =>
        lang === "en" ? "The graph separates global stiffness from internal sharing" : "El grafico separa rigidez global y reparto interno",
      resultColor: "#93c5fd",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ lang = "es" }) => {
    const isEs = lang !== "en";
    return (
      <g>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="#0f172a" />

        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Sistemas con muelles" : "Spring systems"}
        </text>

        <rect x="60" y="100" width="380" height="360" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
        <text x="250" y="138" textAnchor="middle" fill="#93c5fd" fontSize="20" fontWeight="800">
          {isEs ? "Serie" : "Series"}
        </text>
        <rect x="90" y="220" width="16" height="120" fill="#94a3b8" />
        <path d={spring(106, 260, 120)} fill="none" stroke="#fbbf24" strokeWidth="4" />
        <path d={spring(226, 260, 120)} fill="none" stroke="#f59e0b" strokeWidth="4" />
        <rect x="346" y="226" width="50" height="68" rx="10" fill="#e2e8f0" />
        <text x="250" y="390" textAnchor="middle" fill="#ffffff" fontSize="18">
          {isEs ? "x = x1 + x2" : "x = x1 + x2"}
        </text>
        <text x="160" y="210" fill="#fbbf24" fontSize="14" fontWeight="700">x1</text>
        <text x="282" y="210" fill="#f59e0b" fontSize="14" fontWeight="700">x2</text>
        <text x="250" y="420" textAnchor="middle" fill="#86efac" fontSize="16" fontWeight="700">
          {isEs ? "keq menor: el conjunto se ablanda" : "smaller keq: the set softens"}
        </text>

        <rect x="520" y="100" width="380" height="360" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
        <text x="710" y="138" textAnchor="middle" fill="#86efac" fontSize="20" fontWeight="800">
          {isEs ? "Paralelo" : "Parallel"}
        </text>
        <rect x="550" y="200" width="16" height="160" fill="#94a3b8" />
        <path d={spring(566, 235, 190)} fill="none" stroke="#34d399" strokeWidth="4" />
        <path d={spring(566, 315, 190)} fill="none" stroke="#10b981" strokeWidth="4" />
        <rect x="756" y="236" width="50" height="88" rx="10" fill="#e2e8f0" />
        <text x="710" y="390" textAnchor="middle" fill="#ffffff" fontSize="18">
          {isEs ? "Fm = F1 + F2" : "Fm = F1 + F2"}
        </text>
        <text x="690" y="220" fill="#34d399" fontSize="14" fontWeight="700">F1</text>
        <text x="690" y="340" fill="#10b981" fontSize="14" fontWeight="700">F2</text>
        <text x="710" y="420" textAnchor="middle" fill="#86efac" fontSize="16" fontWeight="700">
          {isEs ? "keq mayor: el conjunto se rigidiza" : "larger keq: the set stiffens"}
        </text>
      </g>
    );
  },
};

export default profile;
