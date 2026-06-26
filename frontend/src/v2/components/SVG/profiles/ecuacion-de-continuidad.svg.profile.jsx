// frontend/src/v2/components/SVG/profiles/ecuacion-de-continuidad.svg.profile.jsx
//
// Profile SVG para: ecuacion-de-continuidad (Nivel 5 v5)
// Escena: tubo convergente con flechas de velocidad proporcionales
// y panel de lectura numérica instantánea.
//
import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "../svgGrammar";

/* ── Helpers locales ─────────────────────────────────────────────────── */
const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const tt = (lang, es, en) => (lang === "en" ? en : es);

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

/* ════════════════════════════════════════════════════════════════════════
 * PROFILE
 * ════════════════════════════════════════════════════════════════════════ */
const profile = {
  meta: {
    id: "svg-ecuacion-de-continuidad",
    leafId: "ecuacion-de-continuidad",
    title: {
      es: "Ecuación de Continuidad",
      en: "Continuity Equation",
    },
    subtitle: {
      es: "Tubo convergente: Q = A₁v₁ = A₂v₂",
      en: "Converging pipe: Q = A₁v₁ = A₂v₂",
    },
    graph_identity: true,
    pregunta_principal: {
      es: "¿Cómo se relacionan caudal, velocidad y área en un tubo incompresible?",
      en: "How are flow rate, velocity, and area related in an incompressible pipe?"
    },
    magnitud_estrella: "Q",
    magnitud_visual: {
      "Q": "Panel superior y ancho general",
      "v": "Flechas de velocidad",
      "A": "Sección del tubo convergente"
    }
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  interpretation_binding: {
    enabled: true
  },
  viewBox: "0 0 860 460",
  svgHeight: 520,

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  /* ── Parámetros del simulador ─────────────────────────────────────── */
  params: {
    schema: [
      {
        key: "Q",
        aliases: ["caudal", "flow_rate", "q"],
        default: 0.008,
        label: { es: "Caudal Q (m³/s)", en: "Flow rate Q (m³/s)" },
        unit: "m³/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.0005,
        max: 0.1,
        step: 0.0005,
        decimals: 4,
      },
      {
        key: "A1",
        aliases: ["A1", "a1", "area_entrada"],
        default: 0.00785,
        label: { es: "A₁ entrada (m²)", en: "Inlet A₁ (m²)" },
        unit: "m²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.0001,
        max: 0.05,
        step: 0.0001,
        decimals: 5,
      },
      {
        key: "A2",
        aliases: ["A2", "a2", "area_salida"],
        default: 0.00196,
        label: { es: "A₂ salida (m²)", en: "Outlet A₂ (m²)" },
        unit: "m²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.00005,
        max: 0.05,
        step: 0.00005,
        decimals: 5,
      },
    ],
    derivations: {
      v1: ({ Q, A1 }) =>
        safeNum(Q, 0.008) / Math.max(safeNum(A1, 0.00785), 1e-9),
      v2: ({ Q, A2 }) =>
        safeNum(Q, 0.008) / Math.max(safeNum(A2, 0.00196), 1e-9),
    },
  },

  /* ── Tarjetas de información ─────────────────────────────────────── */
  infoCards: [
    {
      key: "velocidades",
      label: { es: "Velocidades", en: "Velocities" },
      lines: ({ p, lang }) => {
        const Q  = safeNum(p?.Q,  0.008);
        const A1 = Math.max(safeNum(p?.A1, 0.00785), 1e-9);
        const A2 = Math.max(safeNum(p?.A2, 0.00196), 1e-9);
        const v1 = Q / A1;
        const v2 = Q / A2;
        return [
          `v₁ = ${fmt(v1, 2, lang)} m/s`,
          `v₂ = ${fmt(v2, 2, lang)} m/s`,
          `v₂/v₁ = ${fmt(v2 / Math.max(v1, 1e-9), 2, lang)}×`,
        ];
      },
      result: ({ p, lang }) => {
        const Q  = safeNum(p?.Q,  0.008);
        const A2 = Math.max(safeNum(p?.A2, 0.00196), 1e-9);
        return `v₂ = ${fmt(Q / A2, 2, lang)} m/s`;
      },
      resultColor: "#818cf8",
    },
    {
      key: "caudal",
      label: { es: "Caudal conservado", en: "Conserved flow rate" },
      lines: ({ p, lang }) => {
        const Q = safeNum(p?.Q, 0.008);
        return [
          `Q = ${fmt(Q * 1000, 2, lang)} L/s`,
          `Q = ${fmt(Q, 5, lang)} m³/s`,
        ];
      },
      result: ({ p, lang }) => {
        const Q = safeNum(p?.Q, 0.008);
        return `Q = ${fmt(Q * 1000, 2, lang)} L/s`;
      },
      resultColor: "#34d399",
    },
  ],

  /* ── Render SVG ───────────────────────────────────────────────────── */
  render({ params: rawParams = {}, lang = "es", toNum: toNumCtx, fmt: fmtCtx }) {
    const p = rawParams;

    const Q  = clamp(safeNum(p?.Q,  0.008),   0.0005, 0.1);
    const A1 = clamp(safeNum(p?.A1, 0.00785), 0.0001, 0.05);
    const A2 = clamp(safeNum(p?.A2, 0.00196), 0.00005, 0.05);

    const v1 = Q / Math.max(A1, 1e-9);
    const v2 = Q / Math.max(A2, 1e-9);

    const decSep = lang === "en" ? "." : ",";
    const fL = (n, d = 2) =>
      Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-";

    const W = 860;
    const H = 460;

    // ── Tubo convergente ─────────────────────────────────────────────
    // Sección izquierda: anchura 2×h1; sección derecha: anchura 2×h2
    const tubeLeft  = 80;
    const tubeRight = W - 80;
    const tubeCY    = H / 2 + 10;
    const tubeLen   = tubeRight - tubeLeft;

    // Alturas del tubo (media-mitad)
    const h1 = clamp(60 + (A1 / 0.05) * 80, 30, 140);
    const h2 = clamp(10 + (A2 / 0.05) * 90, 10, h1);

    // Puntos de convergencia: 35% y 65% de la longitud
    const xConvStart = tubeLeft + tubeLen * 0.35;
    const xConvEnd   = tubeLeft + tubeLen * 0.65;

    // Paredes superior e inferior del tubo
    const topPath = [
      `M ${tubeLeft}       ${tubeCY - h1}`,
      `L ${xConvStart}     ${tubeCY - h1}`,
      `L ${xConvEnd}       ${tubeCY - h2}`,
      `L ${tubeRight}      ${tubeCY - h2}`,
    ].join(" ");

    const botPath = [
      `M ${tubeLeft}       ${tubeCY + h1}`,
      `L ${xConvStart}     ${tubeCY + h1}`,
      `L ${xConvEnd}       ${tubeCY + h2}`,
      `L ${tubeRight}      ${tubeCY + h2}`,
    ].join(" ");

    // ── Flechas de velocidad ──────────────────────────────────────────
    // v1: en la sección de entrada, v2: en la sección de salida
    const vMax = Math.max(v1, v2, 0.5);
    const arrowBase = 140;
    const arr1 = clamp((v1 / vMax) * arrowBase, 8, arrowBase);
    const arr2 = clamp((v2 / vMax) * arrowBase, 8, arrowBase);

    // Flechas entrada (3 filas: centro ± 50%)
    const arrowsIn  = [0, 0.45, -0.45];
    const arrowsOut = [0, 0.55, -0.55];

    const xIn  = tubeLeft + tubeLen * 0.13;
    const xOut = tubeLeft + tubeLen * 0.80;

    // ── Etiquetas de área ─────────────────────────────────────────────
    const xLabelA1 = tubeLeft + tubeLen * 0.18;
    const xLabelA2 = tubeLeft + tubeLen * 0.80;

    // ── Colores ───────────────────────────────────────────────────────
    const colorWall   = "#3b82f6";
    const colorFluid  = "rgba(59,130,246,0.10)";
    const colorArrow1 = "#34d399";
    const colorArrow2 = "#818cf8";
    const colorText   = "#e2e8f0";
    const colorMuted  = "rgba(226,232,240,0.6)";

    /** Mini-flecha con cabeza triangular */
    function Arrow({ x, y, len, color, label }) {
      const hx = x + len;
      const hs = 8;
      return (
        <g>
          <line x1={x} y1={y} x2={hx} y2={y} stroke={color} strokeWidth={2.5} />
          <polygon
            points={`${hx},${y} ${hx - hs},${y - hs * 0.55} ${hx - hs},${y + hs * 0.55}`}
            fill={color}
          />
          {label ? (
            <text x={hx + 4} y={y + 4} fill={color} fontSize="11" fontWeight="900">
              {label}
            </text>
          ) : null}
        </g>
      );
    }

    return (
      <g>
        <defs>
          <linearGradient id="contBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#071520" />
            <stop offset="100%" stopColor="#0e2a40" />
          </linearGradient>
          <linearGradient id="contFluid" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        {/* Fondo */}
        <rect x="0" y="0" width={W} height={H} fill="url(#contBg)" />

        {/* Relleno del fluido interior */}
        <path
          d={[
            `M ${tubeLeft}       ${tubeCY - h1}`,
            `L ${xConvStart}     ${tubeCY - h1}`,
            `L ${xConvEnd}       ${tubeCY - h2}`,
            `L ${tubeRight}      ${tubeCY - h2}`,
            `L ${tubeRight}      ${tubeCY + h2}`,
            `L ${xConvEnd}       ${tubeCY + h2}`,
            `L ${xConvStart}     ${tubeCY + h1}`,
            `L ${tubeLeft}       ${tubeCY + h1}`,
            "Z",
          ].join(" ")}
          fill="url(#contFluid)"
        />

        {/* Paredes del tubo */}
        <path d={topPath} fill="none" stroke={colorWall} strokeWidth={3.5} strokeLinejoin="round" />
        <path d={botPath} fill="none" stroke={colorWall} strokeWidth={3.5} strokeLinejoin="round" />

        {/* Tapas verticales (entrada y salida) */}
        <line
          x1={tubeLeft} y1={tubeCY - h1}
          x2={tubeLeft} y2={tubeCY + h1}
          stroke={colorWall} strokeWidth={2.5} strokeDasharray="5 4"
        />
        <line
          x1={tubeRight} y1={tubeCY - h2}
          x2={tubeRight} y2={tubeCY + h2}
          stroke={colorWall} strokeWidth={2.5} strokeDasharray="5 4"
        />

        {/* Línea central de simetría */}
        <line
          x1={tubeLeft - 10} y1={tubeCY}
          x2={tubeRight + 10} y2={tubeCY}
          stroke="rgba(255,255,255,0.12)" strokeWidth={1} strokeDasharray="8 5"
        />

        {/* Flechas de velocidad — entrada */}
        {arrowsIn.map((frac, i) => (
          <Arrow
            key={`in-${i}`}
            x={xIn - arr1 / 2}
            y={tubeCY + frac * h1 * 0.55}
            len={arr1}
            color={colorArrow1}
          />
        ))}

        {/* Flechas de velocidad — salida */}
        {arrowsOut.map((frac, i) => (
          <Arrow
            key={`out-${i}`}
            x={xOut - arr2 / 2}
            y={tubeCY + frac * h2 * 0.55}
            len={arr2}
            color={colorArrow2}
          />
        ))}

        {/* Etiqueta v₁ */}
        <text
          x={xIn + arr1 / 2 + 10}
          y={tubeCY - h1 * 0.45}
          fill={colorArrow1}
          fontSize="14"
          fontWeight="900"
        >
          v₁ = {fL(v1, 2)} m/s
        </text>

        {/* Etiqueta v₂ */}
        <text
          x={xOut + arr2 / 2 + 8}
          y={tubeCY - h2 * 0.45}
          fill={colorArrow2}
          fontSize="14"
          fontWeight="900"
        >
          v₂ = {fL(v2, 2)} m/s
        </text>

        {/* Etiqueta A₁ */}
        <text
          x={xLabelA1}
          y={tubeCY + h1 + 22}
          fill={colorMuted}
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
        >
          A₁ = {fL(A1 * 10000, 1)} cm²
        </text>

        {/* Etiqueta A₂ */}
        <text
          x={xLabelA2}
          y={tubeCY + h2 + 22}
          fill={colorMuted}
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
        >
          A₂ = {fL(A2 * 10000, 1)} cm²
        </text>

        {/* Panel de resultados — esquina superior derecha */}
        <rect
          x={W - 215} y={18}
          width={200} height={110}
          rx="8"
          fill="rgba(0,0,0,0.55)"
          stroke="rgba(99,102,241,0.35)"
          strokeWidth="1"
        />
        <text x={W - 204} y={38} fill={colorText} fontSize="11" fontWeight="900" letterSpacing="1">
          {tt(lang, "CONSERVACIÓN", "CONSERVATION")}
        </text>
        <text x={W - 204} y={58} fill="#34d399" fontSize="13" fontWeight="900">
          Q = {fL(Q * 1000, 2)} L/s
        </text>
        <text x={W - 204} y={76} fill={colorMuted} fontSize="12" fontWeight="600">
          A₁v₁ = {fL(A1 * v1 * 1000, 2)} L/s
        </text>
        <text x={W - 204} y={94} fill={colorMuted} fontSize="12" fontWeight="600">
          A₂v₂ = {fL(A2 * v2 * 1000, 2)} L/s
        </text>
        <text x={W - 204} y={116} fill="#facc15" fontSize="12" fontWeight="700">
          A₁/A₂ = {fL(A1 / Math.max(A2, 1e-9), 2)}  →  v₂/v₁ = {fL(v2 / Math.max(v1, 1e-9), 2)}×
        </text>

        {/* Título */}
        <text
          x={W / 2} y={H - 14}
          fill={colorMuted}
          fontSize="12"
          fontWeight="600"
          textAnchor="middle"
        >
          {tt(lang,
            "Al reducir el área, la velocidad aumenta inversamente.",
            "Reducing the cross-section increases velocity inversely.")}
        </text>
      </g>
    );
  },
};

export default profile;
