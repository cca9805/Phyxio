// frontend/src/v2/components/SVG/profiles/momentosTipicos.svg.profile.jsx
//
// Profile SVG para: momentos-tipicos (v5.32 Standard Rewrite)
//
import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";

/* ── Helpers Locales ────────────────────────────────────────────────── */
const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v || "").replace(",", "."));
  return isNaN(n) ? def : n;
};

/* ── Layout ──────────────────────────────────────────────────────────── */
const VB_W = 900, VB_H = 650;

/* ── Catálogo de geometrías ─────────────────────────────────────────── */
const BODIES = {
  punto:         { es: "Punto material",       en: "Point mass",            k: 1,      useR: true,  useL: false },
  aro:           { es: "Aro / Cilindro hueco",  en: "Hoop / Hollow cylinder", k: 1,      useR: true,  useL: false },
  disco:         { es: "Disco / Cilindro macizo",en: "Disk / Solid cylinder",  k: 0.5,    useR: true,  useL: false },
  esfera:        { es: "Esfera maciza",          en: "Solid sphere",           k: 2/5,    useR: true,  useL: false },
  esfera_hueca:  { es: "Esfera hueca",           en: "Hollow sphere",          k: 2/3,    useR: true,  useL: false },
  barra_centro:  { es: "Barra (eje centro)",     en: "Rod (center axis)",      k: 1/12,   useR: false, useL: true  },
  barra_extremo: { es: "Barra (eje extremo)",    en: "Rod (end axis)",         k: 1/3,    useR: false, useL: true  },
};

const computeI = (tipo, m, R, L) => {
  const body = BODIES[tipo];
  if (!body) return 0;
  const dim = body.useL ? L : R;
  return body.k * m * dim * dim;
};

