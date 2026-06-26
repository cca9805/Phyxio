import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "dispersion-y-atenuacion-en-solidos",
    title: {
      es: "Dispersión y Atenuación en Sólidos",
      en: "Dispersion and Attenuation in Solids",
    },
  },
  title: {
    es: "Atenuación Exponencial",
    en: "Exponential Attenuation",
  },
  infoCards: [
    {
      id: "exponential-decay",
      label: { es: "Atenuación Exponencial", en: "Exponential Attenuation" },
      body: {
        es: "La amplitud decrece exponencialmente con la distancia: A(x) = A₀·exp(−α·x). La longitud de atenuación L_d = 1/α marca la escala característica de pérdida.",
        en: "Amplitude decreases exponentially with distance: A(x) = A₀·exp(−α·x). The attenuation length L_d = 1/α sets the characteristic loss scale.",
      },
    },
    {
      id: "frequency-dependence",
      label: { es: "Dependencia con la Frecuencia", en: "Frequency Dependence" },
      body: {
        es: "El coeficiente de atenuación sigue una ley de potencia: α = α₀·(f/f₀)ⁿ. El exponente n caracteriza el mecanismo dominante de disipación.",
        en: "The attenuation coefficient follows a power law: α = α₀·(f/f₀)ⁿ. The exponent n characterizes the dominant dissipation mechanism.",
      },
    },
  ],
  interpretation_binding: {
    target: "alpha",
    magnitudes: [
      "alpha",
      "amplitud_inicial",
      "amplitud_a_distancia_x",
      "distancia_de_propagacion",
      "longitud_de_atenuacion",
      "frecuencia",
      "exponente_de_frecuencia",
    ],
    formula: "atenuacion_exponencial",
  },
  id: "dispersion-y-atenuacion-en-solidos-svg",
  leaf_id: "dispersion-y-atenuacion-en-solidos",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se degradan la amplitud y la forma del pulso ultrasónico al propagarse en un sólido real?",
      en: "How do amplitude and pulse shape degrade as an ultrasonic pulse propagates through a real solid?",
      keywords: ["atenuación", "dispersión", "sólido", "exponencial", "frecuencia"],
    },
    magnitud_estrella: "longitud_de_atenuacion",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "dispersion-y-atenuacion-en-solidos",
    graphId: "dispersion-y-atenuacion-en-solidos-svg",
    purpose: {
      es: "Visualizar la caída exponencial de amplitud con la distancia y el efecto de la frecuencia sobre la atenuación.",
      en: "Visualize the exponential amplitude decay with distance and the effect of frequency on attenuation.",
    },
    level: ["University"],
    expectedInputs: ["alpha", "A0", "x"],
    acceptedAliases: {
      alpha: ["attenuation_coefficient", "coeficiente_atenuacion"],
      A0: ["initial_amplitude", "amplitud_inicial"],
      x: ["distance", "distancia"],
    },
    derivedMagnitudes: ["A", "L_d", "L_db"],
    targetCandidates: ["alpha", "L_d"],
    equations: ["A = A0 * exp(-alpha * x)", "L_d = 1 / alpha"],
    hypotheses: [
      { es: "Medio homogéneo e isótropo.", en: "Homogeneous and isotropic medium." },
      { es: "Onda plana en haz colimado.", en: "Plane wave in collimated beam." },
    ],
    validityDomain: [
      { es: "Distancia < 3·L_d.", en: "Distance < 3·L_d." },
      { es: "SNR > 20 dB.", en: "SNR > 20 dB." },
    ],
    visualSimplifications: [
      { es: "Se muestra la envolvente de amplitud sin oscilaciones portadoras.", en: "Amplitude envelope shown without carrier oscillations." },
    ],
    alwaysVisible: ["amplitude_curve", "attenuation_length_marker"],
  }),
  params: {
    schema: [
      { key: "alpha", default: 50 },
      { key: "A0", default: 2.0 },
      { key: "x", default: 0.03 },
    ],
    derivations: {
      A: ({ alpha, A0, x }) => Number(A0 ?? 2.0) * Math.exp(-Number(alpha ?? 50) * Number(x ?? 0.03)),
      L_d: ({ alpha }) => 1 / Number(alpha ?? 50),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const alpha = Number(p.alpha ?? 50);
    const A0 = Number(p.A0 ?? 2.0);
    const xMax = 0.06;
    const L_d = 1 / alpha;
    const points = Array.from({ length: 50 }, (_, i) => {
      const x = (i / 49) * xMax;
      const A = A0 * Math.exp(-alpha * x);
      return { x, A };
    });
    const scaleX = 800 / xMax;
    const scaleY = 380 / A0;
    const pathD = points
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${60 + pt.x * scaleX} ${470 - pt.A * scaleY}`)
      .join(" ");
    const ldX = 60 + L_d * scaleX;

    return (
      <g>
        <rect x="50" y="40" width="840" height="450" rx="12" fill="#0f172a" opacity="0.85" />
        <line x1="60" y1="470" x2="870" y2="470" stroke="#475569" strokeWidth="1.5" />
        <line x1="60" y1="470" x2="60" y2="60" stroke="#475569" strokeWidth="1.5" />
        <text x="460" y="500" textAnchor="middle" fill="#94a3b8" fontSize="13">
          {lang === "en" ? "Distance x (m)" : "Distancia x (m)"}
        </text>
        <text x="30" y="260" textAnchor="middle" fill="#94a3b8" fontSize="13" transform="rotate(-90,30,260)">
          {lang === "en" ? "Amplitude A" : "Amplitud A"}
        </text>
        <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="2.5" />
        <line x1={ldX} y1="60" x2={ldX} y2="470" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 4" />
        <text x={ldX} y="52" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          L_d = {(L_d * 1000).toFixed(1)} mm
        </text>
        <circle cx="60" cy={470 - A0 * scaleY} r="4" fill="#3b82f6" />
        <text x="72" y={470 - A0 * scaleY + 4} fill="#3b82f6" fontSize="11">A₀</text>
      </g>
    );
  },
  interpretation: {
    header_bridge: { es: "A = A₀·exp(−α·x)", en: "A = A₀·exp(−α·x)" },
    reading_focus: { es: "Observe cómo la señal decae al alejarse de la fuente.", en: "Observe how the signal decays away from the source." },
    graph_role: { es: "Demostrar la caída exponencial y la escala L_d.", en: "Demonstrate exponential decay and the L_d scale." },
    calc_reading: { es: "Mayor α implica caída más rápida.", en: "Higher α means faster decay." },
    graph_reading: { es: "La línea punteada marca L_d donde A = 0.37·A₀.", en: "The dashed line marks L_d where A = 0.37·A₀." },
    physical_insight: { es: "La atenuación expresa disipación irreversible de energía coherente.", en: "Attenuation expresses irreversible dissipation of coherent energy." },
    likely_errors: {
      es: ["Confundir L_d con profundidad máxima de inspección.", "Usar logaritmo base 10 para calcular α."],
      en: ["Confusing L_d with maximum inspection depth.", "Using base-10 logarithm to calculate α."],
    },
  },
};

export default profile;
