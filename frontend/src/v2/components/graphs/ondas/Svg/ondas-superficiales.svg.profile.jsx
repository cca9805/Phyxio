import React from "react";
import { SVG_SCENE_TYPES, SVG_MOTION_TYPES, SVG_COLORS } from "../../../SVG/svgGrammar";

const profile = {
  leafId: "ondas-superficiales",
  graph_identity: "surface-waves-main",
  pregunta_principal: {
    es: "¿Cómo afecta la gravedad y la profundidad a la propagación de ondas en la superficie del agua?",
    en: "How do gravity and depth affect wave propagation on the water surface?",
  },
  magnitud_estrella: "rapidez_de_propagacion_de_ondas_superficiales",
  meta: {
    title: {
      es: "Ondas Superficiales",
      en: "Surface Waves",
    },
    description: {
      es: "Simulación de ondas en la interfaz agua-aire, mostrando los regímenes de aguas profundas y someras.",
      en: "Simulation of waves at the water-air interface, showing deep and shallow water regimes.",
    },
  },
  infoCards: [
    {
      id: "regime-card",
      key: "regime",
      label: { es: "Régimen", en: "Regime" },
      title: { es: "Régimen Batimétrico", en: "Bathymetric Regime" },
      description: {
        es: "Determina si la ola es de aguas profundas o someras según la relación h/lambda.",
        en: "Determines whether the wave is deep or shallow water based on the h/lambda ratio.",
      },
    },
  ],
  interpretation_binding: {
    target: "c",
    magnitudes: [
      "c",
      "g",
      "lambda",
      "h",
    ],
    formulas: ["rapidez_gravedad", "rapidez_capilares", "rapidez_combinada"],
    coordinate_system: "Cartesian (x, z)",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 520",
  svgHeight: 520,
  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p = {}, lang = "es" }) => {
    const lambda = Number(p.lambda) || 2;
    const h = Number(p.h) || 1.5;
    const g = Number(p.g) || 9.81;
    const sigma = Number(p.sigma) || 0.072;
    const regimeLabel = lambda > 2 ? (lang === "es" ? "Aguas profundas" : "Deep water") : (lang === "es" ? "Aguas someras" : "Shallow water");
    const amplitude = Math.max(20, Math.min(60, 120 / lambda));
    const period = Math.max(1.2, Math.min(3.2, lambda / 2));
    const pathPoints = Array.from({ length: 7 }, (_, index) => {
      const x = 120 + index * 110;
      const y = 280 + Math.sin((index / period) * Math.PI * 2) * amplitude;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ");

    return (
      <g>
        <rect x="0" y="0" width="960" height="520" fill="#061a2b" rx="16" />
        <rect x="60" y="320" width="840" height="140" fill="#12314d" rx="12" />
        <path d={pathPoints} fill="none" stroke={SVG_COLORS.VELOCITY} strokeWidth="6" strokeLinecap="round" />
        <path d={pathPoints} fill="none" stroke={SVG_COLORS.ACCELERATION} strokeWidth="1.5" strokeDasharray="12 8" />
        <line x1="100" y1="320" x2="900" y2="320" stroke="#86a3c6" strokeWidth="2" />
        <text x="130" y="380" fill="#e2e8f0" fontSize="18" fontWeight="700">{lang === "es" ? "Longitud de onda" : "Wavelength"}</text>
        <text x="130" y="410" fill="#cbd5e1" fontSize="14">{lang === "es" ? `λ ≈ ${lambda.toFixed(2)} m` : `λ ≈ ${lambda.toFixed(2)} m`}</text>
        <text x="130" y="450" fill="#cbd5e1" fontSize="14">{lang === "es" ? `h = ${h.toFixed(2)} m` : `h = ${h.toFixed(2)} m`}</text>
        <text x="130" y="480" fill="#cbd5e1" fontSize="14">{lang === "es" ? `Régimen: ${regimeLabel}` : `Regime: ${regimeLabel}`}</text>
        <text x="520" y="380" fill="#e2e8f0" fontSize="18" fontWeight="700">{lang === "es" ? "Fuerzas restauradoras" : "Restoring forces"}</text>
        <text x="520" y="410" fill="#cbd5e1" fontSize="14">{lang === "es" ? `g = ${g.toFixed(2)} m/s²` : `g = ${g.toFixed(2)} m/s²`}</text>
        <text x="520" y="440" fill="#cbd5e1" fontSize="14">{lang === "es" ? `σ = ${sigma.toFixed(3)} N/m` : `σ = ${sigma.toFixed(3)} N/m`}</text>
        <circle cx="720" cy="380" r="14" fill={SVG_COLORS.TEXT} opacity="0.85" />
        <text x="745" y="386" fill="#e2e8f0" fontSize="14">{lang === "es" ? "Tensión superficial" : "Surface tension"}</text>
      </g>
    );
  },
};

export default profile;

