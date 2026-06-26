import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const VB_W = 980;
const VB_H = 640;

const fmt = (n, d = 3, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const s = n.toFixed(d);
  return lang === "en" ? s : s.replace(".", ",");
};

const cmProfile = {
  meta: {
    id: "svg-centro-masas-cuerpos-extendidos",
    leafId: "centro-de-masas-en-cuerpos-extendidos",
    title: {
      es: "Centro de masas en cuerpos extendidos",
      en: "Center of mass in extended bodies",
    },
    subtitle: {
      es: "Barra continua con densidad lineal variable",
      en: "Continuous rod with linearly varying density",
    },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "L",
        aliases: ["longitud"],
        default: 2,
        label: { es: "Longitud L", en: "Length L" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.4,
        max: 8,
        step: 0.1,
      },
      {
        key: "beta",
        aliases: ["gradiente"],
        default: 0.4,
        label: { es: "Gradiente β", en: "Gradient β" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -0.9,
        max: 0.9,
        step: 0.05,
      },
    ],
    derivations: {
      x_cm: ({ L, beta }) => {
        const len = safeNum(L, 2);
        const b = clamp(safeNum(beta, 0.4), -0.9, 0.9);
        return len * ((0.5 + b / 3) / (1 + b / 2));
      },
      xcm: ({ x_cm }) => safeNum(x_cm, 0),
    },
  },

  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "x_cm = (1/M) ∫ x dm",
      highlightColor: "#93c5fd",
      description: {
        es: "La posición final depende de cómo se distribuye dm a lo largo del cuerpo.",
        en: "The final position depends on how dm is distributed along the body.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `${lang === "en" ? "Length" : "Longitud"} L = ${fmt(safeNum(p?.L, 2), 2, lang)} m`,
        `β = ${fmt(safeNum(p?.beta, 0.4), 2, lang)}`,
      ],
      result: ({ p, lang }) => {
        const L = safeNum(p?.L, 2);
        const beta = clamp(safeNum(p?.beta, 0.4), -0.9, 0.9);
        const xcm = safeNum(p?.x_cm, L * ((0.5 + beta / 3) / (1 + beta / 2)));
        return `x_cm = ${fmt(xcm, 4, lang)} m`;
      },
      resultColor: "#34d399",
    },
    {
      key: "idea",
      label: { es: "Idea física", en: "Physical idea" },
      bg: "rgba(16,185,129,0.10)",
      border: "rgba(52,211,153,0.18)",
      description: ({ p, lang }) => {
        const beta = safeNum(p?.beta, 0.4);
        return beta >= 0
          ? (lang === "en"
              ? "Density grows toward the right, so the CM shifts toward that region."
              : "La densidad crece hacia la derecha, así que el CM se desplaza hacia esa zona.")
          : (lang === "en"
              ? "Density grows toward the left, so the CM shifts toward that region."
              : "La densidad crece hacia la izquierda, así que el CM se desplaza hacia esa zona.");
      },
    },
    {
      key: "formula",
      label: { es: "Expresión cerrada usada", en: "Closed-form expression used" },
      bg: "rgba(245,158,11,0.10)",
      border: "rgba(245,158,11,0.18)",
      highlight: "x_cm = L·[(1/2 + β/3)/(1 + β/2)]",
      highlightColor: "#fcd34d",
    },
  ],

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const phase = (2 * Math.PI * t) / 6;
      const probe = 0.5 + 0.5 * Math.sin(phase);
      return { probe };
    },
  },

  render: ({ p, state, lang = "es", toNum, formulaLabel }) => {
    const isEs = lang !== "en";
    const L = clamp(toNum(p?.L, 2), 0.4, 8);
    const beta = clamp(toNum(p?.beta, 0.4), -0.9, 0.9);
    const xcm = toNum(p?.x_cm, L * ((0.5 + beta / 3) / (1 + beta / 2)));
    const probe = clamp(toNum(state?.probe, 0.5), 0, 1);

    /* ── layout centrado ──────────────────────────────── */
    const rodW = 600;
    const rodH = 56;
    const rodX = (VB_W - rodW) / 2;        // centrado horizontal
    const rodY = 290;
    const axisY = rodY + rodH + 36;        // eje numérico debajo
    const curveBaseY = rodY - 20;          // base de la curva de densidad
    const curveH = 80;                     // altura máx de la curva

    const probeX = rodX + probe * rodW;
    const xcmPx = rodX + (xcm / L) * rodW;
    const halfPx = rodX + rodW / 2;        // centro geométrico

    /* ── densidad normalizada en [0,1] ────────────────── */
    const rho = (u) => clamp(1 + beta * (2 * u - 1), 0.1, 2);
    const rhoMax = Math.max(rho(0), rho(1));

    /* ── barras con gradiente de densidad ─────────────── */
    const nBars = 60;
    const bars = [];
    for (let i = 0; i < nBars; i++) {
      const u = i / (nBars - 1);
      const x = rodX + u * rodW;
      const w = rodW / nBars + 0.6;
      const intensity = rho(u) / rhoMax;
      const op = clamp(0.18 + 0.72 * intensity, 0.12, 0.92);
      bars.push(
        <rect key={`b${i}`} x={x} y={rodY} width={w} height={rodH}
          fill={`rgba(99,102,241,${op})`} />
      );
    }

    /* ── curva ρ(x) encima de la barra ────────────────── */
    const curvePts = [];
    const nPts = 80;
    for (let i = 0; i <= nPts; i++) {
      const u = i / nPts;
      const x = rodX + u * rodW;
      const h = (rho(u) / rhoMax) * curveH;
      curvePts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${(curveBaseY - h).toFixed(1)}`);
    }
    const curvePath = curvePts.join(" ");
    const areaPath = curvePath
      + ` L${(rodX + rodW).toFixed(1)},${curveBaseY} L${rodX.toFixed(1)},${curveBaseY} Z`;

    /* ── ticks del eje ────────────────────────────────── */
    const nTicks = 5;
    const ticks = [];
    for (let i = 0; i <= nTicks; i++) {
      const u = i / nTicks;
      const x = rodX + u * rodW;
      const val = (u * L).toFixed(1);
      ticks.push(
        <g key={`t${i}`}>
          <line x1={x} y1={axisY - 4} x2={x} y2={axisY + 4}
            stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <text x={x} y={axisY + 18} textAnchor="middle"
            fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace">
            {val}
          </text>
        </g>
      );
    }

    return (
      <g>
        {/* ── fondo con gradiente sutil ─────────────────── */}
        <defs>
          <linearGradient id="bgCmExt" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#0a1628" />
            <stop offset="100%" stopColor="#162a4a" />
          </linearGradient>
          <linearGradient id="rhoFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.04" />
          </linearGradient>
          <filter id="glowCm">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
          </filter>
          <clipPath id="rodClip">
            <rect x={rodX} y={rodY} width={rodW} height={rodH} rx="14" />
          </clipPath>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgCmExt)" rx="16" />

        {/* ── badge SYNC ───────────────────────────────── */}
        {formulaLabel ? (
          <g transform={`translate(${VB_W - 100}, 22)`}>
            <rect x="0" y="-12" width="80" height="24" rx="12"
              fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.35)" strokeWidth="1" />
            <text x="40" y="1" textAnchor="middle" dominantBaseline="middle"
              fontSize="9" fill="#22c55e" fontWeight="800">SYNC OK</text>
          </g>
        ) : null}

        {/* ── título + subtítulo centrados ──────────────── */}
        <text x={VB_W / 2} y="56" textAnchor="middle" fill="#fff"
          fontSize="26" fontWeight="900" letterSpacing="0.5">
          {isEs ? "Centro de masas — cuerpo extendido" : "Center of mass — extended body"}
        </text>
        <text x={VB_W / 2} y="84" textAnchor="middle"
          fill="rgba(255,255,255,0.55)" fontSize="13" letterSpacing="0.3">
          {isEs
            ? "Barra con densidad lineal variable  ρ(x) = ρ₀(1 + β·(2x/L − 1))"
            : "Rod with linearly varying density  ρ(x) = ρ₀(1 + β·(2x/L − 1))"}
        </text>

        {/* ── etiqueta curva de densidad ────────────────── */}
        <text x={rodX - 8} y={curveBaseY - curveH / 2} textAnchor="end"
          fill="rgba(165,180,252,0.7)" fontSize="12" fontWeight="700"
          transform={`rotate(-90, ${rodX - 8}, ${curveBaseY - curveH / 2})`}>
          ρ(x)
        </text>

        {/* ── área rellena bajo la curva ────────────────── */}
        <path d={areaPath} fill="url(#rhoFill)" />

        {/* ── línea de la curva ρ(x) ───────────────────── */}
        <path d={curvePath} fill="none" stroke="#818cf8" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />

        {/* ── barra / cuerpo extendido ─────────────────── */}
        <g filter="url(#softShadow)">
          <rect x={rodX} y={rodY} width={rodW} height={rodH} rx="14"
            fill="rgba(30,41,59,0.65)" stroke="rgba(148,163,184,0.25)" strokeWidth="1.5" />
          <g clipPath="url(#rodClip)">{bars}</g>
          <rect x={rodX} y={rodY} width={rodW} height={rodH} rx="14"
            fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        </g>

        {/* ── eje x con ticks ──────────────────────────── */}
        <line x1={rodX} y1={axisY} x2={rodX + rodW} y2={axisY}
          stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        {ticks}
        <text x={rodX + rodW + 22} y={axisY + 5} fill="rgba(255,255,255,0.5)"
          fontSize="13" fontWeight="700" fontStyle="italic">x (m)</text>

        {/* ── marca L/2 (centro geométrico) ────────────── */}
        <line x1={halfPx} y1={rodY + rodH + 2} x2={halfPx} y2={axisY - 6}
          stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="4 3" />
        <text x={halfPx} y={axisY + 34} textAnchor="middle"
          fill="rgba(255,255,255,0.35)" fontSize="10">L/2</text>

        {/* ── probe dm animado ─────────────────────────── */}
        <g>
          <line x1={probeX} y1={curveBaseY - (rho(probe) / rhoMax) * curveH}
            x2={probeX} y2={rodY}
            stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
          <circle cx={probeX} cy={curveBaseY - (rho(probe) / rhoMax) * curveH}
            r="5" fill="#f59e0b" opacity="0.9" />
          <circle cx={probeX} cy={rodY + rodH / 2} r="6"
            fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <text x={probeX} y={rodY + rodH / 2 + 1} textAnchor="middle"
            dominantBaseline="middle" fill="#78350f" fontSize="8" fontWeight="900">dm</text>
        </g>

        {/* ── indicador CM ─────────────────────────────── */}
        <g filter="url(#glowCm)">
          {/* triángulo apuntando arriba hacia la barra */}
          <polygon
            points={`${xcmPx},${rodY + rodH + 6} ${xcmPx - 8},${rodY + rodH + 20} ${xcmPx + 8},${rodY + rodH + 20}`}
            fill="#34d399" />
          <line x1={xcmPx} y1={rodY + rodH + 20} x2={xcmPx} y2={axisY - 8}
            stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
          <circle cx={xcmPx} cy={axisY + 60} r="14"
            fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="2" />
          <text x={xcmPx} y={axisY + 62} textAnchor="middle"
            dominantBaseline="middle" fill="#34d399" fontSize="11" fontWeight="900">CM</text>
        </g>

        {/* ── valor numérico de x_cm ───────────────────── */}
        <g>
          <rect x={xcmPx - 52} y={axisY + 80} width="104" height="26" rx="8"
            fill="rgba(52,211,153,0.10)" stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
          <text x={xcmPx} y={axisY + 98} textAnchor="middle"
            fill="#6ee7b7" fontSize="13" fontWeight="800" fontFamily="monospace">
            x_cm = {fmt(xcm, 3, lang)} m
          </text>
        </g>

        {/* ── leyenda inferior ─────────────────────────── */}
        <g transform={`translate(${VB_W / 2}, ${VB_H - 42})`}>
          <circle cx="-120" cy="0" r="5" fill="#f59e0b" />
          <text x="-110" y="4" fill="rgba(255,255,255,0.5)" fontSize="11">
            {isEs ? "Elemento dm recorriendo la barra" : "Element dm sweeping the rod"}
          </text>
          <polygon points="80,0 72,6 88,6" fill="#34d399" />
          <text x="94" y="4" fill="rgba(255,255,255,0.5)" fontSize="11">
            {isEs ? "Centro de masas" : "Center of mass"}
          </text>
        </g>

        {/* ── watermark ────────────────────────────────── */}
        <text x={VB_W - 16} y={VB_H - 10} textAnchor="end"
          fontSize="9" fill="rgba(255,255,255,0.12)" fontWeight="700" letterSpacing="1">
          PHYXIO
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["L", "beta"],
    stateOut: ["x_cm", "xcm"],
    target: "xcm",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Dónde queda el centro de masas cuando la masa se distribuye de forma continua en un cuerpo extendido?",
      en: "Where is the center of mass located when mass is continuously distributed in an extended body?",
    },
    magnitud_estrella: "xcm",
  },
};

export default cmProfile;
