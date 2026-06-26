import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-colision-con-pared",
    leafId: "colision-con-pared",
    title: {
      es: "Colision con pared",
      en: "Collision with a wall",
    },
    subtitle: {
      es: "Cambio de velocidad normal y restitucion",
      en: "Normal-velocity reversal and restitution",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "colision-con-pared",
    graphId: "svg-colision-con-pared",
    purpose: {
      es: "Leer la inversion o reduccion de la componente normal al chocar con una pared.",
      en: "Read the inversion or reduction of the normal component when colliding with a wall.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "v1", "e"],
    derivedMagnitudes: ["p1_before", "p1_after", "dp", "vf", "vfn", "vft", "K"],
    targetCandidates: ["vf", "e", "K"],
    equations: ["p = mv", "v_after = -e * v_before"],
    hypotheses: ["pared fija e infinitamente masiva", "choque sobre la normal"],
    validityDomain: ["0 <= e <= 1", "impacto local contra pared lisa"],
    visualSimplifications: ["lectura unidimensional del impacto"],
    alwaysVisible: ["p1_before", "p1_after", "dp"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "m1",
        default: 2,
        label: { es: "Masa m", en: "Mass m" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "v1",
        default: 4,
        label: { es: "Velocidad inicial", en: "Initial velocity" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 10,
        step: 0.5,
      },
      {
        key: "e",
        default: 0.7,
        label: { es: "Coef. de restitucion e", en: "Restitution coeff. e" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ],
    derivations: {
      p1_before: ({ m1, v1 }) => safeNum(m1, 2) * safeNum(v1, 4),
      p1_after: ({ m1, v1, e }) => -safeNum(e, 0.7) * safeNum(m1, 2) * safeNum(v1, 4),
      dp: ({ p1_before, p1_after }) =>
        safeNum(p1_after, 0) - safeNum(p1_before, 0),
      vf: ({ v1, e }) => -safeNum(e, 0.7) * safeNum(v1, 4),
      vfn: ({ vf }) => safeNum(vf, 0),
      vft: () => 0,
      K: ({ m1, vf }) => 0.5 * safeNum(m1, 2) * safeNum(vf, 0) ** 2,
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "v_{f} = -e \\cdot v_{i}",
      highlightColor: "#93c5fd",
      description: {
        es: "La velocidad de salida es proporcional a la de entrada según el coeficiente de restitución.",
        en: "Output velocity is proportional to input velocity based on the restitution coefficient.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `m = ${fmt(safeNum(p?.m1, 2), 1, lang)} kg`,
        `v_{i} = ${fmt(safeNum(p?.v1, 4), 1, lang)} m/s`,
        `e = ${fmt(safeNum(p?.e, 0.7), 2, lang)}`,
      ],
      result: ({ p, lang }) => `v_{f} = ${fmt(safeNum(p?.vf, 0), 2, lang)} m/s`,
      resultColor: "#fca5a5",
    },
    {
      key: "impulse",
      label: { es: "Impulso", en: "Impulse" },
      bg: "rgba(251,191,36,0.10)",
      border: "rgba(251,191,36,0.18)",
      description: {
        es: "El cambio de momento es máximo cuando el rebote es elástico (e=1).",
        en: "The momentum change is maximal when the bounce is elastic (e=1).",
      },
      highlight: ({ p, lang }) => `Δp = ${fmt(safeNum(p?.dp, 0), 2, lang)} kg m/s`,
      highlightColor: "#fbbf24",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 3,
    loop: true,
    state: (t, p) => {
      const m1 = safeNum(p?.m1, 2);
      const v1 = safeNum(p?.v1, 4);
      const e = safeNum(p?.e, 0.7);
      // pared en x=7m. cuerpo empieza en x=-3, avanza hasta x=7 luego rebota con -e*v
      const wallX = 7;
      const startX = -3;
      const tImpact = (wallX - startX) / v1;
      let xPhys;
      if (t <= tImpact) {
        xPhys = startX + v1 * t;
      } else {
        xPhys = wallX - e * v1 * (t - tImpact);
      }
      return { xPhys, phase: t <= tImpact ? "before" : "after" };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 2);
    const v1 = safeNum(p?.v1, 4);
    const e = safeNum(p?.e, 0.7);
    const p1b = m1 * v1;
    const p1a = -e * m1 * v1;
    const dp = p1a - p1b;

    const wallPixelX = 820;
    const posToX = (xPhys) => Math.max(120, Math.min(wallPixelX - 56, 120 + ((xPhys + 3) / 10) * 670));
    const bodyX = posToX(safeNum(state?.xPhys, -3));
    const phase = state?.phase ?? "before";
    const scale = (v) => Math.max(-220, Math.min(220, v * 24));

    return (
      <g>
        <defs>
          <linearGradient id="paredBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0c1622" />
            <stop offset="100%" stopColor="#162032" />
          </linearGradient>
          <pattern id="hatch" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#64748b" strokeWidth="4" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#paredBg)" />

        {/* Titulo */}
        <text x="480" y="52" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Colision con pared" : "Collision with a wall"}
        </text>
        <text x="480" y="80" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="13">
          {isEs
            ? "El cuerpo rebota con coeficiente de restitucion e — la pared es fija"
            : "The body bounces with restitution coefficient e — the wall is fixed"}
        </text>

        {/* Eje horizontal */}
        <line x1="100" y1="340" x2={wallPixelX} y2="340" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />

        {/* Pared */}
        <rect x={wallPixelX - 17} y="180" width="40" height="160" fill="url(#hatch)" stroke="#94a3b8" strokeWidth="3" rx="4" />
        <text x={wallPixelX + 3} y="177" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">
          {isEs ? "PARED" : "WALL"}
        </text>

        {/* Cuerpo animado */}
        <rect x={bodyX - 40} y="285" width="80" height="55" rx="10"
          fill={phase === "before" ? "rgba(96,165,250,0.28)" : "rgba(248,113,113,0.26)"}
          stroke={phase === "before" ? "#93c5fd" : "#fca5a5"} strokeWidth="2.5" />
        <text x={bodyX} y="320" textAnchor="middle"
          fill={phase === "before" ? "#dbeafe" : "#fee2e2"} fontSize="13" fontWeight="800">
          m = {fmt(m1, 1, lang)} kg
        </text>

        {/* Flecha velocidad */}
        <SvgArrow
          x1={bodyX} y1={268}
          x2={bodyX + scale(phase === "before" ? v1 : -e * v1)} y2={268}
          color={phase === "before" ? "#60a5fa" : "#f87171"}
          label={`v=${fmt(phase === "before" ? v1 : -e * v1, 2, lang)} m/s`}
        />

        {/* Panel de valores: p antes, p despues, Δp */}
        <rect x="110" y="390" width="740" height="110" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />

        {/* p1 antes */}
        <SvgArrow x1={200} y1={430} x2={200 + scale(p1b / 2)} y2={430} color="#60a5fa" label="" />
        <text x="200" y="420" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700">
          p₁{isEs ? " antes" : " before"}
        </text>
        <text x="200" y="460" textAnchor="middle" fill="#dbeafe" fontSize="14" fontWeight="800">
          {fmt(p1b, 2, lang)} kg·m/s
        </text>

        {/* p1 despues */}
        <SvgArrow x1={480} y1={430} x2={480 + scale(p1a / 2)} y2={430} color="#f87171" label="" />
        <text x="480" y="420" textAnchor="middle" fill="#fca5a5" fontSize="13" fontWeight="700">
          p₁{isEs ? " despues" : " after"}
        </text>
        <text x="480" y="460" textAnchor="middle" fill="#fee2e2" fontSize="14" fontWeight="800">
          {fmt(p1a, 2, lang)} kg·m/s
        </text>

        {/* Δp */}
        <text x="760" y="420" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="700">
          Δp
        </text>
        <text x="760" y="445" textAnchor="middle" fill="#fde68a" fontSize="14" fontWeight="800">
          {fmt(dp, 2, lang)} kg·m/s
        </text>
        <text x="760" y="466" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11">
          = -(1+e)·m·v
        </text>

        {/* Nota inferior */}
        <text x="480" y="522" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="13">
          {isEs
            ? "e=1 → rebote perfecto · e=0 → cuerpo queda pegado a la pared"
            : "e=1 → perfect bounce · e=0 → body sticks to the wall"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "v1", "e"],
    stateOut: ["p1_before", "p1_after", "dp", "vf", "vfn", "vft", "K"],
    target: "vf",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo cambia el momento lineal de un objeto al chocar contra una pared rígida?",
      en: "How does an object's linear momentum change when it collides with a rigid wall?",
    },
    magnitud_estrella: "vf",
  },
};

export default profile;
