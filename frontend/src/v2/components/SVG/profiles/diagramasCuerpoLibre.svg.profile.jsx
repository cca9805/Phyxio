// frontend/src/v2/components/SVG/profiles/diagramasCuerpoLibre.svg.profile.jsx
//
// Profile SVG para: diagramas-cuerpo-libre (Nivel 5 Blindado v5.30)
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

/* ── PROFILE ─────────────────────────────────────────────────────────── */
const diagramasCuerpoLibreProfile = {

  meta: {
    id:     "svg-diagramas-cuerpo-libre",
    leafId: "diagramas-cuerpo-libre",
    title: {
      es: "Diagrama de Cuerpo Libre",
      en: "Free Body Diagram",
    },

  graph_identity: {
    id: "diagramas-cuerpo-libre-svg",
    es: "Diagrama de cuerpo libre",
    en: "Free-body diagram",
  },

  pregunta_principal: {
    es: "¿Qué fuerzas externas deben aparecer en el diagrama de cuerpo libre y cómo cambia su balance con el contexto físico?",
    en: "Which external forces must appear in the free-body diagram and how does their balance change with the physical context?",
  },

  magnitud_estrella: "Fext",

  infoCards: [
    {
      key: "forces_present",
      label: { es: "Fuerzas presentes", en: "Forces present" },
      lines: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const scene = merged.scene ?? "table";
        const linesEs = [
          "Peso P siempre aparece como interacción gravitatoria.",
          scene !== "free" ? "Normal N aparece si existe contacto con una superficie." : "No hay normal si el cuerpo está aislado en espacio libre.",
          Number(merged.fk ?? 0) > 0 ? "Rozamiento fk aparece porque existe contacto con deslizamiento." : "No aparece rozamiento si no hay contacto deslizante.",
          Number(merged.F ?? 0) > 0 ? "Fuerza aplicada F modifica el balance horizontal." : "No hay fuerza aplicada adicional.",
        ];
        const linesEn = [
          "Weight P always appears as the gravitational interaction.",
          scene !== "free" ? "Normal N appears when a supporting contact exists." : "No normal force exists if the body is isolated in free space.",
          Number(merged.fk ?? 0) > 0 ? "Friction fk appears because sliding contact exists." : "No friction appears if there is no sliding contact.",
          Number(merged.F ?? 0) > 0 ? "Applied force F modifies the horizontal balance." : "There is no additional applied force.",
        ];
        return lang === "en" ? linesEn : linesEs;
      },
    },
    {
      key: "balance",
      label: { es: "Balance físico", en: "Physical balance" },
      highlight: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const ax = Number(merged.ax ?? 0);
        if (Math.abs(ax) < 1e-6) {
          return lang === "en" ? "The net force is approximately zero." : "La fuerza neta es aproximadamente nula.";
        }
        return lang === "en"
          ? "A non-zero net force causes the acceleration."
          : "Una fuerza neta no nula causa la aceleración.";
      },
      result: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const ax = Number(merged.ax ?? 0);
        return lang === "en" ? `ax = ${ax.toFixed(2)} m/s²` : `ax = ${ax.toFixed(2)} m/s²`;
      },
      description: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const scene = merged.scene ?? "table";
        return lang === "en"
          ? `Scene: ${scene}. The free-body diagram is useful because each arrow represents a causal interaction with the environment.`
          : `Escena: ${scene}. El diagrama de cuerpo libre es útil porque cada flecha representa una interacción causal con el entorno.`;
      },
    },
  ],

    subtitle: {
      es: "Análisis vectorial de fuerzas en múltiples configuraciones",
      en: "Vector force analysis across multiple configurations",
    },
  },

  scene:     SVG_SCENE_TYPES.CUSTOM,
  viewBox:   "0 0 900 650",
  svgHeight: 720, 

  params: {
    schema: [
      {
        key:     "scene",
        aliases: ["escena", "background"],
        default: "table",
        label:   { es: "Escena", en: "Scene" },
        type:    SVG_CONTROL_TYPES.SELECT,
        options: [
          { value: "table",   label: { es: "Superficie de apoyo",  en: "Support surface" } },
          { value: "hanging", label: { es: "Cuerpo suspendido",     en: "Suspended body" } },
          { value: "free",    label: { es: "Espacio libre (DCL)",   en: "Free space (FBD)" } },
        ],
      },
      {
        key: "theta",
        aliases: ["angulo", "angle", "th"],
        default: 25,
        label: { es: "Inclinación θ (°)", en: "Incline θ (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 85,
        step: 1,
        decimals: 0,
      },
      {
        key: "m",
        aliases: ["masa", "mass"],
        default: 5,
        label: { es: "Masa m (kg)", en: "Mass m (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 50,
        step: 0.1,
        decimals: 1,
      },
      {
        key: "mu",
        aliases: ["friccion", "coef_roce"],
        default: 0.2,
        label: { es: "Coef. roce μ", en: "Friction coeff. μ" },
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1.2,
        step: 0.01,
        decimals: 2,
      },
      {
        key: "F",
        aliases: ["fuerza", "force"],
        default: 0,
        label: { es: "Fuerza aplicada F (N)", en: "Applied force F (N)" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 100,
        step: 1,
        decimals: 0,
      },
    ],
    derivations: {
      P: ({ m }) => safeNum(m, 5) * 9.8,
      N: ({ m, theta, scene }) => {
        if (scene === "hanging" || scene === "free") return 0;
        const rad = (safeNum(theta, 25) * Math.PI) / 180;
        return safeNum(m, 5) * 9.8 * Math.cos(rad);
      },
      Ppar: ({ m, theta }) => {
        const rad = (safeNum(theta, 25) * Math.PI) / 180;
        return safeNum(m, 5) * 9.8 * Math.sin(rad);
      },
      Pperp: ({ m, theta }) => {
        const rad = (safeNum(theta, 25) * Math.PI) / 180;
        return safeNum(m, 5) * 9.8 * Math.cos(rad);
      },
      fk: ({ m, theta, mu, scene }) => {
        if (scene === "hanging" || scene === "free") return 0;
        const rad = (safeNum(theta, 25) * Math.PI) / 180;
        return safeNum(mu, 0.2) * safeNum(m, 5) * 9.8 * Math.cos(rad);
      },
      ax: ({ m, theta, mu, F, scene }) => {
        if (scene === "hanging") return 0;
        const mm = safeNum(m, 5);
        if (mm <= 0) return 0;
        const rad = (safeNum(theta, 25) * Math.PI) / 180;
        const weightEffect = (scene === "table") ? mm * 9.8 * Math.sin(rad) : 0;
        const frictionEffect = (scene === "table") ? safeNum(mu, 0.2) * mm * 9.8 * Math.cos(rad) : 0;
        const net = safeNum(F, 0) - weightEffect - frictionEffect;
        return net / mm;
      },
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.STATIC,
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const merged = { ...p, ...state };
    
    // Valores numéricos reactivos
    const thDeg = toNum(merged.theta, 0);
    const scene = merged.scene ?? "table";
    
    // Magnitudes físicas (blindadas)
    const m = toNum(merged.m, 5);
    const P = toNum(state?.P ?? merged.P, m * 9.8);
    const N = toNum(state?.N ?? merged.N, 0);
    const fk = toNum(state?.fk ?? merged.fk, 0);
    const fs = toNum(state?.fs ?? merged.fs, 0);
    const F = toNum(state?.F ?? merged.F, 0);
    const ax = toNum(state?.ax ?? merged.ax, 0);

    const isEs = lang !== "en";
    const FORCE_SCALE = 1.8;
    const CX = 450, CY = 350;
    
    const rad = (thDeg * Math.PI) / 180;
    const isAcc = Math.abs(ax) > 0.01;

    const L_P = Math.min(P * FORCE_SCALE, 200);
    const L_N = Math.min(N * FORCE_SCALE, 200);
    const L_f = Math.min((fk || fs) * FORCE_SCALE, 200);
    const L_F = Math.min(F * FORCE_SCALE, 200);

    // Rotación universal para escenas de superficie
    const sceneRotation = (scene === "table") ? -thDeg : 0;

    return (
      <g>
        <defs>
          <linearGradient id="bgDCL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width={900} height={650} fill="url(#bgDCL)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        {/* ── ESCENA PRINCIPAL ───────────────────────────────────────── */}
        <g transform={`translate(${CX}, ${CY})`}>
          
          {/* Suelo (Solo en escena 'table', rotando si theta > 0) */}
          {scene === "table" && (
            <g transform={`rotate(${sceneRotation})`}>
              <SvgGround x1={-350} x2={350} y={40} color="#ffffff" />
            </g>
          )}

          {/* Elementos de suspensión */}
          {scene === "hanging" && (
            <g>
              <rect x={-60} y={-280} width={120} height={8} fill="#ffffff" opacity="0.2" />
              <line x1={0} y1={-272} x2={0} y2={-40} stroke="#ffffff" strokeWidth={1} strokeDasharray="4 2" opacity="0.4" />
            </g>
          )}

          {/* El Cuerpo / Bloque */}
          <g transform={`rotate(${sceneRotation})`}>
            {scene !== "free" ? (
              <rect x="-40" y="-40" width="80" height="80" rx="4" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeWidth={2} />
            ) : (
              <circle cx={0} cy={0} r={10} fill="#ffffff" />
            )}
            <text x="0" y={5} textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" opacity="0.8">m</text>

            {/* Normal: Siempre perpendicular (+y local) */}
            {N > 0.1 && (
              <SvgArrow x1={0} y1={-40} x2={0} y2={-40 - L_N} color="#4ade80" label={`N = ${fmt(N, 1)} N`} />
            )}

            {/* Rozamiento: En la superficie (-x local si ax > 0) */}
            {(fk > 0.1 || fs > 0.1) && (
              <SvgArrow x1={-40 * Math.sign(ax||1)} y1={38} x2={(-40-L_f)*Math.sign(ax||1)} y2={38} color="#fbbf24" label={`f = ${fmt(fk||fs, 1)} N`} />
            )}

            {/* Fuerza Aplicada: (+x local) */}
            {F > 0.1 && (
              <SvgArrow x1={40} y1={0} x2={40 + L_F} y2={0} color="#60a5fa" label={`F = ${fmt(F, 1)} N`} />
            )}

            {/* Peso: Siempre vertical (Contrarrotamos la rotación de escena) */}
            <g transform={`rotate(${-sceneRotation})`}>
              <SvgArrow x1={0} y1={0} x2={0} y2={L_P} color="#f87171" label={`P = ${fmt(P, 1)} N`} />
            </g>

            {/* Componentes del Peso en el sistema local del plano */}
            {scene === "table" && thDeg > 0 && (
              <>
                {/* Rectángulo de componentes punteado */}
                <line x1={0} y1={0} x2={-L_P*Math.sin(rad)} y2={0} stroke="#f87171" strokeDasharray="3 3" opacity="0.3" />
                <line x1={-L_P*Math.sin(rad)} y1={0} x2={-L_P*Math.sin(rad)} y2={L_P*Math.cos(rad)} stroke="#f87171" strokeDasharray="3 3" opacity="0.3" />
                
                {/* Pparallel y Pperp */}
                <SvgArrow x1={0} y1={0} x2={-L_P * Math.sin(rad)} y2={0} color="#f87171" label="P_||" opacity={0.4} strokeWidth={2} />
                <SvgArrow x1={0} y1={0} x2={0} y2={L_P * Math.cos(rad)} color="#f87171" label="P_⊥" opacity={0.4} strokeWidth={2} />
              </>
            )}

            {/* Aceleración Resultante */}
            {isAcc && (
              <SvgArrow x1={0} y1={-90} x2={ax > 0 ? 60 : -60} y2={-90} color="#22d3ee" label={`a = ${fmt(ax, 2)} m/s²`} isDerived />
            )}
          </g>
        </g>

        <text x={880} y={635} textAnchor="end" fontSize="10" fill="#ffffff" opacity="0.2" fontWeight="900" letterSpacing="1">
           HEPTAGONAL SYSTEM v5.30
        </text>
      </g>
    );
  },

  aside: {},
  interpretation_binding: {
    paramsIn: ["m", "g", "theta", "mu", "F"],
    stateOut: ["N", "fk", "P", "Ppar", "Pperp", "ax"],
  },
};

export default diagramasCuerpoLibreProfile;
