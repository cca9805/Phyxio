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

// Flecha SVG con punta y etiqueta
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

// Dibuja un arco de ángulo entre dos ángulos (en grados), centrado en (cx,cy)
function AngleArc({ cx, cy, r, a1Deg, a2Deg, color, label }) {
  const a1 = a1Deg * DEG;
  const a2 = a2Deg * DEG;
  const x1 = cx + r * Math.cos(a1);
  const y1 = cy - r * Math.sin(a1); // SVG: y invertido
  const x2 = cx + r * Math.cos(a2);
  const y2 = cy - r * Math.sin(a2);
  const largeArc = Math.abs(a2Deg - a1Deg) > 180 ? 1 : 0;
  const sweep = a2Deg > a1Deg ? 0 : 1; // sentido antihorario en SVG
  const d = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`;
  const midA = ((a1Deg + a2Deg) / 2) * DEG;
  const lx = cx + (r + 16) * Math.cos(midA);
  const ly = cy - (r + 16) * Math.sin(midA);
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" fill={color} fontSize="11" fontWeight="600">
          {label}
        </text>
      )}
    </g>
  );
}

const profile = {
  meta: {
    id: "svg-dispersion-angular-en-colisiones-2d",
    leafId: "dispersion-angular-en-colisiones-2d",
    title: {
      es: "Dispersion angular en colisiones 2D",
      en: "Angular scattering in 2D collisions",
    },
    subtitle: {
      es: "Angulos de salida y reparto de momento",
      en: "Scattering angles and momentum partition",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "dispersion-angular-en-colisiones-2d",
    graphId: "svg-dispersion-angular-en-colisiones-2d",
    purpose: {
      es: "Apoyar la lectura del balance de momento cuando aparecen angulos de salida en 2D, con enfasis en los angulos de dispersion.",
      en: "Support the reading of momentum balance when output angles appear in 2D, emphasizing scattering angles.",
    },
    level: {
      es: "universidad inicial",
      en: "early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "theta1", "theta2"],
    derivedMagnitudes: ["p1x", "p1y", "p2x", "p2y", "pTotX", "pTotY", "v1f"],
    targetCandidates: ["v1f"],
    equations: ["p = mv", "px = mv cos θ", "py = mv sin θ", "Σpx_f = Σpx_i", "Σpy_f = 0"],
    hypotheses: ["m2 en reposo inicial", "sistema aislado"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["proyeccion plana del intercambio de momento", "angulos de salida como parametros libres"],
    alwaysVisible: ["p1x", "p1y", "p2x", "p2y", "theta1", "theta2"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 660,
  params: {
    schema: [
      {
        key: "m1",
        default: 2,
        label: { es: "Masa m1 (kg)", en: "Mass m1 (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "m2",
        default: 3,
        label: { es: "Masa m2 (kg)", en: "Mass m2 (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "v1",
        default: 5,
        label: { es: "Velocidad m1 inicial (m/s)", en: "Initial speed m1 (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 12,
        step: 0.5,
      },
      {
        key: "theta1",
        default: 35,
        label: { es: "Angulo salida m1 θ1 (°)", en: "Exit angle m1 θ1 (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -85,
        max: 85,
        step: 5,
      },
      {
        key: "theta2",
        default: -40,
        label: { es: "Angulo salida m2 θ2 (°)", en: "Exit angle m2 θ2 (°)" },
        unit: "°",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -85,
        max: 85,
        step: 5,
      },
    ],
    derivations: {
      p1x: ({ m1, v1, theta1 }) => safeNum(m1, 2) * safeNum(v1, 5) * Math.cos(safeNum(theta1, 35) * DEG),
      p1y: ({ m1, v1, theta1 }) => safeNum(m1, 2) * safeNum(v1, 5) * Math.sin(safeNum(theta1, 35) * DEG),
      p2x: ({ m1, v1, theta1 }) => {
        const pTotX = safeNum(m1, 2) * safeNum(v1, 5);
        return pTotX - safeNum(m1, 2) * safeNum(v1, 5) * Math.cos(safeNum(theta1, 35) * DEG);
      },
      p2y: ({ m1, v1, theta1 }) => -(safeNum(m1, 2) * safeNum(v1, 5) * Math.sin(safeNum(theta1, 35) * DEG)),
      pTotX: ({ m1, v1 }) => safeNum(m1, 2) * safeNum(v1, 5),
      pTotY: () => 0,
      v1f: ({ v1 }) => safeNum(v1, 5),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "p'_{x, tot} = p_{x, tot}",
      highlightColor: "#34d399",
      description: {
        es: "El momento lineal total se reparte en dos dimensiones tras la colisión.",
        en: "Total linear momentum is partitioned in two dimensions after collision.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `p_{x, tot} = ${fmt(safeNum(p?.pTotX, 0), 2, lang)} kg m/s`,
        `θ_1 = ${fmt(safeNum(p?.theta1, 35), 0, lang)}°`,
      ],
      result: ({ p, lang }) => `v_{1f} = ${fmt(safeNum(p?.v1f, 0), 2, lang)} m/s`,
      resultColor: "#38bdf8",
    },
    {
      key: "symmetry",
      label: { es: "Dirección", en: "Direction" },
      bg: "rgba(248,113,113,0.10)",
      border: "rgba(248,113,113,0.18)",
      description: {
        es: "La masa m2 debe salir en una dirección que compense el momento vertical de m1.",
        en: "Mass m2 must exit in a direction that balances m1's vertical momentum.",
      },
      highlight: "Σp_y = 0",
      highlightColor: "#f87171",
    },
  ],
  motion: { type: SVG_MOTION_TYPES.NONE },
  render: ({ p, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 2);
    const m2 = safeNum(p?.m2, 3);
    const v1 = safeNum(p?.v1, 5);
    const theta1 = safeNum(p?.theta1, 35);
    const theta2 = safeNum(p?.theta2, -40);

    const pTotX = m1 * v1; // m2 en reposo → pTot_x = m1*v1
    const p1x = m1 * v1 * Math.cos(theta1 * DEG);
    const p1y = m1 * v1 * Math.sin(theta1 * DEG);
    const p2x = pTotX - p1x;
    const p2y = -p1y; // conservacion en y

    const p1mag = Math.sqrt(p1x * p1x + p1y * p1y);
    const p2mag = Math.sqrt(p2x * p2x + p2y * p2y);
    const v2mag = m2 > 0 ? p2mag / m2 : 0;

    const cx = 480;
    const cy = 280;
    const SC = 18;

    // Extremos de las flechas
    const v1ExX = cx + p1x * SC;
    const v1ExY = cy - p1y * SC;
    const v2ExX = cx + p2x * SC;
    const v2ExY = cy - p2y * SC;
    const vtotX = cx + pTotX * SC;
    const inX = cx - pTotX * SC;

    // ángulo real de salida m2 (derivado de conservación, no del slider theta2)
    const theta2_real = p2mag > 0.01 ? Math.atan2(-p2y, p2x) / DEG : theta2;

    return (
      <g>
        <defs>
          <linearGradient id="dispBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0a1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#dispBg)" />

        {/* Título */}
        <text x="480" y="44" textAnchor="middle" fill="#ffffff" fontSize="25" fontWeight="800">
          {isEs ? "Dispersión angular — colisión 2D" : "Angular scattering — 2D collision"}
        </text>
        <text x="480" y="70" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs
            ? "m2 parte del reposo. θ1 y θ2 determinan el reparto de momento."
            : "m2 starts at rest. θ1 and θ2 determine the momentum partition."}
        </text>

        {/* Ejes */}
        <line x1="100" y1={cy} x2="860" y2={cy} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1={cx} y1="100" x2={cx} y2="460" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <text x="864" y={cy + 5} fill="rgba(255,255,255,0.4)" fontSize="12">x</text>
        <text x={cx + 5} y="96" fill="rgba(255,255,255,0.4)" fontSize="12">y</text>

        {/* Punto de impacto */}
        <circle cx={cx} cy={cy} r="10" fill="rgba(255,255,255,0.15)" stroke="#e2e8f0" strokeWidth="2" />

        {/* Momento entrante m1 antes del choque */}
        <Arrow x1={inX} y1={cy} x2={cx - 6} y2={cy} color="#60a5fa"
          label={`p_in = ${fmt(m1 * v1, 1, lang)}`} labelSide="top" />

        {/* Momento salida m1 */}
        <Arrow x1={cx} y1={cy} x2={v1ExX} y2={v1ExY} color="#38bdf8"
          label={`p1=${fmt(p1mag, 1, lang)}`} labelSide="top" />

        {/* Momento salida m2 */}
        <Arrow x1={cx} y1={cy} x2={v2ExX} y2={v2ExY} color="#f87171"
          label={`p2=${fmt(p2mag, 1, lang)}`} labelSide="top" />

        {/* Momento total horizontal */}
        <Arrow x1={cx} y1={cy + 32} x2={vtotX} y2={cy + 32} color="#34d399"
          label={`Σp = ${fmt(pTotX, 1, lang)}`} labelSide="top" />

        {/* Arco ángulo θ1 (entre eje x y p1) */}
        {Math.abs(theta1) > 2 && (
          <AngleArc cx={cx} cy={cy} r={52} a1Deg={0} a2Deg={theta1}
            color="#38bdf8" label={`θ1=${fmt(Math.abs(theta1), 0, lang)}°`} />
        )}

        {/* Arco ángulo θ2_real (entre eje x y p2, por debajo) */}
        {p2mag > 0.2 && Math.abs(theta2_real) > 2 && (
          <AngleArc cx={cx} cy={cy} r={70} a1Deg={0} a2Deg={theta2_real}
            color="#f87171" label={`θ2=${fmt(Math.abs(theta2_real), 0, lang)}°`} />
        )}

        {/* Panel de datos */}
        <rect x="100" y="390" width="760" height="148" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

        {/* Columna p1 */}
        <text x="200" y="416" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700">
          p1 ({isEs ? "salida m1" : "m1 out"})
        </text>
        <text x="200" y="436" textAnchor="middle" fill="#bae6fd" fontSize="12">
          px: {fmt(p1x, 2, lang)} kg·m/s
        </text>
        <text x="200" y="454" textAnchor="middle" fill="#bae6fd" fontSize="12">
          py: {fmt(p1y, 2, lang)} kg·m/s
        </text>
        <text x="200" y="474" textAnchor="middle" fill="#7dd3fc" fontSize="12">
          θ1 = {fmt(theta1, 0, lang)}°
        </text>
        <text x="200" y="492" textAnchor="middle" fill="#7dd3fc" fontSize="12">
          |p1| = {fmt(p1mag, 2, lang)} kg·m/s
        </text>

        {/* Columna p2 */}
        <text x="480" y="416" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="700">
          p2 ({isEs ? "salida m2" : "m2 out"})
        </text>
        <text x="480" y="436" textAnchor="middle" fill="#fecaca" fontSize="12">
          px: {fmt(p2x, 2, lang)} kg·m/s
        </text>
        <text x="480" y="454" textAnchor="middle" fill="#fecaca" fontSize="12">
          py: {fmt(p2y, 2, lang)} kg·m/s
        </text>
        <text x="480" y="474" textAnchor="middle" fill="#fca5a5" fontSize="12">
          θ2 = {fmt(theta2_real, 1, lang)}°
        </text>
        <text x="480" y="492" textAnchor="middle" fill="#fca5a5" fontSize="12">
          v2 = {fmt(v2mag, 2, lang)} m/s
        </text>

        {/* Columna balance */}
        <text x="760" y="416" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">
          {isEs ? "Balance Σp" : "Σp balance"}
        </text>
        <text x="760" y="436" textAnchor="middle" fill="#86efac" fontSize="12">
          Σpx = {fmt(pTotX, 2, lang)} kg·m/s
        </text>
        <text x="760" y="454" textAnchor="middle" fill="#86efac" fontSize="12">
          Σpy = 0 kg·m/s ✓
        </text>
        <text x="760" y="474" textAnchor="middle" fill="rgba(52,211,153,0.7)" fontSize="11">
          {isEs ? "conservado" : "conserved"}
        </text>
        <text x="760" y="492" textAnchor="middle" fill="rgba(52,211,153,0.55)" fontSize="10">
          {isEs ? "m2 en reposo inicial" : "m2 initially at rest"}
        </text>

        {/* Línea divisoria */}
        <line x1="340" y1="400" x2="340" y2="526" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="620" y1="400" x2="620" y2="526" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        <text x="480" y="524" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">
          {isEs
            ? "Los ángulos de salida son independientes para θ1; θ2 se deriva de la conservación."
            : "Exit angles: θ1 is free; θ2 is derived from momentum conservation."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "theta1", "theta2"],
    stateOut: ["p1x", "p1y", "p2x", "p2y", "pTotX", "pTotY", "v1f"],
    target: "v1f",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué relación existe entre el ángulo de dispersión y las masas en colisiones bidimensionales?",
      en: "What is the relationship between the scattering angle and the masses in two-dimensional collisions?",
    },
    magnitud_estrella: "v1f",
  },
};

export default profile;
