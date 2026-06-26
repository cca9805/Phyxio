import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "compresibilidad",
    title: {
      es: "Compresibilidad",
      en: "Compressibility",
    },
  },
  title: {
    es: "Compresibilidad",
    en: "Compressibility",
  },
  infoCards: [
    {
      id: "beta",
      title: { es: "Respuesta volumétrica", en: "Volumetric response" },
      body: {
        es: "La contracción visible depende de β, V y d_p.",
        en: "Visible contraction depends on β, V and d_p.",
      },
    },
  ],
  interpretation_binding: {
    target: "dV",
    magnitudes: ["beta", "V", "dp", "dV"],
    formula: "cambio_volumen_relativo",
  },
  id: "compresibilidad-svg",
  leaf_id: "compresibilidad",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo cambia el volumen de un fluido cuando aumenta la presión aplicada?",
      en: "How does a fluid volume change when applied pressure increases?",
    },
    magnitud_estrella: "beta",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "compresibilidad",
    graphId: "compresibilidad-svg",
    purpose: {
      es: "Visualizar la contracción volumétrica producida por presión aplicada.",
      en: "Visualize volumetric contraction caused by applied pressure.",
    },
    level: ["Secondary", "Upper Secondary", "University"],
    expectedInputs: ["beta", "V", "dp"],
    acceptedAliases: {
      beta: ["compresibilidad", "compressibility"],
      V: ["volumen", "volume"],
      dp: ["pressure_increment", "incremento_presion"],
      dV: ["volume_change", "cambio_volumen"],
    },
    derivedMagnitudes: ["dV", "epsilon_V"],
    targetCandidates: ["dV", "beta", "K"],
    equations: ["dV = - beta * V * dp", "K = 1 / beta"],
    hypotheses: [
      { es: "Cambios pequeños de presión.", en: "Small pressure changes." },
      { es: "Fluido homogéneo sin cambio de fase.", en: "Homogeneous fluid without phase change." },
    ],
    validityDomain: [
      { es: "Modelo lineal válido si la deformación relativa es pequeña.", en: "Linear model valid if relative strain is small." },
    ],
    visualSimplifications: [
      { es: "El recipiente se representa como pistón ideal con compresión uniforme.", en: "The container is represented as an ideal piston with uniform compression." },
    ],
    alwaysVisible: ["piston", "fluid_volume", "pressure_arrow", "volume_scale"],
  }),
  params: {
    schema: [
      { key: "beta", aliases: ["compresibilidad", "compressibility"], default: 7e-10, label: { es: "Compresibilidad β", en: "Compressibility β" }, unit: "Pa⁻¹", type: SVG_CONTROL_TYPES.RANGE, min: 1e-11, max: 2e-9, step: 1e-11, decimals: 11 },
      { key: "V", aliases: ["volumen", "volume"], default: 0.002, label: { es: "Volumen V", en: "Volume V" }, unit: "m³", type: SVG_CONTROL_TYPES.RANGE, min: 0.0005, max: 0.01, step: 0.0005, decimals: 4 },
      { key: "dp", aliases: ["incremento_presion", "pressure_increment"], default: 4e6, label: { es: "Incremento de presión d_p", en: "Pressure increment d_p" }, unit: "Pa", type: SVG_CONTROL_TYPES.RANGE, min: 1e5, max: 1.2e7, step: 1e5, decimals: 0 },
    ],
    derivations: {
      epsilon_V: ({ beta, dp }) => Number(beta ?? 7e-10) * Number(dp ?? 4e6),
      dV: ({ beta, V, dp }) => -Number(beta ?? 7e-10) * Number(V ?? 0.002) * Number(dp ?? 4e6),
      K: ({ beta }) => 1 / Math.max(Number(beta ?? 7e-10), 1e-15),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const uiLang = lang === "en" ? "en" : "es";
    const beta = Number(p.beta ?? 7e-10);
    const V = Number(p.V ?? 0.002);
    const dp = Number(p.dp ?? 4e6);
    const eps = Math.min(beta * dp, 0.18);
    const height = 250 * (1 - eps * 2.5);
    const y = 360 + (250 - height);
    const label = uiLang === "en" ? "compressed volume" : "volumen comprimido";
    return (
      <g>
        <rect x="260" y="110" width="260" height="250" rx="18" fill="#0f172a" stroke="#94a3b8" strokeWidth="4" />
        <rect x="280" y={y} width="220" height={height} rx="12" fill="#38bdf8" opacity="0.72" />
        <rect x="240" y="88" width="300" height="24" rx="8" fill="#e2e8f0" />
        <path d="M390 40 L390 88" stroke="#f97316" strokeWidth="8" markerEnd="url(#arrow)" />
        <text x="420" y="70" fill="#f8fafc" fontSize="22">d_p</text>
        <text x="300" y="420" fill="#f8fafc" fontSize="22">{label}</text>
        <text x="560" y="165" fill="#cbd5e1" fontSize="20">β = {beta.toExponential(1)} Pa⁻¹</text>
        <text x="560" y="205" fill="#cbd5e1" fontSize="20">εᵥ = {(beta * dp).toExponential(2)}</text>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#f97316" />
          </marker>
        </defs>
      </g>
    );
  },
  interpretation: {
    header_bridge: { es: "d_V = -β V d_p", en: "d_V = -β V d_p" },
    reading_focus: { es: "Observa cómo β y d_p reducen el volumen visible.", en: "Observe how β and d_p reduce the visible volume." },
    graph_role: { es: "Conectar presión aplicada con contracción volumétrica.", en: "Connect applied pressure with volumetric contraction." },
    calc_reading: { es: "El resultado dV debe ser negativo en compresión.", en: "The result dV must be negative under compression." },
    graph_reading: { es: "Mayor β produce una contracción visible mayor.", en: "Larger β produces a larger visible contraction." },
    physical_insight: { es: "La incomprensibilidad es una aproximación de escala.", en: "Incompressibility is a scale approximation." },
    likely_errors: {
      es: ["Confundir β con K.", "Olvidar el signo negativo de dV."],
      en: ["Confusing β with K.", "Forgetting the negative sign of dV."],
    },
  },
};

export default profile;
