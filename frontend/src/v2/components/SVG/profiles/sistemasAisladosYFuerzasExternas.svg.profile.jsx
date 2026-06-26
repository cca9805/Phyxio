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
    id: "svg-sistemas-aislados-y-fuerzas-externas",
    leafId: "sistemas-aislados-y-fuerzas-externas",
    title: {
      es: "Sistemas aislados y fuerzas externas",
      en: "Isolated systems and external forces",
    },
    subtitle: {
      es: "¿Qué fuerzas son internas y cuáles externas al sistema?",
      en: "Which forces are internal and which are external to the system?",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "sistemas-aislados-y-fuerzas-externas",
    graphId: "svg-sistemas-aislados-y-fuerzas-externas",
    purpose: {
      es: "Visualizar la frontera del sistema, clasificar fuerzas como internas o externas y ver el efecto sobre la conservación del momento.",
      en: "Visualize the system boundary, classify forces as internal or external, and see the effect on momentum conservation.",
    },
    level: { es: "bachillerato | universidad", en: "upper secondary | university" },
    expectedInputs: ["m1", "m2", "v1i", "v2i", "Fext"],
    derivedMagnitudes: ["Pi", "Jext", "DeltaP", "Pf", "impulso_externo", "variacion_momento_total"],
    targetCandidates: ["impulso_externo", "variacion_momento_total"],
    equations: ["P = Σ m_k·v_k", "J_ext = F_ext·Δt", "ΔP = J_ext"],
    hypotheses: ["1D", "Δt = 0,4 s colisión modelo"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["dos cuerpos, colisión breve, F_ext constante durante Δt"],
    alwaysVisible: ["Pi", "DeltaP", "Jext"],
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
        min: 0.5, max: 10, step: 0.5,
      },
      {
        key: "m2",
        default: 2,
        label: { es: "Masa m₂", en: "Mass m₂" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5, max: 10, step: 0.5,
      },
      {
        key: "v1i",
        default: 4,
        label: { es: "v₁ inicial", en: "Initial v₁" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8, max: 8, step: 0.25,
      },
      {
        key: "v2i",
        default: -1,
        label: { es: "v₂ inicial", en: "Initial v₂" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8, max: 8, step: 0.25,
      },
      {
        key: "Fext",
        default: 0,
        label: { es: "F_ext neta", en: "Net F_ext" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20, max: 20, step: 0.5,
      },
    ],
    derivations: {
      Pi: ({ m1, m2, v1i, v2i }) =>
        safeNum(m1, 3) * safeNum(v1i, 4) + safeNum(m2, 2) * safeNum(v2i, -1),
      Jext: ({ Fext }) => safeNum(Fext, 0) * 0.4,
      DeltaP: ({ Jext }) => safeNum(Jext, 0),
      Pf: ({ Pi, DeltaP }) => safeNum(Pi, 0) + safeNum(DeltaP, 0),
      impulso_externo: ({ Jext }) => safeNum(Jext, 0),
      variacion_momento_total: ({ DeltaP }) => safeNum(DeltaP, 0),
      /* colisión totalmente inelástica como demo visual */
      vf: ({ m1, m2, v1i, v2i }) => {
        const M = safeNum(m1, 3) + safeNum(m2, 2);
        return M > 0 ? (safeNum(m1, 3) * safeNum(v1i, 4) + safeNum(m2, 2) * safeNum(v2i, -1)) / M : 0;
      },
    },
  },
  infoCards: [
    {
      key: "classification",
      label: { es: "Clasificación clave", en: "Key classification" },
      highlight: "F_int ↔ F_ext",
      highlightColor: "#fde68a",
      description: {
        es: "Fuerzas internas (entre m₁ y m₂) se cancelan por la 3ª ley. Solo las fuerzas externas alteran el momento total.",
        en: "Internal forces (between m₁ and m₂) cancel by the 3rd law. Only external forces alter total momentum.",
      },
    },
    {
      key: "criterion",
      label: { es: "Criterio de aislamiento", en: "Isolation criterion" },
      highlight: "F_ext ≈ 0 → ΔP = 0",
      highlightColor: "#86efac",
      description: {
        es: "Si la fuerza externa neta es cero o despreciable, el sistema se comporta como aislado y ΣP se conserva.",
        en: "If the net external force is zero or negligible, the system behaves as isolated and ΣP is conserved.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `P_i = ${fmt(safeNum(p?.Pi, 0), 2, lang)} kg·m/s`,
        `J_ext = ${fmt(safeNum(p?.Jext, 0), 2, lang)} N·s`,
      ],
      result: ({ p, lang }) => {
        const dp = Math.abs(safeNum(p?.DeltaP, 0));
        const tag = lang === "en"
          ? (dp < 0.01 ? "✓ Isolated" : "✗ Not isolated")
          : (dp < 0.01 ? "✓ Aislado" : "✗ No aislado");
        return `ΔP = ${fmt(safeNum(p?.DeltaP, 0), 2, lang)} kg·m/s  ${tag}`;
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
        const aExt = M > 0 ? Fext / M : 0;
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
    const Jext = Fext * 0.4;
    const DeltaP = Jext;
    const Pf = Pi + DeltaP;
    const isolated = Math.abs(Fext) < 0.01;
    const phase = state?.phase ?? "before";

    const posToX = (xPhys) => Math.max(100, Math.min(860, 480 + xPhys * 62));
    const x1px = posToX(safeNum(state?.x1, -3));
    const x2px = posToX(safeNum(state?.x2, 3));
    const scale = (v) => Math.max(-200, Math.min(200, v * 18));
    const aExt = M > 0 ? Fext / M : 0;
    const curV1 = phase === "before" ? v1i : vf + aExt * 0.5;
    const curV2 = phase === "before" ? v2i : curV1;

    /* Fronteras */
    const bndLeft = Math.min(x1px, x2px) - 70;
    const bndRight = Math.max(x1px, x2px) + 70;

    /* clasificación */
    const borderColor = isolated ? "rgba(52,211,153,0.50)" : "rgba(248,113,113,0.50)";
    const labelColor = isolated ? "#34d399" : "#f87171";

    return (
      <g>
        <defs>
          <linearGradient id="safeBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0f1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="620" rx="18" fill="url(#safeBg)" />

        {/* Título */}
        <text x="480" y="38" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="800">
          {isEs ? "Sistemas aislados y fuerzas externas" : "Isolated systems and external forces"}
        </text>
        <text x="480" y="60" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="12">
          {isEs
            ? "Las fuerzas internas se cancelan — solo F_ext cambia ΣP"
            : "Internal forces cancel — only F_ext changes ΣP"}
        </text>

        {/* ── Clasificación de fuerzas ── */}
        <rect x="60" y="75" width="410" height="58" rx="10"
          fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" />
        <text x="80" y="96" fill="#93c5fd" fontSize="13" fontWeight="700">
          {isEs ? "Fuerzas INTERNAS (se cancelan)" : "INTERNAL forces (cancel out)"}
        </text>
        <text x="80" y="118" fill="rgba(255,255,255,0.50)" fontSize="11">
          F₁₂ = −F₂₁  →  {isEs ? "no afectan a ΣP" : "do not affect ΣP"}
        </text>

        <rect x="490" y="75" width="410" height="58" rx="10"
          fill={isolated ? "rgba(52,211,153,0.06)" : "rgba(248,113,113,0.08)"}
          stroke={isolated ? "rgba(52,211,153,0.25)" : "rgba(248,113,113,0.25)"}
          strokeWidth="1.5" />
        <text x="510" y="96" fill={labelColor} fontSize="13" fontWeight="700">
          {isEs ? "Fuerza EXTERNA neta" : "Net EXTERNAL force"}
        </text>
        <text x="510" y="118" fill="rgba(255,255,255,0.50)" fontSize="11">
          F_ext = {fmt(Fext, 1, lang)} N  →  J_ext = {fmt(Jext, 2, lang)} N·s
        </text>

        {/* ── Escena física ── */}
        {/* Frontera del sistema */}
        <rect
          x={bndLeft} y={150} width={bndRight - bndLeft} height={158} rx="18"
          fill="none" stroke={borderColor} strokeWidth="2.5" strokeDasharray="12,8"
        />
        <text x={bndLeft + 12} y={168} fill={labelColor} fontSize="11" fontWeight="700">
          {isEs ? "FRONTERA DEL SISTEMA" : "SYSTEM BOUNDARY"}
        </text>
        <text x={bndRight - 12} y={168} textAnchor="end" fill={labelColor} fontSize="10" fontWeight="600">
          {isolated
            ? (isEs ? "F_ext,neta = 0  →  AISLADO" : "F_ext,net = 0  →  ISOLATED")
            : (isEs ? "F_ext,neta ≠ 0  →  NO AISLADO" : "F_ext,net ≠ 0  →  NOT ISOLATED")}
        </text>

        {/* Eje */}
        <line x1="100" y1="262" x2="860" y2="262" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

        {/* Cuerpo 1 */}
        <rect x={x1px - 40} y={212} width={80} height={50} rx="10"
          fill="rgba(96,165,250,0.24)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x={x1px} y={242} textAnchor="middle" fill="#dbeafe" fontSize="12" fontWeight="700">
          m₁={fmt(m1, 1, lang)}
        </text>
        {Math.abs(curV1) > 0.01 && (
          <SvgArrow x1={x1px} y1={204} x2={x1px + scale(curV1)} y2={204}
            color="#60a5fa" label={`v₁=${fmt(curV1, 1, lang)}`} />
        )}

        {/* Cuerpo 2 */}
        <rect x={x2px - 40} y={212} width={80} height={50} rx="10"
          fill="rgba(52,211,153,0.22)" stroke="#6ee7b7" strokeWidth="2.5" />
        <text x={x2px} y={242} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="700">
          m₂={fmt(m2, 1, lang)}
        </text>
        {Math.abs(curV2) > 0.01 && (
          <SvgArrow x1={x2px} y1={204} x2={x2px + scale(curV2)} y2={204}
            color="#34d399" label={`v₂=${fmt(curV2, 1, lang)}`} />
        )}

        {/* Fuerzas internas (par acción-reacción) durante contacto */}
        {phase === "before" && Math.abs(x1px - x2px) < 140 && (
          <g>
            <SvgArrow x1={x1px + 42} y1={237} x2={x1px + 72} y2={237}
              color="rgba(96,165,250,0.6)" label="" />
            <SvgArrow x1={x2px - 42} y1={237} x2={x2px - 72} y2={237}
              color="rgba(96,165,250,0.6)" label="" />
            <text x={(x1px + x2px) / 2} y={228} textAnchor="middle"
              fill="rgba(96,165,250,0.7)" fontSize="10" fontWeight="700">
              {isEs ? "F internas (3ª ley)" : "Internal F (3rd law)"}
            </text>
          </g>
        )}

        {/* Fuerza externa */}
        {!isolated && (
          <g>
            <SvgArrow
              x1={bndRight + 8} y1={230}
              x2={bndRight + 8 + scale(Fext) * 0.6} y2={230}
              color="#f87171"
              label={`F_ext = ${fmt(Fext, 1, lang)} N`}
            />
            <text x={bndRight + 10} y={258} fill="rgba(248,113,113,0.6)" fontSize="9">
              {isEs ? "(externa al sistema)" : "(external to system)"}
            </text>
          </g>
        )}

        {/* Fase */}
        <text x="480" y="145" textAnchor="middle"
          fill={phase === "before" ? "#93c5fd" : "#fbbf24"} fontSize="13" fontWeight="700">
          {phase === "before"
            ? (isEs ? "▶ Antes de la colisión" : "▶ Before collision")
            : (isEs ? "▶ Después de la colisión" : "▶ After collision")}
        </text>

        {/* ── Panel de momentos ── */}
        <rect x="100" y="335" width="760" height="120" rx="12"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />

        {/* P_i */}
        <text x="210" y="358" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="700">P_i</text>
        <SvgArrow x1={210} y1={376} x2={210 + scale(Pi / 4)} y2={376} color="#60a5fa" label="" />
        <text x="210" y="404" textAnchor="middle" fill="#dbeafe" fontSize="14" fontWeight="800">
          {fmt(Pi, 2, lang)} kg·m/s
        </text>

        {/* J_ext */}
        <text x="430" y="358" textAnchor="middle"
          fill={isolated ? "#34d399" : "#f87171"} fontSize="12" fontWeight="700">J_ext</text>
        {Math.abs(Jext) > 0.01 && (
          <SvgArrow x1={430} y1={376} x2={430 + scale(Jext / 2)} y2={376} color="#f87171" label="" />
        )}
        <text x="430" y="404" textAnchor="middle"
          fill={isolated ? "#86efac" : "#fca5a5"} fontSize="14" fontWeight="800">
          {isolated ? "0" : fmt(Jext, 2, lang)} N·s
        </text>

        {/* P_f */}
        <text x="650" y="358" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">P_f</text>
        <SvgArrow x1={650} y1={376} x2={650 + scale(Pf / 4)} y2={376} color="#fbbf24" label="" />
        <text x="650" y="404" textAnchor="middle" fill="#fde68a" fontSize="14" fontWeight="800">
          {fmt(Pf, 2, lang)} kg·m/s
        </text>

        {/* Verificación */}
        <text x="480" y="440" textAnchor="middle"
          fill={isolated ? "rgba(52,211,153,0.85)" : "rgba(248,113,113,0.85)"}
          fontSize="13" fontWeight="700">
          {isolated
            ? (isEs
                ? `P_i = P_f = ${fmt(Pi, 2, lang)} kg·m/s — sistema aislado ✓`
                : `P_i = P_f = ${fmt(Pi, 2, lang)} kg·m/s — isolated system ✓`)
            : (isEs
                ? `ΔP = J_ext = ${fmt(Jext, 2, lang)} N·s — fuerzas externas rompen conservación ✗`
                : `ΔP = J_ext = ${fmt(Jext, 2, lang)} N·s — external forces break conservation ✗`)}
        </text>

        {/* Ecuación */}
        <text x="480" y="480" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="12">
          ΔP = J_ext = F_ext · Δt = {fmt(Fext, 1, lang)} × 0,4 = {fmt(Jext, 2, lang)} N·s
        </text>

        {/* Leyenda */}
        <text x="480" y="520" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="11">
          {isEs
            ? "Mueve F_ext para ver cómo las fuerzas externas rompen el aislamiento"
            : "Move F_ext to see how external forces break isolation"}
        </text>

        {/* Nota conceptual */}
        <text x="480" y="580" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="10">
          {isEs
            ? "Frontera punteada = sistema. F internas (azul) se cancelan. F externas (rojo) cambian ΣP."
            : "Dashed boundary = system. Internal F (blue) cancel. External F (red) change ΣP."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1i", "v2i", "Fext"],
    stateOut: ["Pi", "Jext", "DeltaP", "Pf", "impulso_externo", "variacion_momento_total"],
    target: "impulso_externo",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se distingue un sistema aislado de uno sometido a fuerzas externas relevantes?",
      en: "How is an isolated system distinguished from one subject to relevant external forces?",
    },
    magnitud_estrella: "fuerza_externa_neta",
  },
};

export default profile;
