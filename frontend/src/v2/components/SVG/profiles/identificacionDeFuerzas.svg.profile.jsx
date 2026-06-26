// frontend/src/v2/components/SVG/profiles/identificacionDeFuerzas.svg.profile.jsx
//
// Profile SVG animado para: identificacion-de-fuerzas (v5.31 Deep Clean)
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
const deg2rad = (d) => (Math.PI * d) / 180;

/* ── Layout ──────────────────────────────────────────────────────────── */
const VB_W = 900, VB_H = 650;
const OX = 450, OY = 325;

/* ── PROFILE ─────────────────────────────────────────────────────────── */
const identificacionDeFuerzasProfile = {

  meta: {
    id:     "svg-identificacion-de-fuerzas",
    leafId: "identificacion-de-fuerzas",
    title: {
      es: "Identificación de Fuerzas",
      en: "Force Identification",
    },
    subtitle: {
      es: "Reconocimiento de interacciones físicas en diversos entornos",
      en: "Identification of physical interactions in various environments",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Qué fuerzas reales actúan sobre el sistema y cómo se determina cuál es su agente físico?",
      en: "What real forces act on the system and how is each one's physical agent determined?",
    },
    magnitud_estrella: "P",
  },

  infoCards: [
    { key: "P", label: { es: "Peso", en: "Weight" }, unit: "N" },
    { key: "N", label: { es: "Normal", en: "Normal" }, unit: "N" },
    { key: "f", label: { es: "Rozamiento", en: "Friction" }, unit: "N" },
  ],

  scene:     SVG_SCENE_TYPES.CUSTOM,
  viewBox:   `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key:     "scene",
        default: "table",
        label:   { es: "Escena", en: "Scene" },
        type:    SVG_CONTROL_TYPES.SELECT,
        options: [
          { value: "table",    label: { es: "Plano horizontal", en: "Horizontal plane" } },
          { value: "incline",  label: { es: "Plano inclinado",  en: "Inclined plane" } },
          { value: "elevator", label: { es: "Cabina (vínculos)", en: "Cabin (links)" } },
        ],
      },
      {
        key:     "m",
        default: 5,
        label:   { es: "Masa m (kg)", en: "Mass m (kg)" },
        unit:    "kg",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 100, step: 0.1, decimals: 1,
      },
      {
        key:     "theta",
        default: 25,
        label:   { es: "Ángulo θ (°)", en: "Angle θ (°)" },
        unit:    "°",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0, max: 60, step: 1, decimals: 0,
      },
      {
        key:     "mu",
        default: 0.2,
        label:   { es: "Fricción μ", en: "Friction μ" },
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0, max: 1, step: 0.01, decimals: 2,
      },
      {
        key:     "showFuerzas",
        default: true,
        label:   { es: "Ver vectores", en: "Show vectors" },
        type:    SVG_CONTROL_TYPES.TOGGLE,
      },
    ],
    derivations: {
        P: ({ m }) => safeNum(m, 5) * 9.8,
        N: ({ m, theta, scene }) => {
            if (scene === "elevator") return safeNum(m, 5) * (9.8 + 2.0); // Simulado
            const rad = deg2rad(safeNum(theta, 25));
            return safeNum(m, 5) * 9.8 * Math.cos(rad);
        },
        f: ({ m, theta, mu, scene }) => {
            if (scene === "elevator") return 0;
            const rad = deg2rad(safeNum(theta, 25));
            return safeNum(mu, 0.2) * safeNum(m, 5) * 9.8 * Math.cos(rad);
        }
    },
  },

  motion: {
    type:  SVG_MOTION_TYPES.STATIC,
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const merged = { ...p, ...state };
    const scene = merged.scene ?? "table";
    const thDeg = toNum(merged.theta, 25);
    const showF = merged.showFuerzas !== false;
    
    const m = toNum(merged.m, 5);
    const P = toNum(state?.P ?? merged.P, m * 9.8);
    const N = toNum(state?.N ?? merged.N, 0);
    const f = toNum(state?.f ?? merged.f, 0);

    const scale = 2.0;
    const rad = deg2rad(thDeg);
    const sceneRotation = (scene === "incline") ? -thDeg : 0;

    return (
      <g>
        <defs>
          <linearGradient id="bgIdent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgIdent)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        <g transform={`translate(${OX}, ${OY})`}>
          
          {/* Entorno */}
          {scene === "table" && <SvgGround x1={-350} x2={350} y={40} color="#ffffff" />}
          {scene === "incline" && (
            <g transform={`rotate(${sceneRotation})`}>
              <SvgGround x1={-350} x2={350} y={40} color="#ffffff" />
            </g>
          )}
          {scene === "elevator" && (
            <rect x="-100" y="-140" width="200" height="200" rx="10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
          )}

          {/* Cuerpo */}
          <g transform={`rotate(${sceneRotation})`}>
            <rect x="-40" y="-40" width="80" height="80" rx="12" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth={2} />
            <text x="0" y="5" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="900" opacity="0.7">m</text>

            {showF && (
              <>
                {/* Normal */}
                {N > 0.1 && <SvgArrow x1={0} y1={-40} x2={0} y2={-40 - N*scale} color="#4ade80" label={`N = ${fmt(N, 1)} N`} />}
                
                {/* Fricción */}
                {f > 0.1 && <SvgArrow x1={-40} y1={38} x2={-40 - f*scale} y2={38} color="#fbbf24" label={`f = ${fmt(f, 1)} N`} />}

                {/* Peso (Contrarrotado) */}
                <g transform={`rotate(${-sceneRotation})`}>
                    <SvgArrow x1={0} y1={0} x2={0} y2={P*scale} color="#f87171" label={`P = ${fmt(P, 1)} N`} />
                </g>
              </>
            )}
          </g>
        </g>

        <text x={VB_W - 20} y={VB_H - 15} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.2)" fontWeight="900">
           PHYXIO v5.31 — FORCE DEEP CLEAN
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["m", "theta", "mu"],
    stateOut: ["P", "N", "f"],
  },
};

export default identificacionDeFuerzasProfile;
