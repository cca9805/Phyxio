import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "naturaleza-del-sonido",
    title: {
      es: "Naturaleza del sonido",
      en: "Nature of Sound",
    },
  },
  title: {
    es: "Compresiones y rarefacciones",
    en: "Compressions and rarefactions",
  },
  infoCards: [
    {
      key: "compression",
      label: { es: "Compresion", en: "Compression" },
      body: {
        es: "Una zona de presion acustica positiva concentra particulas y representa una compresion local.",
        en: "A positive acoustic-pressure zone concentrates particles and represents local compression.",
      },
    },
    {
      key: "longitudinal",
      label: { es: "Longitudinal", en: "Longitudinal" },
      body: {
        es: "Las particulas oscilan paralelas a la propagacion; la curva no es una forma transversal del aire.",
        en: "Particles oscillate parallel to propagation; the curve is not a transverse shape of the air.",
      },
    },
  ],
  interpretation_binding: {
    target: "xi",
    magnitudes: ["p_ac", "xi", "p0_ac", "lambda_son", "v_son", "f_son"],
    formula: "onda_presion_armonica",
  },
  id: "naturaleza-del-sonido-svg",
  leaf_id: "naturaleza-del-sonido",
  graph_identity: {
    pregunta_principal: {
      es: "Como se propaga el sonido como presion acustica longitudinal en un medio material?",
      en: "How does sound propagate as longitudinal acoustic pressure in a material medium?",
      keywords: ["sonido", "presion", "acustica", "longitudinal", "medio", "sound", "pressure"],
    },
    magnitud_estrella: "xi",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 560,
  motion: { type: SVG_MOTION_TYPES.NONE },
  controls: [
    { key: "phase", type: SVG_CONTROL_TYPES.SLIDER, min: 0, max: 6.28, step: 0.05, default: 0 },
  ],
  graph_contract: createSvgProfileContract({
    leafId: "naturaleza-del-sonido",
    graphId: "naturaleza-del-sonido-svg",
    purpose: {
      es: "Mostrar que el sonido es una perturbacion longitudinal de presion y desplazamiento en el medio.",
      en: "Show that sound is a longitudinal pressure and displacement disturbance in the medium.",
    },
    level: ["Secondary", "Upper Secondary"],
    expectedInputs: ["p_ac", "xi", "lambda_son"],
    acceptedAliases: {
      p_ac: ["acoustic_pressure"],
      xi: ["particle_displacement"],
      lambda_son: ["wavelength"],
    },
    derivedMagnitudes: ["p_ac", "xi"],
    targetCandidates: ["p_ac", "xi"],
    equations: ["p_ac = p0 * cos(2*pi*f*t - 2*pi*x/lambda)"],
    hypotheses: [
      { es: "Medio material lineal.", en: "Linear material medium." },
      { es: "Onda sonora longitudinal.", en: "Longitudinal sound wave." },
    ],
    validityDomain: [
      { es: "Amplitudes pequenas respecto a la presion estatica.", en: "Small amplitudes compared with static pressure." },
    ],
    visualSimplifications: [
      { es: "Las particulas se dibujan como puntos en una seccion unidimensional.", en: "Particles are drawn as points in a one-dimensional section." },
    ],
    alwaysVisible: ["particles", "pressure_zones"],
  }),
  params: {
    schema: [
      { key: "phase", default: 0 },
      { key: "p0_ac", default: 1 },
      { key: "lambda_son", default: 1.2 },
    ],
  },
  render: ({ p = {}, lang = "es" }) => {
    const phase = Number(p.phase ?? 0);
    const points = Array.from({ length: 36 }, (_, i) => {
      const x = 80 + i * 21;
      const a = phase - (i / 35) * Math.PI * 4;
      const shift = Math.sin(a) * 8;
      const pressure = Math.cos(a);
      return { x: x + shift, pressure };
    });

    return (
      <g>
        <rect x="55" y="76" width="810" height="300" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        {points.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={226 + Math.sin(i * 0.7) * 18}
            r={5 + Math.max(pt.pressure, 0) * 2}
            fill={pt.pressure >= 0 ? "#dc2626" : "#2563eb"}
            opacity={0.45 + Math.abs(pt.pressure) * 0.35}
          />
        ))}
        <path
          d="M 80 430 C 170 360, 260 500, 350 430 S 530 360, 620 430 S 800 500, 860 430"
          fill="none"
          stroke="#0f172a"
          strokeWidth="4"
        />
        <text x="460" y="52" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800">
          {lang === "en" ? "Sound as pressure in a material medium" : "Sonido como presion en un medio material"}
        </text>
        <text x="170" y="405" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="700">
          {lang === "en" ? "compression" : "compresion"}
        </text>
        <text x="360" y="405" textAnchor="middle" fill="#2563eb" fontSize="14" fontWeight="700">
          {lang === "en" ? "rarefaction" : "rarefaccion"}
        </text>
        <text x="460" y="486" textAnchor="middle" fill="#475569" fontSize="14">
          {lang === "en" ? "particle displacement is longitudinal, not a transverse shape" : "el desplazamiento de particula es longitudinal, no una forma transversal"}
        </text>
      </g>
    );
  },
};

export default profile;
