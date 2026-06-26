import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    id: "svg-equilibrio-termodinamico",
    leafId: "equilibrio-termodinamico",
    title: {
      es: "Equilibrio termodinamico",
      en: "Thermodynamic equilibrium",
    },
    subtitle: {
      es: "Gradientes internos que se apagan",
      en: "Internal gradients switching off",
    },
  },

  title: {
    es: "Cuando los gradientes dejan de impulsar cambios",
    en: "When gradients stop driving change",
  },

  graph_identity: {
    graph_type: "Svg",
    pregunta_principal: {
      es: "Como se reconoce que un sistema termodinamico dejo de cambiar porque sus gradientes internos se anularon?",
      en: "How do we recognize that a thermodynamic system stopped changing because its internal gradients vanished?",
    },
    keywords: [
      "sistema",
      "termodinamico",
      "cambiar",
      "gradientes",
      "internos",
      "anularon",
      "equilibrio",
      "system",
      "thermodynamic",
      "gradients",
      "vanished",
    ],
    magnitud_estrella: "T",
    target_interpretable: true,
  },

  interpretation_binding: {
    target: "T",
    magnitudes: ["T", "P", "mu", "DeltaT", "DeltaP", "A"],
    formula: "igualdad_temperatura",
  },

  graph_contract: createSvgProfileContract({
    leafId: "equilibrio-termodinamico",
    graphId: "svg-equilibrio-termodinamico",
    purpose: {
      es: "Mostrar que el equilibrio aparece cuando los impulsos termico, mecanico y material se anulan a la vez.",
      en: "Show that equilibrium appears when thermal, mechanical, and material drives vanish together.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["DeltaT", "DeltaP", "A"],
    acceptedAliases: {
      DeltaT: ["thermal_gradient"],
      DeltaP: ["pressure_gradient"],
      A: ["affinity"],
    },
    derivedMagnitudes: ["T", "P", "mu"],
    targetCandidates: ["T", "DeltaT", "DeltaP", "A"],
    equations: ["T_1 = T_2", "P_1 = P_2", "mu_1 = mu_2", "A = 0"],
    hypotheses: [
      { es: "Variables intensivas bien definidas.", en: "Well-defined intensive variables." },
      { es: "Fronteras e intercambios permitidos identificados.", en: "Boundaries and allowed exchanges identified." },
    ],
    validityDomain: [
      { es: "Estados macroscopicos cercanos a equilibrio.", en: "Macroscopic states near equilibrium." },
    ],
    visualSimplifications: [
      { es: "Los tres canales se dibujan como indicadores resumidos.", en: "The three channels are drawn as summary indicators." },
    ],
    alwaysVisible: ["DeltaT", "DeltaP", "A"],
  }),

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 860 520",
  svgHeight: 560,
  motion: { type: SVG_MOTION_TYPES.NONE },
  controls: [
    { key: "DeltaT", type: SVG_CONTROL_TYPES.RANGE, min: 0, max: 30, step: 1, default: 0 },
    { key: "DeltaP", type: SVG_CONTROL_TYPES.RANGE, min: 0, max: 50, step: 1, default: 0 },
    { key: "A", type: SVG_CONTROL_TYPES.RANGE, min: 0, max: 20, step: 1, default: 0 },
  ],
  params: {
    schema: [
      { key: "DeltaT", default: 0 },
      { key: "DeltaP", default: 0 },
      { key: "A", default: 0 },
    ],
  },

  infoCards: [
    {
      key: "thermal",
      label: { es: "Termico", en: "Thermal" },
      body: {
        es: "DeltaT nulo elimina el flujo neto de calor.",
        en: "Vanishing DeltaT removes net heat flow.",
      },
    },
    {
      key: "mechanical",
      label: { es: "Mecanico", en: "Mechanical" },
      body: {
        es: "DeltaP nulo elimina el empuje neto de fronteras moviles.",
        en: "Vanishing DeltaP removes net push on movable boundaries.",
      },
    },
    {
      key: "material",
      label: { es: "Material", en: "Material" },
      body: {
        es: "La igualdad de mu elimina difusion o reaccion neta.",
        en: "Equality of mu removes net diffusion or reaction.",
      },
    },
  ],

  render: ({ p = {}, lang = "es" }) => {
    const channels = [
      {
        id: "thermalChannel",
        label: lang === "en" ? "thermal" : "termico",
        value: Number(p.DeltaT ?? 0),
        unit: "K",
        color: "#0ea5e9",
        equation: "T1 = T2",
      },
      {
        id: "mechanicalChannel",
        label: lang === "en" ? "mechanical" : "mecanico",
        value: Number(p.DeltaP ?? 0),
        unit: "kPa",
        color: "#f97316",
        equation: "P1 = P2",
      },
      {
        id: "materialChannel",
        label: lang === "en" ? "material" : "material",
        value: Number(p.A ?? 0),
        unit: "",
        color: "#22c55e",
        equation: "mu1 = mu2",
      },
    ];

    return (
      <g>
        <rect x="44" y="54" width="772" height="392" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        <text x="430" y="40" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800">
          {lang === "en" ? "Equilibrium means no remaining macroscopic drive" : "Equilibrio: sin impulso macroscopico restante"}
        </text>
        {channels.map((channel, index) => {
          const y = 112 + index * 112;
          const width = Math.max(14, Math.min(300, channel.value * 8));
          const atEquilibrium = channel.value <= 0.05;
          return (
            <g key={channel.id}>
              <text x="104" y={y + 13} fill="#0f172a" fontSize="18" fontWeight="800">
                {channel.label}
              </text>
              <rect x="220" y={y - 12} width="360" height="28" rx="8" fill="#e2e8f0" />
              <rect x="220" y={y - 12} width={atEquilibrium ? 14 : width} height="28" rx="8" fill={channel.color} opacity={atEquilibrium ? 0.35 : 0.92} />
              <text x="610" y={y + 8} fill="#334155" fontSize="16" fontWeight="700">
                {atEquilibrium ? (lang === "en" ? "zero drive" : "impulso nulo") : `${channel.value} ${channel.unit}`}
              </text>
              <text x="430" y={y + 48} textAnchor="middle" fill="#475569" fontSize="15">
                {channel.equation}
              </text>
            </g>
          );
        })}
        <rect x="228" y="420" width="404" height="46" rx="12" fill="#ecfeff" stroke="#06b6d4" />
        <text x="430" y="449" textAnchor="middle" fill="#0f172a" fontSize="17" fontWeight="800">
          {lang === "en" ? "T, P, and mu stop competing" : "T, P y mu dejan de competir"}
        </text>
      </g>
    );
  },
};

export default profile;
