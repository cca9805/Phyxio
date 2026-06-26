import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const profile = {
  meta: {
    id: "svg-mcu",
    leafId: "mcu",
    title: {
      es: "Movimiento Circular Uniforme",
      en: "Uniform Circular Motion",
    },
    subtitle: {
      es: "Velocidad angular constante — velocidad tangencial y aceleración centrípeta",
      en: "Constant angular velocity — tangential speed and centripetal acceleration",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se relacionan la velocidad angular, el período y la aceleración centrípeta en un movimiento circular uniforme?",
      en: "How are angular speed, period, and centripetal acceleration related in uniform circular motion?",
    },
    magnitud_estrella: "ac",
    magnitud_secundaria: "v",
    variable_control: "t",
    tipo_lectura: "estructural",
  },
  graph_contract: createSvgProfileContract({
    leafId: "mcu",
    graphId: "svg-mcu",
    purpose: {
      es: "Visualizar la relación v = ωR y ac = ω²R en una trayectoria circular con velocidad angular constante.",
      en: "Visualize the relation v = ωR and ac = ω²R on a circular trajectory with constant angular velocity.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["R", "omega", "t"],
    derivedMagnitudes: ["v", "ac", "T", "theta"],
    targetCandidates: ["ac", "v", "T"],
    equations: ["v = ω·R", "ac = ω²·R", "T = 2π/ω", "θ = θ₀ + ω·t"],
    hypotheses: ["velocidad angular constante", "trayectoria circular plana"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["partícula puntual", "trayectoria ideal circular"],
    alwaysVisible: ["v", "ac"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "R",
        default: 5,
        label: { es: "Radio R", en: "Radius R" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 15,
        step: 0.5,
      },
      {
        key: "omega",
        default: 1.2,
        label: { es: "Vel. angular ω", en: "Angular velocity ω" },
        unit: "rad/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -6,
        max: 6,
        step: 0.1,
      },
      {
        key: "t",
        default: 1.5,
        label: { es: "Tiempo t", en: "Time t" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 20,
        step: 0.1,
      },
    ],
    derivations: {
      v: ({ R, omega }) => Math.abs(safeNum(omega, 1.2)) * safeNum(R, 5),
      ac: ({ R, omega }) => safeNum(omega, 1.2) ** 2 * safeNum(R, 5),
      T: ({ omega }) => {
        const w = safeNum(omega, 1.2);
        return Math.abs(w) > 0.001 ? (2 * Math.PI) / Math.abs(w) : Infinity;
      },
      theta: ({ omega, t }) => safeNum(omega, 1.2) * safeNum(t, 1.5),
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Relaciones MCU", en: "UCM relations" },
      highlight: "v = ω·R   ·   ac = ω²·R",
      highlightColor: "#34d399",
      description: {
        es: "En el MCU la rapidez es constante; la aceleración centrípeta apunta al centro.",
        en: "In UCM speed is constant; centripetal acceleration always points toward the center.",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `R = ${fmt(safeNum(p?.R, 5), 2, lang)} m`,
        `ω = ${fmt(safeNum(p?.omega, 1.2), 2, lang)} rad/s`,
        `T = ${fmt(Math.abs(safeNum(p?.omega, 1.2)) > 0.001 ? (2 * Math.PI) / Math.abs(safeNum(p?.omega, 1.2)) : 0, 2, lang)} s`,
      ],
      result: ({ p, lang }) => `ac = ${fmt(safeNum(p?.ac, 0), 2, lang)} m/s²`,
      resultColor: "#f59e0b",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const omega = safeNum(p?.omega, 1.2);
      const theta = omega * t;
      return { theta };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const R = clamp(safeNum(p?.R, 5), 0.2, 15);
    const omega = safeNum(p?.omega, 1.2);
    const tParam = safeNum(p?.t, 1.5);
    const v = safeNum(p?.v, Math.abs(omega) * R);
    const ac = safeNum(p?.ac, omega * omega * R);
    const T = Math.abs(omega) > 0.001 ? (2 * Math.PI) / Math.abs(omega) : 999;

    const theta = state?.theta ?? (omega * tParam);

    const cx = 400;
    const cy = 285;
    const rPx = clamp(40 + R * 12, 60, 180);

    const px = cx + rPx * Math.cos(theta);
    const py = cy + rPx * Math.sin(theta);

    // Tangent unit vector (direction of v)
    const sign = Math.sign(omega || 1);
    const tx = -Math.sin(theta) * sign;
    const ty = Math.cos(theta) * sign;
    const velLen = clamp(40 + Math.abs(omega) * R * 12, 30, 140);

    // Centripetal (points toward center)
    const nx = (cx - px) / rPx;
    const ny = (cy - py) / rPx;
    const acLen = clamp(30 + omega * omega * R * 8, 20, 130);

    return (
      <g>
        <defs>
          <linearGradient id="mcuBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0e2940" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#mcuBg)" />

        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Movimiento Circular Uniforme" : "Uniform Circular Motion"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "v = ω·R   ·   ac = ω²·R" : "v = ω·R   ·   ac = ω²·R"}
        </text>

        {/* Orbit circle */}
        <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="5" fill="rgba(255,255,255,0.50)" />

        {/* Radius line */}
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="rgba(255,255,255,0.40)" strokeWidth="1.8" strokeDasharray="6 5" />

        {/* Particle */}
        <circle cx={px} cy={py} r="20" fill="rgba(96,165,250,0.28)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x={px} y={py + 5} textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">m</text>

        {/* Velocity (tangent) */}
        <SvgArrow x1={px} y1={py} x2={px + tx * velLen} y2={py + ty * velLen} color="#34d399" label={`v=${fmt(v, 2, lang)}`} />
        {/* Centripetal */}
        <SvgArrow x1={px} y1={py} x2={px + nx * acLen} y2={py + ny * acLen} color="#f59e0b" label={`ac=${fmt(ac, 2, lang)}`} />

        {/* Info panel */}
        <rect x="610" y="160" width="310" height="200" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="765" y="190" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700">{isEs ? "Magnitudes" : "Quantities"}</text>
        <text x="630" y="218" fill="rgba(255,255,255,0.78)" fontSize="13">R = {fmt(R, 2, lang)} m</text>
        <text x="630" y="242" fill="rgba(255,255,255,0.78)" fontSize="13">ω = {fmt(omega, 2, lang)} rad/s</text>
        <text x="630" y="266" fill="#34d399" fontSize="13">v = {fmt(v, 2, lang)} m/s</text>
        <text x="630" y="290" fill="#f59e0b" fontSize="13">ac = {fmt(ac, 2, lang)} m/s²</text>
        <text x="630" y="314" fill="rgba(255,255,255,0.60)" fontSize="13">T = {fmt(T, 2, lang)} s</text>
        <text x="630" y="338" fill="rgba(255,255,255,0.60)" fontSize="13">θ = {fmt(theta % (2 * Math.PI), 3, lang)} rad</text>

        <text x="480" y="520" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="12">
          {isEs
            ? "En el MCU el módulo de la velocidad no cambia, solo su dirección — la aceleración es siempre centrípeta."
            : "In UCM the speed magnitude stays constant; only direction changes — acceleration is always centripetal."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["R", "omega", "t"],
    stateOut: ["v", "ac", "T", "theta"],
    target: "ac",
  },
};

export default profile;
