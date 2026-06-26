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
    id: "svg-movimiento-vertical-bajo-gravedad",
    leafId: "movimiento-vertical-bajo-gravedad",
    title: {
      es: "Movimiento vertical bajo gravedad",
      en: "Vertical Motion Under Gravity",
    },
    subtitle: {
      es: "Subida y caída libre — trayectoria, velocidad y aceleración",
      en: "Free fall and launch — trajectory, velocity, and acceleration",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo cambia la velocidad de un cuerpo cuando solo actúa la gravedad en caídas y lanzamientos verticales?",
      en: "How does the velocity of a body change when only gravity acts in falls and vertical launches?",
    },
    magnitud_estrella: "v",
    variable_control: "t",
  },
  graph_contract: createSvgProfileContract({
    leafId: "movimiento-vertical-bajo-gravedad",
    graphId: "svg-movimiento-vertical-bajo-gravedad",
    purpose: {
      es: "Visualizar la trayectoria vertical, la velocidad y la aceleración gravitatoria en un lanzamiento o caída.",
      en: "Visualize the vertical trajectory, velocity, and gravitational acceleration in a launch or free fall.",
    },
    level: {
      es: "ESO | bachillerato | universidad inicial",
      en: "secondary | high school | early undergraduate",
    },
    expectedInputs: ["v0", "y0", "g", "t"],
    derivedMagnitudes: ["y", "vy", "yMax", "tFlight", "tPeak"],
    targetCandidates: ["vy", "y", "tFlight"],
    equations: ["y = y0 + v0*t - 0.5*g*t²", "vy = v0 - g*t", "tVuelo = (v0 + √(v0²+2g·y0))/g"],
    hypotheses: ["solo actúa la gravedad", "movimiento rectilíneo vertical"],
    validityDomain: ["velocidades no relativistas", "resistencia del aire despreciable"],
    visualSimplifications: ["partícula puntual", "eje vertical único"],
    alwaysVisible: ["vy", "y"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "v0",
        default: 15,
        label: { es: "Vel. inicial v0", en: "Initial velocity v0" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 30,
        step: 0.5,
      },
      {
        key: "y0",
        default: 0,
        label: { es: "Altura inicial y0", en: "Initial height y0" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 40,
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
      {
        key: "t",
        default: 1.0,
        label: { es: "Tiempo t", en: "Time t" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 8,
        step: 0.05,
      },
    ],
    derivations: {
      vy: ({ v0, g, t }) => safeNum(v0, 15) - safeNum(g, 9.81) * safeNum(t, 1.0),
      y: ({ v0, y0, g, t }) => {
        const _v0 = safeNum(v0, 15);
        const _y0 = safeNum(y0, 0);
        const _g = safeNum(g, 9.81);
        const _t = safeNum(t, 1.0);
        return Math.max(0, _y0 + _v0 * _t - 0.5 * _g * _t * _t);
      },
      yMax: ({ v0, y0, g }) => {
        const _v0 = safeNum(v0, 15);
        const _y0 = safeNum(y0, 0);
        const _g = safeNum(g, 9.81);
        return _v0 > 0 ? _y0 + (_v0 * _v0) / (2 * _g) : _y0;
      },
      tFlight: ({ v0, y0, g }) => {
        const _v0 = safeNum(v0, 15);
        const _y0 = safeNum(y0, 0);
        const _g = Math.max(0.1, safeNum(g, 9.81));
        const disc = _v0 * _v0 + 2 * _g * _y0;
        return disc >= 0 ? (_v0 + Math.sqrt(disc)) / _g : 0;
      },
      tPeak: ({ v0, g }) => Math.max(0, safeNum(v0, 15) / Math.max(0.1, safeNum(g, 9.81))),
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Ecuaciones clave", en: "Key equations" },
      highlight: "y = y₀ + v₀t − ½gt²",
      highlightColor: "#34d399",
      description: {
        es: "Posición y velocidad varían con t bajo aceleración constante g.",
        en: "Position and velocity vary with t under constant acceleration g.",
      },
    },
    {
      key: "lectura",
      label: { es: "Estado actual", en: "Current state" },
      lines: ({ p, lang }) => [
        `v₀ = ${fmt(safeNum(p?.v0, 15), 2, lang)} m/s`,
        `y₀ = ${fmt(safeNum(p?.y0, 0), 2, lang)} m`,
        `g  = ${fmt(safeNum(p?.g, 9.81), 2, lang)} m/s²`,
      ],
      result: ({ p, lang }) => `v(t) = ${fmt(safeNum(p?.vy, 0), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 4,
    loop: true,
    state: (t, p) => {
      const v0 = safeNum(p?.v0, 15);
      const y0 = safeNum(p?.y0, 0);
      const g = Math.max(0.1, safeNum(p?.g, 9.81));
      const disc = v0 * v0 + 2 * g * y0;
      const tFlight = disc >= 0 ? (v0 + Math.sqrt(disc)) / g : 0;
      const tCur = tFlight > 0 ? (t % tFlight) : 0;
      const y = Math.max(0, y0 + v0 * tCur - 0.5 * g * tCur * tCur);
      const vy = v0 - g * tCur;
      return { animT: tCur, y, vy };
    },
  },
  render: ({ p, state, lang = "es", toNum: _toNum }) => {
    const isEs = lang !== "en";
    const v0 = safeNum(p?.v0, 15);
    const y0 = safeNum(p?.y0, 0);
    const g = Math.max(0.1, safeNum(p?.g, 9.81));
    const tParam = safeNum(p?.t, 1.0);

    const vy = safeNum(p?.vy, v0 - g * tParam);
    const yVal = safeNum(p?.y, Math.max(0, y0 + v0 * tParam - 0.5 * g * tParam * tParam));
    const yMax = safeNum(p?.yMax, v0 > 0 ? y0 + v0 * v0 / (2 * g) : y0);

    // Use animation state if available
    const animY = state?.y ?? yVal;
    const animVy = state?.vy ?? vy;

    const xLane = 480;
    const groundY = 470;
    const topY = 80;
    const worldYMax = Math.max(yMax * 1.2 + 2, 10);
    const mapY = (yPhys) => groundY - clamp(yPhys / worldYMax, 0, 1) * (groundY - topY);

    const particleY = mapY(animY);
    const velLen = clamp(animVy * 10, -150, 150);
    const accLen = clamp(g * 8, 20, 100);

    // Trail points
    const trailPts = [];
    const disc2 = v0 * v0 + 2 * g * y0;
    const tFlight = disc2 >= 0 ? (v0 + Math.sqrt(disc2)) / g : 0;
    const tDraw = state?.animT ?? tParam;
    const N = 60;
    for (let i = 0; i <= N; i++) {
      const tt = (i / N) * Math.min(tDraw, tFlight);
      const yy = Math.max(0, y0 + v0 * tt - 0.5 * g * tt * tt);
      trailPts.push(`${i === 0 ? "M" : "L"} ${xLane} ${mapY(yy)}`);
    }

    return (
      <g>
        <defs>
          <linearGradient id="mvbgBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0f2a47" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#mvbgBg)" />

        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Movimiento vertical bajo gravedad" : "Vertical Motion Under Gravity"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "y = y₀ + v₀·t − ½g·t²" : "y = y₀ + v₀·t − ½g·t²"}
        </text>

        {/* Ground */}
        <line x1="340" y1={groundY} x2="620" y2={groundY} stroke="rgba(255,255,255,0.30)" strokeWidth="4" />
        {/* Vertical axis */}
        <line x1={xLane} y1={groundY} x2={xLane} y2={topY - 10} stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="6 6" />

        {/* y0 reference */}
        {y0 > 0.5 && (
          <>
            <line x1={xLane - 60} y1={mapY(y0)} x2={xLane + 60} y2={mapY(y0)} stroke="rgba(252,165,165,0.7)" strokeWidth="1.5" strokeDasharray="5 4" />
            <text x={xLane + 70} y={mapY(y0) + 4} fill="#fca5a5" fontSize="12" fontWeight="700">y₀</text>
          </>
        )}

        {/* yMax reference */}
        {yMax > y0 + 0.5 && (
          <>
            <line x1={xLane - 60} y1={mapY(yMax)} x2={xLane + 60} y2={mapY(yMax)} stroke="rgba(167,139,250,0.7)" strokeWidth="1.5" strokeDasharray="5 4" />
            <text x={xLane + 70} y={mapY(yMax) + 4} fill="#c4b5fd" fontSize="12" fontWeight="700">yMáx</text>
          </>
        )}

        {/* Trail */}
        {trailPts.length > 1 && (
          <path d={trailPts.join(" ")} fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.75" />
        )}

        {/* Particle */}
        <circle cx={xLane} cy={particleY} r="18" fill="rgba(52,211,153,0.28)" stroke="#34d399" strokeWidth="2.5" />
        <text x={xLane} y={particleY + 5} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="800">m</text>

        {/* Velocity vector */}
        <SvgArrow x1={xLane + 32} y1={particleY} x2={xLane + 32} y2={particleY - velLen} color="#34d399" label={`v=${fmt(animVy, 2, lang)} m/s`} />
        {/* Gravity vector */}
        <SvgArrow x1={xLane - 32} y1={particleY} x2={xLane - 32} y2={particleY + accLen} color="#f59e0b" label={`g=${fmt(g, 2, lang)}`} />

        {/* Info panel */}
        <rect x="110" y="376" width="740" height="120" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="200" y="406" fill="rgba(255,255,255,0.72)" fontSize="13">{isEs ? `t = ${fmt(tParam, 2, lang)} s` : `t = ${fmt(tParam, 2, lang)} s`}</text>
        <text x="370" y="406" fill="rgba(255,255,255,0.72)" fontSize="13">{isEs ? `y = ${fmt(yVal, 2, lang)} m` : `y = ${fmt(yVal, 2, lang)} m`}</text>
        <text x="540" y="406" fill="#34d399" fontSize="13">{isEs ? `v = ${fmt(vy, 2, lang)} m/s` : `v = ${fmt(vy, 2, lang)} m/s`}</text>
        <text x="200" y="432" fill="rgba(255,255,255,0.60)" fontSize="12">{isEs ? `t_vuelo = ${fmt(tFlight, 2, lang)} s` : `t_flight = ${fmt(tFlight, 2, lang)} s`}</text>
        <text x="370" y="432" fill="rgba(255,255,255,0.60)" fontSize="12">{isEs ? `y_max = ${fmt(yMax, 2, lang)} m` : `y_max = ${fmt(yMax, 2, lang)} m`}</text>
        <text x="200" y="478" textAnchor="start" fill="rgba(255,255,255,0.56)" fontSize="12">
          {isEs
            ? "La velocidad disminuye linealmente con g; al llegar al pico, vy = 0."
            : "Velocity decreases linearly with g; at the peak, vy = 0."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["v0", "y0", "g", "t"],
    stateOut: ["y", "vy", "yMax", "tFlight", "tPeak"],
    target: "vy",
  },
};

export default profile;
