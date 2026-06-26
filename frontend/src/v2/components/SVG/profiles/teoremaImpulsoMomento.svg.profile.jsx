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

/* ── Pulso de fuerza tipo campana: F(t) = Fmax · exp(−((t−tc)/σ)²) ── */
const forcePulse = (t, Fmax, tc, sigma) =>
  Fmax * Math.exp(-(Math.pow((t - tc) / sigma, 2)));

const profile = {
  meta: {
    id: "svg-teorema-impulso-momento",
    leafId: "impulso",
    title: {
      es: "Teorema impulso-momento",
      en: "Impulse-Momentum Theorem",
    },
    subtitle: {
      es: "J = ∫F dt = Δp — el área bajo F(t) es la variación de momento",
      en: "J = ∫F dt = Δp — the area under F(t) equals the momentum change",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "impulso",
    graphId: "svg-teorema-impulso-momento",
    purpose: {
      es: "Visualizar cómo el área bajo la curva F(t) produce el cambio de momento lineal.",
      en: "Visualize how the area under the F(t) curve produces the change in linear momentum.",
    },
    level: {
      es: "ESO | bachillerato",
      en: "secondary | high school",
    },
    expectedInputs: ["m", "vi", "Fmax", "dt"],
    derivedMagnitudes: ["pi", "J", "pf", "vf", "Fmed"],
    targetCandidates: ["J", "pf", "Fmed"],
    equations: ["J = ∫F dt = Δp", "Fmed = Δp/Δt", "pf = pi + J"],
    hypotheses: ["masa constante", "una dimensión"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["pulso gaussiano como modelo de fuerza variable"],
    alwaysVisible: ["J", "pi", "pf"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 600",
  svgHeight: 660,
  params: {
    schema: [
      {
        key: "m",
        default: 2,
        label: { es: "Masa m", en: "Mass m" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "vi",
        default: 1,
        label: { es: "Velocidad inicial v_i", en: "Initial velocity v_i" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -6,
        max: 6,
        step: 0.25,
      },
      {
        key: "Fmax",
        default: 12,
        label: { es: "Fuerza pico F_máx", en: "Peak force F_max" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 40,
        step: 1,
      },
      {
        key: "dt",
        default: 0.8,
        label: { es: "Duración Δt", en: "Duration Δt" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.2,
        max: 2.0,
        step: 0.1,
      },
    ],
    derivations: {
      pi: ({ m, vi }) => safeNum(m, 2) * safeNum(vi, 1),
      J: ({ Fmax, dt }) => {
        // Integral gaussiana: ∫ Fmax·exp(−(t/σ)²) dt ≈ Fmax·σ·√π
        const sigma = safeNum(dt, 0.8) / 2;
        return safeNum(Fmax, 12) * sigma * Math.sqrt(Math.PI);
      },
      pf: ({ pi, J }) => safeNum(pi, 0) + safeNum(J, 0),
      vf: ({ m, pf }) => safeNum(pf, 0) / Math.max(safeNum(m, 2), 0.1),
      Fmed: ({ J, dt }) => safeNum(J, 0) / Math.max(safeNum(dt, 0.8), 0.01),
    },
  },
  infoCards: [
    {
      key: "theorem",
      label: { es: "Teorema", en: "Theorem" },
      highlight: "J = ∫F dt = Δp",
      highlightColor: "#fde68a",
      description: {
        es: "El impulso (área bajo la curva F–t) iguala la variación del momento lineal.",
        en: "The impulse (area under the F–t curve) equals the change in linear momentum.",
      },
    },
    {
      key: "Fmed",
      label: { es: "Fuerza media", en: "Average force" },
      highlight: "F_med = Δp / Δt",
      highlightColor: "#f9a8d4",
      description: {
        es: "Un rectángulo de altura F_med y base Δt tiene la misma área que el pulso real.",
        en: "A rectangle of height F_avg and width Δt has the same area as the actual pulse.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `p_i = ${fmt(safeNum(p?.pi, 0), 2, lang)} kg·m/s`,
        `J = ${fmt(safeNum(p?.J, 0), 2, lang)} N·s`,
      ],
      result: ({ p, lang }) => `p_f = ${fmt(safeNum(p?.pf, 0), 2, lang)} kg·m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const m = safeNum(p?.m, 2);
      const vi = safeNum(p?.vi, 1);
      const Fmax = safeNum(p?.Fmax, 12);
      const dtParam = safeNum(p?.dt, 0.8);
      const sigma = dtParam / 2;
      const tc = 2.5; // centro del pulso en la animación
      const J = Fmax * sigma * Math.sqrt(Math.PI);
      const vf = vi + J / Math.max(m, 0.1);

      let x, phase, cursorT;
      if (t < tc - dtParam) {
        // Antes del pulso: velocidad vi
        phase = "before";
        x = -4 + vi * t;
        cursorT = t;
      } else if (t <= tc + dtParam) {
        // Durante el pulso: velocidad sube linealmente de vi a vf
        phase = "during";
        const xStart = -4 + vi * (tc - dtParam);
        const elapsed = t - (tc - dtParam);
        const T = 2 * dtParam;
        // Integral exacta de v(τ) = vi + (vf−vi)·τ/T
        x = xStart + vi * elapsed + (vf - vi) * elapsed * elapsed / (2 * T);
        cursorT = t;
      } else {
        // Después del pulso: velocidad constante vf
        phase = "after";
        const xStart = -4 + vi * (tc - dtParam);
        const T = 2 * dtParam;
        const xEnd = xStart + (vi + vf) / 2 * T;
        x = xEnd + vf * (t - (tc + dtParam));
        cursorT = t;
      }
      x = Math.max(-5, Math.min(5, x));
      return { x, phase, cursorT, tc, dtParam };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m = safeNum(p?.m, 2);
    const vi = safeNum(p?.vi, 1);
    const Fmax = safeNum(p?.Fmax, 12);
    const dtParam = safeNum(p?.dt, 0.8);
    const sigma = dtParam / 2;
    const tc = 2.5;

    const J = Fmax * sigma * Math.sqrt(Math.PI);
    const pi = m * vi;
    const pf = pi + J;
    const vf = pf / Math.max(m, 0.1);
    const Fmed = J / Math.max(dtParam, 0.01);
    const phase = state?.phase ?? "before";

    /* ── Zona superior: cuerpo animado ── */
    const posToX = (xPhys) => Math.max(100, Math.min(860, 480 + xPhys * 62));
    const bodyX = posToX(safeNum(state?.x, -4));
    const bodyW = Math.max(50, Math.min(100, 30 + m * 5));
    const bodyH = 50;
    const scaleV = (v) => Math.max(-200, Math.min(200, v * 20));
    const curV = phase === "after" ? vf : vi;

    /* ── Zona inferior: curva F(t) y área ── */
    const gLeft = 140, gRight = 820, gTop = 340, gBottom = 520;
    const gW = gRight - gLeft, gH = gBottom - gTop;
    const tMin = 0, tMax = 5;
    const fScale = Math.max(Fmax, 1);
    const tToX = (t) => gLeft + ((t - tMin) / (tMax - tMin)) * gW;
    const fToY = (f) => gBottom - (f / (fScale * 1.25)) * gH;

    // Generar puntos de la curva F(t)
    const nPts = 120;
    const curvePts = [];
    const areaPts = [`${tToX(tc - 2 * sigma)},${gBottom}`];
    for (let i = 0; i <= nPts; i++) {
      const tSample = tMin + (i / nPts) * (tMax - tMin);
      const fVal = forcePulse(tSample, Fmax, tc, sigma);
      curvePts.push(`${tToX(tSample)},${fToY(fVal)}`);
      if (Math.abs(tSample - tc) <= 2.5 * sigma) {
        areaPts.push(`${tToX(tSample)},${fToY(fVal)}`);
      }
    }
    areaPts.push(`${tToX(tc + 2 * sigma)},${gBottom}`);

    // Cursor temporal
    const cursorT = safeNum(state?.cursorT, 0);
    const cursorX = tToX(Math.min(Math.max(cursorT, tMin), tMax));

    return (
      <g>
        <defs>
          <linearGradient id="timBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#14172a" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="600" rx="18" fill="url(#timBg)" />

        {/* Título */}
        <text x="480" y="42" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {isEs ? "Teorema impulso-momento" : "Impulse-Momentum Theorem"}
        </text>
        <text x="480" y="66" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="13">
          {isEs ? "J = ∫F dt = Δp" : "J = ∫F dt = Δp"}
        </text>

        {/* ── Eje horizontal del cuerpo ── */}
        <line x1="100" y1="200" x2="860" y2="200" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

        {/* Cuerpo */}
        <rect
          x={bodyX - bodyW / 2} y={200 - bodyH}
          width={bodyW} height={bodyH} rx="10"
          fill={phase === "during" ? "rgba(251,191,36,0.28)" : "rgba(96,165,250,0.22)"}
          stroke={phase === "during" ? "#fbbf24" : "#93c5fd"}
          strokeWidth="2.5"
        />
        <text x={bodyX} y={200 - bodyH / 2 + 5} textAnchor="middle"
          fill="#dbeafe" fontSize="12" fontWeight="700">
          m = {fmt(m, 1, lang)} kg
        </text>

        {/* Flecha velocidad */}
        {Math.abs(curV) > 0.01 && (
          <SvgArrow
            x1={bodyX} y1={200 - bodyH - 16}
            x2={bodyX + scaleV(curV)} y2={200 - bodyH - 16}
            color={phase === "after" ? "#34d399" : "#60a5fa"}
            label={phase === "after"
              ? `v_f = ${fmt(vf, 2, lang)} m/s`
              : `v_i = ${fmt(vi, 2, lang)} m/s`}
          />
        )}

        {/* Flecha fuerza durante pulso */}
        {phase === "during" && (
          <SvgArrow
            x1={bodyX} y1={200 + 10}
            x2={bodyX + scaleV(Fmax / m) * 0.6} y2={200 + 10}
            color="#fbbf24"
            label={`F`}
          />
        )}

        {/* Panel de momentos */}
        <rect x="110" y="224" width="340" height="80" rx="10"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <text x="130" y="248" fill="#93c5fd" fontSize="12" fontWeight="700">
          p_i = {fmt(pi, 2, lang)} kg·m/s
        </text>
        <text x="130" y="270" fill="#34d399" fontSize="12" fontWeight="700">
          p_f = {fmt(pf, 2, lang)} kg·m/s
        </text>
        <text x="130" y="292" fill="#fbbf24" fontSize="12" fontWeight="700">
          Δp = J = {fmt(J, 2, lang)} N·s
        </text>

        <rect x="510" y="224" width="340" height="80" rx="10"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <text x="530" y="248" fill="#f472b6" fontSize="12" fontWeight="700">
          F_med = {fmt(Fmed, 1, lang)} N
        </text>
        <text x="530" y="270" fill="rgba(255,255,255,0.55)" fontSize="12">
          {isEs
            ? `Δt = ${fmt(dtParam, 2, lang)} s  ·  F_máx = ${fmt(Fmax, 1, lang)} N`
            : `Δt = ${fmt(dtParam, 2, lang)} s  ·  F_max = ${fmt(Fmax, 1, lang)} N`}
        </text>
        <text x="530" y="292" fill="rgba(255,255,255,0.45)" fontSize="11">
          {isEs ? "F_med·Δt = J (mismo impulso)" : "F_avg·Δt = J (same impulse)"}
        </text>

        {/* ── Gráfica F(t) ── */}
        {/* Ejes */}
        <line x1={gLeft} y1={gBottom} x2={gRight} y2={gBottom}
          stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
        <line x1={gLeft} y1={gTop} x2={gLeft} y2={gBottom}
          stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
        <text x={gRight + 10} y={gBottom + 4} fill="rgba(255,255,255,0.45)" fontSize="11">t (s)</text>
        <text x={gLeft - 8} y={gTop - 6} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize="11">F (N)</text>

        {/* Graduaciones t */}
        {[0, 1, 2, 3, 4, 5].map((t) => (
          <g key={`t${t}`}>
            <line x1={tToX(t)} y1={gBottom} x2={tToX(t)} y2={gBottom + 5}
              stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <text x={tToX(t)} y={gBottom + 17} textAnchor="middle"
              fill="rgba(255,255,255,0.35)" fontSize="10">
              {t}
            </text>
          </g>
        ))}

        {/* Área sombreada = impulso */}
        <polygon
          points={areaPts.join(" ")}
          fill="rgba(251,191,36,0.18)" stroke="none"
        />

        {/* Curva F(t) */}
        <polyline
          points={curvePts.join(" ")}
          fill="none" stroke="#fbbf24" strokeWidth="2.5"
        />

        {/* Línea F_med punteada */}
        <line
          x1={tToX(tc - dtParam)} y1={fToY(Fmed)}
          x2={tToX(tc + dtParam)} y2={fToY(Fmed)}
          stroke="#f472b6" strokeWidth="1.5" strokeDasharray="6,4"
        />
        <text x={tToX(tc + dtParam) + 6} y={fToY(Fmed) + 4}
          fill="#f472b6" fontSize="11">
          F_med
        </text>

        {/* Cursor temporal */}
        <line x1={cursorX} y1={gTop} x2={cursorX} y2={gBottom}
          stroke="rgba(255,255,255,0.30)" strokeWidth="1" strokeDasharray="3,3" />

        {/* Etiqueta área = J */}
        <text x={tToX(tc)} y={fToY(Fmax * 0.45)} textAnchor="middle"
          fill="#fde68a" fontSize="14" fontWeight="700">
          {isEs ? "Área = J" : "Area = J"}
        </text>
        <text x={tToX(tc)} y={fToY(Fmax * 0.45) + 18} textAnchor="middle"
          fill="#fde68a" fontSize="12">
          = {fmt(J, 2, lang)} N·s
        </text>

        {/* Leyenda inferior */}
        <text x="480" y="555" textAnchor="middle" fill="rgba(255,255,255,0.50)" fontSize="12">
          {isEs
            ? "El impulso (área bajo F(t)) es igual a la variación del momento lineal Δp = p_f − p_i"
            : "The impulse (area under F(t)) equals the change in linear momentum Δp = p_f − p_i"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m", "vi", "Fmax", "dt"],
    stateOut: ["pi", "J", "pf", "vf", "Fmed"],
    target: "J",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se relaciona el impulso neto con la variación del momento lineal?",
      en: "How is net impulse related to the change in linear momentum?",
    },
    magnitud_estrella: "J",
  },
};

export default profile;
