// frontend/src/v2/components/SVG/profiles/ecuacion-de-bernoulli.svg.profile.jsx
//
// Profile SVG para: ecuacion-de-bernoulli (Nivel 5 v5)
// Escena: tubo con cambio de cota y sección + línea de energía + línea piezométrica
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
const EPS = 1e-9;

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
    id: "svg-ecuacion-de-bernoulli",
    leafId: "ecuacion-de-bernoulli",
    title: {
      es: "Ecuación de Bernoulli",
      en: "Bernoulli's Equation",
    },
    subtitle: {
      es: "Línea de energía y línea piezométrica en un tramo con cambio de sección y cota",
      en: "Energy line and piezometric line over a reach with section and elevation change",
    },
    graph_identity: "bernoulli-energy-line",
    pregunta_principal: {
      es: "¿Cómo se redistribuye la energía mecánica entre presión, velocidad y altura a lo largo de una línea de corriente?",
      en: "How is mechanical energy redistributed among pressure, velocity, and height along a streamline?",
    },
    magnitud_estrella: "H",
    interpretation_binding: {
      formula: "head",
      target: "H",
    },
    magnitud_visual: {
      H: "energy-line-y",
      p: "pressure-bar-height",
      v: "velocity-arrow-length",
      z: "elevation-bar-height",
    },
  },


  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 500",
  svgHeight: 560,

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  /* ── Parámetros del simulador ─────────────────────────────────────── */
  params: {
    schema: [
      {
        key: "rho",
        aliases: ["densidad", "density"],
        default: 1000,
        label: { es: "Densidad ρ (kg/m³)", en: "Density ρ (kg/m³)" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 15000,
        step: 10,
        decimals: 0,
      },
      {
        key: "p1",
        aliases: ["p", "presion", "presion_1"],
        default: 200000,
        label: { es: "p₁ entrada (Pa)", en: "p₁ inlet (Pa)" },
        unit: "Pa",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1000000,
        step: 5000,
        decimals: 0,
      },
      {
        key: "v1",
        aliases: ["v", "velocidad", "velocidad_1"],
        default: 2,
        label: { es: "v₁ entrada (m/s)", en: "v₁ inlet (m/s)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 50,
        step: 0.1,
        decimals: 1,
      },
      {
        key: "z1",
        aliases: ["z", "cota", "cota_1"],
        default: 0,
        label: { es: "z₁ cota entrada (m)", en: "z₁ inlet elevation (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 50,
        step: 0.5,
        decimals: 1,
      },
      {
        key: "A1",
        aliases: ["A1", "a1"],
        default: 0.05,
        label: { es: "A₁ entrada (m²)", en: "A₁ inlet (m²)" },
        unit: "m²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.001,
        max: 1,
        step: 0.005,
        decimals: 3,
      },
      {
        key: "A2",
        aliases: ["A2", "a2"],
        default: 0.02,
        label: { es: "A₂ salida (m²)", en: "A₂ outlet (m²)" },
        unit: "m²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.001,
        max: 1,
        step: 0.005,
        decimals: 3,
      },
      {
        key: "z2",
        aliases: ["z2", "cota_2"],
        default: 3,
        label: { es: "z₂ cota salida (m)", en: "z₂ outlet elevation (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 50,
        step: 0.5,
        decimals: 1,
      },
    ],
    derivations: {
      // Conservación en punto 2 (Bernoulli ideal): v2 = v1 * A1/A2
      v2: ({ v1, A1, A2 }) =>
        safeNum(v1, 2) * (safeNum(A1, 0.05) / Math.max(safeNum(A2, 0.02), EPS)),
      // p2 = p1 + ½ρ(v1²−v2²) + ρg(z1−z2)
      p2: ({ rho, p1, v1, A1, A2, z1, z2 }) => {
        const g = 9.81;
        const _v1 = safeNum(v1, 2);
        const _v2 = _v1 * (safeNum(A1, 0.05) / Math.max(safeNum(A2, 0.02), EPS));
        return (
          safeNum(p1, 200000) +
          0.5 * safeNum(rho, 1000) * (_v1 * _v1 - _v2 * _v2) +
          safeNum(rho, 1000) * g * (safeNum(z1, 0) - safeNum(z2, 3))
        );
      },
    },
  },

  /* ── Tarjetas de información ─────────────────────────────────────── */
  infoCards: [
    {
      key: "energia",
      label: { es: "Altura de energía", en: "Energy head" },
      lines: ({ p: params, lang }) => {
        const g    = 9.81;
        const rho  = safeNum(params?.rho, 1000);
        const p1   = safeNum(params?.p1,  200000);
        const v1   = safeNum(params?.v1,  2);
        const z1   = safeNum(params?.z1,  0);
        const A1   = Math.max(safeNum(params?.A1, 0.05),  EPS);
        const A2   = Math.max(safeNum(params?.A2, 0.02),  EPS);
        const z2   = safeNum(params?.z2,  3);
        const v2   = v1 * (A1 / A2);
        const p2   = p1 + 0.5 * rho * (v1 * v1 - v2 * v2) + rho * g * (z1 - z2);
        const H1   = p1 / (rho * g) + v1 * v1 / (2 * g) + z1;
        const H2   = p2 / (rho * g) + v2 * v2 / (2 * g) + z2;
        return [
          `H₁ = ${fmt(H1, 2, lang)} m`,
          `H₂ = ${fmt(H2, 2, lang)} m`,
          `|H₁ - H₂| = ${fmt(Math.abs(H1 - H2), 3, lang)} m`,
        ];
      },
      result: ({ p: params, lang }) => {
        const g   = 9.81;
        const rho = safeNum(params?.rho, 1000);
        const p1  = safeNum(params?.p1,  200000);
        const v1  = safeNum(params?.v1,  2);
        const z1  = safeNum(params?.z1,  0);
        const H1  = p1 / (rho * g) + v1 * v1 / (2 * g) + z1;
        return `H = ${fmt(H1, 2, lang)} m`;
      },
      resultColor: "#facc15",
    },
    {
      key: "velocidades",
      label: { es: "Velocidades", en: "Velocities" },
      lines: ({ p: params, lang }) => {
        const v1 = safeNum(params?.v1, 2);
        const A1 = Math.max(safeNum(params?.A1, 0.05), EPS);
        const A2 = Math.max(safeNum(params?.A2, 0.02), EPS);
        const v2 = v1 * (A1 / A2);
        return [
          `v₁ = ${fmt(v1, 2, lang)} m/s`,
          `v₂ = ${fmt(v2, 2, lang)} m/s`,
        ];
      },
      result: ({ p: params, lang }) => {
        const v1 = safeNum(params?.v1, 2);
        const A1 = Math.max(safeNum(params?.A1, 0.05), EPS);
        const A2 = Math.max(safeNum(params?.A2, 0.02), EPS);
        return `v₂ = ${fmt(v1 * A1 / A2, 2, lang)} m/s`;
      },
      resultColor: "#818cf8",
    },
  ],

  /* ── Render SVG ───────────────────────────────────────────────────── */
  render({ params: rawParams = {}, lang = "es" }) {
    const g = 9.81;

    const rho = clamp(safeNum(rawParams?.rho, 1000),    1,     15000);
    const p1  = clamp(safeNum(rawParams?.p1,  200000),  0,     1e6);
    const v1  = clamp(safeNum(rawParams?.v1,  2),       0.01,  50);
    const z1  = clamp(safeNum(rawParams?.z1,  0),      -20,    50);
    const A1  = clamp(safeNum(rawParams?.A1,  0.05),    0.001, 1);
    const A2  = clamp(safeNum(rawParams?.A2,  0.02),    0.001, 1);
    const z2  = clamp(safeNum(rawParams?.z2,  3),      -20,    50);

    const v2  = v1 * (A1 / Math.max(A2, EPS));
    const p2  = p1 + 0.5 * rho * (v1 * v1 - v2 * v2) + rho * g * (z1 - z2);
    const p2s = Math.max(0, p2);   // presión no puede ser negativa (límite visual)

    const H1  = p1  / (rho * g) + v1 * v1 / (2 * g) + z1;
    const H2  = p2s / (rho * g) + v2 * v2 / (2 * g) + z2;

    // Alturas piezométricas
    const Hpz1 = p1  / (rho * g) + z1;
    const Hpz2 = p2s / (rho * g) + z2;

    const decSep = lang === "en" ? "." : ",";
    const fL = (n, d = 2) =>
      Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-";

    const W = 920;
    const H = 500;

    // ── Layout ───────────────────────────────────────────────────────
    // Punt de referencia SVG: y=400 ≡ z=0; escala: 20 px/m de cota
    const SCALE_Z = 16;   // px por metro de cota
    const REF_Y   = 360;  // y_svg para z = 0

    const toSvgY = (zVal) => REF_Y - zVal * SCALE_Z;

    // Posiciones en X del tubo
    const x1  = 90;
    const xM  = W / 2;
    const x2  = W - 100;

    // Centros en Y de las secciones
    const cy1 = toSvgY(z1);
    const cy2 = toSvgY(z2);

    // Radios visuales proporcionales al área (raíz cuadrada)
    const rScale = 55;
    const r1 = clamp(Math.sqrt(A1) * rScale, 8, 50);
    const r2 = clamp(Math.sqrt(A2) * rScale, 6, 40);

    // ── Líneas de energía (y_svg) ─────────────────────────────────────
    const yH1   = toSvgY(H1);
    const yH2   = toSvgY(H2);
    const yPz1  = toSvgY(Hpz1);
    const yPz2  = toSvgY(Hpz2);

    // ── Escala representativa: máx 8 columnas de presión ─────────────
    const pBar  = clamp(p1 / (rho * g) * SCALE_Z, 0, 140);   // px
    const pBar2 = clamp(p2s / (rho * g) * SCALE_Z, 0, 140);  // px
    const vBar1 = clamp(v1 * v1 / (2 * g) * SCALE_Z, 0, 80);
    const vBar2 = clamp(v2 * v2 / (2 * g) * SCALE_Z, 0, 80);

    // Colores
    const colorTube  = "#3b82f6";
    const colorFluid = "rgba(59,130,246,0.12)";
    const colorH     = "#facc15";   // línea de energía total
    const colorPz    = "#f472b6";   // línea piezométrica
    const colorVbar  = "#818cf8";   // componente cinética
    const colorPbar  = "#f472b6";   // componente pressión
    const colorZ     = "#34d399";   // componente potencial / cota
    const colorText  = "#e2e8f0";
    const colorMuted = "rgba(226,232,240,0.55)";

    return (
      <g>
        <defs>
          <linearGradient id="bernBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#071520" />
            <stop offset="100%" stopColor="#0c1e30" />
          </linearGradient>
          <marker id="arrowH" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={colorH} />
          </marker>
          <marker id="arrowPz" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={colorPz} />
          </marker>
        </defs>

        {/* Fondo */}
        <rect x="0" y="0" width={W} height={H} fill="url(#bernBg)" />

        {/* Línea de referencia z = 0 */}
        <line x1="30" y1={REF_Y} x2={W - 30} y2={REF_Y}
          stroke="rgba(255,255,255,0.18)" strokeWidth={1} strokeDasharray="8 6" />
        <text x="34" y={REF_Y - 5} fill={colorMuted} fontSize="11" fontWeight="700">z = 0</text>

        {/* ── Tubo: sección 1 ─────────────────────────────────────────── */}
        <line x1={x1} y1={cy1 - r1} x2={xM - 10} y2={cy2 - r2}
          stroke={colorTube} strokeWidth={3} />
        <line x1={x1} y1={cy1 + r1} x2={xM - 10} y2={cy2 + r2}
          stroke={colorTube} strokeWidth={3} />
        {/* Tapas */}
        <line x1={x1} y1={cy1 - r1} x2={x1} y2={cy1 + r1}
          stroke={colorTube} strokeWidth={2.5} strokeDasharray="5 4" />
        {/* ── Tubo: sección 2 ─────────────────────────────────────────── */}
        <line x1={xM + 10} y1={cy2 - r2} x2={x2} y2={cy2 - r2}
          stroke={colorTube} strokeWidth={3} />
        <line x1={xM + 10} y1={cy2 + r2} x2={x2} y2={cy2 + r2}
          stroke={colorTube} strokeWidth={3} />
        <line x1={x2} y1={cy2 - r2} x2={x2} y2={cy2 + r2}
          stroke={colorTube} strokeWidth={2.5} strokeDasharray="5 4" />

        {/* Relleno fluido sección derecha */}
        <rect x={xM + 10} y={cy2 - r2} width={x2 - xM - 10} height={r2 * 2}
          fill={colorFluid} />

        {/* ── Flechas de velocidad ─────────────────────────────────────── */}
        {/* v1 */}
        {[0, 0.45, -0.45].map((frac, i) => (
          <g key={`v1-${i}`}>
            <line
              x1={x1 + 8} y1={cy1 + frac * r1 * 0.6}
              x2={x1 + 8 + Math.min(40 + v1 * 6, 80)}
              stroke={colorZ} strokeWidth={2} />
            <polygon
              points={`${x1 + 8 + Math.min(40 + v1 * 6, 80)},${cy1 + frac * r1 * 0.6} ${x1 + 8 + Math.min(40 + v1 * 6, 80) - 8},${cy1 + frac * r1 * 0.6 - 5} ${x1 + 8 + Math.min(40 + v1 * 6, 80) - 8},${cy1 + frac * r1 * 0.6 + 5}`}
              fill={colorZ} />
          </g>
        ))}
        {/* v2 */}
        {[0, 0.45, -0.45].map((frac, i) => (
          <g key={`v2-${i}`}>
            <line
              x1={xM + 15} y1={cy2 + frac * r2 * 0.6}
              x2={xM + 15 + Math.min(35 + v2 * 5, 80)}
              stroke={colorVbar} strokeWidth={2} />
            <polygon
              points={`${xM + 15 + Math.min(35 + v2 * 5, 80)},${cy2 + frac * r2 * 0.6} ${xM + 15 + Math.min(35 + v2 * 5, 80) - 8},${cy2 + frac * r2 * 0.6 - 5} ${xM + 15 + Math.min(35 + v2 * 5, 80) - 8},${cy2 + frac * r2 * 0.6 + 5}`}
              fill={colorVbar} />
          </g>
        ))}

        {/* ── DIAGRAMA DE COLUMNAS en punto 1 ─────────────────────────── */}
        {/* Columna cota z1 */}
        <rect x={x1 - 60} y={toSvgY(z1)} width={14} height={clamp(z1 * SCALE_Z, 0, 500)}
          fill={colorZ} opacity={0.7} />
        {/* Columna presión p1/(ρg) */}
        <rect x={x1 - 44} y={toSvgY(z1) - pBar} width={14} height={pBar}
          fill={colorPbar} opacity={0.7} />
        {/* Columna cinética v1²/(2g) */}
        <rect x={x1 - 28} y={toSvgY(z1) - pBar - vBar1} width={14} height={vBar1}
          fill={colorVbar} opacity={0.7} />

        {/* ── DIAGRAMA DE COLUMNAS en punto 2 ─────────────────────────── */}
        {/* Columna cota z2 */}
        <rect x={x2 + 10} y={toSvgY(z2)} width={14} height={clamp(z2 * SCALE_Z, 0, 500)}
          fill={colorZ} opacity={0.7} />
        {/* Columna presión p2/(ρg) */}
        <rect x={x2 + 26} y={toSvgY(z2) - pBar2} width={14} height={pBar2}
          fill={colorPbar} opacity={0.7} />
        {/* Columna cinética v2²/(2g) */}
        <rect x={x2 + 42} y={toSvgY(z2) - pBar2 - vBar2} width={14} height={vBar2}
          fill={colorVbar} opacity={0.7} />

        {/* ── LÍNEA DE ENERGÍA H = cte ─────────────────────────────────── */}
        <line
          x1={x1} y1={yH1}
          x2={x2} y2={yH2}
          stroke={colorH} strokeWidth={2.5}
          markerEnd="url(#arrowH)"
        />
        <text x={x1 + (x2 - x1) / 2 - 20} y={Math.min(yH1, yH2) - 8}
          fill={colorH} fontSize="12" fontWeight="900">
          {tt(lang, "Línea de energía (H)", "Energy line (H)")}
        </text>

        {/* ── LÍNEA PIEZOMÉTRICA p/(ρg)+z ──────────────────────────────── */}
        <line
          x1={x1} y1={yPz1}
          x2={x2} y2={yPz2}
          stroke={colorPz} strokeWidth={2}
          strokeDasharray="7 4"
          markerEnd="url(#arrowPz)"
        />
        <text x={x1 + (x2 - x1) / 2 - 28} y={Math.max(yPz1, yPz2) + 16}
          fill={colorPz} fontSize="11" fontWeight="700">
          {tt(lang, "Línea piezométrica", "Piezometric line")}
        </text>

        {/* ── Etiquetas numéricas ─────────────────────────────────────── */}
        {/* Punto 1 */}
        <text x={x1 - 4} y={cy1 - r1 - 10} fill={colorText} fontSize="12" fontWeight="900" textAnchor="middle">1</text>
        <text x={x1 - 72} y={toSvgY(z1) + 4}  fill={colorZ}    fontSize="11"  textAnchor="end">z₁={fL(z1, 1)} m</text>
        <text x={x1 - 72} y={toSvgY(z1) - pBar / 2} fill={colorPbar} fontSize="11" textAnchor="end">p₁={fL(p1 / 1000, 0)} kPa</text>
        <text x={x1 + 4} y={cy1 + r1 + 16} fill={colorZ}    fontSize="11" fontWeight="800">v₁={fL(v1, 2)} m/s</text>

        {/* Punto 2 */}
        <text x={x2 + 6} y={cy2 - r2 - 10} fill={colorText} fontSize="12" fontWeight="900">2</text>
        <text x={x2 + 62} y={toSvgY(z2) + 4}  fill={colorZ}    fontSize="11">z₂={fL(z2, 1)} m</text>
        <text x={x2 + 62} y={toSvgY(z2) - pBar2 / 2} fill={colorPbar} fontSize="11">p₂={fL(p2s / 1000, 0)} kPa</text>
        <text x={x2 + 6} y={cy2 + r2 + 16} fill={colorVbar}  fontSize="11" fontWeight="800">v₂={fL(v2, 2)} m/s</text>

        {/* ── Panel H ──────────────────────────────────────────────────── */}
        <rect x={W / 2 - 105} y={14} width={210} height={62}
          rx="8" fill="rgba(0,0,0,0.55)" stroke={`${colorH}55`} strokeWidth={1} />
        <text x={W / 2} y={34} fill={colorH} fontSize="12" fontWeight="900" textAnchor="middle">
          H = {fL(H1, 3)} m
        </text>
        <text x={W / 2} y={52} fill={colorMuted} fontSize="11" textAnchor="middle">
          H₁={fL(H1, 2)} m  ·  H₂={fL(H2, 2)} m
        </text>
        <text x={W / 2} y={68} fill={colorMuted} fontSize="11" textAnchor="middle">
          {tt(lang, "Conservación: |H₁-H₂| =", "Conservation: |H₁-H₂| =")} {fL(Math.abs(H1 - H2), 3)} m
        </text>

        {/* Leyenda inferior */}
        <rect x={12} y={H - 36}  width={10} height={10} fill={colorZ}    opacity={0.8} />
        <text x={26} y={H - 27} fill={colorZ}    fontSize="11">{tt(lang, "cota z", "elevation z")}</text>
        <rect x={80} y={H - 36}  width={10} height={10} fill={colorPbar} opacity={0.8} />
        <text x={94} y={H - 27} fill={colorPbar} fontSize="11">p/(ρg)</text>
        <rect x={148} y={H - 36} width={10} height={10} fill={colorVbar} opacity={0.8} />
        <text x={162} y={H - 27} fill={colorVbar} fontSize="11">v²/(2g)</text>
        <line x1={238} y1={H - 31} x2={268} y2={H - 31} stroke={colorH} strokeWidth={2.5} />
        <text x={272} y={H - 27} fill={colorH} fontSize="11">{tt(lang, "energía H", "energy H")}</text>
        <line x1={340} y1={H - 31} x2={370} y2={H - 31} stroke={colorPz} strokeWidth={2} strokeDasharray="5 3" />
        <text x={374} y={H - 27} fill={colorPz} fontSize="11">{tt(lang, "piezométrica", "piezometric")}</text>
      </g>
    );
  },
};

export default profile;
