import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "ondas-superficiales-rayleigh",
    title: {
      es: "Ondas superficiales de Rayleigh",
      en: "Rayleigh surface waves",
    },
  },
  title: {
    es: "Decaimiento de amplitud con la profundidad",
    en: "Amplitude decay with depth",
  },
  infoCards: [
    {
      key: "confinement",
      label: { es: "Confinamiento superficial", en: "Surface confinement" },
      body: {
        es: "La amplitud de la onda de Rayleigh decae exponencialmente con la profundidad. A una profundidad igual a lambda_R queda menos del 30 por ciento.",
        en: "The Rayleigh wave amplitude decays exponentially with depth. At a depth equal to lambda_R less than 30 percent remains.",
      },
    },
    {
      key: "velocity",
      label: { es: "Velocidad menor que v_s", en: "Velocity less than v_s" },
      body: {
        es: "La velocidad de Rayleigh es siempre menor que la velocidad S del mismo medio. El cociente eta esta entre 0.87 y 0.96 dependiendo del coeficiente de Poisson.",
        en: "The Rayleigh velocity is always less than the S velocity of the same medium. The ratio eta is between 0.87 and 0.96 depending on the Poisson ratio.",
      },
    },
  ],
  interpretation_binding: {
    target: "amplitud_a_profundidad_z",
    magnitudes: ["velocidad_de_onda_de_rayleigh", "v_s", "nu_poisson", "amplitud_en_la_superficie", "amplitud_a_profundidad_z", "coeficiente_de_decaimiento_con_la_profundidad", "z_prof", "longitud_de_onda_de_rayleigh", "d_pen"],
    formula: "decaimiento_profundidad",
  },
  id: "ondas-superficiales-rayleigh-svg",
  leaf_id: "ondas-superficiales-rayleigh",
  graph_identity: {
    pregunta_principal: {
      es: "Por que las ondas de Rayleigh se propagan mas lento que las ondas de cuerpo y por que su amplitud decae exponencialmente con la profundidad?",
      en: "Why do Rayleigh waves travel slower than body waves and why does their amplitude decay exponentially with depth?",
      keywords: ["rayleigh", "superficial", "amplitud", "decae", "profundidad", "exponencial", "lento"],
    },
    magnitud_estrella: "amplitud_a_profundidad_z",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "ondas-superficiales-rayleigh",
    graphId: "ondas-superficiales-rayleigh-svg",
    purpose: {
      es: "Visualizar el decaimiento exponencial de la amplitud de la onda de Rayleigh con la profundidad y el confinamiento superficial.",
      en: "Visualize the exponential decay of Rayleigh wave amplitude with depth and surface confinement.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["lambda_R", "A_0"],
    acceptedAliases: {
      lambda_R: ["wavelength_rayleigh", "longitud_onda_R"],
      A_0: ["surface_amplitude", "amplitud_superficie"],
      A_z: ["depth_amplitude", "amplitud_profundidad"],
    },
    derivedMagnitudes: ["amplitud_a_profundidad_z", "coeficiente_de_decaimiento_con_la_profundidad"],
    targetCandidates: ["amplitud_a_profundidad_z", "d_pen"],
    equations: ["A_z = A_0 * exp(-alpha_R * z)"],
    hypotheses: [
      { es: "Semiespacio homogeneo isotropo.", en: "Isotropic homogeneous half-space." },
      { es: "Superficie libre plana.", en: "Flat free surface." },
    ],
    validityDomain: [
      { es: "Decaimiento exponencial puro solo en medio homogeneo.", en: "Pure exponential decay only in homogeneous medium." },
    ],
    visualSimplifications: [
      { es: "Se muestra solo la componente vertical de amplitud.", en: "Only the vertical amplitude component is shown." },
    ],
    alwaysVisible: ["decay_curve", "lambda_marker"],
  }),
  params: {
    schema: [
      { key: "lambda_R", default: 100 },
      { key: "A_0", default: 1 },
      { key: "z_prof", default: 100 },
    ],
    derivations: {
      alpha_R: ({ lambda_R }) => (2 * Math.PI) / Number(lambda_R ?? 100),
      A_z: ({ lambda_R, A_0, z_prof }) => {
        const alphaR = (2 * Math.PI) / Number(lambda_R ?? 100);
        return Number(A_0 ?? 1) * Math.exp(-alphaR * Number(z_prof ?? 100));
      },
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const lambdaR = Math.max(1, Number(p.lambda_R ?? 100));
    const A0 = Math.max(0.001, Number(p.A_0 ?? 1));
    const zMax = lambdaR * 2;
    const alphaR = (2 * Math.PI) / lambdaR;
    const x0 = 120;
    const y0 = 80;
    const w = 680;
    const h = 360;
    const nPts = 80;
    const xOf = (z) => x0 + (z / zMax) * w;
    const yOf = (a) => y0 + h - (a / A0) * h;
    const curve = Array.from({ length: nPts }, (_, i) => {
      const z = (i / (nPts - 1)) * zMax;
      const az = A0 * Math.exp(-alphaR * z);
      return `${i === 0 ? "M" : "L"} ${xOf(z)} ${yOf(az)}`;
    }).join(" ");
    const xLambda = xOf(lambdaR);
    const azAtLambda = A0 * Math.exp(-alphaR * lambdaR);

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="68" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Amplitude decay with depth" : "Decaimiento de amplitud con la profundidad"}
        </text>
        <line x1={x0} y1={y0 + h} x2={x0 + w} y2={y0 + h} stroke="#94a3b8" strokeWidth="2" />
        <line x1={x0} y1={y0} x2={x0} y2={y0 + h} stroke="#94a3b8" strokeWidth="2" />
        <path d={curve} fill="none" stroke="#2563eb" strokeWidth="3" />
        <line x1={xLambda} y1={y0} x2={xLambda} y2={y0 + h} stroke="#f97316" strokeWidth="2" strokeDasharray="7 5" />
        <circle cx={xLambda} cy={yOf(azAtLambda)} r="5" fill="#f97316" />
        <text x={xLambda + 8} y={y0 + 20} fill="#f97316" fontSize="13">
          z = lambda_R
        </text>
        <text x={xLambda + 8} y={yOf(azAtLambda) - 10} fill="#f97316" fontSize="12">
          {(azAtLambda / A0 * 100).toFixed(0)}%
        </text>
        <text x={x0 + w / 2} y={y0 + h + 35} textAnchor="middle" fill="#475569" fontSize="13">
          z_prof (m)
        </text>
        <text x={x0 - 45} y={y0 + h / 2} textAnchor="middle" fill="#475569" fontSize="13" transform={`rotate(-90,${x0 - 45},${y0 + h / 2})`}>
          A_z / A_0
        </text>
      </g>
    );
  },
};

export default profile;
