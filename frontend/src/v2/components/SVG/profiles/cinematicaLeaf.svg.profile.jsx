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
    id: "svg-cinematica-leaf",
    leafId: "cinematica-leaf",
    title: {
      es: "Cinemática",
      en: "Kinematics",
    },
    subtitle: {
      es: "Lectura visual de trayectoria, velocidad y aceleración",
      en: "Visual reading of path, velocity, and acceleration",
    },
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "x0",
        default: 0,
        label: { es: "Posición inicial", en: "Initial position" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.5,
      },
      {
        key: "v0",
        default: 4,
        label: { es: "Velocidad inicial", en: "Initial velocity" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -12,
        max: 12,
        step: 0.25,
      },
      {
        key: "a",
        default: 0.8,
        label: { es: "Aceleración", en: "Acceleration" },
        unit: "m/s²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -4,
        max: 4,
        step: 0.1,
      },
      {
        key: "t",
        default: 3,
        label: { es: "Tiempo observado", en: "Observed time" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 10,
        step: 0.1,
      },
    ],
    derivations: {
      x: ({ x0, v0, a, t }) => safeNum(x0, 0) + safeNum(v0, 4) * safeNum(t, 3) + 0.5 * safeNum(a, 0.8) * safeNum(t, 3) * safeNum(t, 3),
      v: ({ v0, a, t }) => safeNum(v0, 4) + safeNum(a, 0.8) * safeNum(t, 3),
    },
  },
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ p, lang = "es", toNum }) => {
    const isEs = lang !== "en";
    const x0 = toNum(p?.x0, 0);
    const v0 = toNum(p?.v0, 4);
    const a = toNum(p?.a, 0.8);
    const t = toNum(p?.t, 3);
    const x = toNum(p?.x, x0 + v0 * t + 0.5 * a * t * t);
    const v = toNum(p?.v, v0 + a * t);

    const baseX = 120;
    const endX = 840;
    const y = 345;
    const scale = (value) => baseX + 36 * value;
    const particleX = Math.max(baseX, Math.min(endX, scale(x)));
    const velLen = Math.max(-180, Math.min(180, v * 18));
    const accLen = Math.max(-140, Math.min(140, a * 28));

    return (
      <g>
        <defs>
          <linearGradient id="kinBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#173556" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#kinBg)" />

        <text x="480" y="54" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Lectura visual del movimiento" : "Visual reading of motion"}
        </text>
        <text x="480" y="84" textAnchor="middle" fill="rgba(255,255,255,0.64)" fontSize="14">
          {isEs
            ? "Posición, velocidad y aceleración sobre una misma trayectoria temporal"
            : "Position, velocity, and acceleration on the same time-based trajectory"}
        </text>

        <line x1={baseX} y1={y} x2={endX} y2={y} stroke="rgba(255,255,255,0.28)" strokeWidth="4" />
        <line x1={baseX} y1={y - 95} x2={baseX} y2={y + 95} stroke="rgba(255,255,255,0.16)" strokeWidth="2" />

        <circle cx={particleX} cy={y} r="22" fill="rgba(96,165,250,0.24)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x={particleX} y={y + 5} textAnchor="middle" fill="#dbeafe" fontSize="14" fontWeight="800">
          m
        </text>

        <SvgArrow x1={particleX} y1={y - 54} x2={particleX + velLen} y2={y - 54} color="#34d399" label={`v=${fmt(v, 2, lang)}`} />
        <SvgArrow x1={particleX} y1={y - 100} x2={particleX + accLen} y2={y - 100} color="#f59e0b" label={`a=${fmt(a, 2, lang)}`} />

        <circle cx={scale(x0)} cy={y} r="7" fill="#fca5a5" />
        <text x={scale(x0)} y={y + 34} textAnchor="middle" fill="#fee2e2" fontSize="12" fontWeight="700">
          x0
        </text>

        <text x="160" y="470" fill="rgba(255,255,255,0.80)" fontSize="14">
          {isEs ? `t = ${fmt(t, 2, lang)} s` : `t = ${fmt(t, 2, lang)} s`}
        </text>
        <text x="340" y="470" fill="rgba(255,255,255,0.80)" fontSize="14">
          {isEs ? `x = ${fmt(x, 2, lang)} m` : `x = ${fmt(x, 2, lang)} m`}
        </text>
        <text x="520" y="470" fill="rgba(255,255,255,0.80)" fontSize="14">
          {isEs ? `v0 = ${fmt(v0, 2, lang)} m/s` : `v0 = ${fmt(v0, 2, lang)} m/s`}
        </text>

        <text x="480" y="520" textAnchor="middle" fill="rgba(255,255,255,0.74)" fontSize="14">
          {isEs
            ? "La pendiente local de x(t) se traduce en velocidad, y la variación de esa pendiente en aceleración."
            : "The local slope of x(t) translates into velocity, and the variation of that slope into acceleration."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["x0", "v0", "a", "t"],
    stateOut: ["x", "v"],
  },
};

export default profile;
