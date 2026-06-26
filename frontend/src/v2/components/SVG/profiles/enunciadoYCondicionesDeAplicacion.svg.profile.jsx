import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

/* ── helpers ── */
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

/* ── profile ── */
const profile = {
  meta: {
    id: "svg-enunciado-y-condiciones-de-aplicacion",
    leafId: "enunciado-y-condiciones-de-aplicacion",
    title: {
      es: "Condiciones de conservación",
      en: "Conservation conditions",
    },
    subtitle: {
      es: "¿Cuándo se conserva el momento lineal total?",
      en: "When is total linear momentum conserved?",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "enunciado-y-condiciones-de-aplicacion",
    graphId: "svg-enunciado-y-condiciones-de-aplicacion",
    purpose: {
      es: "Visualizar las condiciones físicas que determinan si la conservación del momento es aplicable.",
      en: "Visualize the physical conditions that determine whether momentum conservation is applicable.",
    },
    level: {
      es: "bachillerato | universidad",
      en: "upper secondary | university",
    },
    expectedInputs: ["m1", "m2", "v1i", "v2i", "Fext"],
    derivedMagnitudes: ["Pi", "Pf", "DeltaP", "momento_lineal_total", "variacion_momento_lineal"],
    targetCandidates: ["momento_lineal_total", "variacion_momento_lineal"],
    equations: ["P = Σ m_k·v_k", "ΔP = F_ext·Δt"],
    hypotheses: ["1D", "colisión breve"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["dos cuerpos, frontera de sistema explícita"],
    alwaysVisible: ["Pi", "DeltaP"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 620",
  svgHeight: 680,
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
        label: { es: "v₁ inicial", en: "Initial v₁" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
      {
        key: "v2i",
        default: -1,
        label: { es: "v₂ inicial", en: "Initial v₂" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8,
        max: 8,
        step: 0.25,
      },
      {
        key: "Fext",
        default: 0,
        label: { es: "F_ext neta", en: "Net F_ext" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 20,
        step: 0.5,
      },
    ],
    derivations: {
      Pi: ({ m1, m2, v1i, v2i }) =>
        safeNum(m1, 3) * safeNum(v1i, 4) + safeNum(m2, 2) * safeNum(v2i, -1),
      /* colisión totalmente inelástica como demo */
      vf: ({ m1, m2, v1i, v2i }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        return M > 0
          ? (safeNum(m1, 3) * safeNum(v1i, 4) + safeNum(m2, 2) * safeNum(v2i, -1)) / M
          : 0;
      },
      /* ΔP debido a F_ext durante un Δt = 0.5 s de colisión modelo */
      DeltaP: ({ Fext }) => safeNum(Fext, 0) * 0.5,
      Pf: ({ Pi, DeltaP }) => safeNum(Pi, 0) + safeNum(DeltaP, 0),
      momento_lineal_total: ({ Pi }) => safeNum(Pi, 0),
      variacion_momento_lineal: ({ DeltaP }) => safeNum(DeltaP, 0),
    },
  },
  infoCards: [
    {
      key: "conditions",
      label: { es: "Condiciones", en: "Conditions" },
      highlight: "F_ext = 0 → ΔP = 0",
      highlightColor: "#86efac",
      description: {
        es: "La conservación requiere: (1) sistema definido, (2) F_ext,neta ≈ 0, (3) intervalo acotado.",
        en: "Conservation requires: (1) defined system, (2) F_ext,net ≈ 0, (3) bounded interval.",
      },
    },
    {
      key: "violation",
      label: { es: "Ruptura", en: "Violation" },
      highlight: "ΔP = F_ext · Δt",
      highlightColor: "#fca5a5",
      description: {
        es: "Si F_ext ≠ 0, el momento total cambia proporcionalmente a la fuerza y al tiempo.",
        en: "If F_ext ≠ 0, total momentum changes proportionally to force and time.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `P_i = ${fmt(safeNum(p?.Pi, 0), 2, lang)} kg·m/s`,
        `ΔP = ${fmt(safeNum(p?.DeltaP, 0), 2, lang)} kg·m/s`,
      ],
      result: ({ p, lang }) => {
        const dp = Math.abs(safeNum(p?.DeltaP, 0));
        const conserved = dp < 0.01;
        const tag = lang === "en"
          ? (conserved ? "✓ Conserved" : "✗ Not conserved")
          : (conserved ? "✓ Se conserva" : "✗ No se conserva");
        return `P_f = ${fmt(safeNum(p?.Pf, 0), 2, lang)} kg·m/s  ${tag}`;
      },
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
      const Fext = safeNum(p?.Fext, 0);
      const M = m1 + m2;
      const vf = M > 0 ? (m1 * v1i + m2 * v2i) / M : 0;
      const tImpact = 2.0;
      const clamp = (x) => Math.max(-5, Math.min(5, x));

      let x1, x2, phase;
      if (t < tImpact) {
        phase = "before";
        x1 = clamp(-3 + v1i * t * 0.5);
        x2 = clamp(3 + v2i * t * 0.5);
      } else {
        phase = "after";
        const dt = t - tImpact;
        const xi = (-3 + v1i * tImpact * 0.5 + 3 + v2i * tImpact * 0.5) / 2;
        /* tras colisión inelástica, ambos con vf + aceleración por F_ext */
        const aExt = M > 0 ? Fext / M : 0;
        const v = vf + aExt * dt;
        const dx = vf * dt + 0.5 * aExt * dt * dt;
        x1 = clamp(xi - 0.4 + dx);
        x2 = clamp(xi + 0.4 + dx);
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
    const Fext = safeNum(p?.Fext, 0);
    const M = m1 + m2;
    const vf = M > 0 ? (m1 * v1i + m2 * v2i) / M : 0;
    const Pi = m1 * v1i + m2 * v2i;
    const DeltaP = Fext * 0.5;
    const Pf = Pi + DeltaP;
    const conserved = Math.abs(DeltaP) < 0.01;
    const phase = state?.phase ?? "before";

    /* coordenadas */
    const posToX = (xPhys) => Math.max(100, Math.min(860, 480 + xPhys * 62));
    const x1px = posToX(safeNum(state?.x1, -3));
    const x2px = posToX(safeNum(state?.x2, 3));
    const scale = (v) => Math.max(-200, Math.min(200, v * 18));

    const curV1 = phase === "before" ? v1i : vf + (M > 0 ? Fext / M : 0) * 0.5;
    const curV2 = phase === "before" ? v2i : curV1;

    /* frontera */
    const bndLeft = Math.min(x1px, x2px) - 70;
    const bndRight = Math.max(x1px, x2px) + 70;

    /* condiciones de aplicación */
    const cond1 = true; // sistema siempre definido en esta escena
    const cond2 = conserved;
    const cond3 = true; // intervalo siempre acotado en la animación

    const checkMark = (ok) => ok ? "✓" : "✗";
    const checkColor = (ok) => ok ? "#34d399" : "#f87171";

    return (
      <g>
        <defs>
          <linearGradient id="eycaBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0f1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="620" rx="18" fill="url(#eycaBg)" />

        {/* Título */}
        <text x="480" y="40" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="800">
          {isEs ? "¿Se conserva el momento?" : "Is momentum conserved?"}
        </text>
        <text x="480" y="62" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="13">
          {isEs
            ? "Verifica las tres condiciones antes de aplicar ΣP = cte"
            : "Check the three conditions before applying ΣP = const"}
        </text>

        {/* ── Checklist de condiciones ── */}
        <rect x="60" y="78" width="840" height="66" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />

        {/* Cond 1: sistema definido */}
        <text x="120" y="100" fill={checkColor(cond1)} fontSize="16" fontWeight="800">
          {checkMark(cond1)}
        </text>
        <text x="140" y="100" fill={checkColor(cond1)} fontSize="12" fontWeight="700">
          {isEs ? "Sistema definido" : "Defined system"}
        </text>
        <text x="140" y="118" fill="rgba(255,255,255,0.45)" fontSize="10">
          {isEs ? "m₁ y m₂ dentro de la frontera" : "m₁ and m₂ inside the boundary"}
        </text>

        {/* Cond 2: F_ext = 0 */}
        <text x="400" y="100" fill={checkColor(cond2)} fontSize="16" fontWeight="800">
          {checkMark(cond2)}
        </text>
        <text x="420" y="100" fill={checkColor(cond2)} fontSize="12" fontWeight="700">
          {isEs ? "F_ext,neta ≈ 0" : "F_ext,net ≈ 0"}
        </text>
        <text x="420" y="118" fill="rgba(255,255,255,0.45)" fontSize="10">
          F_ext = {fmt(Fext, 1, lang)} N
          {conserved
            ? (isEs ? "  → despreciable" : "  → negligible")
            : (isEs ? "  → NO despreciable" : "  → NOT negligible")}
        </text>

        {/* Cond 3: intervalo acotado */}
        <text x="680" y="100" fill={checkColor(cond3)} fontSize="16" fontWeight="800">
          {checkMark(cond3)}
        </text>
        <text x="700" y="100" fill={checkColor(cond3)} fontSize="12" fontWeight="700">
          {isEs ? "Intervalo acotado" : "Bounded interval"}
        </text>
        <text x="700" y="118" fill="rgba(255,255,255,0.45)" fontSize="10">
          Δt = 0,5 s
        </text>

        {/* Veredicto */}
        <text x="480" y="136" textAnchor="middle"
          fill={conserved ? "#34d399" : "#f87171"} fontSize="13" fontWeight="700">
          {conserved
            ? (isEs ? "→ Se puede aplicar conservación de momento" : "→ Momentum conservation can be applied")
            : (isEs ? "→ NO se puede aplicar: ΔP ≠ 0" : "→ CANNOT apply: ΔP ≠ 0")}
        </text>

        {/* ── Escena física ── */}
        {/* Frontera del sistema */}
        <rect
          x={bndLeft} y={168} width={bndRight - bndLeft} height={155} rx="18"
          fill="none"
          stroke={conserved ? "rgba(52,211,153,0.45)" : "rgba(248,113,113,0.45)"}
          strokeWidth="2.5" strokeDasharray="12,8"
        />
        <text x={bndLeft + 12} y={186}
          fill={conserved ? "#34d399" : "#f87171"} fontSize="11" fontWeight="700">
          {isEs ? "SISTEMA" : "SYSTEM"}
        </text>

        {/* Eje */}
        <line x1="100" y1="276" x2="860" y2="276" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

        {/* Cuerpo 1 */}
        <rect
          x={x1px - 40} y={226} width={80} height={50} rx="10"
          fill="rgba(96,165,250,0.24)" stroke="#93c5fd" strokeWidth="2.5"
        />
        <text x={x1px} y={255} textAnchor="middle" fill="#dbeafe" fontSize="12" fontWeight="700">
          m₁={fmt(m1, 1, lang)}
        </text>
        {Math.abs(curV1) > 0.01 && (
          <SvgArrow
            x1={x1px} y1={218} x2={x1px + scale(curV1)} y2={218}
            color="#60a5fa" label={`v₁=${fmt(curV1, 1, lang)}`}
          />
        )}

        {/* Cuerpo 2 */}
        <rect
          x={x2px - 40} y={226} width={80} height={50} rx="10"
          fill="rgba(52,211,153,0.22)" stroke="#6ee7b7" strokeWidth="2.5"
        />
        <text x={x2px} y={255} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="700">
          m₂={fmt(m2, 1, lang)}
        </text>
        {Math.abs(curV2) > 0.01 && (
          <SvgArrow
            x1={x2px} y1={218} x2={x2px + scale(curV2)} y2={218}
            color="#34d399" label={`v₂=${fmt(curV2, 1, lang)}`}
          />
        )}

        {/* F_ext si no es cero */}
        {!conserved && (
          <g>
            <SvgArrow
              x1={bndRight + 10} y1={244}
              x2={bndRight + 10 + scale(Fext) * 0.7} y2={244}
              color="#f87171"
              label={`F_ext = ${fmt(Fext, 1, lang)} N`}
            />
            <text x={bndRight + 12} y={272} fill="rgba(248,113,113,0.7)" fontSize="10">
              {isEs ? "(externa al sistema)" : "(external to system)"}
            </text>
          </g>
        )}

        {/* Etiqueta de fase */}
        <text x="480" y="155" textAnchor="middle"
          fill={phase === "before" ? "#93c5fd" : "#fbbf24"} fontSize="13" fontWeight="700">
          {phase === "before"
            ? (isEs ? "▶ Antes de la colisión" : "▶ Before collision")
            : (isEs ? "▶ Después de la colisión" : "▶ After collision")}
        </text>

        {/* ── Panel de momentos ── */}
        <rect x="110" y="340" width="740" height="120" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />

        {/* P_i */}
        <text x="250" y="364" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="700">
          P_i
        </text>
        <SvgArrow x1={250} y1={382} x2={250 + scale(Pi / 4)} y2={382} color="#60a5fa" label="" />
        <text x="250" y="410" textAnchor="middle" fill="#dbeafe" fontSize="14" fontWeight="800">
          {fmt(Pi, 2, lang)} kg·m/s
        </text>

        {/* ΔP */}
        <text x="480" y="364" textAnchor="middle"
          fill={conserved ? "#34d399" : "#f87171"} fontSize="12" fontWeight="700">
          ΔP
        </text>
        {Math.abs(DeltaP) > 0.01 && (
          <SvgArrow x1={480} y1={382} x2={480 + scale(DeltaP / 2)} y2={382}
            color="#f87171" label="" />
        )}
        <text x="480" y="410" textAnchor="middle"
          fill={conserved ? "#86efac" : "#fca5a5"} fontSize="14" fontWeight="800">
          {conserved ? "0" : fmt(DeltaP, 2, lang)} kg·m/s
        </text>

        {/* P_f */}
        <text x="710" y="364" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">
          P_f
        </text>
        <SvgArrow x1={710} y1={382} x2={710 + scale(Pf / 4)} y2={382} color="#fbbf24" label="" />
        <text x="710" y="410" textAnchor="middle" fill="#fde68a" fontSize="14" fontWeight="800">
          {fmt(Pf, 2, lang)} kg·m/s
        </text>

        {/* Verificación */}
        <text x="480" y="444" textAnchor="middle"
          fill={conserved ? "rgba(52,211,153,0.85)" : "rgba(248,113,113,0.85)"}
          fontSize="13" fontWeight="700">
          {conserved
            ? (isEs
                ? `P_i = P_f = ${fmt(Pi, 2, lang)} kg·m/s  ✓  Conservación válida`
                : `P_i = P_f = ${fmt(Pi, 2, lang)} kg·m/s  ✓  Conservation valid`)
            : (isEs
                ? `P_f − P_i = ${fmt(DeltaP, 2, lang)} kg·m/s = F_ext·Δt  ✗  No se conserva`
                : `P_f − P_i = ${fmt(DeltaP, 2, lang)} kg·m/s = F_ext·Δt  ✗  Not conserved`)}
        </text>

        {/* ── Ecuación contextual ── */}
        <text x="480" y="485" textAnchor="middle" fill="rgba(255,255,255,0.50)" fontSize="12">
          {conserved
            ? "ΔP = F_ext · Δt = 0 · 0,5 = 0  →  ΣP = cte"
            : `ΔP = F_ext · Δt = ${fmt(Fext, 1, lang)} × 0,5 = ${fmt(DeltaP, 2, lang)} kg·m/s`}
        </text>

        {/* Leyenda */}
        <text x="480" y="520" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="11">
          {isEs
            ? "Mueve F_ext para ver cuándo se rompe la conservación"
            : "Move F_ext to see when conservation breaks"}
        </text>

        {/* Nota frontera */}
        <text x="480" y="580" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">
          {isEs
            ? "La frontera punteada marca el sistema. Solo F_ext puede cambiar ΣP."
            : "The dashed boundary marks the system. Only F_ext can change ΣP."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1i", "v2i", "Fext"],
    stateOut: ["Pi", "Pf", "DeltaP", "momento_lineal_total", "variacion_momento_lineal"],
    target: "momento_lineal_total",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuáles son las condiciones mínimas para que el momento lineal total se conserve?",
      en: "What are the minimum conditions for total linear momentum to be conserved?",
    },
    magnitud_estrella: "momento_lineal_total",
  },
};

export default profile;
