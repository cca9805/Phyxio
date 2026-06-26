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

const clamp = (lo, hi, v) => Math.max(lo, Math.min(hi, v));

/* ── profile ── */
const profile = {
  meta: {
    id: "svg-impulso-externo-y-ruptura",
    leafId: "impulso-externo-y-ruptura-de-la-conservacion",
    title: {
      es: "Impulso externo y ruptura de la conservación",
      en: "External impulse and breakdown of conservation",
    },
    subtitle: {
      es: "¿El impulso externo es despreciable o rompe la conservación?",
      en: "Is the external impulse negligible or does it break conservation?",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "impulso-externo-y-ruptura-de-la-conservacion",
    graphId: "svg-impulso-externo-y-ruptura",
    purpose: {
      es: "Visualizar la escena física de ruptura: un pulso de fuerza externa actúa sobre el sistema durante Δt, produciendo J_ext que cambia ΔP.",
      en: "Visualize the breakdown scene: an external force pulse acts on the system during Δt, producing J_ext that changes ΔP.",
    },
    level: { es: "bachillerato | universidad", en: "upper secondary | university" },
    expectedInputs: ["m1", "m2", "v1i", "v2i", "Fext", "dt"],
    derivedMagnitudes: ["Pi", "Jext", "DeltaP", "Pf", "ratio", "J", "F_ext", "t", "P"],
    targetCandidates: ["J", "P", "F_ext", "t"],
    equations: ["J = F_ext · Δt", "ΔP = J_ext", "ratio = |J_ext| / |P_i|"],
    hypotheses: ["1D", "F_ext constante durante Δt"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["dos cuerpos, F_ext como pulso rectangular"],
    alwaysVisible: ["Pi", "Jext", "DeltaP", "Pf"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 640",
  svgHeight: 700,
  params: {
    schema: [
      {
        key: "m1",
        default: 4,
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
        default: 5,
        label: { es: "v₁ inicial", en: "Initial v₁" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8, max: 8, step: 0.25,
      },
      {
        key: "v2i",
        default: -2,
        label: { es: "v₂ inicial", en: "Initial v₂" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -8, max: 8, step: 0.25,
      },
      {
        key: "Fext",
        default: 12,
        label: { es: "F_ext", en: "F_ext" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -30, max: 30, step: 0.5,
      },
      {
        key: "dt",
        default: 0.5,
        label: { es: "Δt del pulso", en: "Pulse Δt" },
        unit: "s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.05, max: 2, step: 0.05,
      },
    ],
    derivations: {
      Pi: ({ m1, m2, v1i, v2i }) =>
        safeNum(m1, 4) * safeNum(v1i, 5) + safeNum(m2, 2) * safeNum(v2i, -2),
      Jext: ({ Fext, dt }) => safeNum(Fext, 12) * safeNum(dt, 0.5),
      DeltaP: ({ Jext }) => safeNum(Jext, 0),
      Pf: ({ Pi, DeltaP }) => safeNum(Pi, 0) + safeNum(DeltaP, 0),
      ratio: ({ Pi, Jext }) => {
        const pi = Math.abs(safeNum(Pi, 0));
        return pi > 0.001 ? Math.abs(safeNum(Jext, 0)) / pi : Infinity;
      },
      J: ({ Jext }) => safeNum(Jext, 0),
      F_ext: ({ Fext }) => safeNum(Fext, 0),
      t: ({ dt }) => safeNum(dt, 0),
      P: ({ Pf }) => safeNum(Pf, 0),
    },
  },
  infoCards: [
    {
      key: "criterion",
      label: { es: "Criterio de despreciabilidad", en: "Negligibility criterion" },
      highlight: "|J_ext| / |P_i| ≪ 1 ?",
      highlightColor: "#fde68a",
      description: {
        es: "Si el impulso externo es pequeño frente al momento total inicial, la conservación es una buena aproximación.",
        en: "If the external impulse is small compared to total initial momentum, conservation is a good approximation.",
      },
    },
    {
      key: "breakdown",
      label: { es: "Mecanismo de ruptura", en: "Breakdown mechanism" },
      highlight: "ΔP = J_ext",
      highlightColor: "#fca5a5",
      description: {
        es: "El impulso externo se convierte íntegramente en variación de momento total. No se pierde ni se gana momento: simplemente se redistribuye por la fuerza externa.",
        en: "External impulse becomes entirely a change in total momentum. Momentum is neither lost nor gained: it is simply redistributed by the external force.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => {
        const r = safeNum(p?.ratio, 0);
        const rText = Number.isFinite(r) ? fmt(r * 100, 1, lang) + " %" : "∞";
        return [
          `J_ext = ${fmt(safeNum(p?.Jext, 0), 2, lang)} N·s`,
          `|J_ext| / |P_i| = ${rText}`,
        ];
      },
      result: ({ p, lang }) => {
        const r = safeNum(p?.ratio, 0);
        const tag = r < 0.05
          ? (lang === "en" ? "✓ Negligible — conservation OK" : "✓ Despreciable — conservación OK")
          : r < 0.20
            ? (lang === "en" ? "⚠ Marginal — use with caution" : "⚠ Marginal — usar con cautela")
            : (lang === "en" ? "✗ Significant — conservation broken" : "✗ Significativo — conservación rota");
        return tag;
      },
      resultColor: "#fbbf24",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const m1 = safeNum(p?.m1, 4);
      const m2 = safeNum(p?.m2, 2);
      const v1i = safeNum(p?.v1i, 5);
      const v2i = safeNum(p?.v2i, -2);
      const Fext = safeNum(p?.Fext, 12);
      const dt = safeNum(p?.dt, 0.5);
      const M = m1 + m2;
      const Pi = m1 * v1i + m2 * v2i;
      const Jext = Fext * dt;
      const vCmBefore = M > 0 ? Pi / M : 0;
      const vCmAfter = M > 0 ? (Pi + Jext) / M : 0;

      const tCollide = 2.0;
      const tPulseEnd = tCollide + dt;
      let x1, x2, phase, pulseActive;

      if (t < tCollide) {
        phase = "before";
        pulseActive = false;
        x1 = clamp(-5, 5, -3 + v1i * t * 0.4);
        x2 = clamp(-5, 5, 3 + v2i * t * 0.4);
      } else if (t < tPulseEnd) {
        phase = "pulse";
        pulseActive = true;
        const xi = 0;
        const dtLocal = t - tCollide;
        const a = M > 0 ? Fext / M : 0;
        const dx = vCmBefore * dtLocal + 0.5 * a * dtLocal * dtLocal;
        x1 = clamp(-5, 5, xi - 0.45 + dx);
        x2 = clamp(-5, 5, xi + 0.45 + dx);
      } else {
        phase = "after";
        pulseActive = false;
        const dtAfter = t - tPulseEnd;
        const xPulseEnd = vCmBefore * dt + 0.5 * (M > 0 ? Fext / M : 0) * dt * dt;
        const dx = vCmAfter * dtAfter;
        x1 = clamp(-5, 5, xPulseEnd - 0.45 + dx);
        x2 = clamp(-5, 5, xPulseEnd + 0.45 + dx);
      }
      return { x1, x2, phase, pulseActive };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const m1 = safeNum(p?.m1, 4);
    const m2 = safeNum(p?.m2, 2);
    const v1i = safeNum(p?.v1i, 5);
    const v2i = safeNum(p?.v2i, -2);
    const Fext = safeNum(p?.Fext, 12);
    const dt = safeNum(p?.dt, 0.5);
    const M = m1 + m2;
    const Pi = m1 * v1i + m2 * v2i;
    const Jext = Fext * dt;
    const DeltaP = Jext;
    const Pf = Pi + DeltaP;
    const ratio = Math.abs(Pi) > 0.001 ? Math.abs(Jext) / Math.abs(Pi) : Infinity;
    const negligible = ratio < 0.05;
    const marginal = ratio >= 0.05 && ratio < 0.20;
    const phase = state?.phase ?? "before";
    const pulseActive = state?.pulseActive ?? false;

    const posToX = (xPhys) => clamp(90, 870, 480 + xPhys * 62);
    const x1px = posToX(safeNum(state?.x1, -3));
    const x2px = posToX(safeNum(state?.x2, 3));
    const scale = (v) => clamp(-200, 200, v * 16);

    /* Velocidades aproximadas en la fase actual */
    const vCmBefore = M > 0 ? Pi / M : 0;
    const vCmAfter = M > 0 ? Pf / M : 0;
    const curV = phase === "before" ? vCmBefore : vCmAfter;

    /* Colores de estado */
    const statusColor = negligible ? "#34d399" : marginal ? "#fbbf24" : "#f87171";
    const statusBg = negligible
      ? "rgba(52,211,153,0.08)"
      : marginal
        ? "rgba(251,191,36,0.08)"
        : "rgba(248,113,113,0.08)";

    /* Barra helpers */
    const barMax = Math.max(Math.abs(Pi), Math.abs(Pf), Math.abs(Jext), 1);
    const barW = (v) => clamp(2, 280, (Math.abs(v) / barMax) * 280);
    const barDir = (v) => (v >= 0 ? 1 : -1);

    return (
      <g>
        <defs>
          <linearGradient id="ruptBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#0f1a2e" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="640" rx="18" fill="url(#ruptBg)" />

        {/* Título */}
        <text x="480" y="36" textAnchor="middle" fill="#ffffff" fontSize="21" fontWeight="800">
          {isEs ? "Impulso externo y ruptura de la conservación" : "External impulse and breakdown of conservation"}
        </text>
        <text x="480" y="56" textAnchor="middle" fill="rgba(255,255,255,0.50)" fontSize="12">
          {isEs
            ? "El pulso F_ext · Δt cambia ΣP — ¿es despreciable?"
            : "The pulse F_ext · Δt changes ΣP — is it negligible?"}
        </text>

        {/* ── Escena física ── */}
        <line x1="90" y1="238" x2="870" y2="238" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

        {/* Bloque 1 */}
        <rect x={x1px - 42} y={188} width={84} height={50} rx="10"
          fill="rgba(96,165,250,0.22)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x={x1px} y={218} textAnchor="middle" fill="#dbeafe" fontSize="12" fontWeight="700">
          m₁={fmt(m1, 1, lang)}
        </text>

        {/* Bloque 2 */}
        <rect x={x2px - 42} y={188} width={84} height={50} rx="10"
          fill="rgba(52,211,153,0.20)" stroke="#6ee7b7" strokeWidth="2.5" />
        <text x={x2px} y={218} textAnchor="middle" fill="#d1fae5" fontSize="12" fontWeight="700">
          m₂={fmt(m2, 1, lang)}
        </text>

        {/* Flechas velocidad */}
        {phase === "before" && (
          <>
            {Math.abs(v1i) > 0.01 && (
              <SvgArrow x1={x1px} y1={180} x2={x1px + scale(v1i)} y2={180}
                color="#60a5fa" label={`v₁=${fmt(v1i, 1, lang)}`} />
            )}
            {Math.abs(v2i) > 0.01 && (
              <SvgArrow x1={x2px} y1={180} x2={x2px + scale(v2i)} y2={180}
                color="#34d399" label={`v₂=${fmt(v2i, 1, lang)}`} />
            )}
          </>
        )}
        {phase !== "before" && Math.abs(curV) > 0.01 && (
          <SvgArrow x1={(x1px + x2px) / 2} y1={180}
            x2={(x1px + x2px) / 2 + scale(curV)} y2={180}
            color="#fbbf24" label={`v_cm=${fmt(curV, 1, lang)}`} />
        )}

        {/* Pulso de fuerza externa */}
        {pulseActive && Math.abs(Fext) > 0.01 && (
          <g>
            <SvgArrow
              x1={x2px + 44} y1={213}
              x2={x2px + 44 + scale(Fext) * 0.8} y2={213}
              color="#f87171"
              label={`F_ext=${fmt(Fext, 1, lang)} N`}
            />
            <rect x={x2px + 40} y={195} width={4} height={36} rx="2"
              fill="#f87171" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </g>
        )}

        {/* Fase label */}
        <text x="480" y="130" textAnchor="middle"
          fill={phase === "before" ? "#93c5fd" : phase === "pulse" ? "#f87171" : "#fbbf24"}
          fontSize="14" fontWeight="700">
          {phase === "before"
            ? (isEs ? "▶ Antes del pulso externo" : "▶ Before external pulse")
            : phase === "pulse"
              ? (isEs ? "⚡ Pulso F_ext activo (Δt)" : "⚡ F_ext pulse active (Δt)")
              : (isEs ? "▶ Después del pulso externo" : "▶ After external pulse")}
        </text>
        {phase === "pulse" && (
          <text x="480" y="148" textAnchor="middle" fill="rgba(248,113,113,0.6)" fontSize="11">
            Δt = {fmt(dt, 2, lang)} s
          </text>
        )}

        {/* ── Pulso temporal (mini gráfico F vs t) ── */}
        <rect x="60" y="265" width="260" height="120" rx="10"
          fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="190" y="282" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontWeight="700">
          {isEs ? "F_ext(t) — pulso" : "F_ext(t) — pulse"}
        </text>
        {/* ejes */}
        <line x1="90" y1="370" x2="300" y2="370" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
        <line x1="90" y1="295" x2="90" y2="370" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
        {/* Pulso rectangular */}
        {(() => {
          const pw = clamp(20, 180, dt * 90);
          const ph = clamp(8, 60, Math.abs(Fext) * 1.8);
          const py = Fext >= 0 ? 370 - ph : 370;
          return (
            <rect x="120" y={py} width={pw} height={ph} rx="3"
              fill={pulseActive ? "rgba(248,113,113,0.60)" : "rgba(248,113,113,0.25)"}
              stroke="#f87171" strokeWidth="1.5" />
          );
        })()}
        <text x="90" y="387" fill="rgba(255,255,255,0.35)" fontSize="9">t</text>
        <text x="72" y="332" fill="rgba(255,255,255,0.35)" fontSize="9">F</text>
        {/* Área = J */}
        <text x="190" y="360" textAnchor="middle" fill="rgba(248,113,113,0.7)" fontSize="10">
          {isEs ? "Área = J_ext" : "Area = J_ext"}
        </text>

        {/* ── Barras comparativas P_i, J_ext, P_f ── */}
        <rect x="370" y="265" width="540" height="120" rx="10"
          fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="640" y="282" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontWeight="700">
          {isEs ? "Comparación de momentos" : "Momentum comparison"}
        </text>

        {/* P_i bar */}
        <text x="390" y="303" fill="#93c5fd" fontSize="11" fontWeight="700">P_i</text>
        <rect x={450} y={293} width={barW(Pi)} height={14} rx="4"
          fill={Pi >= 0 ? "rgba(96,165,250,0.5)" : "rgba(96,165,250,0.5)"}
          transform={Pi < 0 ? `translate(${-barW(Pi)}, 0)` : ""}
        />
        <text x={455 + barW(Pi) * barDir(Pi)} y={305}
          textAnchor={Pi >= 0 ? "start" : "end"} fill="#dbeafe" fontSize="10" fontWeight="700">
          {fmt(Pi, 1, lang)}
        </text>

        {/* J_ext bar */}
        <text x="390" y="333" fill="#f87171" fontSize="11" fontWeight="700">J_ext</text>
        <rect x={450} y={323} width={barW(Jext)} height={14} rx="4"
          fill="rgba(248,113,113,0.5)"
          transform={Jext < 0 ? `translate(${-barW(Jext)}, 0)` : ""}
        />
        <text x={455 + barW(Jext) * barDir(Jext)} y={335}
          textAnchor={Jext >= 0 ? "start" : "end"} fill="#fca5a5" fontSize="10" fontWeight="700">
          {fmt(Jext, 1, lang)}
        </text>

        {/* P_f bar */}
        <text x="390" y="363" fill="#fbbf24" fontSize="11" fontWeight="700">P_f</text>
        <rect x={450} y={353} width={barW(Pf)} height={14} rx="4"
          fill="rgba(251,191,36,0.5)"
          transform={Pf < 0 ? `translate(${-barW(Pf)}, 0)` : ""}
        />
        <text x={455 + barW(Pf) * barDir(Pf)} y={365}
          textAnchor={Pf >= 0 ? "start" : "end"} fill="#fde68a" fontSize="10" fontWeight="700">
          {fmt(Pf, 1, lang)}
        </text>

        {/* ── Panel de resultados ── */}
        <rect x="100" y="405" width="760" height="100" rx="12"
          fill={statusBg} stroke={statusColor} strokeWidth="1.5" strokeOpacity="0.35" />

        <text x="260" y="432" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="800">
          P_i = {fmt(Pi, 2, lang)} kg·m/s
        </text>
        <text x="480" y="432" textAnchor="middle" fill="#f87171" fontSize="14" fontWeight="800">
          J_ext = {fmt(Jext, 2, lang)} N·s
        </text>
        <text x="700" y="432" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="800">
          P_f = {fmt(Pf, 2, lang)} N·s
        </text>

        {/* Ecuación */}
        <text x="480" y="460" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="12">
          ΔP = J_ext = F_ext · Δt = {fmt(Fext, 1, lang)} × {fmt(dt, 2, lang)} = {fmt(Jext, 2, lang)} N·s
        </text>

        {/* Ratio */}
        {(() => {
          const rText = Number.isFinite(ratio) ? fmt(ratio * 100, 1, lang) + " %" : "∞";
          return (
            <text x="480" y="485" textAnchor="middle" fill={statusColor} fontSize="13" fontWeight="700">
              |J_ext| / |P_i| = {rText}
              {"  "}
              {negligible
                ? (isEs ? "→ despreciable ✓ conservación válida" : "→ negligible ✓ conservation valid")
                : marginal
                  ? (isEs ? "→ marginal ⚠ precaución" : "→ marginal ⚠ caution")
                  : (isEs ? "→ significativo ✗ conservación rota" : "→ significant ✗ conservation broken")}
            </text>
          );
        })()}

        {/* Leyenda */}
        <text x="480" y="540" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="11">
          {isEs
            ? "Mueve F_ext y Δt para ver cómo el impulso externo rompe o respeta la conservación"
            : "Move F_ext and Δt to see how external impulse breaks or respects conservation"}
        </text>

        {/* Nota conceptual */}
        <text x="480" y="600" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="10">
          {isEs
            ? "Si |J_ext|/|P_i| < 5 %, el impulso externo es despreciable y la conservación es buena aproximación."
            : "If |J_ext|/|P_i| < 5%, external impulse is negligible and conservation is a good approximation."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1i", "v2i", "Fext", "dt"],
    stateOut: ["Pi", "Jext", "DeltaP", "Pf", "ratio", "J", "F_ext", "t", "P"],
    target: "J",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuándo un impulso externo rompe la conservación del momento lineal?",
      en: "When does an external impulse break the conservation of linear momentum?",
    },
    magnitud_estrella: "J",
  },
};

export default profile;
