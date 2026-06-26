import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

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
    id: "svg-cantidad-de-movimiento-leaf",
    leafId: "cantidad-de-movimiento-leaf",
    title: {
      es: "Cantidad de movimiento",
      en: "Momentum",
    },
    subtitle: {
      es: "Lectura visual de balance de momento e impulso",
      en: "Visual reading of momentum and impulse balance",
    },
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "m1",
        default: 2,
        label: { es: "Masa m1", en: "Mass m1" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "m2",
        default: 3,
        label: { es: "Masa m2", en: "Mass m2" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "v1",
        default: 3,
        label: { es: "Velocidad v1", en: "Speed v1" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
      {
        key: "v2",
        default: -2,
        label: { es: "Velocidad v2", en: "Speed v2" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
    ],
    derivations: {
      p1: ({ m1, v1 }) => safeNum(m1, 2) * safeNum(v1, 3),
      p2: ({ m2, v2 }) => safeNum(m2, 3) * safeNum(v2, -2),
      pTot: ({ p1, p2 }) => safeNum(p1, 6) + safeNum(p2, -6),
      xcm: ({ m1, m2 }) => (safeNum(m2, 3) - safeNum(m1, 2)) / (safeNum(m1, 2) + safeNum(m2, 3)),
    },
  },
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 4,
    loop: true,
    /**
     * state(t, p) – posiciones físicas de los cuerpos en función del tiempo.
     * Los cuerpos comienzan en ±3.5 m y se desplazan con sus velocidades propias.
     * Las posiciones se limitan a ±4.2 m para no salir del canvas.
     * La animación hace loop cada tMax segundos para mostrar el arrastre continuo.
     */
    state: (t, p) => {
      const m1 = safeNum(p.m1, 2);
      const m2 = safeNum(p.m2, 3);
      const v1 = safeNum(p.v1, 3);
      const v2 = safeNum(p.v2, -2);
      const M = m1 + m2;
      const clampPos = (x) => Math.max(-4.2, Math.min(4.2, x));
      const x1 = clampPos(-3.5 + v1 * t);
      const x2 = clampPos( 3.5 + v2 * t);
      const xcm_dyn = M > 0 ? (m1 * x1 + m2 * x2) / M : 0;
      return { x1, x2, xcm_dyn };
    },
  },
  render: ({ p, state, lang = "es", toNum }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 2);
    const m2 = safeNum(p?.m2, 3);
    const v1 = toNum(p?.v1, 3);
    const v2 = toNum(p?.v2, -2);
    const p1 = toNum(p?.p1, m1 * v1);
    const p2 = toNum(p?.p2, m2 * v2);
    const pTot = toNum(p?.pTot, p1 + p2);

    // Posiciones animadas (metros → píxeles). Fallback a posiciones iniciales si state vacío.
    const posToX = (xPhys) => Math.max(120, Math.min(840, 480 + xPhys * 68));
    const x1px = posToX(safeNum(state?.x1, -3.5));
    const x2px = posToX(safeNum(state?.x2,  3.5));
    const cmX  = posToX(safeNum(state?.xcm_dyn, (m2 - m1) / (m1 + m2) * 3.5));

    const scale = (value) => value * 26;

    return (
      <g>
        <defs>
          <linearGradient id="momBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#132e4f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#momBg)" />

        <text x="480" y="54" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Balance visual de momento" : "Visual momentum balance"}
        </text>
        <text x="480" y="84" textAnchor="middle" fill="rgba(255,255,255,0.64)" fontSize="14">
          {isEs
            ? "Dos cuerpos, sus vectores de momento y una lectura del centro de masas"
            : "Two bodies, their momentum vectors, and a center-of-mass reading"}
        </text>

        <line x1="100" y1="340" x2="860" y2="340" stroke="rgba(255,255,255,0.28)" strokeWidth="4" />

        {/* Cuerpo 1 – sigue posición animada x1px */}
        <rect x={x1px - 43} y="280" width="86" height="60" rx="10" fill="rgba(96,165,250,0.24)" stroke="#93c5fd" strokeWidth="2" />
        <text x={x1px} y="317" textAnchor="middle" fill="#dbeafe" fontSize="14" fontWeight="800">
          m1 = {fmt(m1, 1, lang)}
        </text>

        {/* Cuerpo 2 – sigue posición animada x2px */}
        <rect x={x2px - 48} y="280" width="96" height="60" rx="10" fill="rgba(248,113,113,0.22)" stroke="#fca5a5" strokeWidth="2" />
        <text x={x2px} y="317" textAnchor="middle" fill="#fee2e2" fontSize="14" fontWeight="800">
          m2 = {fmt(m2, 1, lang)}
        </text>

        {/* Flechas de velocidad – arraigadas en el centro de cada cuerpo animado */}
        <SvgArrow x1={x1px} y1={262} x2={x1px + scale(v1)} y2={262} color="#60a5fa" label={`v1=${fmt(v1, 2, lang)}`} />
        <SvgArrow x1={x2px} y1={262} x2={x2px + scale(v2)} y2={262} color="#f87171" label={`v2=${fmt(v2, 2, lang)}`} />

        {/* Vectores de momento – posición fija (barra de balance abstracto) */}
        <SvgArrow x1={300} y1={180} x2={300 + scale(p1 / 2)} y2={180} color="#38bdf8" label={`p1=${fmt(p1, 2, lang)}`} />
        <SvgArrow x1={620} y1={180} x2={620 + scale(p2 / 2)} y2={180} color="#fb7185" label={`p2=${fmt(p2, 2, lang)}`} />
        <SvgArrow x1={480} y1={120} x2={480 + scale(pTot / 2)} y2={120} color="#34d399" label={`Σp=${fmt(pTot, 2, lang)}`} />

        {/* Marcador de CM – sigue la posición dinámica del centro de masas */}
        <line x1={cmX} y1={210} x2={cmX} y2={420} stroke="#34d399" strokeWidth="3" strokeDasharray="8 6" />
        <circle cx={cmX} cy="435" r="14" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="2.5" />
        <text x={cmX} y="440" textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="800">
          CM
        </text>

        <text x="480" y="500" textAnchor="middle" fill="rgba(255,255,255,0.74)" fontSize="14">
          {isEs
            ? "Si el momento total se acerca a cero, el marco del centro de masas gana protagonismo."
            : "When total momentum approaches zero, the center-of-mass frame becomes especially useful."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2"],
    stateOut: ["p1", "p2", "pTot", "xcm"],
  },
};

export default profile;
