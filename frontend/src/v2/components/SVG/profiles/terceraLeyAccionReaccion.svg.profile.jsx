// frontend/src/v2/components/SVG/profiles/terceraLeyAccionReaccion.svg.profile.jsx
//
// Profile SVG para: tercera-ley-accion-reaccion (v5.31 Deep Clean)
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
const terceraLeyAccionReaccionProfile = {

  meta: {
    id:     "svg-tercera-ley-accion-reaccion",
    leafId: "tercera-ley-accion-reaccion",
    title: {
      es: "Tercera Ley de Newton",
      en: "Newton's Third Law",
    },
    subtitle: {
      es: "Análisis del par de interacción Acción-Reacción",
      en: "Analysis of the Action-Reaction interaction pair",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se relacionan las fuerzas que dos cuerpos se ejercen mutuamente en una interacción mecánica?",
      en: "How are the forces that two bodies exert on each other in a mechanical interaction related?",
    },
    magnitud_estrella: "FBA",
    magnitud_secundaria: "FAB",
    variable_control: "FAB",
    tipo_lectura: "cualitativa",
  },

  infoCards: [
    {
      key: "ley",
      label: { es: "Ley del par", en: "Pair law" },
      highlight: "F_BA = −F_AB",
      highlightColor: "#f87171",
      description: {
        es: "Las dos fuerzas tienen igual módulo, direcciones opuestas y actúan sobre cuerpos distintos.",
        en: "The two forces have equal magnitude, opposite directions, and act on different bodies.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `F_AB = ${(p?.FAB ?? 20).toFixed(1)} N`,
        `m_A = ${(p?.mA ?? 5).toFixed(1)} kg`,
        `m_B = ${(p?.mB ?? 5).toFixed(1)} kg`,
      ],
      result: ({ p, lang }) => {
        const FAB = p?.FAB ?? 20;
        return `F_BA = ${FAB.toFixed(1)} N`;
      },
      resultColor: "#4ade80",
    },
    {
      key: "idea",
      label: { es: "Idea física", en: "Physical idea" },
      bg: "rgba(248,113,113,0.10)",
      border: "rgba(248,113,113,0.18)",
      description: {
        es: "El par acción-reacción no se cancela porque actúa en cuerpos distintos. Las aceleraciones difieren por las masas, no por las fuerzas.",
        en: "The action-reaction pair does not cancel because it acts on different bodies. Accelerations differ due to masses, not forces.",
      },
    },
  ],

  scene:     SVG_SCENE_TYPES.CUSTOM,
  viewBox:   `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key:     "FAB",
        default: 20,
        label:   { es: "Fuerza de contacto (N)", en: "Contact force (N)" },
        unit:    "N",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0, max: 100, step: 1,
      },
      {
        key:     "mA",
        default: 5,
        label:   { es: "Masa bloque A (kg)", en: "Mass block A (kg)" },
        unit:    "kg",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 1, max: 20, step: 0.5,
      },
      {
        key:     "mB",
        default: 5,
        label:   { es: "Masa bloque B (kg)", en: "Mass block B (kg)" },
        unit:    "kg",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 1, max: 20, step: 0.5,
      },
    ],
    derivations: {
        a: ({ FAB, mB }) => safeNum(mB, 5) > 0 ? safeNum(FAB, 20) / safeNum(mB, 5) : 0,
        Fext: ({ FAB, mA, mB }) => safeNum(FAB, 20) * (safeNum(mA, 5) + safeNum(mB, 5)) / safeNum(mB, 5)
    },
  },

  motion: {
    type:  SVG_MOTION_TYPES.ANIMATED,
    tMax:  6,
    loop:  true,
    state: (t, p) => {
        const a = safeNum(p.a, 4);
        const mA = safeNum(p.mA, 5);
        const mB = safeNum(p.mB, 5);
        
        // Calculamos anchos para determinar el límite (el gap entre A y B es de 2px)
        const wA = 60 + mA * 2;
        const wB = 60 + mB * 2;
        const totalW = wA + 2 + wB;
        
        // Límite: VB_W (900) - inicial (150) - ancho total - margen de seguridad (10)
        const maxX = 900 - 150 - totalW - 10;
        
        const xVal = 0.5 * a * t * t * 10;
        return { x: Math.min(xVal, Math.max(0, maxX)) };
    }
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang !== "en";
    const merged = { ...p, ...state };
    const xPos = toNum(state?.x, 0);
    const FAB = toNum(merged.FAB, 20);
    const Fext = toNum(merged.Fext, 40);
    const mA = toNum(merged.mA, 5);
    const mB = toNum(merged.mB, 5);
    const a = toNum(merged.a, 4);

    const wA = 60 + mA * 2;
    const wB = 60 + mB * 2;
    const SCALE = 1.5;

    return (
      <g>
        <defs>
          <linearGradient id="bgThird" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgThird)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        <SvgGround x1={0} x2={900} y={FLOOR_Y} color="#ffffff" />

        <g transform={`translate(${150 + xPos}, ${410})`}>
            {/* Bloque A */}
            <rect x={0} y={-wA} width={wA} height={wA} rx={8} fill="rgba(99,102,241,0.1)" stroke="#6366f1" strokeWidth={2} />
            <text x={wA/2} y={-wA/2 + 5} textAnchor="middle" fill="#6366f1" fontSize={16} fontWeight="900">A</text>
            
            {/* Bloque B */}
            <rect x={wA + 2} y={-wB} width={wB} height={wB} rx={8} fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth={2} />
            <text x={wA + 2 + wB/2} y={-wB/2 + 5} textAnchor="middle" fill="#f59e0b" fontSize={16} fontWeight="900">B</text>

            <g transform="translate(0, -wA/2)">
                <SvgArrow x1={-Fext*SCALE} y1={0} x2={0} y2={0} color="#ffffff" label="F_ext" />
            </g>

            {/* Par Acción-Reacción */}
            <g transform={`translate(${wA + 1}, 0)`}>
                <SvgArrow x1={-30} y1={-20} x2={-30-FAB*SCALE} y2={-20} color="#f87171" label="F_BA" />
                <SvgArrow x1={30} y1={-20} x2={30+FAB*SCALE} y2={-20} color="#4ade80" label="F_AB" />
            </g>

            <text x={wA + wB/2} y={40} textAnchor="middle" fill="#ffffff" fontSize={14} fontWeight="900">a = {fmt(a, 2)} m/s²</text>
        </g>

        <text x={450} y={80} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight="900" opacity={0.8}>
            {isEs ? "F₁₂ = −F₂₁  (Mismod módulo, distinto cuerpo)" : "F₁₂ = −F₂₁  (Same magnitude, different body)"}
        </text>

        <text x={VB_W - 20} y={VB_H - 15} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.2)" fontWeight="900">
           PHYXIO NEWTON ENGINE — v5.31
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["FAB", "mA", "mB"],
    stateOut: ["a", "Fext"],
  },
};

export default terceraLeyAccionReaccionProfile;
