import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    id: "ondas-longitudinales-mecanica-svg",
    leafId: "ondas-longitudinales",
    title: {
      es: "Ondas Longitudinales",
      en: "Longitudinal Waves",
    },
  },
  title: {
    es: "Ondas Longitudinales",
    en: "Longitudinal Waves",
  },
  infoCards: [
    {
      id: "wave-nature",
      label: { es: "Naturaleza de la Onda", en: "Wave Nature" },
      body: {
        es: "En una onda longitudinal, las partículas oscilan en la misma dirección en la que se propaga la energía.",
        en: "In a longitudinal wave, particles oscillate in the same direction in which energy propagates.",
      },
    },
    {
      id: "pressure-displacement",
      label: { es: "Presión vs Desplazamiento", en: "Pressure vs Displacement" },
      body: {
        es: "El desplazamiento y la presión están desfasados 90 grados: la presión es máxima donde el desplazamiento es nulo.",
        en: "Displacement and pressure are 90 degrees out of phase: pressure is maximum where displacement is zero.",
      },
    },
  ],
  interpretation_binding: {
    target: "c",
    magnitudes: [
      "c",
      "B",
      "rho",
      "f",
      "lambda",
      "k",
      "omega",
      "p_hat",
      "s_hat",
    ],
    formula: "velocidad_fluido",
  },
  id: "ondas-longitudinales-mecanica-svg",
  leaf_id: "ondas-longitudinales",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se describe matemáticamente la propagación de ondas longitudinales en un fluido y su relación con la presión?",
      en: "How is the propagation of longitudinal waves in a fluid and its relationship with pressure mathematically described?",
      keywords: ["ondas", "presión", "desplazamiento", "fluido", "longitudinales"]
    },
    magnitud_estrella: "c",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 650",
  svgHeight: 720,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "ondas-longitudinales",
    graphId: "ondas-longitudinales-mecanica-svg",
    purpose: {
      es: "Visualizar el desfase entre el desplazamiento de partículas y la variación de presión en fluidos.",
      en: "Visualize the phase shift between particle displacement and pressure variation in fluids.",
    },
    level: ["University"],
    expectedInputs: ["s_hat", "B", "k"],
    acceptedAliases: {
      s_hat: ["displacement_amplitude", "amplitud_desplazamiento"],
      p_hat: ["pressure_amplitude", "amplitud_presion"],
      B: ["bulk_modulus", "modulo_compresibilidad"],
      k: ["wave_number", "numero_onda"],
    },
    derivedMagnitudes: ["p_hat"],
    targetCandidates: ["p_hat", "s_hat"],
    equations: ["p_hat = B * k * s_hat"],
    hypotheses: [
      { es: "Modelo de acústica lineal.", en: "Linear acoustic model." },
      { es: "Onda armónica progresiva.", en: "Harmonic progressive wave." },
    ],
    validityDomain: [
      { es: "Pequeños desplazamientos.", en: "Small displacements." },
    ],
    visualSimplifications: [
      { es: "Se muestra un corte longitudinal del fluido.", en: "A longitudinal cross-section of the fluid is shown." },
    ],
    alwaysVisible: ["particles", "pressure_plot"],
  }),
  params: {
    schema: [
      { key: "s_hat", default: 1e-6 },
      { key: "B", default: 2.2e9 },
      { key: "k", default: 18 },
    ],
    derivations: {
      p_hat: ({ B, k, s_hat }) => Number(B ?? 2.2e9) * Number(k ?? 18) * Number(s_hat ?? 1e-6),
    },
  },
  render: ({ p = {}, lang = "es", fmt = (value, digits = 2) => Number(value).toFixed(digits) }) => {
    const isEn = lang === "en";
    const sHat = Number(p?.s_hat ?? 1e-6);
    const bulkModulus = Number(p?.B ?? 2.2e9);
    const waveNumber = Number(p?.k ?? 18);
    const pressureAmplitude = bulkModulus * waveNumber * sHat;
    const safeFmt = (value, digits = 2) => {
      const numeric = Number(value);
      if (!Number.isFinite(numeric)) return "—";
      if (numeric !== 0 && (Math.abs(numeric) < 0.001 || Math.abs(numeric) >= 1000000)) {
        return numeric.toExponential(2);
      }
      try {
        return typeof fmt === "function" ? fmt(numeric, digits) : numeric.toFixed(digits);
      } catch {
        return numeric.toFixed(digits);
      }
    };
    const points = Array.from({ length: 90 }, (_, index) => {
      const x = 92 + (index / 89) * 728;
      const y = 285 - Math.sin((index / 89) * Math.PI * 8) * 48;
      return x.toFixed(1) + "," + y.toFixed(1);
    }).join(" ");
    const pressurePoints = Array.from({ length: 90 }, (_, index) => {
      const x = 92 + (index / 89) * 728;
      const y = 485 - Math.cos((index / 89) * Math.PI * 8) * 42;
      return x.toFixed(1) + "," + y.toFixed(1);
    }).join(" ");
    const particles = Array.from({ length: 34 }, (_, index) => {
      const baseX = 110 + index * 20;
      const phase = (index / 33) * Math.PI * 8;
      const shift = Math.sin(phase) * 12;
      const compression = Math.cos(phase);
      return {
        x: baseX + shift,
        y: 230 + ((index % 3) - 1) * 19,
        r: 4.5 + Math.max(0, compression) * 2.2,
        opacity: 0.45 + Math.max(0, compression) * 0.45,
      };
    });

    return (
      <g>
        <defs>
          <marker id="longitudinal-wave-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
          </marker>
        </defs>

        <rect x="44" y="34" width="832" height="566" rx="24" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        <text x="84" y="76" fill="#0f172a" fontSize="22" fontWeight="900">
          {isEn ? "Longitudinal wave in a fluid" : "Onda longitudinal en un fluido"}
        </text>
        <text x="84" y="106" fill="#475569" fontSize="14">
          {isEn
            ? "Particle displacement is parallel to propagation; pressure oscillates with a phase shift."
            : "El desplazamiento de particulas es paralelo a la propagacion; la presion oscila desfasada."}
        </text>

        <rect x="78" y="160" width="764" height="150" rx="28" fill="#dbeafe" stroke="#93c5fd" strokeWidth="2" />
        {[0, 1, 2, 3].map((band) => (
          <rect key={"compression-" + band} x={118 + band * 170} y="168" width="48" height="134" rx="18" fill="#2563eb" opacity="0.14" />
        ))}
        {[0, 1, 2].map((band) => (
          <rect key={"rarefaction-" + band} x={208 + band * 170} y="168" width="62" height="134" rx="18" fill="#10b981" opacity="0.10" />
        ))}
        <line x1="100" y1="230" x2="820" y2="230" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 8" />
        {particles.map((particle, index) => (
          <circle key={"particle-" + index} cx={particle.x} cy={particle.y} r={particle.r} fill="#0f172a" opacity={particle.opacity} />
        ))}
        <line x1="124" y1="365" x2="790" y2="365" stroke="#2563eb" strokeWidth="4" markerEnd="url(#longitudinal-wave-arrow)" />
        <text x="458" y="350" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="900">
          {isEn ? "propagation direction" : "direccion de propagacion"} v
        </text>

        <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="708" y="257" width="62" height="24" rx="8" fill="#eff6ff" opacity="0.92" />
        <text x="739" y="274" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="900">s(x,t)</text>
        <line x1="84" y1="485" x2="836" y2="485" stroke="#94a3b8" strokeDasharray="6 8" />
        <polyline points={pressurePoints} fill="none" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="92" y="426" width="190" height="24" rx="8" fill="#fff1f2" opacity="0.94" />
        <text x="187" y="443" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="900">
          {isEn ? "pressure variation" : "variacion de presion"} p(x,t)
        </text>

        <rect x="84" y="546" width="752" height="42" rx="14" fill="#e2e8f0" />
        <text x="104" y="572" fill="#0f172a" fontSize="13" fontWeight="900">
          {isEn ? "Reading:" : "Lectura:"}
        </text>
        <text x="184" y="572" fill="#334155" fontSize="12.5">
          s_hat = {safeFmt(sHat, 3)} m ; B = {safeFmt(bulkModulus, 2)} Pa ; k = {safeFmt(waveNumber, 2)} rad/m ; p_hat = {safeFmt(pressureAmplitude, 2)} Pa
        </text>
      </g>
    );
  },
  interpretation: {
    header_bridge: { es: "p = B k s", en: "p = B k s" },
    reading_focus: { es: "Observe el desfase entre las curvas.", en: "Observe the phase shift between the curves." },
    graph_role: { es: "Demostrar la relación p(x,t) vs s(x,t).", en: "Demonstrate the p(x,t) vs s(x,t) relationship." },
    calc_reading: { es: "La presión aumenta con el número de onda.", en: "Pressure increases with the wave number." },
    graph_reading: { es: "Máximo desplazamiento implica presión nula.", en: "Maximum displacement implies zero pressure." },
    physical_insight: { es: "La presión es la derivada del desplazamiento.", en: "Pressure is the derivative of displacement." },
    likely_errors: {
      es: ["Confundir los nodos de desplazamiento con nodos de presión.", "Olvidar el desfase de 90 grados."],
      en: ["Confusing displacement nodes with pressure nodes.", "Forgetting the 90-degree phase shift."],
    },
  },
};

export default profile;