/* ── PROFILE ─────────────────────────────────────────────────────────── */
const momentosTipicosProfile = {

  meta: {
    id: "svg-momentos-tipicos",
    leafId: "momentos-tipicos",
    title: {
      es: "Momentos Típicos de Inercia",
      en: "Standard Moments of Inertia",
    },
    subtitle: {
      es: "Catálogo interactivo de geometrías canónicas — I = k·m·d²",
      en: "Interactive catalog of canonical geometries — I = k·m·d²",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varían los momentos típicos de inercia entre las geometrías canónicas: disco, esfera y barra?",
      en: "How do the standard moments of inertia differ across canonical geometries: disk, sphere, and rod?",
    },
    magnitud_estrella: "I",
  },

  infoCards: [
    {
      key: "formula",
      label: { es: "Fórmula", en: "Formula" },
      lines: ({ lang }) => [
        lang === "en" ? "I = k · m · d²" : "I = k · m · d²",
        lang === "en" ? "d = R (circular) or L (rod)" : "d = R (circular) o L (barra)",
      ],
      result: ({ lang }) =>
        lang === "en"
          ? "k is the shape factor (0.4 – 1.0)"
          : "k es el factor de forma (0.4 – 1.0)",
      resultColor: "#4ade80",
    },
  ],

  scene:     SVG_SCENE_TYPES.CUSTOM,
  viewBox:   `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key:     "tipo",
        default: "disco",
        label:   { es: "Tipo de cuerpo", en: "Body type" },
        type:    SVG_CONTROL_TYPES.SELECT,
        options: Object.entries(BODIES).map(([value, b]) => ({
          value,
          label: { es: b.es, en: b.en },
        })),
      },
      {
        key:     "m",
        aliases: ["masa", "mass"],
        default: 2,
        label:   { es: "Masa m (kg)", en: "Mass m (kg)" },
        unit:    "kg",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 50, step: 0.1,
      },
      {
        key:     "R",
        aliases: ["radio", "r"],
        default: 1.2,
        label:   { es: "Radio R (m)", en: "Radius R (m)" },
        unit:    "m",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 4, step: 0.1,
      },
      {
        key:     "L",
        aliases: ["longitud", "l"],
        default: 2.4,
        label:   { es: "Longitud L (m)", en: "Length L (m)" },
        unit:    "m",
        type:    SVG_CONTROL_TYPES.RANGE,
        min: 0.1, max: 8, step: 0.1,
      },
    ],
    derivations: {
      I: ({ tipo, m, R, L }) => computeI(
        tipo ?? "disco",
        safeNum(m, 2),
        safeNum(R, 1.2),
        safeNum(L, 2.4)
      ),
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.STATIC,
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang !== "en";
    const merged = { ...p, ...state };

    const tipo = merged.tipo ?? "disco";
    const m = toNum(merged.m, 2);
    const R = toNum(merged.R, 1.2);
    const L = toNum(merged.L, 2.4);
    const I = toNum(merged.I, computeI(tipo, m, R, L));

    const body = BODIES[tipo] || BODIES.disco;
    const bodyLabel = isEs ? body.es : body.en;

    // Escalado visual
    const CX = 450, CY = 280;
    const rPx = Math.min(R * 55, 150);
    const lPx = Math.min(L * 55, 400);

    // Fórmula LaTeX simplificada para mostrar en SVG
    const kStr = body.k === 1 ? "" : body.k === 0.5 ? "½" : body.k === (2/5) ? "⅖" : body.k === (2/3) ? "⅔" : body.k === (1/12) ? "¹⁄₁₂" : body.k === (1/3) ? "⅓" : fmt(body.k, 3);
    const dimLabel = body.useL ? "L" : "R";
    const formulaStr = kStr ? `I = ${kStr}·m·${dimLabel}²` : `I = m·${dimLabel}²`;

    return (
      <g>
        <defs>
          <linearGradient id="bgTipicos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgTipicos)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect x="0" y="-12" width="75" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="37" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        {/* ── Título del cuerpo activo ───────────────────────────────── */}
        <text x={CX} y={60} textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="900" opacity="0.9">
          {bodyLabel}
        </text>

        {/* ── Visualización del cuerpo ───────────────────────────────── */}
        <g transform={`translate(${CX}, ${CY})`}>

          {/* Punto material */}
          {tipo === "punto" && (
            <g>
              <circle cx={0} cy={0} r={5} fill="#ffffff" />
              <line x1={0} y1={0} x2={rPx} y2={0} stroke="#60a5fa" strokeWidth="2" strokeDasharray="5 4" />
              <circle cx={rPx} cy={0} r={14} fill="rgba(96,165,250,0.3)" stroke="#60a5fa" strokeWidth="3" />
              <text x={rPx} y={5} textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="900">m</text>
              <text x={rPx/2} y={-10} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">R</text>
            </g>
          )}

          {/* Aro */}
          {tipo === "aro" && (
            <g>
              <circle cx={0} cy={0} r={rPx} fill="none" stroke="#60a5fa" strokeWidth="6" />
              <circle cx={0} cy={0} r={rPx - 6} fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.3" />
              <circle cx={0} cy={0} r={5} fill="#ffffff" opacity="0.8" />
              <line x1={0} y1={0} x2={rPx} y2={0} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={rPx/2} y={-8} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">R</text>
              {/* Eje de rotación */}
              <line x1={0} y1={-rPx - 30} x2={0} y2={rPx + 30} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 4" />
            </g>
          )}

          {/* Disco */}
          {tipo === "disco" && (
            <g>
              <circle cx={0} cy={0} r={rPx} fill="rgba(74,222,128,0.15)" stroke="#4ade80" strokeWidth="4" />
              <circle cx={0} cy={0} r={5} fill="#ffffff" opacity="0.8" />
              <line x1={0} y1={0} x2={rPx} y2={0} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={rPx/2} y={-8} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">R</text>
              <line x1={0} y1={-rPx - 30} x2={0} y2={rPx + 30} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 4" />
            </g>
          )}

          {/* Esfera maciza */}
          {tipo === "esfera" && (
            <g>
              <circle cx={0} cy={0} r={rPx} fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="4" />
              <ellipse cx={0} cy={0} rx={rPx} ry={rPx * 0.35} fill="none" stroke="#f87171" strokeWidth="1.5" opacity="0.4" />
              <circle cx={0} cy={0} r={5} fill="#ffffff" opacity="0.8" />
              <line x1={0} y1={0} x2={rPx} y2={0} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={rPx/2} y={-8} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">R</text>
            </g>
          )}

          {/* Esfera hueca */}
          {tipo === "esfera_hueca" && (
            <g>
              <circle cx={0} cy={0} r={rPx} fill="none" stroke="#c084fc" strokeWidth="5" />
              <ellipse cx={0} cy={0} rx={rPx} ry={rPx * 0.35} fill="none" stroke="#c084fc" strokeWidth="1.5" opacity="0.4" />
              <circle cx={0} cy={0} r={5} fill="#ffffff" opacity="0.8" />
              <line x1={0} y1={0} x2={rPx} y2={0} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={rPx/2} y={-8} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">R</text>
            </g>
          )}

          {/* Barra (eje centro) */}
          {tipo === "barra_centro" && (
            <g>
              <line x1={-lPx/2} y1={0} x2={lPx/2} y2={0} stroke="#fbbf24" strokeWidth="12" strokeLinecap="round" />
              <line x1={0} y1={-120} x2={0} y2={120} stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
              <circle cx={0} cy={0} r={6} fill="#f59e0b" />
              <text x={0} y={-130} textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="900">{isEs ? "EJE" : "AXIS"}</text>
              <text x={lPx/4} y={-16} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">L/2</text>
            </g>
          )}

          {/* Barra (eje extremo) */}
          {tipo === "barra_extremo" && (
            <g>
              <line x1={0} y1={0} x2={lPx} y2={0} stroke="#fb923c" strokeWidth="12" strokeLinecap="round" />
              <line x1={0} y1={-120} x2={0} y2={120} stroke="#f97316" strokeWidth="3" strokeDasharray="6 4" />
              <circle cx={0} cy={0} r={6} fill="#f97316" />
              <text x={0} y={-130} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="900">EJE</text>
              <text x={lPx/2} y={-16} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">L</text>
            </g>
          )}

        </g>

        {/* ── Fórmula y resultado ────────────────────────────────────── */}
        <g transform={`translate(${CX}, ${CY + (body.useL ? 160 : rPx + 60)})`}>
          <text x={0} y={0} textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="900" opacity="0.85">
            {formulaStr}
          </text>
          <text x={0} y={30} textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="900">
            I = {fmt(I, 4)} kg·m²
          </text>
        </g>

        {/* ── Referencia de factores de forma ────────────────────────── */}
        <g transform="translate(50, 530)">
          <text x={0} y={0} fill="#ffffff" fontSize="11" fontWeight="900" opacity="0.4" letterSpacing="1">
            {isEs ? "FACTORES DE FORMA (k)" : "SHAPE FACTORS (k)"}
          </text>
          {Object.entries(BODIES).map(([key, b], i) => {
            const isActive = key === tipo;
            const col = i < 4 ? 0 : 400;
            const row = (i % 4) * 22;
            return (
              <text
                key={key}
                x={col}
                y={22 + row}
                fill={isActive ? "#f59e0b" : "#ffffff"}
                fontSize="11"
                fontWeight={isActive ? "900" : "400"}
                opacity={isActive ? 1 : 0.35}
              >
                {isEs ? b.es : b.en}: k = {fmt(b.k, 4)}
              </text>
            );
          })}
        </g>

        <text x={VB_W - 20} y={VB_H - 15} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.2)" fontWeight="900">
           PHYXIO INERTIA CATALOG — v5.32
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["tipo", "m", "R", "L"],
    stateOut: ["I"],
  },
};

export default momentosTipicosProfile;
