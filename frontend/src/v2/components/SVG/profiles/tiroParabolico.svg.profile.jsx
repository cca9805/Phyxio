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
    id: "svg-tiro-parabolico",
    leafId: "tiro-parabolico",
    title: {
      es: "Tiro parabólico",
      en: "Projectile Motion",
    },
    subtitle: {
      es: "MRU (x) + MRUA (y) — trayectoria, alcance y altura máxima",
      en: "Uniform motion (x) + uniformly accelerated (y) — trajectory, range, max height",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determinan la velocidad inicial y el ángulo de lanzamiento la trayectoria, el alcance y la altura máxima?",
      en: "How do initial speed and launch angle determine the trajectory, range, and maximum height?",
    },
    magnitud_estrella: "R",
    magnitud_secundaria: "y",
    variable_control: "theta",
  },
  graph_contract: createSvgProfileContract({
    leafId: "tiro-parabolico",
    graphId: "svg-tiro-parabolico",
    purpose: {
      es: "Mostrar la parábola de tiro oblicuo, descomposición de velocidad y las magnitudes R, yMax, tVuelo.",
      en: "Show the oblique projectile parabola, velocity decomposition, and quantities R, yMax, tFlight.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["v0", "theta", "y0", "g"],
    derivedMagnitudes: ["vx0", "vy0", "tFlight", "R", "yMax"],
    targetCandidates: ["R", "yMax", "tFlight"],
    equations: [
      "vx₀ = v₀·cos(θ)", "vy₀ = v₀·sin(θ)",
      "x = vx₀·t", "y = y₀ + vy₀·t − ½g·t²",
      "R = v₀²·sin(2θ)/g (y₀=0)",
    ],
    hypotheses: ["sin resistencia del aire", "g constante"],
    validityDomain: ["velocidades no relativistas", "θ ∈ (−85°, 85°)"],
    visualSimplifications: ["partícula puntual", "lanzamiento desde suelo plano"],
    alwaysVisible: ["R", "yMax"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "v0",
        default: 25,
        label: { es: "Velocidad inicial v₀", en: "Initial velocity v₀" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 50,
        step: 0.5,
      },
      {
        key: "theta",
        default: 40,
        label: { es: "Ángulo θ", en: "Angle θ" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 89,
        step: 1,
      },
      {
        key: "y0",
        default: 0,
        label: { es: "Altura inicial y₀", en: "Initial height y₀" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 30,
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
      vx0: ({ v0, theta }) => {
        const th = (safeNum(theta, 40) * Math.PI) / 180;
        return safeNum(v0, 25) * Math.cos(th);
      },
      vy0: ({ v0, theta }) => {
        const th = (safeNum(theta, 40) * Math.PI) / 180;
        return safeNum(v0, 25) * Math.sin(th);
      },
      tFlight: ({ v0, theta, y0, g }) => {
        const th = (safeNum(theta, 40) * Math.PI) / 180;
        const vy0 = safeNum(v0, 25) * Math.sin(th);
        const _y0 = Math.max(0, safeNum(y0, 0));
        const _g = Math.max(0.1, safeNum(g, 9.81));
        const disc = vy0 * vy0 + 2 * _g * _y0;
        return disc >= 0 ? (vy0 + Math.sqrt(disc)) / _g : 0;
      },
      R: ({ v0, theta, y0, g }) => {
        const th = (safeNum(theta, 40) * Math.PI) / 180;
        const vx0 = safeNum(v0, 25) * Math.cos(th);
        const vy0 = safeNum(v0, 25) * Math.sin(th);
        const _y0 = Math.max(0, safeNum(y0, 0));
        const _g = Math.max(0.1, safeNum(g, 9.81));
        const disc = vy0 * vy0 + 2 * _g * _y0;
        const tF = disc >= 0 ? (vy0 + Math.sqrt(disc)) / _g : 0;
        return vx0 * tF;
      },
      yMax: ({ v0, theta, y0, g }) => {
        const th = (safeNum(theta, 40) * Math.PI) / 180;
        const vy0 = safeNum(v0, 25) * Math.sin(th);
        const _y0 = Math.max(0, safeNum(y0, 0));
        const _g = Math.max(0.1, safeNum(g, 9.81));
        return vy0 > 0 ? _y0 + (vy0 * vy0) / (2 * _g) : _y0;
      },
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Fórmulas clave", en: "Key formulas" },
      highlight: "R = v₀²·sin(2θ)/g   ·   yMax = vy₀²/(2g)",
      highlightColor: "#fbbf24",
      description: {
        es: "El alcance máximo se logra a 45°. La altura máxima depende solo de la componente vertical inicial.",
        en: "Maximum range is achieved at 45°. Maximum height depends only on the initial vertical component.",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `v₀ = ${fmt(safeNum(p?.v0, 25), 2, lang)} m/s`,
        `θ  = ${fmt(safeNum(p?.theta, 40), 1, lang)}°`,
        `yMax = ${fmt(safeNum(p?.yMax, 0), 2, lang)} m`,
      ],
      result: ({ p, lang }) => `R = ${fmt(safeNum(p?.R, 0), 2, lang)} m`,
      resultColor: "#fbbf24",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 8,
    loop: true,
    state: (t, p) => {
      const v0 = safeNum(p?.v0, 25);
      const theta = (safeNum(p?.theta, 40) * Math.PI) / 180;
      const y0 = Math.max(0, safeNum(p?.y0, 0));
      const g = Math.max(0.1, safeNum(p?.g, 9.81));
      const vx0 = v0 * Math.cos(theta);
      const vy0 = v0 * Math.sin(theta);
      const disc = vy0 * vy0 + 2 * g * y0;
      const tFlight = disc >= 0 ? (vy0 + Math.sqrt(disc)) / g : 0;
      const tCur = tFlight > 0 ? t % (tFlight + 0.3) : 0;
      const xC = vx0 * Math.min(tCur, tFlight);
      const yC = Math.max(0, y0 + vy0 * tCur - 0.5 * g * tCur * tCur);
      const vxC = vx0;
      const vyC = vy0 - g * Math.min(tCur, tFlight);
      return { xC, yC, vxC, vyC, tCur };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const v0 = safeNum(p?.v0, 25);
    const thetaDeg = safeNum(p?.theta, 40);
    const th = (thetaDeg * Math.PI) / 180;
    const y0 = Math.max(0, safeNum(p?.y0, 0));
    const g = Math.max(0.1, safeNum(p?.g, 9.81));

    const vx0 = v0 * Math.cos(th);
    const vy0 = v0 * Math.sin(th);
    const disc = vy0 * vy0 + 2 * g * y0;
    const tFlight = safeNum(p?.tFlight, disc >= 0 ? (vy0 + Math.sqrt(disc)) / g : 0);
    const R = safeNum(p?.R, vx0 * tFlight);
    const yMax = safeNum(p?.yMax, vy0 > 0 ? y0 + vy0 * vy0 / (2 * g) : y0);

    const worldX1 = 120;
    const worldX2 = 820;
    const groundY = 450;
    const topY = 90;

    const xMax = Math.max(10, R * 1.25);
    const yMaxDraw = Math.max(8, yMax * 1.3 + 2);

    const mapX = (x) => worldX1 + clamp(x / xMax, 0, 1) * (worldX2 - worldX1);
    const mapY = (y) => groundY - clamp(y / yMaxDraw, 0, 1) * (groundY - topY);

    const xAnim = state?.xC ?? 0;
    const yAnim = state?.yC ?? y0;
    const vxAnim = state?.vxC ?? vx0;
    const vyAnim = state?.vyC ?? vy0;

    const projX = mapX(xAnim);
    const projY = mapY(yAnim);

    // Full trail
    const trailPts = [];
    const N = 100;
    const tCur = state?.tCur ?? 0;
    for (let i = 0; i <= N; i++) {
      const tt = (i / N) * Math.min(tCur, tFlight);
      const xx = vx0 * tt;
      const yy = Math.max(0, y0 + vy0 * tt - 0.5 * g * tt * tt);
      trailPts.push(`${i === 0 ? "M" : "L"} ${mapX(xx)} ${mapY(yy)}`);
    }

    // Ghost full parabola
    const ghostPts = [];
    for (let i = 0; i <= 120; i++) {
      const tt = (i / 120) * tFlight;
      const xx = vx0 * tt;
      const yy = Math.max(0, y0 + vy0 * tt - 0.5 * g * tt * tt);
      ghostPts.push(`${i === 0 ? "M" : "L"} ${mapX(xx)} ${mapY(yy)}`);
    }

    const speed = Math.hypot(vxAnim, vyAnim);
    const vxLen = clamp(vxAnim * 7, -120, 120);
    const vyLen = clamp(vyAnim * 7, -120, 120);
    const speedLen = clamp(speed * 6, 20, 140);
    const vAngle = Math.atan2(-vyAnim, vxAnim);

    return (
      <g>
        <defs>
          <linearGradient id="tpBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0c1e36" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#tpBg)" />

        <text x="480" y="46" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Tiro parabólico" : "Projectile Motion"}
        </text>
        <text x="480" y="72" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? `v₀=${fmt(v0, 1, lang)} m/s  ·  θ=${fmt(thetaDeg, 0, lang)}°  ·  R = v₀²·sin(2θ)/g`
            : `v₀=${fmt(v0, 1, lang)} m/s  ·  θ=${fmt(thetaDeg, 0, lang)}°  ·  R = v₀²·sin(2θ)/g`}
        </text>

        {/* Ground */}
        <line x1={worldX1 - 20} y1={groundY} x2={worldX2 + 20} y2={groundY} stroke="rgba(255,255,255,0.28)" strokeWidth="3" />
        {/* Launch wall */}
        {y0 > 0.5 && (
          <>
            <line x1={worldX1} y1={mapY(y0)} x2={worldX1} y2={groundY} stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
            <rect x={worldX1 - 28} y={mapY(y0) - 14} width="56" height="14" rx="4" fill="rgba(148,163,184,0.30)" stroke="rgba(148,163,184,0.60)" />
          </>
        )}

        {/* Ghost parabola */}
        {ghostPts.length > 1 && (
          <path d={ghostPts.join(" ")} fill="none" stroke="rgba(96,165,250,0.18)" strokeWidth="1.8" strokeDasharray="7 5" />
        )}

        {/* Trail */}
        {trailPts.length > 1 && (
          <path d={trailPts.join(" ")} fill="none" stroke="#60a5fa" strokeWidth="2.8" opacity="0.85" />
        )}

        {/* yMax marker */}
        <line x1={worldX1} y1={mapY(yMax)} x2={mapX(vx0 * vy0 / g)} y2={mapY(yMax)} stroke="rgba(167,139,250,0.50)" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x={worldX1 - 8} y={mapY(yMax) + 4} textAnchor="end" fill="#c4b5fd" fontSize="11">yMax={fmt(yMax, 1, lang)}</text>

        {/* Particle */}
        <circle cx={projX} cy={projY} r="14" fill="rgba(52,211,153,0.30)" stroke="#34d399" strokeWidth="2.5" />

        {/* Velocity vector */}
        <SvgArrow
          x1={projX}
          y1={projY}
          x2={projX + Math.cos(-vAngle) * speedLen}
          y2={projY + Math.sin(-vAngle) * speedLen}
          color="#34d399"
          label={`v=${fmt(speed, 2, lang)}`}
        />
        {/* vx component */}
        {Math.abs(vxLen) > 5 && (
          <SvgArrow x1={projX} y1={projY + 26} x2={projX + vxLen} y2={projY + 26} color="#60a5fa" label={`vx=${fmt(vxAnim, 2, lang)}`} />
        )}
        {/* vy component */}
        {Math.abs(vyLen) > 5 && (
          <SvgArrow x1={projX - 26} y1={projY} x2={projX - 26} y2={projY - vyLen} color="#f87171" label={`vy=${fmt(vyAnim, 2, lang)}`} />
        )}

        {/* Range marker */}
        <line x1={mapX(R)} y1={groundY} x2={mapX(R)} y2={groundY - 12} stroke="rgba(251,191,36,0.75)" strokeWidth="2" />
        <text x={mapX(R)} y={groundY + 22} textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">
          R={fmt(R, 2, lang)} m
        </text>

        {/* Info panel */}
        <rect x="630" y="130" width="295" height="195" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="777" y="158" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700">{isEs ? "Magnitudes" : "Quantities"}</text>
        <text x="648" y="184" fill="rgba(255,255,255,0.72)" fontSize="13">vx₀ = {fmt(vx0, 2, lang)} m/s</text>
        <text x="648" y="208" fill="rgba(255,255,255,0.72)" fontSize="13">vy₀ = {fmt(vy0, 2, lang)} m/s</text>
        <text x="648" y="232" fill="rgba(255,255,255,0.58)" fontSize="13">t_vuelo = {fmt(tFlight, 2, lang)} s</text>
        <text x="648" y="256" fill="#c4b5fd" fontSize="13">yMax = {fmt(yMax, 2, lang)} m</text>
        <text x="648" y="280" fill="#fbbf24" fontSize="14" fontWeight="700">R = {fmt(R, 2, lang)} m</text>
        <text x="648" y="308" fill="rgba(255,255,255,0.50)" fontSize="11">θ_óptimo: 45° (y₀=0)</text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["v0", "theta", "y0", "g"],
    stateOut: ["vx0", "vy0", "tFlight", "R", "yMax"],
    target: "R",
  },
};

export default profile;
