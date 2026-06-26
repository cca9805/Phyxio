// frontend/src/v2/components/SVG/profiles/mapaConceptualDeRotacion.svg.profile.jsx
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

const VB_W = 900;
const VB_H = 650;
const CX = 500;

const fmtInt = (n) => Math.round(safeNum(n, 0));

const mapaConceptualDeRotacionProfile = {
  meta: {
    id: "svg-mapa-conceptual-de-rotacion",
    leafId: "mapa-conceptual-de-rotacion",
    title: {
      es: "Mapa conceptual de rotación",
      en: "Rotational Concept Map",
    },
    subtitle: {
      es: "Integración de conceptos fundamentales",
      en: "Integration of fundamental concepts",
    },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "tau",
        aliases: ["torque"],
        default: 10,
        label: { es: "Torque τ", en: "Torque τ" },
        unit: "N·m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 50,
        step: 1,
      },
      {
        key: "I",
        aliases: ["inercia"],
        default: 5,
        label: { es: "Inercia I", en: "Inertia I" },
        unit: "kg·m²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 20,
        step: 0.5,
      },
    ],
    derivations: {
      alpha: ({ tau, I }) => safeNum(tau, 10) / safeNum(I, 5),
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 10,
    loop: true,
    state: (t, p) => {
      const alpha = safeNum(p.tau, 10) / safeNum(p.I, 5);
      // Simulación simple de velocidad angular acumulada
      const omega = alpha * (t % 10);
      const wheelRot = (0.5 * alpha * Math.pow(t % 10, 2) * 50) % 360;

      return {
        wheelRot,
        omega,
        alpha
      };
    },
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang === "es";
    const merged = { ...p, ...state };

    const wheelRot = toNum(merged.wheelRot, 0);
    const tau = toNum(merged.tau, 10);
    const I = toNum(merged.I, 5);
    const alpha = toNum(merged.alpha, 2);
    const omega = toNum(merged.omega, 0);

    const wheelR = 60;
    const centerLineY = 300;

    return (
      <g>
        <defs>
          <linearGradient id="bgMapaRot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgMapaRot)" />

        <g transform="translate(50, 50)">
          <rect x="0" y="0" width="350" height="200" rx="20" fill="rgba(30,41,59,0.8)" stroke="#38bdf8" strokeWidth="2" />
          <text x="20" y="40" fill="#38bdf8" fontSize="24" fontWeight="900">
            {isEs ? "Mecánica de Rotación" : "Rotational Mechanics"}
          </text>
          <text x="20" y="80" fill="#f1f5f9" fontSize="16">
            {isEs ? `Torque aplicado (τ): ${fmt(tau, 1)} N·m` : `Applied Torque (τ): ${fmt(tau, 1)} N·m`}
          </text>
          <text x="20" y="110" fill="#f1f5f9" fontSize="16">
            {isEs ? `Inercia del sistema (I): ${fmt(I, 1)} kg·m²` : `System Inertia (I): ${fmt(I, 1)} kg·m²`}
          </text>
          <text x="20" y="150" fill="#fbbf24" fontSize="18" fontWeight="700">
            {isEs ? `Aceleración (α = τ/I): ${fmt(alpha, 2)} rad/s²` : `Acceleration (α = τ/I): ${fmt(alpha, 2)} rad/s²`}
          </text>
          <text x="20" y="180" fill="#34d399" fontSize="18" fontWeight="700">
            {isEs ? `Velocidad (ω): ${fmt(omega, 2)} rad/s` : `Velocity (ω): ${fmt(omega, 2)} rad/s`}
          </text>
        </g>

        {/* Eje y rueda */}
        <line x1={CX - 200} y1={centerLineY} x2={CX + 200} y2={centerLineY} stroke="#475569" strokeWidth="4" strokeDasharray="10 5" />
        
        <g transform={`rotate(${wheelRot} ${CX} ${centerLineY})`}>
          <circle cx={CX} cy={centerLineY} r={wheelR} fill="none" stroke="#38bdf8" strokeWidth="8" />
          <circle cx={CX} cy={centerLineY} r={wheelR - 15} fill="none" stroke="#1e293b" strokeWidth="2" />
          {/* Radios */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map(ang => (
            <line 
              key={ang}
              x1={CX} y1={centerLineY} 
              x2={CX + Math.cos(ang * Math.PI / 180) * wheelR} 
              y2={centerLineY + Math.sin(ang * Math.PI / 180) * wheelR} 
              stroke="#38bdf8" strokeWidth="4" 
            />
          ))}
          <circle cx={CX} cy={centerLineY} r="8" fill="#f1f5f9" />
        </g>

        <SvgArrow 
          x1={CX} y1={centerLineY - 100}
          x2={CX + 80} y2={centerLineY - 100}
          color="#fbbf24"
          label={isEs ? "Torque τ" : "Torque τ"}
        />

        <text x={VB_W - 20} y={VB_H - 20} textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="12">
          Phyxio Concept Map Visualizer
        </text>
      </g>
    );
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se integra la cinemática y dinámica en la rotación?",
      en: "How are kinematics and dynamics integrated in rotation?",
    },
    magnitud_estrella: "velocidad-angular",
  },

  infoCards: [
    {
      key: "dinamica",
      label: { es: "Dinámica", en: "Dynamics" },
      lines: ({ p, lang }) => [
        lang === "es" ? "τ = I · α" : "τ = I · α",
        lang === "es" ? "Causa del cambio" : "Cause of change"
      ],
      result: ({ p }) => `α = ${(safeNum(p.tau, 10) / safeNum(p.I, 5)).toFixed(2)} rad/s²`,
      resultColor: "#fbbf24",
    },
    {
      key: "cinematica",
      label: { es: "Cinemática", en: "Kinematics" },
      lines: ({ p, lang }) => [
        lang === "es" ? "ω = α · t" : "ω = α · t",
        lang === "es" ? "Efecto del torque" : "Effect of torque"
      ],
      result: ({ p }) => `ω varía con t`,
      resultColor: "#34d399",
    }
  ],

  interpretation_binding: {
    paramsIn: ["tau", "I"],
    stateOut: ["alpha", "omega"],
  },
};

export default mapaConceptualDeRotacionProfile;
