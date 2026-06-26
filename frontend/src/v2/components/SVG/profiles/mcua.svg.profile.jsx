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
    id: "svg-mcua",
    leafId: "mcua",
    title: {
      es: "Movimiento Circular Uniformemente Acelerado",
      en: "Uniformly Accelerated Circular Motion",
    },
    subtitle: {
      es: "Aceleración angular constante — ω crece linealmente con t",
      en: "Constant angular acceleration — ω grows linearly with t",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo evoluciona la velocidad angular cuando una trayectoria circular mantiene aceleración angular constante?",
      en: "How does angular velocity evolve when circular motion has constant angular acceleration?",
    },
    magnitud_estrella: "omega",
    magnitud_secundaria: "a_t",
    variable_control: "t",
  },
  graph_contract: createSvgProfileContract({
    leafId: "mcua",
    graphId: "svg-mcua",
    purpose: {
      es: "Visualizar la evolución de ω, la aceleración tangencial aT = α·R y la centrípeta ac = ω²·R bajo α constante.",
      en: "Visualize the evolution of ω, tangential acceleration aT = α·R and centripetal ac = ω²·R under constant α.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["R", "omega0", "alpha", "t"],
    derivedMagnitudes: ["omega", "theta", "vT", "aT", "ac"],
    targetCandidates: ["omega", "vT", "aT"],
    equations: ["ω = ω₀ + α·t", "θ = θ₀ + ω₀·t + ½α·t²", "aT = α·R", "ac = ω²·R"],
    hypotheses: ["aceleración angular constante", "trayectoria circular fija"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["partícula puntual", "radio fijo"],
    alwaysVisible: ["omega", "vT", "aT"],
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
        key: "omega0",
        default: 0,
        label: { es: "ω₀ inicial", en: "Initial ω₀" },
        unit: "rad/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -4,
        max: 4,
        step: 0.1,
      },
      {
        key: "alpha",
        default: 0.5,
        label: { es: "Aceleración angular α", en: "Angular acceleration α" },
        unit: "rad/s²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -3,
        max: 3,
        step: 0.1,
      },
      {
        key: "t",
        default: 2.0,
        label: { es: "Tiempo t", en: "Time t" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 10,
        step: 0.1,
      },
    ],
    derivations: {
      omega: ({ omega0, alpha, t }) => safeNum(omega0, 0) + safeNum(alpha, 0.5) * safeNum(t, 2),
      theta: ({ omega0, alpha, t }) => {
        const w0 = safeNum(omega0, 0);
        const al = safeNum(alpha, 0.5);
        const tt = safeNum(t, 2);
        return w0 * tt + 0.5 * al * tt * tt;
      },
      vT: ({ R, omega0, alpha, t }) => {
        const w = safeNum(omega0, 0) + safeNum(alpha, 0.5) * safeNum(t, 2);
        return Math.abs(w) * safeNum(R, 5);
      },
      aT: ({ R, alpha }) => safeNum(alpha, 0.5) * safeNum(R, 5),
      ac: ({ R, omega0, alpha, t }) => {
        const w = safeNum(omega0, 0) + safeNum(alpha, 0.5) * safeNum(t, 2);
        return w * w * safeNum(R, 5);
      },
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Ecuaciones MCUA", en: "UCAM equations" },
      highlight: "ω = ω₀ + α·t   ·   aT = α·R",
      highlightColor: "#c4b5fd",
      description: {
        es: "La velocidad angular crece linealmente con t bajo aceleración angular constante α.",
        en: "Angular velocity grows linearly with t under constant angular acceleration α.",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `ω₀ = ${fmt(safeNum(p?.omega0, 0), 2, lang)} rad/s`,
        `α  = ${fmt(safeNum(p?.alpha, 0.5), 2, lang)} rad/s²`,
        `R  = ${fmt(safeNum(p?.R, 5), 2, lang)} m`,
      ],
      result: ({ p, lang }) => `ω = ${fmt(safeNum(p?.omega, 0), 2, lang)} rad/s`,
      resultColor: "#c4b5fd",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const omega0 = safeNum(p?.omega0, 0);
      const alpha = safeNum(p?.alpha, 0.5);
      const theta = omega0 * t + 0.5 * alpha * t * t;
      const omega = omega0 + alpha * t;
      return { theta, omega };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const R = clamp(safeNum(p?.R, 5), 0.2, 15);
    const omega0 = safeNum(p?.omega0, 0);
    const alpha = safeNum(p?.alpha, 0.5);
    const tParam = safeNum(p?.t, 2.0);

    const omega = safeNum(p?.omega, omega0 + alpha * tParam);
    const theta = state?.theta ?? (omega0 * tParam + 0.5 * alpha * tParam * tParam);
    const omegaAnim = state?.omega ?? omega;

    const vT = Math.abs(omegaAnim) * R;
    const aT = Math.abs(alpha) * R;
    const ac = omegaAnim * omegaAnim * R;

    const cx = 400;
    const cy = 280;
    const rPx = clamp(40 + R * 11, 60, 180);

    const px = cx + rPx * Math.cos(theta);
    const py = cy + rPx * Math.sin(theta);

    const sign = Math.sign(omegaAnim || 1);
    const tx = -Math.sin(theta) * sign;
    const ty = Math.cos(theta) * sign;
    const velLen = clamp(35 + vT * 11, 25, 130);

    const nx = (cx - px) / rPx;
    const ny = (cy - py) / rPx;
    const acLen = clamp(25 + ac * 7, 15, 120);
    const aTLen = clamp(20 + aT * 10, 10, 100);

    return (
      <g>
        <defs>
          <linearGradient id="mcuaBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#150e2b" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#mcuaBg)" />

        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {isEs ? "Movimiento Circular Uniformemente Acelerado" : "Uniformly Accelerated Circular Motion"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "ω = ω₀ + α·t   ·   aT = α·R   ·   ac = ω²·R" : "ω = ω₀ + α·t   ·   aT = α·R   ·   ac = ω²·R"}
        </text>

        {/* Orbit */}
        <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="5" fill="rgba(255,255,255,0.45)" />

        {/* Radius */}
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeDasharray="6 5" />

        {/* Particle */}
        <circle cx={px} cy={py} r="20" fill="rgba(167,139,250,0.25)" stroke="#c4b5fd" strokeWidth="2.5" />
        <text x={px} y={py + 5} textAnchor="middle" fill="#ede9fe" fontSize="13" fontWeight="800">m</text>

        {/* Tangential velocity */}
        <SvgArrow x1={px} y1={py} x2={px + tx * velLen} y2={py + ty * velLen} color="#34d399" label={`vT=${fmt(vT, 2, lang)}`} />
        {/* Tangential acceleration */}
        <SvgArrow x1={px} y1={py} x2={px + tx * aTLen} y2={py + ty * aTLen} color="#fb923c" label={`aT=${fmt(aT, 2, lang)}`} />
        {/* Centripetal */}
        <SvgArrow x1={px} y1={py} x2={px + nx * acLen} y2={py + ny * acLen} color="#f59e0b" label={`ac=${fmt(ac, 2, lang)}`} />

        {/* Info panel */}
        <rect x="615" y="155" width="310" height="225" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="770" y="185" textAnchor="middle" fill="#c4b5fd" fontSize="13" fontWeight="700">{isEs ? "Magnitudes" : "Quantities"}</text>
        <text x="635" y="212" fill="rgba(255,255,255,0.75)" fontSize="13">R = {fmt(R, 2, lang)} m</text>
        <text x="635" y="236" fill="rgba(255,255,255,0.75)" fontSize="13">α = {fmt(alpha, 2, lang)} rad/s²</text>
        <text x="635" y="260" fill="rgba(255,255,255,0.75)" fontSize="13">ω₀ = {fmt(omega0, 2, lang)} rad/s</text>
        <text x="635" y="284" fill="#c4b5fd" fontSize="13">ω = {fmt(omegaAnim, 2, lang)} rad/s</text>
        <text x="635" y="308" fill="#34d399" fontSize="13">vT = {fmt(vT, 2, lang)} m/s</text>
        <text x="635" y="332" fill="#fb923c" fontSize="13">aT = {fmt(aT, 2, lang)} m/s²</text>
        <text x="635" y="356" fill="#f59e0b" fontSize="13">ac = {fmt(ac, 2, lang)} m/s²</text>

        <text x="480" y="522" textAnchor="middle" fill="rgba(255,255,255,0.56)" fontSize="12">
          {isEs
            ? "En el MCUA coexisten aceleración tangencial (cambia |v|) y centrípeta (cambia dirección de v)."
            : "In UCAM tangential acceleration (changes |v|) coexists with centripetal (changes v direction)."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["R", "omega0", "alpha", "t"],
    stateOut: ["omega", "theta", "vT", "aT", "ac"],
    target: "omega",
  },
};

export default profile;
