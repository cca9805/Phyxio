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
    id: "svg-colisiones-elasticas",
    leafId: "colisiones-elasticas",
    title: {
      es: "Colisiones elasticas",
      en: "Elastic collisions",
    },
    subtitle: {
      es: "Se conservan momento lineal y energia cinetica",
      en: "Momentum and kinetic energy are conserved",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "colisiones-elasticas",
    graphId: "svg-colisiones-elasticas",
    purpose: {
      es: "Leer el intercambio de momento manteniendo energia cinetica total constante.",
      en: "Read the momentum exchange while keeping total kinetic energy constant.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2"],
    derivedMagnitudes: ["p1", "p2", "pTot", "v1f", "v2f", "KE_before", "KE_after"],
    targetCandidates: ["v1f", "v2f", "m1"],
    equations: ["p = mv", "v1f = (m1-m2)/(m1+m2)*v1 + 2m2/(m1+m2)*v2", "v2f = 2m1/(m1+m2)*v1 + (m2-m1)/(m1+m2)*v2"],
    hypotheses: ["choque unidimensional", "sistema aislado", "e=1"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["dos cuerpos ideales", "lectura sobre un eje"],
    alwaysVisible: ["p1", "p2", "pTot"],
  }),
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
        default: 4,
        label: { es: "Velocidad v1 (inicial)", en: "Speed v1 (initial)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
      {
        key: "v2",
        default: -1,
        label: { es: "Velocidad v2 (inicial)", en: "Speed v2 (initial)" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
    ],
    derivations: {
      p1: ({ m1, v1 }) => safeNum(m1, 2) * safeNum(v1, 4),
      p2: ({ m2, v2 }) => safeNum(m2, 3) * safeNum(v2, -1),
      pTot: ({ p1, p2 }) => safeNum(p1, 0) + safeNum(p2, 0),
      v1f: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 2) + safeNum(m2, 3);
        return M > 0
          ? ((safeNum(m1, 2) - safeNum(m2, 3)) * safeNum(v1, 4) + 2 * safeNum(m2, 3) * safeNum(v2, -1)) / M
          : 0;
      },
      v2f: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 2) + safeNum(m2, 3);
        return M > 0
          ? (2 * safeNum(m1, 2) * safeNum(v1, 4) + (safeNum(m2, 3) - safeNum(m1, 2)) * safeNum(v2, -1)) / M
          : 0;
      },
      KE_before: ({ m1, m2, v1, v2 }) =>
        0.5 * safeNum(m1, 2) * safeNum(v1, 4) ** 2 + 0.5 * safeNum(m2, 3) * safeNum(v2, -1) ** 2,
      KE_after: ({ m1, m2, v1f, v2f }) =>
        0.5 * safeNum(m1, 2) * safeNum(v1f, 0) ** 2 + 0.5 * safeNum(m2, 3) * safeNum(v2f, 0) ** 2,
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "v_{1f} = f(m_1, m_2, v_{1i}, v_{2i})",
      highlightColor: "#93c5fd",
      description: {
        es: "En una colisión elástica se conservan tanto p como K.",
        en: "In an elastic collision, both p and K are conserved.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `m1 = ${fmt(safeNum(p?.m1, 2), 1, lang)} kg`,
        `m2 = ${fmt(safeNum(p?.m2, 3), 1, lang)} kg`,
        `v1i = ${fmt(safeNum(p?.v1, 4), 2, lang)} m/s`,
        `v2i = ${fmt(safeNum(p?.v2, -1), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v1f = ${fmt(safeNum(p?.v1f, 0), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
    {
      key: "conservation",
      label: { es: "Leyes", en: "Laws" },
      bg: "rgba(16,185,129,0.10)",
      border: "rgba(52,211,153,0.18)",
      description: {
        es: "La energía cinética final es igual a la inicial (e = 1).",
        en: "Final kinetic energy equals initial (e = 1).",
      },
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 4,
    loop: true,
    state: (t, p) => {
      const m1 = safeNum(p?.m1, 2);
      const m2 = safeNum(p?.m2, 3);
      const v1 = safeNum(p?.v1, 4);
      const v2 = safeNum(p?.v2, -1);
      const M = m1 + m2;
      const v1f = M > 0 ? ((m1 - m2) * v1 + 2 * m2 * v2) / M : 0;
      const v2f = M > 0 ? (2 * m1 * v1 + (m2 - m1) * v2) / M : 0;
      // Los cuerpos arrancan a ±4m. Colisionan al encontrarse (simplificado: t=1.5 como impacto)
      const tImpact = 1.5;
      const clamp = (x) => Math.max(-5, Math.min(5, x));
      let x1, x2;
      if (t < tImpact) {
        x1 = clamp(-4 + v1 * t);
        x2 = clamp(4 + v2 * t);
      } else {
        const dt = t - tImpact;
        const xi1 = -4 + v1 * tImpact;
        const xi2 = 4 + v2 * tImpact;
        x1 = clamp(xi1 + v1f * dt);
        x2 = clamp(xi2 + v2f * dt);
      }
      return { x1, x2, phase: t < tImpact ? "before" : "after" };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 2);
    const m2 = safeNum(p?.m2, 3);
    const v1 = safeNum(p?.v1, 4);
    const v2 = safeNum(p?.v2, -1);
    const M = m1 + m2;
    const p1 = m1 * v1;
    const p2 = m2 * v2;
    const pTot = p1 + p2;
    const v1f = M > 0 ? ((m1 - m2) * v1 + 2 * m2 * v2) / M : 0;
    const v2f = M > 0 ? ((2 * m1 * v1 + (m2 - m1) * v2) / M) : 0;
    const p1f = m1 * v1f;
    const p2f = m2 * v2f;
    const KE_b = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
    const KE_a = 0.5 * m1 * v1f * v1f + 0.5 * m2 * v2f * v2f;
    const phase = state?.phase ?? "before";

    const posToX = (xPhys) => Math.max(100, Math.min(860, 480 + xPhys * 62));
    const x1px = posToX(safeNum(state?.x1, -4));
    const x2px = posToX(safeNum(state?.x2, 4));
    const scale = (v) => Math.max(-220, Math.min(220, v * 22));

    const curV1 = phase === "before" ? v1 : v1f;
    const curV2 = phase === "before" ? v2 : v2f;

    return (
      <g>
        <defs>
          <linearGradient id="elasticBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0f2a1a" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#elasticBg)" />

        <text x="480" y="52" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Colision elastica" : "Elastic collision"}
        </text>
        <text x="480" y="79" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="13">
          {isEs ? "p total y energia cinetica se conservan (e = 1)" : "Total momentum and kinetic energy conserved (e = 1)"}
        </text>

        {/* Eje */}
        <line x1="100" y1="340" x2="860" y2="340" stroke="rgba(255,255,255,0.22)" strokeWidth="3" />

        {/* Cuerpo 1 */}
        <rect x={x1px - 40} y="284" width="80" height="56" rx="10"
          fill="rgba(96,165,250,0.26)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x={x1px} y="318" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">
          m1={fmt(m1, 1, lang)}
        </text>
        <SvgArrow x1={x1px} y1={268} x2={x1px + scale(curV1)} y2={268} color="#60a5fa"
          label={`v1=${fmt(curV1, 2, lang)}`} />

        {/* Cuerpo 2 */}
        <rect x={x2px - 40} y="284" width="80" height="56" rx="10"
          fill="rgba(248,113,113,0.24)" stroke="#fca5a5" strokeWidth="2.5" />
        <text x={x2px} y="318" textAnchor="middle" fill="#fee2e2" fontSize="13" fontWeight="800">
          m2={fmt(m2, 1, lang)}
        </text>
        <SvgArrow x1={x2px} y1={268} x2={x2px + scale(curV2)} y2={268} color="#f87171"
          label={`v2=${fmt(curV2, 2, lang)}`} />

        {/* Panel de momentos */}
        <rect x="110" y="376" width="740" height="130" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" />

        <text x="200" y="400" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="700">p1</text>
        <SvgArrow x1={200} y1={420} x2={200 + scale(phase === "before" ? p1 / 2 : p1f / 2)} y2={420} color="#60a5fa" label="" />
        <text x="200" y="450" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">
          {fmt(phase === "before" ? p1 : p1f, 2, lang)} kg·m/s
        </text>

        <text x="480" y="400" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="700">p2</text>
        <SvgArrow x1={480} y1={420} x2={480 + scale(phase === "before" ? p2 / 2 : p2f / 2)} y2={420} color="#f87171" label="" />
        <text x="480" y="450" textAnchor="middle" fill="#fee2e2" fontSize="13" fontWeight="800">
          {fmt(phase === "before" ? p2 : p2f, 2, lang)} kg·m/s
        </text>

        <text x="760" y="400" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">Σp</text>
        <SvgArrow x1={760} y1={420} x2={760 + scale(pTot / 2)} y2={420} color="#34d399" label="" />
        <text x="760" y="450" textAnchor="middle" fill="#86efac" fontSize="13" fontWeight="800">
          {fmt(pTot, 2, lang)} kg·m/s
        </text>

        {/* Energias */}
        <text x="480" y="490" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="13">
          {isEs ? `EC antes: ${fmt(KE_b, 2, lang)} J  ·  EC despues: ${fmt(KE_a, 2, lang)} J`
               : `KE before: ${fmt(KE_b, 2, lang)} J  ·  KE after: ${fmt(KE_a, 2, lang)} J`}
        </text>
        <text x="480" y="530" textAnchor="middle" fill="rgba(52,211,153,0.85)" fontSize="12">
          {isEs ? "La energia cinetica total se mantiene constante (colision perfectamente elastica)"
               : "Total kinetic energy is constant (perfectly elastic collision)"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2"],
    stateOut: ["p1", "p2", "pTot", "v1f", "v2f"],
    target: "v1f",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué velocidades finales resultan cuando se conservan momento lineal y energía cinética?",
      en: "What final velocities result when both momentum and kinetic energy are conserved?",
    },
    magnitud_estrella: "v1f",
  },
};

export default profile;
