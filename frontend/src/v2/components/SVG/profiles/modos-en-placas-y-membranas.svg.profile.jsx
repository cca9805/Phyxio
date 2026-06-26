import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "modos-en-placas-y-membranas",
    title: {
      es: "Modos en placas y membranas",
      en: "Modes in plates and membranes",
    },
  },
  title: {
    es: "Patron nodal bidimensional",
    en: "Two-dimensional nodal pattern",
  },
  infoCards: [
    {
      id: "nodal-lines",
      label: { es: "Lineas nodales", en: "Nodal lines" },
      body: {
        es: "Las lineas nodales separan regiones que vibran con fase opuesta. Su numero aumenta con los indices modales.",
        en: "Nodal lines separate regions vibrating in opposite phase. Their number increases with modal indices.",
      },
    },
  ],
  interpretation_binding: {
    target: "f_mn",
    magnitudes: ["f_mn", "D_placa", "rho_s", "T_mem", "rho_mem", "a_dim", "b_dim"],
    formula: "frecuencia_modal_placa",
  },
  id: "modos-en-placas-y-membranas-svg",
  leaf_id: "modos-en-placas-y-membranas",
  graph_identity: {
    pregunta_principal: {
      es: "Como determinan la geometria y las propiedades del material las frecuencias y patrones nodales?",
      en: "How do geometry and material properties determine modal frequencies and nodal patterns?",
      keywords: ["geometria", "material", "frecuencia", "patrones", "nodales"],
    },
    magnitud_estrella: "f_mn",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "modos-en-placas-y-membranas",
    graphId: "modos-en-placas-y-membranas-svg",
    purpose: {
      es: "Visualizar un patron nodal representativo y conectarlo con la frecuencia modal.",
      en: "Visualize a representative nodal pattern and connect it with modal frequency.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["m", "n", "a_dim", "b_dim"],
    acceptedAliases: {
      f_mn: ["modal_frequency", "frecuencia_modal"],
      a_dim: ["a", "length"],
      b_dim: ["b", "width"],
    },
    derivedMagnitudes: ["f_mn"],
    targetCandidates: ["f_mn"],
    equations: ["f_mn depends on mode indices and geometry"],
    hypotheses: [
      { es: "Bordes fijos o simplemente apoyados.", en: "Fixed or simply supported edges." },
      { es: "Pequenas amplitudes.", en: "Small amplitudes." },
    ],
    validityDomain: [
      { es: "Placas delgadas o membranas tensadas uniformemente.", en: "Thin plates or uniformly tensioned membranes." },
    ],
    visualSimplifications: [
      { es: "El color indica fase relativa, no amplitud absoluta.", en: "Color indicates relative phase, not absolute amplitude." },
    ],
    alwaysVisible: ["nodal_grid", "phase_regions"],
  }),
  params: {
    schema: [
      { key: "m", default: 3 },
      { key: "n", default: 2 },
    ],
  },
  render: ({ p = {}, lang = "es" }) => {
    const m = Math.max(1, Math.round(Number(p.m ?? 3)));
    const n = Math.max(1, Math.round(Number(p.n ?? 2)));
    const cells = [];
    const x0 = 130;
    const y0 = 80;
    const w = 640;
    const h = 360;
    const cw = w / m;
    const ch = h / n;

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const phase = (i + j) % 2 === 0;
        cells.push(
          <rect
            key={`${i}-${j}`}
            x={x0 + i * cw}
            y={y0 + j * ch}
            width={cw}
            height={ch}
            fill={phase ? "#2563eb" : "#f97316"}
            opacity="0.28"
          />
        );
      }
    }

    return (
      <g>
        <rect x="70" y="40" width="780" height="430" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <rect x={x0} y={y0} width={w} height={h} fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        {cells}
        {Array.from({ length: m - 1 }, (_, i) => (
          <line key={`v-${i}`} x1={x0 + (i + 1) * cw} y1={y0} x2={x0 + (i + 1) * cw} y2={y0 + h} stroke="#0f172a" strokeDasharray="7 5" />
        ))}
        {Array.from({ length: n - 1 }, (_, j) => (
          <line key={`h-${j}`} x1={x0} y1={y0 + (j + 1) * ch} x2={x0 + w} y2={y0 + (j + 1) * ch} stroke="#0f172a" strokeDasharray="7 5" />
        ))}
        <text x="460" y="65" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? `Mode (${m},${n})` : `Modo (${m},${n})`}
        </text>
        <text x="460" y="462" textAnchor="middle" fill="#475569" fontSize="13">
          {lang === "en" ? "Dashed lines mark nodal lines" : "Las lineas discontinuas marcan lineas nodales"}
        </text>
      </g>
    );
  },
};

export default profile;
