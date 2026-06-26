import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "introduccion-al-sonido",
    title: {
      es: "Introducción al Sonido",
      en: "Introduction to Sound",
    },
  },
  title: {
    es: "Introducción al Sonido",
    en: "Introduction to Sound",
  },
  infoCards: [
    {
      id: "wave-nature",
      label: { es: "Naturaleza de la Onda", en: "Wave Nature" },
      body: {
        es: "El sonido es una perturbación que se propaga por la naturaleza elástica del fluido material.",
        en: "Sound is a disturbance that propagates through the elastic nature of the material fluid.",
      },
    },
  ],
  interpretation_binding: {
    target: "c",
    magnitudes: ["B", "rho", "c", "f", "lambda"],
    formula: "sonido_compresible",
  },
  id: "introduccion-al-sonido-svg",
  leaf_id: "introduccion-al-sonido",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo es la naturaleza de las ondas de presión en fluidos y cómo se propaga su energía mecánica a través de compresiones y rarefacciones?",
      en: "What is the nature of pressure waves in fluids and how does their mechanical energy propagate through compressions and rarefactions?",
    },
    magnitud_estrella: "c",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "introduccion-al-sonido",
    graphId: "introduccion-al-sonido-svg",
    purpose: {
      es: "Visualizar la propagación de ondas longitudinales de presión en un fluido.",
      en: "Visualize the propagation of longitudinal pressure waves in a fluid.",
    },
    level: ["University"],
    expectedInputs: ["B", "rho", "f"],
    acceptedAliases: {
      B: ["bulk_modulus", "modulo_compresibilidad"],
      rho: ["density", "densidad"],
      c: ["speed", "velocidad"],
      f: ["frequency", "frecuencia"],
      lambda: ["wavelength", "longitud_onda"],
    },
    derivedMagnitudes: ["c", "lambda"],
    targetCandidates: ["c", "lambda"],
    equations: ["c = sqrt(B / rho)", "lambda = c / f"],
    hypotheses: [
      { es: "Modelo de acústica lineal.", en: "Linear acoustic model." },
    ],
    validityDomain: [
      { es: "Pequeñas perturbaciones.", en: "Small disturbances." },
    ],
    visualSimplifications: [
      { es: "Partículas discretas.", en: "Discrete particles." },
    ],
    alwaysVisible: ["wave"],
  }),
  params: {
    schema: [
      { key: "B", default: 2.2e9 },
      { key: "rho", default: 1000 },
      { key: "f", default: 440 },
    ],
    derivations: {
      c: ({ B, rho }) => Math.sqrt(Number(B ?? 2.2e9) / Math.max(Number(rho ?? 1000), 0.1)),
      lambda: ({ B, rho, f }) => Math.sqrt(Number(B ?? 2.2e9) / Math.max(Number(rho ?? 1000), 0.1)) / Math.max(Number(f ?? 440), 0.1),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    return (
      <g>
        <rect x="50" y="50" width="820" height="420" rx="20" fill="#0f172a" opacity="0.8" />
        <text x="460" y="260" textAnchor="middle" fill="#3b82f6" fontSize="24" fontWeight="bold">
          {lang === "en" ? "Sound Wave Propagation" : "Propagación de Onda Sonora"}
        </text>
      </g>
    );
  },
  interpretation: {
    header_bridge: { es: "c = √(B/ρ)", en: "c = √(B/ρ)" },
    reading_focus: { es: "Observe las compresiones y rarefacciones.", en: "Observe compressions and rarefactions." },
    graph_role: { es: "Conectar propiedades del fluido con la velocidad.", en: "Connect fluid properties with speed." },
    calc_reading: { es: "La velocidad calculada dicta la rapidez visual.", en: "Calculated speed dictates visual speed." },
    graph_reading: { es: "Más elasticidad significa más velocidad.", en: "More elasticity means more speed." },
    physical_insight: { es: "El sonido requiere un medio material.", en: "Sound requires a material medium." },
    likely_errors: {
      es: ["Confundir con onda transversal.", "Olvidar la dependencia de la densidad."],
      en: ["Confusing with transverse wave.", "Forgetting density dependence."],
    },
  },
};

export default profile;
