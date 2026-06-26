import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "ondas-flexionales-en-vigas",
    title: {
      es: "Ondas flexionales en vigas",
      en: "Flexural waves in beams",
    },
  },
  title: {
    es: "Dispersion de una onda de flexion",
    en: "Dispersion of a bending wave",
  },
  infoCards: [
    {
      key: "phase-group",
      label: { es: "Fase y grupo", en: "Phase and group" },
      body: {
        es: "En Euler-Bernoulli la velocidad de grupo es 2 veces la velocidad de fase. Esa relacion muestra que la onda de flexion es dispersiva.",
        en: "In Euler-Bernoulli theory group velocity is 2 times phase velocity. That relation shows that the bending wave is dispersive.",
      },
    },
    {
      key: "validity",
      label: { es: "Validez", en: "Validity" },
      body: {
        es: "El modelo funciona cuando la longitud de onda flexional es grande frente al espesor de la viga.",
        en: "The model works when the flexural wavelength is large compared with beam thickness.",
      },
    },
  ],
  interpretation_binding: {
    target: "v_fase_flex",
    magnitudes: ["v_fase_flex", "v_grupo_flex", "omega", "k_flex", "lambda_flex", "E_young", "I_seccion", "rho_lin"],
    formula: "velocidad_fase_flexional",
  },
  id: "ondas-flexionales-en-vigas-svg",
  leaf_id: "ondas-flexionales-en-vigas",
  graph_identity: {
    pregunta_principal: {
      es: "Como depende la velocidad de propagacion de una onda de flexion en una viga de la frecuencia, el material y la geometria de la seccion?",
      en: "How does the propagation speed of a bending wave in a beam depend on frequency, material and cross-section geometry?",
      keywords: ["velocidad", "propagacion", "onda", "flexion", "viga", "frecuencia", "material", "geometria", "seccion"],
    },
    magnitud_estrella: "v_fase_flex",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "ondas-flexionales-en-vigas",
    graphId: "ondas-flexionales-en-vigas-svg",
    purpose: {
      es: "Visualizar la deformada flexional y conectar frecuencia, longitud de onda y velocidades de fase y grupo.",
      en: "Visualize the flexural shape and connect frequency, wavelength, phase velocity and group velocity.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["omega", "k_flex", "E_young", "I_seccion", "rho_lin"],
    acceptedAliases: {
      v_fase_flex: ["phase_velocity", "velocidad_fase"],
      v_grupo_flex: ["group_velocity", "velocidad_grupo"],
      k_flex: ["wavenumber", "numero_onda"],
      lambda_flex: ["wavelength", "longitud_onda"],
    },
    derivedMagnitudes: ["v_fase_flex", "v_grupo_flex", "lambda_flex"],
    targetCandidates: ["v_fase_flex", "v_grupo_flex", "lambda_flex"],
    equations: ["v_fase_flex = (E_young * I_seccion * omega^2 / rho_lin)^(1/4)", "v_grupo_flex = 2 * v_fase_flex"],
    hypotheses: [
      { es: "Viga esbelta de Euler-Bernoulli.", en: "Slender Euler-Bernoulli beam." },
      { es: "Material elastico lineal y seccion constante.", en: "Linear elastic material and constant cross-section." },
    ],
    validityDomain: [
      { es: "Longitud de onda mucho mayor que el espesor.", en: "Wavelength much larger than thickness." },
    ],
    visualSimplifications: [
      { es: "La amplitud se exagera para hacer visible la flexion.", en: "Amplitude is exaggerated to make bending visible." },
    ],
    alwaysVisible: ["beam_shape", "phase_velocity_arrow", "group_velocity_arrow"],
  }),
  params: {
    schema: [
      { key: "omega", default: 12566 },
      { key: "k_flex", default: 32.7 },
    ],
    derivations: {
      lambda_flex: ({ k_flex }) => (2 * Math.PI) / Number(k_flex ?? 32.7),
      v_fase_flex: ({ omega, k_flex }) => Number(omega ?? 12566) / Number(k_flex ?? 32.7),
      v_grupo_flex: ({ omega, k_flex }) => 2 * Number(omega ?? 12566) / Number(k_flex ?? 32.7),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const omega = Number(p.omega ?? 12566);
    const k = Math.max(1, Number(p.k_flex ?? 32.7));
    const lambda = (2 * Math.PI) / k;
    const vPhase = omega / k;
    const vGroup = 2 * vPhase;
    const x0 = 90;
    const y0 = 255;
    const w = 700;
    const amp = 42;
    const points = Array.from({ length: 120 }, (_, i) => {
      const x = (i / 119) * w;
      const phase = (i / 119) * Math.PI * 5.2;
      return `${i === 0 ? "M" : "L"} ${x0 + x} ${y0 + amp * Math.sin(phase)}`;
    }).join(" ");

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke="#94a3b8" strokeWidth="2" />
        <path d={points} fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
        <line x1="150" y1="155" x2="310" y2="155" stroke="#2563eb" strokeWidth="4" markerEnd="url(#arrowhead)" />
        <line x1="150" y1="112" x2="470" y2="112" stroke="#f97316" strokeWidth="4" markerEnd="url(#arrowhead)" />
        <text x="315" y="160" fill="#2563eb" fontSize="14" fontWeight="700">v_fase_flex</text>
        <text x="475" y="117" fill="#f97316" fontSize="14" fontWeight="700">v_grupo_flex = 2 v_fase_flex</text>
        <line x1="210" y1="330" x2="405" y2="330" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead)" />
        <text x="307" y="354" textAnchor="middle" fill="#0f172a" fontSize="13">lambda_flex = {lambda.toFixed(2)} m</text>
        <text x="460" y="74" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Flexural dispersion in an elastic beam" : "Dispersion flexional en una viga elastica"}
        </text>
        <text x="460" y="422" textAnchor="middle" fill="#475569" fontSize="13">
          {lang === "en" ? `phase ${vPhase.toFixed(0)} m/s, group ${vGroup.toFixed(0)} m/s` : `fase ${vPhase.toFixed(0)} m/s, grupo ${vGroup.toFixed(0)} m/s`}
        </text>
      </g>
    );
  },
};

export default profile;
