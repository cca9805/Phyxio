// frontend/src/v2/components/SVG/profiles/sistemasReales.svg.profile.jsx
//
// Profile SVG animado para: sistemas-reales (v5.31 Deep Clean)
//
import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgArrow, SvgGround } from "../SvgProfileRenderer";

/* ── Helpers Locales ────────────────────────────────────────────────── */
const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v || "").replace(",", "."));
  return isNaN(n) ? def : n;
};

/* ── Layout ──────────────────────────────────────────────────────────── */
const VB_W = 900, VB_H = 650;
const FLOOR_Y = 450;

/* ── PROFILE ─────────────────────────────────────────────────────────── */
const sistemasRealesProfile = {

  meta: {
    id:     "svg-sistemas-reales",
    leafId: "sistemas-reales",
    title: {
      es: "Sistemas Reales",
      en: "Real Systems",
    },
    subtitle: {
      es: "Dinámica aplicada con pérdidas energéticas y fricción",
      en: "Applied dynamics with energy losses and friction",
    },
  },

  scene:     SVG_SCENE_TYPES.CUSTOM,
  viewBox:   `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key:     "F_ap",
        default: 120,
        label:   { es: "Fuerza motriz (N)", en: "Driving force (N)" },
        unit:    "N",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0, max: 500, step: 1,
      },
      {
        key:     "F_loss",
        default: 40,
        label:   { es: "Fuerzas de pérdida (N)", en: "Loss forces (N)" },
        unit:    "N",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0, max: 500, step: 1,
      },
      {
        key:     "m",
        default: 100,
        label:   { es: "Masa total (kg)", en: "Total mass (kg)" },
        unit:    "kg",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 1, max: 2000, step: 10,
      },
    ],
    derivations: {
        F_net: ({ F_ap, F_loss }) => safeNum(F_ap, 120) - safeNum(F_loss, 40),
        a: ({ F_net, m }) => safeNum(m, 100) > 0 ? safeNum(F_net, 80) / safeNum(m, 100) : 0
    },
  },

  motion: {
    type:  SVG_MOTION_TYPES.ANIMATED,
    tMax:  10,
    loop:  true,
    state: (t, p) => {
        const a = safeNum(p.a, 0.8);
        return { x: 0.5 * a * t * t * 10 }; // Desplazamiento
    }
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const merged = { ...p, ...state };
    const xPos = (toNum(state?.x, 0) % 600) + 10;
    const Fa = toNum(merged.F_ap, 120);
    const Fl = toNum(merged.F_loss, 40);
    const Fn = toNum(merged.F_net, 80);
    const a = toNum(merged.a, 0.8);
    
    const SCALE = 0.2;

    return (
      <g>
        <defs>
          <linearGradient id="bgReal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgReal)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        <SvgGround x1={0} x2={900} y={FLOOR_Y} color="#ffffff" />

        {/* Vehículo */}
        <g transform={`translate(${xPos}, 380)`}>
            <rect x="0" y="0" width={140} height={70} rx={10} fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth={2} />
            <rect x="100" y="-30" width={40} height={30} fill="rgba(255,255,255,0.1)" stroke="#ffffff" />
            <circle cx={30} cy={70} r={15} fill="#0f172a" stroke="#ffffff" />
            <circle cx={110} cy={70} r={15} fill="#0f172a" stroke="#ffffff" />
            
            {/* Fuerzas */}
            <SvgArrow x1={140} y1={35} x2={140 + Fa * SCALE} y2={35} color="#60a5fa" label="F_ap" />
            <SvgArrow x1={0} y1={35} x2={-Fl * SCALE} y2={35} color="#fbbf24" label="F_loss" />
            
            {/* Neta y Acel */}
            <SvgArrow x1={70} y1={-10} x2={70 + Fn * SCALE} y2={-10} color="#4ade80" label={`F_net = ${fmt(Fn, 0)} N`} strokeWidth={3} />
            <text x={70} y={110} textAnchor="middle" fill="#ffffff" fontSize={14} fontWeight="900">a = {fmt(a, 2)} m/s²</text>
        </g>

        <text x={20} y={VB_H - 15} fontSize="11" fill="rgba(255,255,255,0.2)" fontWeight="900">
           PHYXIO REAL DYNAMICS — v5.31
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["F_ap", "F_loss", "m"],
    stateOut: ["F_net", "a"],
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cuánta fuerza queda realmente disponible para acelerar el sistema cuando parte de la fuerza aplicada se disipa por pérdidas mecánicas?",
      en: "How much force is actually available to accelerate the system when part of the applied force is dissipated by mechanical losses?",
    },
    magnitud_estrella: "F_net",
  },

  infoCards: [
    {
      key: "fuerza_neta",
      label: { es: "Fuerza neta", en: "Net force" },
      highlight: "F_net = F_ap − F_loss",
      highlightColor: "#4ade80",
      description: {
        es: "Solo la fracción no disipada de F_ap produce aceleración real.",
        en: "Only the non-dissipated fraction of F_ap produces real acceleration.",
      },
    },
    {
      key: "aceleracion_real",
      label: { es: "Aceleración real", en: "Real acceleration" },
      highlight: "a = F_net / m",
      highlightColor: "#60a5fa",
      description: {
        es: "Siempre menor que a_ideal = F_ap/m en un sistema real (η < 1).",
        en: "Always less than a_ideal = F_ap/m in a real system (η < 1).",
      },
    },
    {
      key: "eficiencia",
      label: { es: "Eficiencia mecánica", en: "Mechanical efficiency" },
      highlight: "η = P_out / P_in",
      highlightColor: "#fbbf24",
      description: {
        es: "Mide qué fracción de la potencia de entrada se convierte en trabajo útil.",
        en: "Measures what fraction of input power converts into useful work.",
      },
    },
  ],
};

export default sistemasRealesProfile;
