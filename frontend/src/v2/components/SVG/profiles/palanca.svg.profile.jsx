import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

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

const CLASS_LAYOUT = {
  1: { fulcrum: 480, effort: 240, load: 720 },
  2: { fulcrum: 260, effort: 760, load: 520 },
  3: { fulcrum: 240, effort: 470, load: 760 },
};

const classText = (value, lang) => {
  if (value === 1) return lang === "en" ? "First class" : "Primera clase";
  if (value === 2) return lang === "en" ? "Second class" : "Segunda clase";
  return lang === "en" ? "Third class" : "Tercera clase";
};

const profile = {
  meta: {
    id: "svg-palanca",
    leafId: "palanca",
    title: {
      es: "La Física de la Palanca",
      en: "The Physics of the Lever",
    },
    subtitle: {
      es: "Equilibrio de momentos y ventaja mecánica",
      en: "Torque balance and mechanical advantage",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo permite el equilibrio de momentos amplificar la fuerza y el desplazamiento mediante la palanca?",
      en: "How does torque equilibrium allow amplifying force and displacement through the lever?",
    },
    magnitud_estrella: "VM",
    magnitud_secundaria: "clasePalanca",
    variable_control: "clasePalanca",
    tipo_lectura: "cualitativa",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "clasePalanca",
        aliases: ["clase"],
        default: 1,
        label: { es: "Clase", en: "Class" },
        type: SVG_CONTROL_TYPES.SELECT,
        options: [
          { value: 1, label: { es: "Primera", en: "First" } },
          { value: 2, label: { es: "Segunda", en: "Second" } },
          { value: 3, label: { es: "Tercera", en: "Third" } },
        ],
      },
      {
        key: "d_P",
        aliases: ["dP"],
        default: 0.8,
        label: { es: "Brazo de potencia", en: "Effort arm" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 1.5,
        step: 0.05,
      },
      {
        key: "d_R",
        aliases: ["dR"],
        default: 0.3,
        label: { es: "Brazo de resistencia", en: "Load arm" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 1.5,
        step: 0.05,
      },
      {
        key: "R",
        aliases: ["resistencia"],
        default: 300,
        label: { es: "Resistencia", en: "Load" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 20,
        max: 800,
        step: 10,
      },
    ],
    derivations: {
      VM: ({ d_P, d_R }) => {
        const a = safeNum(d_P, 0.8);
        const b = safeNum(d_R, 0.3);
        return b > 0 ? a / b : 0;
      },
      P: ({ R, d_P, d_R }) => {
        const load = safeNum(R, 300);
        const a = safeNum(d_P, 0.8);
        const b = safeNum(d_R, 0.3);
        return a > 0 ? (load * b) / a : 0;
      },
    },
  },
  infoCards: [
    {
      key: "formula",
      label: { es: "Ley base", en: "Base law" },
      highlight: "P·d_P = R·d_R",
      highlightColor: "#93c5fd",
      description: {
        es: "La clase ordena la geometría; la ley de momentos cuantifica el equilibrio.",
        en: "Class orders the geometry; the moment law quantifies equilibrium.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `${lang === "en" ? "Class" : "Clase"} = ${classText(Math.round(safeNum(p?.clasePalanca, 1)), lang)}`,
        `VM = ${fmt(safeNum(p?.VM, 1), 2, lang)}`,
      ],
      result: ({ p, lang }) =>
        `${lang === "en" ? "Required P" : "P necesaria"} = ${fmt(safeNum(p?.P, 112.5), 1, lang)} N`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ p, lang = "es", toNum }) => {
    const isEs = lang !== "en";
    const clase = clamp(Math.round(toNum(p?.clasePalanca, 1)), 1, 3);
    const dP = clamp(toNum(p?.d_P, 0.8), 0.1, 1.5);
    const dR = clamp(toNum(p?.d_R, 0.3), 0.1, 1.5);
    const load = clamp(toNum(p?.R, 300), 20, 800);
    const VM = toNum(p?.VM, dP / dR);
    const effort = toNum(p?.P, (load * dR) / dP);

    const left = 120;
    const right = 840;
    const baseY = 325;
    const boardY = 270;
    const layout = CLASS_LAYOUT[clase];
    const effortX = layout.effort;
    const fulcrumX = layout.fulcrum;
    const loadX = layout.load;
    const labelY = 440;
    const effortArrow = 110 + effort * 0.08;
    const loadArrow = 110 + load * 0.03;

    return (
      <g>
        <defs>
          <linearGradient id="leverTypesBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#1d3557" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#leverTypesBg)" />

        <text x="480" y="50" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Tipos de palancas" : "Types of Levers"}
        </text>
        <text x="480" y="80" textAnchor="middle" fill="rgba(255,255,255,0.66)" fontSize="14">
          {isEs ? "El elemento central define la clase" : "The middle element defines the class"}
        </text>

        <line x1={left} y1={boardY} x2={right} y2={boardY} stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
        <line x1={left} y1={baseY} x2={right} y2={baseY} stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

        <polygon
          points={`${fulcrumX},${boardY + 8} ${fulcrumX - 34},${baseY} ${fulcrumX + 34},${baseY}`}
          fill="rgba(56,189,248,0.22)"
          stroke="#38bdf8"
          strokeWidth="2"
        />
        <text x={fulcrumX} y={baseY + 28} textAnchor="middle" fill="#7dd3fc" fontSize="13" fontWeight="800">
          {isEs ? "Apoyo" : "Fulcrum"}
        </text>

        <line x1={effortX} y1={boardY - effortArrow} x2={effortX} y2={boardY - 6} stroke="#c084fc" strokeWidth="6" />
        <polygon points={`${effortX},${boardY - effortArrow - 20} ${effortX - 12},${boardY - effortArrow + 6} ${effortX + 12},${boardY - effortArrow + 6}`} fill="#c084fc" />
        <text x={effortX} y={boardY - effortArrow - 30} textAnchor="middle" fill="#e9d5ff" fontSize="13" fontWeight="800">
          P = {fmt(effort, 1, lang)} N
        </text>

        <line x1={loadX} y1={boardY - loadArrow} x2={loadX} y2={boardY - 6} stroke="#f97316" strokeWidth="6" />
        <polygon points={`${loadX},${boardY - loadArrow - 20} ${loadX - 12},${boardY - loadArrow + 6} ${loadX + 12},${boardY - loadArrow + 6}`} fill="#f97316" />
        <text x={loadX} y={boardY - loadArrow - 30} textAnchor="middle" fill="#fdba74" fontSize="13" fontWeight="800">
          R = {fmt(load, 1, lang)} N
        </text>

        <line x1={fulcrumX} y1={labelY} x2={effortX} y2={labelY} stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5 4" />
        <line x1={fulcrumX} y1={labelY - 26} x2={loadX} y2={labelY - 26} stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5 4" />
        <text x={(fulcrumX + effortX) / 2} y={labelY - 6} textAnchor="middle" fill="#e9d5ff" fontSize="12" fontWeight="700">
          d_P = {fmt(dP, 2, lang)} m
        </text>
        <text x={(fulcrumX + loadX) / 2} y={labelY - 32} textAnchor="middle" fill="#fdba74" fontSize="12" fontWeight="700">
          d_R = {fmt(dR, 2, lang)} m
        </text>

        <text x="480" y="140" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {classText(clase, lang)}
        </text>
        <text x="480" y="168" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="14">
          {clase === 1
            ? isEs ? "El apoyo queda entre potencia y resistencia." : "The fulcrum lies between effort and load."
            : clase === 2
              ? isEs ? "La resistencia queda entre apoyo y potencia." : "The load lies between fulcrum and effort."
              : isEs ? "La potencia queda entre apoyo y resistencia." : "The effort lies between fulcrum and load."}
        </text>

        <text x="480" y="490" textAnchor="middle" fill="#86efac" fontSize="16" fontWeight="800">
          VM = {fmt(VM, 2, lang)}
        </text>
        <text x="480" y="515" textAnchor="middle" fill="rgba(255,255,255,0.56)" fontSize="13">
          {isEs
            ? "La clase se decide por posición relativa; VM lee la ayuda geométrica."
            : "Class is decided by relative position; VM reads the geometric help."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["clasePalanca", "d_P", "d_R", "R"],
    stateOut: ["VM", "P"],
  },
};

export default profile;
