import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgArrow, SvgGround } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const G = 9.8;

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const deg2rad = (d) => (Math.PI * d) / 180;

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-problemas-tipo-examen",
    leafId: "problemas-tipo-examen",
    title: {
      es: "Problemas tipo examen",
      en: "Exam-type problems",
    },
    subtitle: {
      es: "Sistema vinculado con plano inclinado y rozamiento",
      en: "Linked system with incline and friction",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "problemas-tipo-examen",
    graphId: "svg-problemas-tipo-examen",
    purpose: {
      es: "Visualizar como masa_2 arrastra a masa_1, como nace la fuerza de rozamiento y como todo eso fija la aceleracion del sistema.",
      en: "Visualize how masa_2 pulls masa_1, how friction arises, and how both determine system acceleration.",
    },
    level: {
      es: "bachillerato | universidad",
      en: "upper secondary | university",
    },
    expectedInputs: ["masa_1", "masa_2", "theta", "coeficiente_rozamiento"],
    derivedMagnitudes: ["fuerza_normal", "fuerza_rozamiento", "tension_cuerda", "aceleracion_sistema"],
    targetCandidates: ["aceleracion_sistema", "fuerza_rozamiento"],
    equations: [
      "a = (m2 g - m1 g sin(theta) - mu N) / (m1 + m2)",
      "N = m1 g cos(theta)",
      "f_r = mu N",
    ],
    hypotheses: ["cuerda ideal", "polea ideal", "rozamiento dinamico", "movimiento vinculado"],
    validityDomain: ["0 <= mu <= 1", "|a| < g", "contacto permanente con el plano"],
    visualSimplifications: ["2D", "polea sin inercia", "vectorizacion de fuerzas dominantes"],
    alwaysVisible: ["fuerza_normal", "fuerza_rozamiento", "aceleracion_sistema"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 620",
  svgHeight: 700,
  params: {
    schema: [
      {
        key: "masa_1",
        default: 5,
        label: { es: "masa_1 (kg)", en: "masa_1 (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 12,
        step: 0.5,
      },
      {
        key: "masa_2",
        default: 4,
        label: { es: "masa_2 (kg)", en: "masa_2 (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 12,
        step: 0.5,
      },
      {
        key: "theta",
        default: 30,
        label: { es: "angulo theta", en: "angle theta" },
        unit: "deg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 10,
        max: 60,
        step: 1,
      },
      {
        key: "coeficiente_rozamiento",
        default: 0.2,
        label: { es: "coeficiente_rozamiento", en: "coeficiente_rozamiento" },
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 0.8,
        step: 0.01,
      },
    ],
    derivations: {
      fuerza_normal: ({ masa_1, theta }) =>
        safeNum(masa_1, 5) * G * Math.cos(deg2rad(safeNum(theta, 30))),
      fuerza_rozamiento: ({ coeficiente_rozamiento, fuerza_normal }) =>
        safeNum(coeficiente_rozamiento, 0.2) * safeNum(fuerza_normal, 40),
      componente_peso_paralela: ({ masa_1, theta }) =>
        safeNum(masa_1, 5) * G * Math.sin(deg2rad(safeNum(theta, 30))),
      aceleracion_sistema: ({ masa_1, masa_2, componente_peso_paralela, fuerza_rozamiento }) => {
        const m1 = safeNum(masa_1, 5);
        const m2 = safeNum(masa_2, 4);
        const denom = m1 + m2;
        if (denom <= 0) return 0;
        return (m2 * G - safeNum(componente_peso_paralela, 24.5) - safeNum(fuerza_rozamiento, 8)) / denom;
      },
      tension_cuerda: ({ masa_2, aceleracion_sistema }) =>
        safeNum(masa_2, 4) * (G - safeNum(aceleracion_sistema, 0)),
    },
  },
  infoCards: [
    {
      key: "structure",
      label: { es: "Lectura estructural", en: "Structural reading" },
      highlight: "DCL + vinculo",
      highlightColor: "#93c5fd",
      description: {
        es: "Primero se construye el sistema global. Despues se usa el vinculo para legitimar una sola aceleracion.",
        en: "First build the global system. Then use the constraint to legitimize one shared acceleration.",
      },
    },
    {
      key: "friction",
      label: { es: "Papel del contacto", en: "Role of contact" },
      highlight: "f_r = mu N",
      highlightColor: "#fca5a5",
      description: {
        es: "La fuerza de rozamiento no se inventa: nace de fuerza_normal y del coeficiente_rozamiento.",
        en: "The friction force is not invented: it arises from fuerza_normal and coeficiente_rozamiento.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `N = ${fmt(safeNum(p?.fuerza_normal, 0), 1, lang)} N`,
        `f_r = ${fmt(safeNum(p?.fuerza_rozamiento, 0), 1, lang)} N`,
      ],
      result: ({ p, lang }) => {
        const a = safeNum(p?.aceleracion_sistema, 0);
        const tag = lang === "en"
          ? (a >= 0 ? "masa_2 drives" : "incline resists")
          : (a >= 0 ? "domina masa_2" : "domina el plano");
        return `a = ${fmt(a, 2, lang)} m/s^2  |  ${tag}`;
      },
      resultColor: "#fde68a",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const a = safeNum(p?.aceleracion_sistema, 0);
      const disp = Math.max(-110, Math.min(110, 0.5 * a * t * t * 8));
      return { disp };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const theta = safeNum(p?.theta, 30);
    const m1 = safeNum(p?.masa_1, 5);
    const m2 = safeNum(p?.masa_2, 4);
    const mu = safeNum(p?.coeficiente_rozamiento, 0.2);
    const N = safeNum(p?.fuerza_normal, 0);
    const fr = safeNum(p?.fuerza_rozamiento, 0);
    const a = safeNum(p?.aceleracion_sistema, 0);
    const T = safeNum(p?.tension_cuerda, 0);
    const disp = safeNum(state?.disp, 0);
    const angle = deg2rad(theta);
    const scale = 2.1;

    const baseX = 250;
    const baseY = 470;
    const rampLen = 360;
    const topX = baseX + rampLen * Math.cos(angle);
    const topY = baseY - rampLen * Math.sin(angle);
    const blockX = baseX + 170 * Math.cos(angle) + disp * Math.cos(angle);
    const blockY = baseY - 170 * Math.sin(angle) - disp * Math.sin(angle);
    const hangX = topX + 70;
    const hangY = topY + 150 - disp;

    return (
      <g>
        <defs>
          <linearGradient id="examDynBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#10233f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="620" rx="18" fill="url(#examDynBg)" />

        <text x="480" y="38" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="800">
          {isEs ? "Problemas tipo examen" : "Exam-type problems"}
        </text>
        <text x="480" y="60" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12">
          {isEs
            ? "Sistema vinculado: masa_2 compite contra peso paralelo y rozamiento"
            : "Linked system: masa_2 competes against parallel weight and friction"}
        </text>

        <SvgGround x1={120} x2={900} y={500} color="rgba(255,255,255,0.18)" />
        <line x1={baseX} y1={baseY} x2={topX} y2={topY} stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
        <circle cx={topX} cy={topY} r="18" fill="rgba(255,255,255,0.08)" stroke="#f8fafc" strokeWidth="2.5" />

        <line x1={blockX + 32} y1={blockY - 22} x2={topX} y2={topY} stroke="#f8fafc" strokeWidth="3" />
        <line x1={topX + 18} y1={topY} x2={hangX} y2={hangY - 28} stroke="#f8fafc" strokeWidth="3" />

        <g transform={`translate(${blockX}, ${blockY}) rotate(${-theta})`}>
          <rect x="-30" y="-22" width="60" height="44" rx="8" fill="rgba(96,165,250,0.25)" stroke="#93c5fd" strokeWidth="2.5" />
          <text x="0" y="5" textAnchor="middle" fill="#dbeafe" fontSize="12" fontWeight="700">
            m1={fmt(m1, 1, lang)}
          </text>
        </g>

        <rect x={hangX - 28} y={hangY - 28} width="56" height="56" rx="8" fill="rgba(52,211,153,0.22)" stroke="#6ee7b7" strokeWidth="2.5" />
        <text x={hangX} y={hangY + 4} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="700">
          m2={fmt(m2, 1, lang)}
        </text>

        <SvgArrow
          x1={blockX}
          y1={blockY - 12}
          x2={blockX}
          y2={blockY - 12 - Math.min(120, N * scale)}
          color="#4ade80"
          label={`N=${fmt(N, 1, lang)} N`}
        />
        <SvgArrow
          x1={blockX + 5}
          y1={blockY + 8}
          x2={blockX - Math.cos(angle) * Math.min(130, fr * scale)}
          y2={blockY + Math.sin(angle) * Math.min(130, fr * scale)}
          color="#f87171"
          label={`f_r=${fmt(fr, 1, lang)} N`}
        />
        <SvgArrow
          x1={hangX}
          y1={hangY - 28}
          x2={hangX}
          y2={hangY - 28 - Math.min(140, T * 0.9)}
          color="#fbbf24"
          label={`T=${fmt(T, 1, lang)} N`}
        />
        <SvgArrow
          x1={hangX + 40}
          y1={hangY}
          x2={hangX + 40}
          y2={hangY + Math.min(140, m2 * G * 2.2)}
          color="#60a5fa"
          label={`m2 g=${fmt(m2 * G, 1, lang)} N`}
        />
        {Math.abs(a) > 0.01 && (
          <SvgArrow
            x1={blockX - 50}
            y1={blockY - 70}
            x2={blockX - 50 + (a >= 0 ? 90 : -90)}
            y2={blockY - 70}
            color="#22d3ee"
            label={`a=${fmt(a, 2, lang)} m/s^2`}
            isDerived
          />
        )}

        <text x="110" y="120" fill="#93c5fd" fontSize="13" fontWeight="700">
          {isEs ? "Ecuacion dominante" : "Dominant equation"}
        </text>
        <text x="110" y="145" fill="rgba(255,255,255,0.68)" fontSize="13">
          a = (m2 g - m1 g sin(theta) - mu N) / (m1 + m2)
        </text>

        <text x="110" y="188" fill="#fca5a5" fontSize="12" fontWeight="700">
          {isEs ? "Cierre de contacto" : "Contact closure"}
        </text>
        <text x="110" y="210" fill="rgba(255,255,255,0.62)" fontSize="12">
          f_r = mu N   |   N = m1 g cos(theta)
        </text>

        <text x="690" y="120" fill="#fde68a" fontSize="13" fontWeight="700">
          {isEs ? "Lectura actual" : "Current reading"}
        </text>
        <text x="690" y="145" fill="rgba(255,255,255,0.72)" fontSize="12">
          {isEs
            ? `Si a > 0, domina masa_2. Si a < 0, domina el plano.`
            : `If a > 0, masa_2 dominates. If a < 0, the incline dominates.`}
        </text>
        <text x="690" y="168" fill="rgba(255,255,255,0.72)" fontSize="12">
          {isEs
            ? `mu=${fmt(mu, 2, lang)}  |  theta=${fmt(theta, 0, lang)} deg`
            : `mu=${fmt(mu, 2, lang)}  |  theta=${fmt(theta, 0, lang)} deg`}
        </text>

        <path d={`M ${baseX + 42} ${baseY - 4} A 44 44 0 0 1 ${baseX + 42 + 44 * Math.cos(angle)} ${baseY - 4 - 44 * Math.sin(angle)}`} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <text x={baseX + 58} y={baseY - 22} fill="rgba(255,255,255,0.55)" fontSize="12">
          theta
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["masa_1", "masa_2", "coeficiente_rozamiento"],
    stateOut: ["fuerza_normal", "fuerza_rozamiento", "tension_cuerda", "aceleracion_sistema"],
    target: "aceleracion_sistema",
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como se construye y se cierra un problema de dinamica con masas vinculadas y rozamiento sin perder el sentido fisico del resultado?",
      en: "How is a dynamics problem with linked masses and friction constructed and closed without losing the physical meaning of the result?",
    },
    magnitud_estrella: "aceleracion_sistema",
  },
};

export default profile;
