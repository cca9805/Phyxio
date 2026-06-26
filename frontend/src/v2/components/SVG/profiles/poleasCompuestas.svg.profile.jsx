// frontend/src/v2/components/SVG/profiles/poleasCompuestas.svg.profile.jsx
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
  const n = parseFloat(String(v || "").replace(",", "."));
  return isNaN(n) ? def : n;
};

const VB_W = 900, VB_H = 650;
const BOX_X = 450, BOX_Y = 400;

const poleasCompuestasProfile = {
  meta: {
    id: "svg-poleas-compuestas",
    leafId: "poleas-compuestas",
    title: { es: "Poleas Compuestas", en: "Compound Pulleys" },
    subtitle: { es: "Análisis con eficiencia y rozamiento", en: "Analysis with efficiency and friction" },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "W",
        aliases: ["peso"],
        default: 800,
        label: { es: "Carga W", en: "Load W" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 10, max: 2000, step: 10,
      },
      {
        key: "n",
        aliases: ["nSel", "tramos"],
        default: 4,
        label: { es: "Tramos de cuerda (n)", en: "Rope segments (n)" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1, max: 20, step: 1,
      },
      {
        key: "eta",
        aliases: ["rendimiento", "eficiencia"],
        default: 0.8,
        label: { es: "Eficiencia (η)", en: "Efficiency (η)" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 1.0, step: 0.05,
      },
    ],
    derivations: {
      F_real: ({ W, n, eta }) => safeNum(W, 800) / (Math.max(1, safeNum(n, 4)) * safeNum(eta, 0.8)),
      F_ideal: ({ W, n }) => safeNum(W, 800) / Math.max(1, safeNum(n, 4)),
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.STATIC,
    tMax: 6,
    loop: false,
    state: (t, p) => ({}),
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang === "es";
    const merged = { ...p, ...state };
    
    const WObj = toNum(merged.W, 800);
    const nSel = Math.round(toNum(merged.nSel ?? merged.n, 4));
    const eta = toNum(merged.eta ?? merged.rendimiento, 0.8);
    const Freal = toNum(merged.F_real, 100);
    const Fideal = toNum(merged.F_ideal, 100);

    const ROPES = Math.max(1, nSel);
    
    // Draw ropes
    const ropeLines = [];
    const ropeSpacing = 16;
    const ropeStartX = BOX_X - ((ROPES - 1) * ropeSpacing) / 2;
    for(let i = 0; i < ROPES; i++) {
        ropeLines.push(
            <line key={i} x1={ropeStartX + i * ropeSpacing} y1={100} x2={ropeStartX + i * ropeSpacing} y2={BOX_Y} stroke="#94a3b8" strokeWidth={3} />
        );
    }

    return (
      <g>
        <defs>
          <linearGradient id="bgPolComp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgPolComp)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37.5" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        {/* Techo */}
        <rect x={BOX_X - 120} y={0} width={240} height={20} fill="#64748b" />
        <rect x={BOX_X - 120} y={20} width={240} height={80} fill="rgba(100, 116, 139, 0.3)" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" />
        <text x={BOX_X} y={60} textAnchor="middle" fill="#fcd34d" fontSize={14}>
          {isEs ? "Aparejo Compuesto Real" : "Real Compound System"}
        </text>

        {/* Cuerdas */}
        {ropeLines}

        {/* Cuerda de tiro (F) */}
        <path d={`M ${BOX_X + 120} 100 Q ${BOX_X + 150} 100 ${BOX_X + 150} 150 L ${BOX_X + 150} 350`} fill="none" stroke="#f59e0b" strokeWidth={4} />
        <SvgArrow x1={BOX_X + 150} y1={250} x2={BOX_X + 150} y2={320} color="#f59e0b" label={`F_real = ${fmt(Freal, 1)} N`} />

        {/* Bloque W */}
        <g transform={`translate(${BOX_X}, ${BOX_Y})`}>
          <rect x={-70} y={0} width={140} height={90} rx={4} fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth={3} />
          <text x={0} y={45} textAnchor="middle" dominantBaseline="middle" fill="#818cf8" fontSize={26} fontWeight="bold">W</text>
          
          <SvgArrow x1={0} y1={90} x2={0} y2={190} color="#ef4444" label={`W = ${fmt(WObj, 1)} N`} />
        </g>

        {/* Text info */}
        <g transform={`translate(50, 80)`}>
          <text x={0} y={0} fill="#ffffff" fontSize={20} fontWeight="bold" opacity={0.9}>
            n = {ROPES} {isEs ? "tramos" : "ropes"}
          </text>
          <text x={0} y={35} fill="#34d399" fontSize={18} fontWeight="bold">
            {isEs ? "Eficiencia" : "Efficiency"} η = {fmt(eta, 2)}
          </text>
          <text x={0} y={70} fill="#f87171" fontSize={16}>
            F_real = {fmt(Freal, 1)} N
          </text>
          <text x={0} y={100} fill="#94a3b8" fontSize={14} opacity={0.8}>
            (F_ideal = {fmt(Fideal, 1)} N)
          </text>
        </g>

        <text x={VB_W - 20} y={VB_H - 15} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.2)" fontWeight="900">
          PHYXIO NEWTON ENGINE — v5.31
        </text>
      </g>
    );
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como determinan n y eta la fuerza real F_real necesaria para mover la carga W?",
      en: "How do n and eta determine the real force F_real needed to move load W?",
    },
    magnitud_estrella: "F_real",
  },

  infoCards: [
    {
      key: "fuerza_real",
      label: { es: "Fuerza real", en: "Real force" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `F_real = W / (n × η)` : `F_real = W / (n × η)`,
          isEs ? `La friccion aumenta la fuerza sobre F_ideal` : `Friction raises force above F_ideal`,
        ];
      },
      result: ({ p, lang }) => {
        const W = parseFloat(p.W) || 800;
        const n = Math.max(1, Math.round(parseFloat(p.n ?? p.nSel) || 4));
        const eta = parseFloat(p.eta) || 0.8;
        const F = W / (n * eta);
        return `F_real = ${F.toFixed(1)} N`;
      },
      resultColor: "#f87171",
    },
    {
      key: "fuerza_ideal",
      label: { es: "Fuerza ideal", en: "Ideal force" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `F_ideal = W / n` : `F_ideal = W / n`,
          isEs ? `Referencia sin rozamiento` : `Reference without friction`,
        ];
      },
      result: ({ p, lang }) => {
        const W = parseFloat(p.W) || 800;
        const n = Math.max(1, Math.round(parseFloat(p.n ?? p.nSel) || 4));
        const F = W / n;
        return `F_ideal = ${F.toFixed(1)} N`;
      },
      resultColor: "#94a3b8",
    },
  ],

  interpretation_binding: {
    paramsIn: ["W", "nSel", "eta"],
    stateOut: ["F_real", "F_ideal"],
  },
};

export default poleasCompuestasProfile;
