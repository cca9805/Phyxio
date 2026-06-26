import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const toNum = (value, fallback) => {
  if (value && typeof value === "object" && "value" in value) return Number(value.value ?? fallback);
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};

const profile = {
  meta: {
    id: "tension-superficial",
    leafId: "tension-superficial",
    title: {
      es: "Tensión Superficial y Capilaridad",
      en: "Surface Tension and Capillarity",
    },
    subtitle: {
      es: "Visualización de la ley de Jurin y fuerzas de interfaz.",
      en: "Visualization of Jurin's law and interfacial forces.",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo explica la tensión superficial la fuerza de una interfaz y el ascenso capilar?",
      en: "How does surface tension explain interfacial force and capillary rise?",
    },
    magnitud_estrella: "sigma",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  interpretation_binding: {
    paramsIn: ["sigma", "r", "theta", "rho"],
    stateOut: ["h", "dp"],
    target: "h",
  },
  legacy_interpretation: {
    header_bridge: {
      es: "La tensión superficial conecta la fuerza de borde con el balance de presión.",
      en: "Surface tension connects boundary force with pressure balance.",
    },
    reading_focus: {
      es: "Observa cómo el radio [[r]] modifica drásticamente la altura de ascenso [[h]].",
      en: "Notice how the radius [[r]] drastically modifies the rise height [[h]].",
    },
    graph_role: {
      es: "Este gráfico muestra el balance entre la fuerza capilar vertical y el peso de la columna.",
      en: "This graph shows the balance between the vertical capillary force and the column weight.",
    },
    calc_reading: {
      es: "El cálculo usa la ley de Jurin: [[h]] = 2[[sigma]] cos([[theta]]) / ([[rho]] [[g]] [[r]]).",
      en: "The calculation uses Jurin's law: [[h]] = 2[[sigma]] cos([[theta]]) / ([[rho]] [[g]] [[r]]).",
    },
    graph_reading: {
      es: "La altura azul representa la columna sostenida por la tensión superficial.",
      en: "The blue height represents the column supported by surface tension.",
    },
    physical_insight: {
      es: "A menor radio, mayor es la curvatura y mayor el salto de presión [[dp]] que eleva el líquido.",
      en: "Smaller radius means higher curvature and a greater pressure jump [[dp]] that lifts the liquid.",
    },
    likely_errors: {
      es: "Confundir radio con diámetro o ignorar el ángulo de contacto [[theta]].",
      en: "Confusing radius with diameter or ignoring the contact angle [[theta]].",
    },
  },
  infoCards: [
    {
      key: "jurinLaw",
      label: { es: "Ley de Jurin", en: "Jurin's Law" },
      description: {
        es: "Describe la altura de ascenso capilar [[h]] en un tubo estrecho de radio [[r]].",
        en: "Describes the height of capillary rise [[h]] in a narrow tube of radius [[r]].",
      },
      result: ({ p, fmt }) => `h = ${fmt( (2 * (p.sigma||0.072) * Math.cos(p.theta||0)) / (1000 * 9.81 * Math.max(p.r||0.0005, 1e-9)) * 100, 2)} cm`
    },
    {
      key: "laplacePressure",
      label: { es: "Presión de Laplace", en: "Laplace Pressure" },
      description: {
        es: "El salto de presión [[dp]] debido a la curvatura de la interfaz.",
        en: "The pressure jump [[dp]] due to the interface curvature.",
      },
      result: ({ p, fmt }) => `Δp = ${fmt( (2 * (p.sigma||0.072)) / Math.max(p.r||0.0005, 1e-9), 1)} Pa`
    },
  ],
  graph_contract: createSvgProfileContract({
    leafId: "tension-superficial",
    graphId: "tension-superficial-svg",
    purpose: {
      es: "Mostrar cómo la tensión superficial conecta borde, curvatura y ascenso capilar.",
      en: "Show how surface tension connects boundary, curvature and capillary rise.",
    },
    level: ["Secondary", "Upper Secondary", "University"],
    expectedInputs: ["sigma", "r", "theta", "rho"],
    acceptedAliases: {
      sigma: ["tension", "surface_tension"],
      r: ["radio", "capillary_radius"],
      h: ["altura", "capillary_height"],
    },
    derivedMagnitudes: ["h", "dp", "F"],
    targetCandidates: ["h", "dp", "F", "sigma"],
    equations: ["F = sigma L", "dp = 2 sigma / R", "h = 2 sigma cos(theta)/(rho g r)"],
    hypotheses: [
      { es: "Interfaz limpia y estable.", en: "Clean and stable interface." },
      { es: "Geometría capilar bien definida.", en: "Well-defined capillary geometry." },
    ],
    validityDomain: [
      { es: "Modelo útil en escalas pequeñas donde la interfaz domina.", en: "Useful model at small scales where the interface dominates." },
    ],
    visualSimplifications: [
      { es: "El menisco se dibuja como una curva suave y estable.", en: "The meniscus is drawn as a smooth stable curve." },
    ],
    alwaysVisible: ["meniscus", "surface_force_arrow", "capillary_height"],
  }),
  params: {
    schema: [
      { key: "sigma", aliases: ["surface_tension"], default: 0.072, label: { es: "Tensión superficial σ", en: "Surface tension σ" }, unit: "N/m", type: SVG_CONTROL_TYPES.RANGE, min: 0.02, max: 0.1, step: 0.001, decimals: 3 },
      { key: "r", aliases: ["capillary_radius"], default: 0.0005, label: { es: "Radio capilar r", en: "Capillary radius r" }, unit: "m", type: SVG_CONTROL_TYPES.RANGE, min: 0.0001, max: 0.002, step: 0.00005, decimals: 5 },
      { key: "theta", aliases: ["contact_angle"], default: 0, label: { es: "Ángulo θ", en: "Angle θ" }, unit: "rad", type: SVG_CONTROL_TYPES.RANGE, min: 0, max: 1.57, step: 0.01, decimals: 2 },
    ],
    derivations: {
      h: ({ sigma, r, theta, rho = 1000, g = 9.81 }) => (2 * toNum(sigma, 0.072) * Math.cos(toNum(theta, 0))) / (toNum(rho, 1000) * toNum(g, 9.81) * Math.max(toNum(r, 0.0005), 1e-9)),
      dp: ({ sigma, r }) => (2 * toNum(sigma, 0.072)) / Math.max(toNum(r, 0.0005), 1e-9),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const uiLang = lang === "en" ? "en" : "es";
    const sigma = toNum(p.sigma, 0.072);
    const r = Math.max(toNum(p.r, 0.0005), 1e-9);
    const theta = toNum(p.theta, 0);
    const h = (2 * sigma * Math.cos(theta)) / (1000 * 9.81 * r);
    const height = Math.max(20, Math.min(260, h * 5000));
    const label = uiLang === "en" ? "capillary rise" : "ascenso capilar";
    return (
      <g>
        <rect x="0" y="0" width="920" height="520" rx="28" fill="#07111f" />
        <rect x="390" y="90" width="140" height="330" rx="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="4" opacity="0.85" />
        <rect x="410" y={390 - height} width="100" height={height} fill="#38bdf8" opacity="0.55" />
        <path d={`M410 ${390-height} Q460 ${360-height} 510 ${390-height}`} fill="none" stroke="#e0f2fe" strokeWidth="5" />
        <line x1="550" y1="390" x2="550" y2={390-height} stroke="#fbbf24" strokeWidth="5" markerEnd="url(#arrow)" />
        <text x="575" y={390-height/2} fill="#fef3c7" fontSize="22">{label}: {(h*100).toFixed(2)} cm</text>
        <text x="70" y="100" fill="#e2e8f0" fontSize="28">σ = {sigma.toFixed(3)} N/m</text>
        <text x="70" y="140" fill="#e2e8f0" fontSize="22">r = {(r*1000).toFixed(2)} mm</text>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#fbbf24" /></marker>
        </defs>
      </g>
    );
  },
  interpretation: {
    header_bridge: { es: "La geometría capilar convierte σ en altura observable.", en: "Capillary geometry turns σ into observable height." },
    reading_focus: { es: "Observa cómo al reducir r aumenta h.", en: "Observe how reducing r increases h." },
    graph_role: { es: "Conectar tensión, radio y ascenso.", en: "Connect tension, radius and rise." },
    calc_reading: { es: "La calculadora produce h, Δp o F según la fórmula activa.", en: "The calculator produces h, Δp or F depending on the active formula." },
    graph_reading: { es: "El SVG traduce el resultado a un menisco visible.", en: "The SVG translates the result into a visible meniscus." },
    physical_insight: { es: "La superficie domina cuando la escala se hace pequeña.", en: "The surface dominates when scale becomes small." },
    likely_errors: {
      es: ["Usar diámetro en lugar de radio.", "Olvidar el ángulo de contacto.", "Confundir σ con viscosidad."],
      en: ["Using diameter instead of radius.", "Forgetting the contact angle.", "Confusing σ with viscosity."],
    },
  },
};

export default profile;
