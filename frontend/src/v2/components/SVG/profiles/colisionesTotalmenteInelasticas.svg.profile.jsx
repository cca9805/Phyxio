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
    id: "svg-colisiones-totalmente-inelasticas",
    leafId: "colisiones-totalmente-inelasticas",
    title: {
      es: "Colisiones totalmente inelasticas",
      en: "Perfectly inelastic collisions",
    },
    subtitle: {
      es: "Los cuerpos quedan unidos y comparten velocidad final (e = 0)",
      en: "Bodies stick together and share a common final velocity (e = 0)",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "colisiones-totalmente-inelasticas",
    graphId: "svg-colisiones-totalmente-inelasticas",
    purpose: {
      es: "Mostrar el movimiento comun posterior cuando los cuerpos quedan unidos.",
      en: "Show the common post-collision motion when the bodies stick together.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2"],
    derivedMagnitudes: ["p1", "p2", "pTot", "vf", "KE_lost", "DeltaK"],
    targetCandidates: ["vf", "DeltaK"],
    equations: ["p = mv", "vf = (m1*v1 + m2*v2) / (m1 + m2)"],
    hypotheses: ["choque totalmente inelastico (e=0)", "sistema aislado"],
    validityDomain: ["union posterior de los cuerpos"],
    visualSimplifications: ["dos cuerpos ideales", "lectura sobre un eje"],
    alwaysVisible: ["p1", "p2", "pTot", "vf"],
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
      vf: ({ m1, m2, v1, v2 }) => {
        const M = safeNum(m1, 2) + safeNum(m2, 3);
        return M > 0
          ? (safeNum(m1, 2) * safeNum(v1, 4) + safeNum(m2, 3) * safeNum(v2, -1)) / M
          : 0;
      },
      KE_lost: ({ m1, m2, v1, v2, vf }) => {
        const KE_b = 0.5 * safeNum(m1, 2) * safeNum(v1, 4) ** 2 + 0.5 * safeNum(m2, 3) * safeNum(v2, -1) ** 2;
        const M = safeNum(m1, 2) + safeNum(m2, 3);
        const KE_a = 0.5 * M * safeNum(vf, 0) ** 2;
        return KE_b - KE_a;
      },
      DeltaK: ({ KE_lost }) => safeNum(KE_lost, 0),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "v_f = (m_1 v_1 + m_2 v_2)/(m_1 + m_2)",
      highlightColor: "#93c5fd",
      description: {
        es: "En una colisión totalmente inelástica, los cuerpos se mueven como un solo bloque.",
        en: "In a perfectly inelastic collision, bodies move as a single block.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `M = ${fmt(safeNum(p?.m1, 2) + safeNum(p?.m2, 3), 1, lang)} kg`,
        `p_tot = ${fmt(safeNum(p?.pTot, 0), 2, lang)} kg·m/s`,
      ],
      result: ({ p, lang }) => `v_f = ${fmt(safeNum(p?.vf, 0), 2, lang)} m/s`,
      resultColor: "#c4b5fd",
    },
    {
      key: "energy",
      label: { es: "Energía", en: "Energy" },
      bg: "rgba(245,158,11,0.10)",
      border: "rgba(245,158,11,0.18)",
      description: {
        es: "Se pierde la máxima energía posible compatible con la conservación de p.",
        en: "The maximum possible energy compatible with p conservation is lost.",
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
      const vf = M > 0 ? (m1 * v1 + m2 * v2) / M : 0;
      const tImpact = 1.5;
      const clamp = (x) => Math.max(-5.5, Math.min(5.5, x));
      let x1, x2, phase;
      if (t < tImpact) {
        x1 = clamp(-4 + v1 * t);
        x2 = clamp(4 + v2 * t);
        phase = "before";
      } else {
        // Después del impacto ambos viajan juntos como bloque unido
        const dt = t - tImpact;
        const xImpact = (-4 + v1 * tImpact + 4 + v2 * tImpact) / 2;
        x1 = clamp(xImpact + vf * dt);
        x2 = x1; // unidos
        phase = "after";
      }
      return { x1, x2, phase };
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
    const vf = M > 0 ? pTot / M : 0;
    const KE_b = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
    const KE_a = 0.5 * M * vf * vf;
    const KE_lost = KE_b - KE_a;
    const phase = state?.phase ?? "before";

    const posToX = (xPhys) => Math.max(100, Math.min(860, 480 + xPhys * 62));
    const x1px = posToX(safeNum(state?.x1, -4));
    const x2px = posToX(safeNum(state?.x2, 4));
    const blockX = (x1px + x2px) / 2;
    const scale = (v) => Math.max(-200, Math.min(200, v * 22));

    return (
      <g>
        <defs>
          <linearGradient id="tInelasticBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#110811" />
            <stop offset="100%" stopColor="#201030" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#tInelasticBg)" />

        <text x="480" y="52" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Colision totalmente inelastica" : "Perfectly inelastic collision"}
        </text>
        <text x="480" y="79" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="13">
          {isEs ? "e = 0 — los cuerpos quedan unidos con velocidad comun vf"
               : "e = 0 — bodies stick together with common velocity vf"}
        </text>

        <line x1="100" y1="340" x2="860" y2="340" stroke="rgba(255,255,255,0.22)" strokeWidth="3" />

        {phase === "before" ? (
          <>
            {/* Cuerpo 1 separado */}
            <rect x={x1px - 40} y="284" width="80" height="56" rx="10"
              fill="rgba(96,165,250,0.28)" stroke="#93c5fd" strokeWidth="2.5" />
            <text x={x1px} y="318" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">
              m1={fmt(m1, 1, lang)}
            </text>
            <SvgArrow x1={x1px} y1={268} x2={x1px + scale(v1)} y2={268} color="#60a5fa"
              label={`v1=${fmt(v1, 2, lang)}`} />

            {/* Cuerpo 2 separado */}
            <rect x={x2px - 40} y="284" width="80" height="56" rx="10"
              fill="rgba(248,113,113,0.26)" stroke="#fca5a5" strokeWidth="2.5" />
            <text x={x2px} y="318" textAnchor="middle" fill="#fee2e2" fontSize="13" fontWeight="800">
              m2={fmt(m2, 1, lang)}
            </text>
            <SvgArrow x1={x2px} y1={268} x2={x2px + scale(v2)} y2={268} color="#f87171"
              label={`v2=${fmt(v2, 2, lang)}`} />
          </>
        ) : (
          <>
            {/* Bloque unido después del impacto */}
            <rect x={blockX - 56} y="275" width="112" height="65" rx="12"
              fill="rgba(167,139,250,0.28)" stroke="#c4b5fd" strokeWidth="3" />
            <text x={blockX} y="306" textAnchor="middle" fill="#ede9fe" fontSize="13" fontWeight="800">
              M={fmt(M, 1, lang)} kg
            </text>
            <text x={blockX} y="326" textAnchor="middle" fill="#ddd6fe" fontSize="11">
              m1 + m2
            </text>
            <SvgArrow x1={blockX} y1={260} x2={blockX + scale(vf)} y2={260} color="#a78bfa"
              label={`vf=${fmt(vf, 2, lang)} m/s`} />
          </>
        )}

        {/* Panel de momentos */}
        <rect x="110" y="376" width="740" height="130" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" />

        <text x="200" y="400" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="700">p1</text>
        <SvgArrow x1={200} y1={420} x2={200 + scale(p1 / 2)} y2={420} color="#60a5fa" label="" />
        <text x="200" y="450" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">
          {fmt(p1, 2, lang)} kg·m/s
        </text>

        <text x="480" y="400" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="700">p2</text>
        <SvgArrow x1={480} y1={420} x2={480 + scale(p2 / 2)} y2={420} color="#f87171" label="" />
        <text x="480" y="450" textAnchor="middle" fill="#fee2e2" fontSize="13" fontWeight="800">
          {fmt(p2, 2, lang)} kg·m/s
        </text>

        <text x="760" y="400" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">Σp = p_f</text>
        <SvgArrow x1={760} y1={420} x2={760 + scale(pTot / 2)} y2={420} color="#34d399" label="" />
        <text x="760" y="450" textAnchor="middle" fill="#86efac" fontSize="13" fontWeight="800">
          {fmt(pTot, 2, lang)} kg·m/s
        </text>

        <text x="480" y="490" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="13">
          {isEs ? `EC antes: ${fmt(KE_b, 2, lang)} J  ·  EC despues: ${fmt(KE_a, 2, lang)} J`
               : `KE before: ${fmt(KE_b, 2, lang)} J  ·  KE after: ${fmt(KE_a, 2, lang)} J`}
        </text>
        <text x="480" y="530" textAnchor="middle" fill="#fbbf24" fontSize="12">
          {isEs ? `Energia disipada maxima: ${fmt(KE_lost, 2, lang)} J`
               : `Maximum energy dissipated: ${fmt(KE_lost, 2, lang)} J`}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2"],
    stateOut: ["p1", "p2", "pTot", "vf", "KE_lost", "DeltaK"],
    target: "vf",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuál es la velocidad final conjunta cuando dos cuerpos quedan unidos tras el choque?",
      en: "What is the joint final velocity when two bodies stick together after the collision?",
    },
    magnitud_estrella: "vf",
  },
};

export default profile;
