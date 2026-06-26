// frontend/src/v2/components/SVG/profiles/aerodinamica-basica.svg.profile.jsx
//
// Profile SVG para: aerodinamica-basica (Nivel 5 v5)
//
import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

/* ── Helpers locales ─────────────────────────────────────────────────── */
const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 1, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

/* ════════════════════════════════════════════════════════════════════════
 * PROFILE
 * ════════════════════════════════════════════════════════════════════════ */
const profile = {

  meta: {
    id: "svg-aerodinamica-basica",
    leafId: "aerodinamica-basica",
    title: {
      es: "Aerodinámica Básica",
      en: "Basic Aerodynamics",
    },
    subtitle: {
      es: "Sustentación y Arrastre sobre un Perfil Alar",
      en: "Lift and Drag on an Airfoil",
    },
    graph_identity: {
      pregunta_principal: {
        es: "¿Cómo generan la presión y la fricción del aire las fuerzas de sustentación y arrastre sobre un perfil?",
        en: "How do air pressure and friction generate lift and drag forces on an airfoil?",
      },
      magnitud_estrella: "D_f",
    },
    interpretation_binding: {
      rho: "rho",
      v: "v",
      A: "A",
      C_L: "C_L",
      C_D: "C_D",
      L_f: "L_f",
      D_f: "D_f",
    },
  },

  scene:     SVG_SCENE_TYPES.CUSTOM,
  viewBox:   "0 0 960 560",
  svgHeight: 640,

  /* ── Parámetros del simulador ─────────────────────────────────────── */
  params: {
    schema: [
      {
        key:     "rho",
        aliases: ["densidad", "density"],
        default: 1.225,
        label:   { es: "Densidad ρ (kg/m³)", en: "Density ρ (kg/m³)" },
        unit:    "kg/m³",
        type:    SVG_CONTROL_TYPES.RANGE,
        min:     0.1,
        max:     1.3,
        step:    0.025,
        decimals: 3,
      },
      {
        key:     "v",
        aliases: ["velocidad", "speed"],
        default: 60,
        label:   { es: "Velocidad v (m/s)", en: "Speed v (m/s)" },
        unit:    "m/s",
        type:    SVG_CONTROL_TYPES.RANGE,
        min:     0,
        max:     300,
        step:    5,
        decimals: 0,
      },
      {
        key:     "A",
        aliases: ["area", "superficie"],
        default: 15,
        label:   { es: "Área de referencia A (m²)", en: "Reference area A (m²)" },
        unit:    "m²",
        type:    SVG_CONTROL_TYPES.RANGE,
        min:     1,
        max:     600,
        step:    1,
        decimals: 0,
      },
      {
        key:     "C_L",
        aliases: ["cl", "coeficiente_sustentacion", "lift_coeff"],
        default: 0.45,
        label:   { es: "Coef. sustentación C_L", en: "Lift coeff. C_L" },
        type:    SVG_CONTROL_TYPES.RANGE,
        min:     0,
        max:     3.5,
        step:    0.05,
        decimals: 2,
      },
      {
        key:     "C_D",
        aliases: ["cd", "coeficiente_arrastre", "drag_coeff"],
        default: 0.035,
        label:   { es: "Coef. arrastre C_D", en: "Drag coeff. C_D" },
        type:    SVG_CONTROL_TYPES.RANGE,
        min:     0,
        max:     2.0,
        step:    0.005,
        decimals: 3,
      },
    ],
    derivations: {
      L_f: ({ rho, v, A, C_L }) =>
        0.5 * safeNum(rho, 1.225) * safeNum(v, 60) ** 2 * safeNum(A, 15) * safeNum(C_L, 0.45),
      D_f: ({ rho, v, A, C_D }) =>
        0.5 * safeNum(rho, 1.225) * safeNum(v, 60) ** 2 * safeNum(A, 15) * safeNum(C_D, 0.035),
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    state: (t, p) => {
      const v = safeNum(p?.v, 60);
      return { 
        flowOffset: -t * v * 2.5 
      };
    },
  },

  /* ── Tarjetas de información ─────────────────────────────────────── */
  infoCards: [
    {
      key: "lift",
      label: { es: "Sustentación", en: "Lift" },
      lines: ({ p, lang }) => {
        const rho  = safeNum(p?.rho,  1.225);
        const v    = safeNum(p?.v,    60);
        const A    = safeNum(p?.A,    15);
        const CL   = safeNum(p?.C_L,  0.45);
        const L    = 0.5 * rho * v * v * A * CL;
        return [
          `L_f = ${fmt(L, 0, lang)} N`,
        ];
      },
      result: ({ p, lang }) => {
        const L = 0.5 * safeNum(p?.rho,1.225) * safeNum(p?.v,60)**2 * safeNum(p?.A,15) * safeNum(p?.C_L,0.45);
        return `${fmt(L, 0, lang)} N`;
      },
      resultColor: "#4ade80",
    },
    {
      key: "drag",
      label: { es: "Arrastre", en: "Drag" },
      lines: ({ p, lang }) => {
        const rho  = safeNum(p?.rho, 1.225);
        const v    = safeNum(p?.v, 60);
        const A    = safeNum(p?.A, 15);
        const CD   = safeNum(p?.C_D, 0.035);
        const D    = 0.5 * rho * v * v * A * CD;
        return [`D_f = ${fmt(D, 0, lang)} N` ];
      },
      result: ({ p, lang }) => {
        const D = 0.5 * safeNum(p?.rho, 1.225) * safeNum(p?.v, 60)**2 * safeNum(p?.A, 15) * safeNum(p?.C_D, 0.035);
        return `${fmt(D, 0, lang)} N`;
      },
      resultColor: "#fb7185",
    }
  ],

  /* ── Render SVG ───────────────────────────────────────────────────── */
  render: ({ p, state, lang = "es", toNum }) => {
    const isEs = lang !== "en";

    const rho  = clamp(toNum(p?.rho,  1.225), 0.1,  1.3);
    const v    = clamp(toNum(p?.v,    60),    0,    300);
    const A    = clamp(toNum(p?.A,    15),    1,    600);
    const CL   = clamp(toNum(p?.C_L,  0.45),  0,  3.5);
    const CD   = clamp(toNum(p?.C_D,  0.035), 0,  2.0);

    const flowOffset = safeNum(state?.flowOffset, 0);

    const L  = 0.5 * rho * v * v * A * CL;
    const D  = 0.5 * rho * v * v * A * CD;

    // ── Normalización visual ───────────────────────────────────────
    // Escalamos para que se vea bien en el canvas
    const arrowL = clamp(L / 200, 0, 240);
    const arrowD = clamp(D / 100, 0, 180);
    const arrowV = 20 + clamp(v / 300, 0, 1) * 160;

    // ── Geometría del perfil alar ──────────────────────────────────
    const WingCX = 480;
    const WingCY = 295;
    const CHORD  = 280;
    const THICK  = 52;

    const wingPathD = `
      M ${-CHORD/2} 0
      C ${-CHORD/2 + 40} ${-THICK} ${CHORD/2 - 80} ${-THICK * 0.7} ${CHORD/2} 0
      C ${CHORD/2 - 80} ${THICK * 0.2} ${-CHORD/2 + 40} ${THICK * 0.3} ${-CHORD/2} 0
      Z
    `;

    const flowLines = [
      { y: -120, gap: 1.0 },
      { y: -80, gap: 1.2 },
      { y: -45, gap: 1.5 },
      { y:  45, gap: 0.7 },
      { y:  85, gap: 0.9 },
      { y:  120, gap: 1.0 },
    ];

    return (
      <g>
        <defs>
          <linearGradient id="aeroBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="aeroWing" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* ── Fondo ──────────────────────────────────────────────── */}
        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#aeroBg)" />

        {/* ── Título ─────────────────────────────────────────────── */}
        <text x="480" y="44" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="900" letterSpacing="1">
          {isEs ? "AERODINÁMICA BÁSICA" : "BASIC AERODYNAMICS"}
        </text>

        {/* ── Escena Central ─────────────────────────────────────── */}
        <g transform={`translate(${WingCX}, ${WingCY})`}>

          {/* Líneas de flujo */}
          {flowLines.map(({ y: yOff, gap }, i) => (
            <g key={i}>
              <line
                x1={-CHORD / 2 - 280}
                y1={yOff}
                x2={CHORD / 2 + 280}
                y2={yOff}
                stroke={gap > 1.2 ? "#7dd3fc" : "#38bdf8"}
                strokeWidth={gap > 1.2 ? 2 : 1.5}
                strokeOpacity={0.2}
                strokeDasharray={`${15 * gap} ${10 / gap}`}
                strokeDashoffset={flowOffset * gap}
              />
            </g>
          ))}

          {/* Perfil alar */}
          <path d={wingPathD} fill="url(#aeroWing)" stroke="#7dd3fc" strokeWidth="2.5" />

          {/* ── Vector Velocidad ───────────────────────────────── */}
          <SvgArrow
            x1={-CHORD / 2 - 180}
            y1={140}
            x2={-CHORD / 2 - 180 + arrowV}
            y2={140}
            color="#fbbf24"
            label={`v = ${fmt(v, 0, lang)} m/s`}
            strokeWidth={3}
          />

          {/* ── Vector Sustentación L_f ────────────────────────── */}
          <SvgArrow
            x1={0}
            y1={-THICK * 0.4}
            x2={0}
            y2={-THICK * 0.4 - arrowL}
            color="#4ade80"
            label={`L_f = ${fmt(L, 0, lang)} N`}
            strokeWidth={4}
          />

          {/* ── Vector Arrastre D_f ────────────────────────────── */}
          <SvgArrow
            x1={CHORD * 0.3}
            y1={0}
            x2={CHORD * 0.3 + arrowD}
            y2={0}
            color="#fb7185"
            label={`D_f = ${fmt(D, 0, lang)} N`}
            labelDx={10}
            strokeWidth={4}
          />

        </g>

        {/* ── Info Cards ────────────────────────────────────────── */}
        <g transform="translate(40, 420)">
           <rect width="200" height="100" rx="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" />
           <text x="15" y="30" fill="#ffffff" fontSize="14" fontWeight="800">{isEs ? "Parámetros" : "Parameters"}</text>
           <text x="15" y="55" fill="rgba(255,255,255,0.7)" fontSize="12">ρ: {fmt(rho, 3, lang)} kg/m³</text>
           <text x="15" y="75" fill="rgba(255,255,255,0.7)" fontSize="12">A: {fmt(A, 0, lang)} m²</text>
        </g>

        {/* ── Watermark ──────────────────────────────────────────── */}
        <text x="940" y="540" textAnchor="end" fontSize="10" fill="#ffffff" opacity="0.1"
          fontWeight="900" letterSpacing="2">
          PHYXIO V5 · AERODYNAMICS
        </text>
      </g>
    );
  },

  /* ── Interpretación ───────────────────────────────────────────────── */
  aside: {
    interpretation: {
      header_bridge: {
        es: "Las fuerzas aerodinámicas son la respuesta del fluido a la presencia de un cuerpo en movimiento.",
        en: "Aerodynamic forces are the fluid's response to the presence of a moving body.",
      },
      reading_focus: {
        es: "La sustentación (L_f) actúa perpendicular al flujo, mientras que el arrastre (D_f) se opone al movimiento.",
        en: "Lift (L_f) acts perpendicular to the flow, while drag (D_f) opposes the motion.",
      },
      physical_insight: {
        es: "La sustentación surge de la asimetría de presión inducida por la forma del perfil. El arrastre combina la fricción superficial y la diferencia de presión frontal-trasera.",
        en: "Lift arises from the pressure asymmetry induced by the airfoil's shape. Drag combines surface friction and frontal-rear pressure difference.",
      },
    },
  },
};

export default profile;
