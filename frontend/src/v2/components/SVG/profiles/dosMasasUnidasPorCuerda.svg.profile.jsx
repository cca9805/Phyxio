// frontend/src/v2/components/SVG/profiles/dosMasasUnidasPorCuerda.svg.profile.jsx
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
const PULLEY_X = 450, PULLEY_Y = 120, PULLEY_R = 40;

const dosMasasUnidasPorCuerdaProfile = {
  meta: {
    id: "svg-dos-masas-unidas-por-cuerda",
    leafId: "dos-masas-unidas-por-cuerda",
    title: { es: "Máquina de Atwood", en: "Atwood Machine" },
    subtitle: { es: "Dos masas conectadas por polea", en: "Two masses connected by a pulley" },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "m1",
        aliases: ["masa1"],
        default: 2,
        label: { es: "Masa 1", en: "Mass 1" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 20, step: 0.1,
      },
      {
        key: "m2",
        aliases: ["masa2"],
        default: 5,
        label: { es: "Masa 2", en: "Mass 2" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 20, step: 0.1,
      },
      {
        key: "g",
        aliases: ["gravedad"],
        default: 9.8,
        label: { es: "Gravedad", en: "Gravity" },
        unit: "m/s²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1, max: 25, step: 0.1,
      },
    ],
    derivations: {
      a: ({ m1, m2, g }) => {
        const M1 = safeNum(m1, 2);
        const M2 = safeNum(m2, 5);
        const G = safeNum(g, 9.8);
        return ((M2 - M1) * G) / (M1 + M2);
      },
      T: ({ m1, m2, g }) => {
        const M1 = safeNum(m1, 2);
        const M2 = safeNum(m2, 5);
        const G = safeNum(g, 9.8);
        return (2 * M1 * M2 * G) / (M1 + M2);
      }
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const a = safeNum(p.a, 0);
      return { yPos: 0.5 * a * t * t * 8 }; 
    }
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang === "es";
    const merged = { ...p, ...state };
    
    let a = toNum(merged.a, 0);
    const m1 = toNum(merged.m1, 2);
    const m2 = toNum(merged.m2, 5);
    const T = toNum(merged.T, 0);
    const yPos = toNum(merged.yPos, 0);

    const w1 = 40 + m1 * 2;
    const w2 = 40 + m2 * 2;

    const baseL1 = 150; 
    const baseL2 = 150; 

    const maxDisp = 200;
    const disp = Math.max(-maxDisp, Math.min(yPos, maxDisp));

    const block1Y = PULLEY_Y + baseL1 - disp;
    const block2Y = PULLEY_Y + baseL2 + disp;

    return (
      <g>
        <defs>
          <linearGradient id="bgAtwood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgAtwood)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37.5" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        {/* Cuerdas */}
        <line x1={PULLEY_X - PULLEY_R} y1={PULLEY_Y} x2={PULLEY_X - PULLEY_R} y2={block1Y} stroke="#94a3b8" strokeWidth={3} />
        <line x1={PULLEY_X + PULLEY_R} y1={PULLEY_Y} x2={PULLEY_X + PULLEY_R} y2={block2Y} stroke="#94a3b8" strokeWidth={3} />

        {/* Techo */}
        <rect x={PULLEY_X - 60} y={0} width={120} height={20} fill="#64748b" />
        <line x1={PULLEY_X} y1={20} x2={PULLEY_X} y2={PULLEY_Y} stroke="#cbd5e1" strokeWidth={5} />

        {/* Polea */}
        <circle cx={PULLEY_X} cy={PULLEY_Y} r={PULLEY_R} fill="#475569" stroke="#94a3b8" strokeWidth={4} />
        <circle cx={PULLEY_X} cy={PULLEY_Y} r={8} fill="#cbd5e1" />

        {/* Block 1 */}
        <g transform={`translate(${PULLEY_X - PULLEY_R}, ${block1Y})`}>
          <rect x={-w1/2} y={0} width={w1} height={w1} rx={4} fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth={2} />
          <text x={0} y={w1/2 + 5} textAnchor="middle" fill="#818cf8" fontSize={16} fontWeight="bold">m₁</text>
          
          <SvgArrow x1={0} y1={0} x2={0} y2={-50} color="#fcd34d" label={`T = ${fmt(T, 1)} N`} />
          <SvgArrow x1={0} y1={w1} x2={0} y2={w1 + 50} color="#ef4444" label={`W₁`} />
        </g>

        {/* Block 2 */}
        <g transform={`translate(${PULLEY_X + PULLEY_R}, ${block2Y})`}>
          <rect x={-w2/2} y={0} width={w2} height={w2} rx={4} fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth={2} />
          <text x={0} y={w2/2 + 5} textAnchor="middle" fill="#fbbf24" fontSize={16} fontWeight="bold">m₂</text>

          <SvgArrow x1={0} y1={0} x2={0} y2={-50} color="#fcd34d" label={`T = ${fmt(T, 1)} N`} />
          <SvgArrow x1={0} y1={w2} x2={0} y2={w2 + 50} color="#ef4444" label={`W₂`} />
        </g>

        {/* Text info */}
        <g transform={`translate(50, 80)`}>
          <text x={0} y={0} fill="#ffffff" fontSize={20} fontWeight="bold" opacity={0.9}>
            a = {fmt(Math.abs(a), 3)} m/s²
          </text>
          <text x={0} y={30} fill="#94a3b8" fontSize={16}>
            {isEs ? (a > 0 ? "m₂ baja, m₁ sube" : a < 0 ? "m₁ baja, m₂ sube" : "Equilibrio") : (a > 0 ? "m₂ falls, m₁ rises" : a < 0 ? "m₁ falls, m₂ rises" : "Equilibrium")}
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
      es: "Como determinan m1 y m2 la aceleracion a y la tension T del sistema acoplado?",
      en: "How do m1 and m2 determine the acceleration a and tension T of the coupled system?",
    },
    magnitud_estrella: "a",
  },

  infoCards: [
    {
      key: "aceleracion",
      label: { es: "Aceleración", en: "Acceleration" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `a = (m2 - m1) g / (m1 + m2)` : `a = (m2 - m1) g / (m1 + m2)`,
          isEs ? `Si m2 > m1, m2 baja y m1 sube` : `If m2 > m1, m2 falls and m1 rises`,
        ];
      },
      result: ({ p, lang }) => {
        const m1 = parseFloat(p.m1) || 2;
        const m2 = parseFloat(p.m2) || 5;
        const g = parseFloat(p.g) || 9.8;
        const a = ((m2 - m1) * g) / (m1 + m2);
        return `a = ${Math.abs(a).toFixed(3)} m/s²`;
      },
      resultColor: "#34d399",
    },
    {
      key: "tension",
      label: { es: "Tensión", en: "Tension" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        return [
          isEs ? `T = 2 m1 m2 g / (m1 + m2)` : `T = 2 m1 m2 g / (m1 + m2)`,
          isEs ? `Igual en ambos lados de la cuerda` : `Equal on both sides of the rope`,
        ];
      },
      result: ({ p, lang }) => {
        const m1 = parseFloat(p.m1) || 2;
        const m2 = parseFloat(p.m2) || 5;
        const g = parseFloat(p.g) || 9.8;
        const T = (2 * m1 * m2 * g) / (m1 + m2);
        return `T = ${T.toFixed(1)} N`;
      },
      resultColor: "#fcd34d",
    },
  ],

  interpretation_binding: {
    paramsIn: ["m1", "m2", "g"],
    stateOut: ["a", "T"],
  },
};

export default dosMasasUnidasPorCuerdaProfile;
