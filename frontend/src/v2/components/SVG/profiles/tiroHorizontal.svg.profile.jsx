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
    id: "svg-tiro-horizontal",
    leafId: "tiro-horizontal",
    title: {
      es: "Tiro horizontal",
      en: "Horizontal Projectile Motion",
    },
    subtitle: {
      es: "MRU en x + caída libre en y — alcance y tiempo de vuelo",
      en: "Uniform motion in x + free fall in y — range and flight time",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo combina el movimiento bajo la gravedad con el avance horizontal para fijar el alcance en el tiro horizontal?",
      en: "How does gravity-driven vertical fall combine with horizontal advance to determine range in projectile motion?",
    },
    magnitud_estrella: "R",
    magnitud_secundaria: "t",
    variable_control: "v0",
  },
  graph_contract: createSvgProfileContract({
    leafId: "tiro-horizontal",
    graphId: "svg-tiro-horizontal",
    purpose: {
      es: "Mostrar la trayectoria parabólica del tiro horizontal y la descomposición de la velocidad en vx y vy.",
      en: "Show the parabolic trajectory of horizontal projectile and decompose velocity into vx and vy.",
    },
    level: {
      es: "ESO | bachillerato | universidad inicial",
      en: "secondary | high school | early undergraduate",
    },
    expectedInputs: ["v0", "h", "g"],
    derivedMagnitudes: ["tFlight", "R", "vy", "y"],
    targetCandidates: ["R", "tFlight", "vy"],
    equations: ["x = v₀·t", "y = h − ½g·t²", "tVuelo = √(2h/g)", "R = v₀·tVuelo"],
    hypotheses: ["sin resistencia del aire", "lanzamiento horizontal"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["partícula puntual", "campo gravitatorio uniforme"],
    alwaysVisible: ["R", "tFlight"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "v0",
        default: 12,
        label: { es: "Velocidad horizontal v₀", en: "Horizontal velocity v₀" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 30,
        step: 0.5,
      },
      {
        key: "h",
        default: 20,
        label: { es: "Altura inicial h", en: "Initial height h" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 60,
        step: 0.5,
      },
      {
        key: "g",
        default: 9.81,
        label: { es: "Gravedad g", en: "Gravity g" },
        unit: "m/s²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 25,
        step: 0.1,
      },
    ],
    derivations: {
      tFlight: ({ h, g }) => {
        const _h = Math.max(0, safeNum(h, 20));
        const _g = Math.max(0.1, safeNum(g, 9.81));
        return Math.sqrt((2 * _h) / _g);
      },
      R: ({ v0, h, g }) => {
        const _h = Math.max(0, safeNum(h, 20));
        const _g = Math.max(0.1, safeNum(g, 9.81));
        return safeNum(v0, 12) * Math.sqrt((2 * _h) / _g);
      },
      vy: ({ h, g }) => {
        const _h = Math.max(0, safeNum(h, 20));
        const _g = Math.max(0.1, safeNum(g, 9.81));
        return -Math.sqrt(2 * _g * _h);
      },
      y: ({ h }) => Math.max(0, safeNum(h, 20)),
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Fórmulas clave", en: "Key formulas" },
      highlight: "R = v₀·√(2h/g)   ·   t_vuelo = √(2h/g)",
      highlightColor: "#fbbf24",
      description: {
        es: "El alcance crece con v₀ y la raíz de la altura. La componente horizontal es MRU; la vertical, caída libre.",
        en: "Range grows with v₀ and the square root of height. Horizontal is uniform; vertical is free fall.",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `v₀ = ${fmt(safeNum(p?.v0, 12), 2, lang)} m/s`,
        `h  = ${fmt(safeNum(p?.h, 20), 2, lang)} m`,
        `g  = ${fmt(safeNum(p?.g, 9.81), 2, lang)} m/s²`,
      ],
      result: ({ p, lang }) => `R = ${fmt(safeNum(p?.R, 0), 2, lang)} m`,
      resultColor: "#fbbf24",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const v0 = safeNum(p?.v0, 12);
      const h = Math.max(0, safeNum(p?.h, 20));
      const g = Math.max(0.1, safeNum(p?.g, 9.81));
      const tFlight = Math.sqrt((2 * h) / g);
      const tCur = tFlight > 0 ? (t % (tFlight + 0.5)) : 0;
      const xC = v0 * Math.min(tCur, tFlight);
      const yC = Math.max(0, h - 0.5 * g * tCur * tCur);
      const vy = -g * Math.min(tCur, tFlight);
      return { xC, yC, vy, tCur };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const v0 = safeNum(p?.v0, 12);
    const h = Math.max(0, safeNum(p?.h, 20));
    const g = Math.max(0.1, safeNum(p?.g, 9.81));
    const tFlight = safeNum(p?.tFlight, Math.sqrt((2 * h) / g));
    const R = safeNum(p?.R, v0 * tFlight);

    const worldX1 = 120;
    const worldX2 = 820;
    const groundY = 450;
    const topY = 95;

    const xMax = Math.max(10, R * 1.25);
    const yMax = Math.max(8, h * 1.25);

    const mapX = (x) => worldX1 + clamp(x / xMax, 0, 1) * (worldX2 - worldX1);
    const mapY = (y) => groundY - clamp(y / yMax, 0, 1) * (groundY - topY);

    const xAnim = state?.xC ?? 0;
    const yAnim = state?.yC ?? h;
    const vyAnim = state?.vy ?? 0;

    const projX = mapX(xAnim);
    const projY = mapY(yAnim);

    // Trail
    const trailPts = [];
    const tCur = state?.tCur ?? 0;
    const N = 80;
    for (let i = 0; i <= N; i++) {
      const tt = (i / N) * Math.min(tCur, tFlight);
      const xx = v0 * tt;
      const yy = Math.max(0, h - 0.5 * g * tt * tt);
      trailPts.push(`${i === 0 ? "M" : "L"} ${mapX(xx)} ${mapY(yy)}`);
    }

    const vxLen = clamp(v0 * 8, 20, 140);
    const vyLen = clamp(Math.abs(vyAnim) * 6, 0, 120);

    return (
      <g>
        <defs>
          <linearGradient id="thBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0c1f38" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#thBg)" />

        <text x="480" y="46" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Tiro horizontal" : "Horizontal Projectile Motion"}
        </text>
        <text x="480" y="72" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "x = v₀·t   ·   y = h − ½g·t²   ·   R = v₀·√(2h/g)" : "x = v₀·t   ·   y = h − ½g·t²   ·   R = v₀·√(2h/g)"}
        </text>

        {/* Ground */}
        <line x1={worldX1 - 30} y1={groundY} x2={worldX2 + 20} y2={groundY} stroke="rgba(255,255,255,0.28)" strokeWidth="3" />
        {/* Wall / launch edge */}
        <line x1={worldX1} y1={mapY(h)} x2={worldX1} y2={groundY} stroke="rgba(255,255,255,0.22)" strokeWidth="3" />
        <rect x={worldX1 - 32} y={mapY(h) - 16} width="64" height="16" rx="5" fill="rgba(148,163,184,0.32)" stroke="rgba(148,163,184,0.65)" />

        {/* h label */}
        <text x={worldX1 - 50} y={mapY(h / 2)} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="12">
          h={fmt(h, 1, lang)}m
        </text>

        {/* Trail */}
        {trailPts.length > 1 && (
          <path d={trailPts.join(" ")} fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.80" />
        )}

        {/* Particle */}
        <circle cx={projX} cy={projY} r="14" fill="rgba(52,211,153,0.32)" stroke="#34d399" strokeWidth="2.5" />

        {/* Velocity components */}
        <SvgArrow x1={projX} y1={projY - 20} x2={projX + vxLen} y2={projY - 20} color="#60a5fa" label={`vx=${fmt(v0, 2, lang)}`} />
        {vyLen > 5 && (
          <SvgArrow x1={projX + 26} y1={projY} x2={projX + 26} y2={projY + vyLen} color="#f87171" label={`vy=${fmt(vyAnim, 2, lang)}`} />
        )}

        {/* Range marker */}
        <line x1={mapX(R)} y1={groundY} x2={mapX(R)} y2={groundY - 12} stroke="rgba(251,191,36,0.75)" strokeWidth="2" />
        <text x={mapX(R)} y={groundY + 22} textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">
          R={fmt(R, 2, lang)} m
        </text>

        {/* Info panel */}
        <rect x="610" y="155" width="310" height="175" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="765" y="182" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700">{isEs ? "Magnitudes" : "Quantities"}</text>
        <text x="630" y="208" fill="rgba(255,255,255,0.75)" fontSize="13">v₀ = {fmt(v0, 2, lang)} m/s</text>
        <text x="630" y="232" fill="rgba(255,255,255,0.75)" fontSize="13">h = {fmt(h, 2, lang)} m</text>
        <text x="630" y="256" fill="rgba(255,255,255,0.60)" fontSize="13">t_vuelo = {fmt(tFlight, 2, lang)} s</text>
        <text x="630" y="280" fill="#fbbf24" fontSize="14" fontWeight="700">R = {fmt(R, 2, lang)} m</text>
        <text x="630" y="308" fill="rgba(255,255,255,0.55)" fontSize="12">vy_imp = {fmt(-Math.sqrt(2 * g * h), 2, lang)} m/s</text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["v0", "h", "g"],
    stateOut: ["tFlight", "R", "vy", "y"],
    target: "R",
  },
};

export default profile;
