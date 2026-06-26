import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
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

const DEG = Math.PI / 180;

// Dibuja una flecha SVG con punta
function Arrow({ x1, y1, x2, y2, color, label, labelSide = "top" }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 2) return null;
  const ux = dx / len;
  const uy = dy / len;
  const hLen = 12;
  const hW = 7;
  const hx = x2 - ux * hLen;
  const hy = y2 - uy * hLen;
  const nx = -uy;
  const ny = ux;
  const lx = (x1 + x2) / 2 + nx * (labelSide === "top" ? -18 : 18);
  const ly = (y1 + y2) / 2 + ny * (labelSide === "top" ? -18 : 18);
  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="2.5" />
      <polygon
        points={`${x2},${y2} ${hx + nx * hW},${hy + ny * hW} ${hx - nx * hW},${hy - ny * hW}`}
        fill={color}
      />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" fill={color} fontSize="12" fontWeight="700">
          {label}
        </text>
      )}
    </g>
  );
}

const profile = {
  meta: {
    id: "svg-colisiones-2d",
    leafId: "colisiones-2d",
    title: {
      es: "Colisiones 2D",
      en: "2D collisions",
    },
    subtitle: {
      es: "Conservacion por componentes en el plano XY",
      en: "Component-wise conservation in the XY plane",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "colisiones-2d",
    graphId: "svg-colisiones-2d",
    purpose: {
      es: "Presentar el balance de momento cuando la colision se lee en dos dimensiones.",
      en: "Present the momentum balance when the collision is read in two dimensions.",
    },
    level: {
      es: "universidad inicial",
      en: "early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "theta1", "theta2"],
    derivedMagnitudes: ["p1x", "p1y", "p2x", "p2y", "pTotX", "pTotY", "pTot", "v1i", "v1fx", "v1fy", "v2fx", "v2fy"],
    targetCandidates: ["v1fx", "v1fy", "v2fx", "v2fy", "v1i", "m1"],
    equations: ["p = mv", "px = mv cos θ", "py = mv sin θ"],
    hypotheses: ["lectura plana del choque", "sistema aislado"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["proyeccion plana simplificada", "cuerpo 2 en reposo inicial"],
    alwaysVisible: ["p1x", "p1y", "p2x", "p2y", "pTotX", "pTotY"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 660,
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
        default: 5,
        label: { es: "Velocidad m1 (m/s)", en: "Speed m1 (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 10,
        step: 0.5,
      },
      {
        key: "theta1",
        default: 30,
        label: { es: "Angulo salida m1 (°)", en: "Exit angle m1 (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -90,
        max: 90,
        step: 5,
      },
      {
        key: "theta2",
        default: -45,
        label: { es: "Angulo salida m2 (°)", en: "Exit angle m2 (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -90,
        max: 90,
        step: 5,
      },
    ],
    derivations: {
      p1x: ({ m1, v1, theta1 }) => safeNum(m1, 2) * safeNum(v1, 5) * Math.cos(safeNum(theta1, 30) * DEG),
      p1y: ({ m1, v1, theta1 }) => safeNum(m1, 2) * safeNum(v1, 5) * Math.sin(safeNum(theta1, 30) * DEG),
      // m2 parte del reposo; sus velocidades finales se derivan de la conservacion
      // Para la visualizacion: v2_out se obtiene de conservacion con theta2 libre como slider
      p2x: ({ m2, m1, v1, theta1, theta2 }) => {
        const p_total_x = safeNum(m1, 2) * safeNum(v1, 5); // m2 en reposo → tot px = m1*v1
        const p1x = safeNum(m1, 2) * safeNum(v1, 5) * Math.cos(safeNum(theta1, 30) * DEG);
        return p_total_x - p1x;
      },
      p2y: ({ m1, v1, theta1 }) => {
        const p1y = safeNum(m1, 2) * safeNum(v1, 5) * Math.sin(safeNum(theta1, 30) * DEG);
        return -p1y; // conservacion en y (m2 estaba en reposo)
      },
      pTotX: ({ m1, v1 }) => safeNum(m1, 2) * safeNum(v1, 5), // constante = m1*v1 (m2 en reposo)
      pTotY: () => 0,
      pTot: ({ pTotX, pTotY }) => Math.sqrt(safeNum(pTotX, 0) ** 2 + safeNum(pTotY, 0) ** 2),
      v1i: ({ v1 }) => safeNum(v1, 5),
      v1fx: ({ p1x, m1 }) => {
        const mass = safeNum(m1, 2);
        return mass > 0 ? safeNum(p1x, 0) / mass : 0;
      },
      v1fy: ({ p1y, m1 }) => {
        const mass = safeNum(m1, 2);
        return mass > 0 ? safeNum(p1y, 0) / mass : 0;
      },
      v2fx: ({ p2x, m2 }) => {
        const mass = safeNum(m2, 3);
        return mass > 0 ? safeNum(p2x, 0) / mass : 0;
      },
      v2fy: ({ p2y, m2 }) => {
        const mass = safeNum(m2, 3);
        return mass > 0 ? safeNum(p2y, 0) / mass : 0;
      },
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Conservación vectorial", en: "Vector conservation" },
      highlight: "\\vec{p}_{tot,i} = \\vec{p}_{tot,f}",
      highlightColor: "#34d399",
      description: {
        es: "El momento total se conserva independientemente en los ejes x e y.",
        en: "Total momentum is conserved independently on the x and y axes.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura de salida", en: "Output reading" },
      lines: ({ p, lang }) => [
        `p_{1x} = ${fmt(safeNum(p?.p1x, 0), 2, lang)} kg m/s`,
        `p_{1y} = ${fmt(safeNum(p?.p1y, 0), 2, lang)} kg m/s`,
      ],
      result: ({ p, lang }) => `v_{1x} = ${fmt(safeNum(p?.v1fx, 0), 2, lang)} m/s`,
      resultColor: "#38bdf8",
    },
    {
      key: "symmetry",
      label: { es: "Simetría Y", en: "Y Symmetry" },
      bg: "rgba(248,113,113,0.10)",
      border: "rgba(248,113,113,0.18)",
      description: {
        es: "Como el sistema inicial no tenía momento en Y, la suma final debe ser nula.",
        en: "Since the initial system had no Y momentum, the final sum must be zero.",
      },
      highlight: "p_{1y} + p_{2y} = 0",
      highlightColor: "#f87171",
    },
  ],
  motion: { type: SVG_MOTION_TYPES.CUSTOM, tMax: 1, loop: false, state: () => ({}) },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 2);
    const m2 = safeNum(p?.m2, 3);
    const v1 = safeNum(p?.v1, 5);
    const theta1 = safeNum(p?.theta1, 30);
    const theta2 = safeNum(p?.theta2, -45);

    const p_total_x = m1 * v1; // m2 en reposo → pTot_x = m1*v1
    const p1x = m1 * v1 * Math.cos(theta1 * DEG);
    const p1y = m1 * v1 * Math.sin(theta1 * DEG);
    const p2x = p_total_x - p1x;
    const p2y = -p1y;

    // m2: velocidad reconstruida desde su momento
    const p2mag = Math.sqrt(p2x * p2x + p2y * p2y);
    const v2mag = m2 > 0 ? p2mag / m2 : 0;

    const cx = 480;
    const cy = 280;
    const SC = 18; // escala píxeles por (kg·m/s)

    const v2x = cx + p2x * SC;
    const v2y = cy - p2y * SC; // SVG y-axis invertido
    const v1x = cx + p1x * SC;
    const v1y = cy - p1y * SC;
    const vtotx = cx + p_total_x * SC;
    const vtoty = cy;

    // Rayo entrante izquierda
    const inX = cx - m1 * v1 * SC;

    return (
      <g>
        <defs>
          <linearGradient id="col2dBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0a1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#col2dBg)" />

        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Colision 2D — diagrama de momento" : "2D Collision — momentum diagram"}
        </text>
        <text x="480" y="74" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? "m2 parte del reposo. Los angulos de salida determinan el reparto de momento."
            : "m2 starts at rest. Exit angles determine how momentum is shared."}
        </text>

        {/* Ejes */}
        <line x1="120" y1={cy} x2="840" y2={cy} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <line x1={cx} y1="110" x2={cx} y2="450" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <text x="844" y={cy + 5} fill="rgba(255,255,255,0.45)" fontSize="12">x</text>
        <text x={cx + 5} y="106" fill="rgba(255,255,255,0.45)" fontSize="12">y</text>

        {/* Punto de impacto */}
        <circle cx={cx} cy={cy} r="10" fill="rgba(255,255,255,0.18)" stroke="#e2e8f0" strokeWidth="2" />

        {/* Momento entrante m1 antes del choque */}
        <Arrow x1={inX} y1={cy} x2={cx - 4} y2={cy} color="#60a5fa"
          label={`p_in = ${fmt(m1 * v1, 1, lang)} kg·m/s`} labelSide="top" />

        {/* Momento salida m1 */}
        <Arrow x1={cx} y1={cy} x2={v1x} y2={v1y} color="#38bdf8"
          label={`p1 = ${fmt(Math.sqrt(p1x * p1x + p1y * p1y), 1, lang)}`} labelSide="top" />

        {/* Momento salida m2 */}
        <Arrow x1={cx} y1={cy} x2={v2x} y2={v2y} color="#f87171"
          label={`p2 = ${fmt(p2mag, 1, lang)}`} labelSide="top" />

        {/* Momento total (siempre horizontal p_total_x) */}
        <Arrow x1={cx} y1={cy + 30} x2={vtotx} y2={vtoty + 30} color="#34d399"
          label={`Σp = ${fmt(p_total_x, 1, lang)}`} labelSide="top" />

        {/* Panel de componentes */}
        <rect x="100" y="398" width="760" height="128" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

        {/* Columna p1 */}
        <text x="200" y="422" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700">
          p1 ({isEs ? "salida m1" : "m1 out"})
        </text>
        <text x="200" y="444" textAnchor="middle" fill="#bae6fd" fontSize="12">
          x: {fmt(p1x, 2, lang)} kg·m/s
        </text>
        <text x="200" y="462" textAnchor="middle" fill="#bae6fd" fontSize="12">
          y: {fmt(p1y, 2, lang)} kg·m/s
        </text>
        <text x="200" y="482" textAnchor="middle" fill="#7dd3fc" fontSize="12">
          θ1 = {fmt(theta1, 0, lang)}°
        </text>

        {/* Columna p2 */}
        <text x="480" y="422" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="700">
          p2 ({isEs ? "salida m2" : "m2 out"})
        </text>
        <text x="480" y="444" textAnchor="middle" fill="#fecaca" fontSize="12">
          x: {fmt(p2x, 2, lang)} kg·m/s
        </text>
        <text x="480" y="462" textAnchor="middle" fill="#fecaca" fontSize="12">
          y: {fmt(p2y, 2, lang)} kg·m/s
        </text>
        <text x="480" y="482" textAnchor="middle" fill="#fca5a5" fontSize="12">
          v2 = {fmt(v2mag, 2, lang)} m/s
        </text>

        {/* Columna Σp */}
        <text x="760" y="422" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">
          Σp ({isEs ? "total" : "total"})
        </text>
        <text x="760" y="444" textAnchor="middle" fill="#86efac" fontSize="12">
          x: {fmt(p_total_x, 2, lang)} kg·m/s
        </text>
        <text x="760" y="462" textAnchor="middle" fill="#86efac" fontSize="12">
          y: 0 kg·m/s
        </text>
        <text x="760" y="484" textAnchor="middle" fill="rgba(52,211,153,0.75)" fontSize="11">
          {isEs ? "conservado" : "conserved"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "theta1", "theta2"],
    stateOut: ["p1x", "p1y", "p2x", "p2y", "pTotX", "pTotY", "pTot", "v1i", "v1fx", "v1fy", "v2fx", "v2fy"],
    target: "v1fx",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se conserva el momento lineal por componentes en un choque bidimensional?",
      en: "How is linear momentum conserved by components in a two-dimensional collision?",
    },
    magnitud_estrella: "v1fx",
  },
};

export default profile;
