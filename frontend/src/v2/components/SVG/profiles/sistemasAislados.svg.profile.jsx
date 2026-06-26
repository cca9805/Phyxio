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
    id: "svg-sistemas-aislados",
    leafId: "sistemas-aislados",
    title: {
      es: "Sistemas aislados",
      en: "Isolated systems",
    },
    subtitle: {
      es: "Si la fuerza externa neta es cero, el momento total se conserva",
      en: "If the net external force is zero, total momentum is conserved",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "sistemas-aislados",
    graphId: "svg-sistemas-aislados",
    purpose: {
      es: "Visualizar cómo la frontera del sistema determina qué fuerzas son internas y que el momento total se conserva cuando el impulso externo es nulo.",
      en: "Visualize how the system boundary determines which forces are internal and that total momentum is conserved when external impulse is zero.",
    },
    level: {
      es: "ESO | bachillerato",
      en: "secondary | high school",
    },
    expectedInputs: ["m1", "m2", "v1i", "v2i"],
    derivedMagnitudes: ["p1i", "p2i", "pTot", "p1f", "p2f", "pTotI", "pTotF", "DeltaPtot"],
    targetCandidates: ["pTotI", "pTotF", "DeltaPtot"],
    equations: ["pTot = m1·v1i + m2·v2i = m1·v1f + m2·v2f"],
    hypotheses: ["F_ext_neta = 0", "1D"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["dos cuerpos, colisión elástica simplificada"],
    alwaysVisible: ["pTot", "p1i", "p2i"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 600",
  svgHeight: 660,
  params: {
    schema: [
      {
        key: "m1",
        default: 3,
        label: { es: "Masa m₁", en: "Mass m₁" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "m2",
        default: 2,
        label: { es: "Masa m₂", en: "Mass m₂" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        key: "v1i",
        default: 4,
        label: { es: "Velocidad v₁ᵢ", en: "Velocity v₁ᵢ" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
      {
        key: "v2i",
        default: -1,
        label: { es: "Velocidad v₂ᵢ", en: "Velocity v₂ᵢ" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
    ],
    derivations: {
      p1i: ({ m1, v1i }) => safeNum(m1, 3) * safeNum(v1i, 4),
      p2i: ({ m2, v2i }) => safeNum(m2, 2) * safeNum(v2i, -1),
      pTot: ({ p1i, p2i }) => safeNum(p1i, 0) + safeNum(p2i, 0),
      // Colisión elástica 1D para las velocidades finales
      v1f: ({ m1, m2, v1i, v2i }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        return M > 0
          ? ((safeNum(m1, 3) - safeNum(m2, 2)) * safeNum(v1i, 4) + 2 * safeNum(m2, 2) * safeNum(v2i, -1)) / M
          : 0;
      },
      v2f: ({ m1, m2, v1i, v2i }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        return M > 0
          ? (2 * safeNum(m1, 3) * safeNum(v1i, 4) + (safeNum(m2, 2) - safeNum(m1, 3)) * safeNum(v2i, -1)) / M
          : 0;
      },
      p1f: ({ m1, v1f }) => safeNum(m1, 3) * safeNum(v1f, 0),
      p2f: ({ m2, v2f }) => safeNum(m2, 2) * safeNum(v2f, 0),
      pTotI: ({ pTot }) => safeNum(pTot, 0),
      pTotF: ({ p1f, p2f }) => safeNum(p1f, 0) + safeNum(p2f, 0),
      DeltaPtot: ({ pTotI, pTotF }) => safeNum(pTotF, 0) - safeNum(pTotI, 0),
    },
  },
  infoCards: [
    {
      key: "conservation",
      label: { es: "Ley de conservación", en: "Conservation law" },
      highlight: "Σp = cte",
      highlightColor: "#fde68a",
      description: {
        es: "Si F_ext,neta = 0, el momento total del sistema no cambia tras la colisión.",
        en: "If F_ext,net = 0, the system's total momentum does not change after the collision.",
      },
    },
    {
      key: "boundary",
      label: { es: "Frontera del sistema", en: "System boundary" },
      highlight: "F_ext = 0",
      highlightColor: "#fbbf24",
      description: {
        es: "La frontera separa fuerzas internas (redistribuyen p) de externas (cambian Σp).",
        en: "The boundary separates internal forces (redistribute p) from external ones (change Σp).",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `p₁ᵢ = ${fmt(safeNum(p?.p1i, 0), 2, lang)} kg·m/s`,
        `p₂ᵢ = ${fmt(safeNum(p?.p2i, 0), 2, lang)} kg·m/s`,
      ],
      result: ({ p, lang }) => `Σp = ${fmt(safeNum(p?.pTot, 0), 2, lang)} kg·m/s`,
      resultColor: "#fbbf24",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const m1 = safeNum(p?.m1, 3);
      const m2 = safeNum(p?.m2, 2);
      const v1i = safeNum(p?.v1i, 4);
      const v2i = safeNum(p?.v2i, -1);
      const M = m1 + m2;
      const v1f = M > 0 ? ((m1 - m2) * v1i + 2 * m2 * v2i) / M : 0;
      const v2f = M > 0 ? (2 * m1 * v1i + (m2 - m1) * v2i) / M : 0;
      const tImpact = 2.0;
      const clamp = (x) => Math.max(-5, Math.min(5, x));
      let x1, x2, phase;
      if (t < tImpact) {
        phase = "before";
        x1 = clamp(-3 + v1i * t * 0.5);
        x2 = clamp(3 + v2i * t * 0.5);
      } else {
        phase = "after";
        const xi1 = -3 + v1i * tImpact * 0.5;
        const xi2 = 3 + v2i * tImpact * 0.5;
        const dt = t - tImpact;
        x1 = clamp(xi1 + v1f * dt * 0.5);
        x2 = clamp(xi2 + v2f * dt * 0.5);
      }
      return { x1, x2, phase };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 3);
    const m2 = safeNum(p?.m2, 2);
    const v1i = safeNum(p?.v1i, 4);
    const v2i = safeNum(p?.v2i, -1);
    const M = m1 + m2;
    const v1f = M > 0 ? ((m1 - m2) * v1i + 2 * m2 * v2i) / M : 0;
    const v2f = M > 0 ? (2 * m1 * v1i + (m2 - m1) * v2i) / M : 0;
    const p1i = m1 * v1i;
    const p2i = m2 * v2i;
    const pTot = p1i + p2i;
    const p1f = m1 * v1f;
    const p2f = m2 * v2f;
    const phase = state?.phase ?? "before";

    const posToX = (xPhys) => Math.max(100, Math.min(860, 480 + xPhys * 62));
    const x1px = posToX(safeNum(state?.x1, -3));
    const x2px = posToX(safeNum(state?.x2, 3));
    const scale = (v) => Math.max(-200, Math.min(200, v * 20));

    const curV1 = phase === "before" ? v1i : v1f;
    const curV2 = phase === "before" ? v2i : v2f;
    const curP1 = phase === "before" ? p1i : p1f;
    const curP2 = phase === "before" ? p2i : p2f;

    // Frontera del sistema (recuadro punteado que encierra ambos cuerpos)
    const bndLeft = Math.min(x1px, x2px) - 70;
    const bndRight = Math.max(x1px, x2px) + 70;

    return (
      <g>
        <defs>
          <linearGradient id="saBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0f1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="600" rx="18" fill="url(#saBg)" />

        {/* Título */}
        <text x="480" y="42" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {isEs ? "Sistema aislado" : "Isolated system"}
        </text>
        <text x="480" y="66" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="13">
          {isEs ? "F_ext = 0  →  Σp = cte" : "F_ext = 0  →  Σp = const"}
        </text>

        {/* ── Frontera del sistema (dashed) ── */}
        <rect
          x={bndLeft} y={110} width={bndRight - bndLeft} height={180} rx="18"
          fill="none" stroke="rgba(251,191,36,0.45)" strokeWidth="2.5" strokeDasharray="12,8"
        />
        <text x={bndLeft + 12} y={130} fill="#fbbf24" fontSize="12" fontWeight="700">
          {isEs ? "FRONTERA DEL SISTEMA" : "SYSTEM BOUNDARY"}
        </text>
        <text x={bndRight - 12} y={130} textAnchor="end" fill="rgba(251,191,36,0.6)" fontSize="11">
          {isEs ? "F_ext,neta = 0" : "F_ext,net = 0"}
        </text>

        {/* Eje */}
        <line x1="100" y1="250" x2="860" y2="250" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

        {/* Cuerpo 1 */}
        <rect
          x={x1px - 40} y={200} width={80} height={50} rx="10"
          fill="rgba(96,165,250,0.24)" stroke="#93c5fd" strokeWidth="2.5"
        />
        <text x={x1px} y={230} textAnchor="middle" fill="#dbeafe" fontSize="12" fontWeight="700">
          m₁={fmt(m1, 1, lang)}
        </text>
        {Math.abs(curV1) > 0.01 && (
          <SvgArrow
            x1={x1px} y1={192} x2={x1px + scale(curV1)} y2={192}
            color="#60a5fa" label={`v₁=${fmt(curV1, 2, lang)}`}
          />
        )}

        {/* Cuerpo 2 */}
        <rect
          x={x2px - 40} y={200} width={80} height={50} rx="10"
          fill="rgba(52,211,153,0.22)" stroke="#6ee7b7" strokeWidth="2.5"
        />
        <text x={x2px} y={230} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="700">
          m₂={fmt(m2, 1, lang)}
        </text>
        {Math.abs(curV2) > 0.01 && (
          <SvgArrow
            x1={x2px} y1={192} x2={x2px + scale(curV2)} y2={192}
            color="#34d399" label={`v₂=${fmt(curV2, 2, lang)}`}
          />
        )}

        {/* Flechas internas durante contacto */}
        {phase === "before" && Math.abs(x1px - x2px) < 130 && (
          <g>
            <SvgArrow x1={x1px + 42} y1={225} x2={x1px + 70} y2={225} color="rgba(248,113,113,0.7)" label="" />
            <SvgArrow x1={x2px - 42} y1={225} x2={x2px - 70} y2={225} color="rgba(248,113,113,0.7)" label="" />
            <text x={(x1px + x2px) / 2} y={218} textAnchor="middle"
              fill="rgba(248,113,113,0.8)" fontSize="10" fontWeight="700">
              {isEs ? "F internas" : "Internal F"}
            </text>
          </g>
        )}

        {/* Etiqueta de fase */}
        <text x="480" y="96" textAnchor="middle" fill={phase === "before" ? "#93c5fd" : "#34d399"}
          fontSize="14" fontWeight="700">
          {phase === "before"
            ? (isEs ? "▶ Estado inicial" : "▶ Initial state")
            : (isEs ? "▶ Estado final" : "▶ Final state")}
        </text>

        {/* ── Panel de momentos ── */}
        <rect x="110" y="320" width="740" height="130" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />

        {/* p1 */}
        <text x="220" y="344" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="700">
          p₁
        </text>
        <SvgArrow x1={220} y1={362} x2={220 + scale(curP1 / 3)} y2={362} color="#60a5fa" label="" />
        <text x="220" y="392" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">
          {fmt(curP1, 2, lang)} kg·m/s
        </text>

        {/* p2 */}
        <text x="480" y="344" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="700">
          p₂
        </text>
        <SvgArrow x1={480} y1={362} x2={480 + scale(curP2 / 3)} y2={362} color="#34d399" label="" />
        <text x="480" y="392" textAnchor="middle" fill="#d1fae5" fontSize="13" fontWeight="800">
          {fmt(curP2, 2, lang)} kg·m/s
        </text>

        {/* pTot */}
        <text x="740" y="344" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">
          Σp
        </text>
        <SvgArrow x1={740} y1={362} x2={740 + scale(pTot / 3)} y2={362} color="#fbbf24" label="" />
        <text x="740" y="392" textAnchor="middle" fill="#fde68a" fontSize="14" fontWeight="800">
          {fmt(pTot, 2, lang)} kg·m/s
        </text>

        {/* Verificación conservación */}
        <text x="480" y="430" textAnchor="middle" fill="rgba(251,191,36,0.80)" fontSize="13" fontWeight="700">
          {isEs
            ? `Σp (antes) = Σp (después) = ${fmt(pTot, 2, lang)} kg·m/s  ✓`
            : `Σp (before) = Σp (after) = ${fmt(pTot, 2, lang)} kg·m/s  ✓`}
        </text>

        {/* Leyenda */}
        <text x="480" y="470" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="12">
          {isEs
            ? "Las fuerzas internas redistribuyen el momento pero no cambian el total"
            : "Internal forces redistribute momentum but do not change the total"}
        </text>

        {/* Nota frontera */}
        <text x="480" y="560" textAnchor="middle" fill="rgba(255,255,255,0.40)" fontSize="11">
          {isEs
            ? "La frontera punteada marca el sistema. Si F_ext = 0 dentro del intervalo, Σp no cambia."
            : "The dashed boundary marks the system. If F_ext = 0 during the interval, Σp does not change."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1i", "v2i"],
    stateOut: ["p1i", "p2i", "pTot", "v1f", "v2f", "p1f", "p2f", "pTotI", "pTotF", "DeltaPtot"],
    target: "pTotI",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué condiciones debe cumplir un sistema para que su momento lineal total se conserve?",
      en: "What conditions must a system meet for its total linear momentum to be conserved?",
    },
    magnitud_estrella: "pTotI",
  },
};

export default profile;
