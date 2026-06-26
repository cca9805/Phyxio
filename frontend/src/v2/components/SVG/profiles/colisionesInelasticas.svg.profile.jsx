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
    id: "svg-colisiones-inelasticas",
    leafId: "colisiones-inelasticas",
    title: {
      es: "Colisiones inelasticas",
      en: "Inelastic collisions",
    },
    subtitle: {
      es: "Se conserva el momento y se disipa energia (0 < e < 1)",
      en: "Momentum is conserved while energy is dissipated (0 < e < 1)",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "colisiones-inelasticas",
    graphId: "svg-colisiones-inelasticas",
    purpose: {
      es: "Mostrar que el momento total se mantiene aunque la colision disipe energia.",
      en: "Show that total momentum remains while the collision dissipates energy.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2", "e"],
    derivedMagnitudes: ["p1", "p2", "pTot", "v1f", "v2f", "KE_lost", "DeltaK"],
    targetCandidates: ["v1f", "e", "v2f", "DeltaK"],
    equations: ["p = mv", "v1f = vcm + e*(v1-v2)/2", "v2f = vcm - e*(v2-v1)/2"],
    hypotheses: ["choque unidimensional", "sistema aislado", "0 < e < 1"],
    validityDomain: ["0 < e < 1"],
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
      {
        key: "e",
        default: 0.5,
        label: { es: "Coef. de restitucion e", en: "Restitution coeff. e" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.01,
        max: 0.99,
        step: 0.01,
      },
    ],
    derivations: {
      p1: ({ m1, v1 }) => safeNum(m1, 2) * safeNum(v1, 4),
      p2: ({ m2, v2 }) => safeNum(m2, 3) * safeNum(v2, -1),
      pTot: ({ p1, p2 }) => safeNum(p1, 0) + safeNum(p2, 0),
      v1f: ({ m1, m2, v1, v2, e }) => {
        const M = safeNum(m1, 2) + safeNum(m2, 3);
        if (M <= 0) return 0;
        const vcm = (safeNum(m1, 2) * safeNum(v1, 4) + safeNum(m2, 3) * safeNum(v2, -1)) / M;
        return vcm + safeNum(e, 0.5) * (safeNum(v1, 4) - safeNum(v2, -1)) * safeNum(m2, 3) / M;
      },
      v2f: ({ m1, m2, v1, v2, e }) => {
        const M = safeNum(m1, 2) + safeNum(m2, 3);
        if (M <= 0) return 0;
        const vcm = (safeNum(m1, 2) * safeNum(v1, 4) + safeNum(m2, 3) * safeNum(v2, -1)) / M;
        return vcm - safeNum(e, 0.5) * (safeNum(v1, 4) - safeNum(v2, -1)) * safeNum(m1, 2) / M;
      },
      KE_lost: ({ m1, m2, v1, v2, v1f, v2f }) => {
        const KE_b = 0.5 * safeNum(m1, 2) * safeNum(v1, 4) ** 2 + 0.5 * safeNum(m2, 3) * safeNum(v2, -1) ** 2;
        const KE_a = 0.5 * safeNum(m1, 2) * safeNum(v1f, 0) ** 2 + 0.5 * safeNum(m2, 3) * safeNum(v2f, 0) ** 2;
        return KE_b - KE_a;
      },
      DeltaK: ({ KE_lost }) => safeNum(KE_lost, 0),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "\\Delta K = K_i - K_f",
      highlightColor: "#fcd34d",
      description: {
        es: "En una colisión inelástica se conserva p pero se pierde energía cinética.",
        en: "In an inelastic collision, p is conserved but kinetic energy is lost.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `m1 = ${fmt(safeNum(p?.m1, 2), 1, lang)} kg`,
        `m2 = ${fmt(safeNum(p?.m2, 3), 1, lang)} kg`,
        `e = ${fmt(safeNum(p?.e, 0.5), 2, lang)}`,
      ],
      result: ({ p, lang }) => `ΔK = ${fmt(safeNum(p?.KE_lost, 0), 2, lang)} J`,
      resultColor: "#fbbf24",
    },
    {
      key: "restitution",
      label: { es: "Restitución", en: "Restitution" },
      bg: "rgba(245,158,11,0.10)",
      border: "rgba(245,158,11,0.18)",
      description: {
        es: "El coeficiente e determina qué fracción de la velocidad relativa se recupera.",
        en: "The coefficient e determines what fraction of the relative velocity is recovered.",
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
      const e = safeNum(p?.e, 0.5);
      const M = m1 + m2;
      const vcm = M > 0 ? (m1 * v1 + m2 * v2) / M : 0;
      const v1f = vcm + e * (v1 - v2) * m2 / M;
      const v2f = vcm - e * (v1 - v2) * m1 / M;
      const tImpact = 1.5;
      const clamp = (x) => Math.max(-5, Math.min(5, x));
      let x1, x2;
      if (t < tImpact) {
        x1 = clamp(-4 + v1 * t);
        x2 = clamp(4 + v2 * t);
      } else {
        const dt = t - tImpact;
        x1 = clamp(-4 + v1 * tImpact + v1f * dt);
        x2 = clamp(4 + v2 * tImpact + v2f * dt);
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
    const e = safeNum(p?.e, 0.5);
    const M = m1 + m2;
    const p1 = m1 * v1;
    const p2 = m2 * v2;
    const pTot = p1 + p2;
    const vcm = M > 0 ? pTot / M : 0;
    const v1f = vcm + e * (v1 - v2) * m2 / M;
    const v2f = vcm - e * (v1 - v2) * m1 / M;
    const p1f = m1 * v1f;
    const p2f = m2 * v2f;
    const KE_b = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
    const KE_a = 0.5 * m1 * v1f * v1f + 0.5 * m2 * v2f * v2f;
    const KE_lost = KE_b - KE_a;
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
          <linearGradient id="inelasticBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f0c19" />
            <stop offset="100%" stopColor="#1c1030" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#inelasticBg)" />

        <text x="480" y="52" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Colision inelastica" : "Inelastic collision"}
        </text>
        <text x="480" y="79" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="13">
          {isEs
            ? `Coef. restitucion e = ${fmt(e, 2, lang)} — el momento se conserva, la energia no`
            : `Restitution coeff. e = ${fmt(e, 2, lang)} — momentum conserved, energy dissipated`}
        </text>

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

        {/* Energia disipada */}
        <text x="480" y="490" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="13">
          {isEs ? `EC antes: ${fmt(KE_b, 2, lang)} J  ·  EC despues: ${fmt(KE_a, 2, lang)} J`
               : `KE before: ${fmt(KE_b, 2, lang)} J  ·  KE after: ${fmt(KE_a, 2, lang)} J`}
        </text>
        <text x="480" y="530" textAnchor="middle" fill="#fbbf24" fontSize="12">
          {isEs ? `Energia disipada: ${fmt(KE_lost, 2, lang)} J`
               : `Energy dissipated: ${fmt(KE_lost, 2, lang)} J`}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2", "e"],
    stateOut: ["p1", "p2", "pTot", "v1f", "v2f", "KE_lost", "DeltaK"],
    target: "v1f",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuánta energía cinética se pierde en un choque que conserva momento pero disipa energía?",
      en: "How much kinetic energy is lost in a collision that conserves momentum but dissipates energy?",
    },
    magnitud_estrella: "v1f",
  },
};

export default profile;
