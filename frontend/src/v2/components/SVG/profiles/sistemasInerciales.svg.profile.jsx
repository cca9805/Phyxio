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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const profile = {
  meta: {
    id: "svg-sistemas-inerciales",
    leafId: "sistemas-inerciales",
    title: {
      es: "Sistemas inerciales",
      en: "Inertial frames",
    },
    subtitle: {
      es: "Velocidad relativa distinta, aceleracion comun",
      en: "Different relative velocity, common acceleration",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Que condicion de fuerzas y movimiento identifica un sistema de referencia como inercial y garantiza que la primera ley de Newton se cumple sin fuerzas ficticias?",
      en: "What force and motion condition identifies a reference frame as inertial and guarantees that Newton's first law holds without fictitious forces?",
    },
    magnitud_estrella: "F_neta",
    magnitud_secundaria: "a_obs2",
    variable_control: "V_rel",
  },
  pregunta_principal: {
    es: "¿Que condicion de fuerzas y movimiento identifica un sistema de referencia como inercial y garantiza que la primera ley de Newton se cumple sin fuerzas ficticias?",
    en: "What force and motion condition identifies a reference frame as inertial and guarantees that Newton's first law holds without fictitious forces?",
  },
  magnitud_estrella: "F_neta",
  graph_contract: createSvgProfileContract({
    leafId: "sistemas-inerciales",
    graphId: "svg-sistemas-inerciales",
    purpose: {
      es: "Comparar dos observadores inerciales: la velocidad cambia con `V_rel`, pero la aceleracion y la lectura de `F_neta` se conservan.",
      en: "Compare two inertial observers: velocity changes with `V_rel`, but acceleration and the reading of `F_neta` are preserved.",
    },
    level: {
      es: "bachillerato-universidad inicial",
      en: "upper-secondary to early undergraduate",
    },
    expectedInputs: ["v_obs1", "V_rel", "F_neta", "m"],
    derivedMagnitudes: ["v_obs2", "a", "a_obs2"],
    targetCandidates: ["F_neta", "a_obs2"],
    equations: ["v_obs2 = v_obs1 - V_rel", "a = F_neta / m", "a_obs2 = a"],
    hypotheses: ["marcos inerciales", "V_rel constante", "regimen clasico"],
    validityDomain: ["sin rotacion del marco", "velocidades no relativistas"],
    visualSimplifications: ["movimiento 1D", "carro ideal", "fuerzas horizontales resumidas"],
    alwaysVisible: ["v_obs2", "a_obs2"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 650,
  params: {
    schema: [
      {
        key: "v_obs1",
        default: 15,
        label: { es: "v_obs1", en: "v_obs1" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 30,
        step: 0.5,
      },
      {
        key: "V_rel",
        default: 12,
        label: { es: "V_rel", en: "V_rel" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -20,
        max: 20,
        step: 0.5,
      },
      {
        key: "F_neta",
        default: 6,
        label: { es: "F_neta", en: "F_neta" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 20,
        step: 1,
      },
      {
        key: "m",
        default: 2,
        label: { es: "m", en: "m" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 10,
        step: 0.5,
      },
    ],
    derivations: {
      v_obs2: ({ v_obs1, V_rel }) => safeNum(v_obs1, 15) - safeNum(V_rel, 12),
      a: ({ F_neta, m }) => {
        const mass = safeNum(m, 2);
        return mass === 0 ? 0 : safeNum(F_neta, 6) / mass;
      },
      a_obs2: ({ F_neta, m }) => {
        const mass = safeNum(m, 2);
        return mass === 0 ? 0 : safeNum(F_neta, 6) / mass;
      },
    },
  },
  infoCards: [
    {
      key: "criterio",
      label: { es: "Criterio inercial", en: "Inertial criterion" },
      highlight: "Si F_neta = 0, entonces a = 0",
      highlightColor: "#60a5fa",
      description: {
        es: "La primera ley valida el marco antes de aplicar Newton sin correcciones.",
        en: "The first law validates the frame before applying Newton without corrections.",
      },
    },
    {
      key: "cambio-observador",
      label: { es: "Cambio de observador", en: "Observer change" },
      lines: ({ p, lang }) => [
        `v_obs1 = ${fmt(safeNum(p?.v_obs1, 15), 2, lang)} m/s`,
        `V_rel = ${fmt(safeNum(p?.V_rel, 12), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v_obs2 = ${fmt(safeNum(p?.v_obs2, 3), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
    {
      key: "invariancia",
      label: { es: "Invariancia de aceleracion", en: "Acceleration invariance" },
      lines: ({ p, lang }) => [
        `a = ${fmt(safeNum(p?.a, 3), 2, lang)} m/s²`,
      ],
      result: ({ p, lang }) => `a_obs2 = ${fmt(safeNum(p?.a_obs2, 3), 2, lang)} m/s²`,
      resultColor: "#f59e0b",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ p, lang = "es" }) => {
    const isEs = lang !== "en";
    const v1 = safeNum(p?.v_obs1, 15);
    const Vrel = safeNum(p?.V_rel, 12);
    const v2 = safeNum(p?.v_obs2, v1 - Vrel);
    const F = safeNum(p?.F_neta, 6);
    const a = safeNum(p?.a, 3);
    const a2 = safeNum(p?.a_obs2, 3);

    const base1 = 200;
    const base2 = 360;
    const origin = 190;
    const scale = 14;
    const arrowV1 = clamp(v1 * scale, -220, 220);
    const arrowV2 = clamp(v2 * scale, -220, 220);
    const arrowA = clamp(a * 34, -140, 140);
    const arrowF = clamp(F * 10, -180, 180);

    return (
      <g>
        <defs>
          <linearGradient id="siBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#09131f" />
            <stop offset="100%" stopColor="#17314d" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#siBg)" />

        <text x="480" y="42" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {isEs ? "Sistemas inerciales" : "Inertial frames"}
        </text>
        <text x="480" y="68" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="12">
          {isEs
            ? "La velocidad observada cambia con V_rel, pero la aceleracion y la dinamica real se conservan."
            : "Observed velocity changes with V_rel, but acceleration and real dynamics are preserved."}
        </text>

        <text x="120" y={base1 - 34} fill="#60a5fa" fontSize="13" fontWeight="700">
          {isEs ? "Observador 1" : "Observer 1"}
        </text>
        <line x1="120" y1={base1} x2="860" y2={base1} stroke="rgba(96,165,250,0.35)" strokeWidth="3" />
        <circle cx={origin} cy={base1} r="30" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeWidth="2" />
        <text x={origin} y={base1 + 6} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">m</text>
        <SvgArrow x1={origin} y1={base1 - 46} x2={origin + arrowV1} y2={base1 - 46} color="#34d399" label={`v_obs1=${fmt(v1, 1, lang)}`} />
        <SvgArrow x1={origin} y1={base1} x2={origin + arrowF} y2={base1} color="#f87171" label={`F_neta=${fmt(F, 1, lang)}`} />
        <SvgArrow x1={origin} y1={base1 + 46} x2={origin + arrowA} y2={base1 + 46} color="#f59e0b" label={`a=${fmt(a, 1, lang)}`} />

        <text x="120" y={base2 - 34} fill="#fb923c" fontSize="13" fontWeight="700">
          {isEs ? "Observador 2" : "Observer 2"}
        </text>
        <line x1="120" y1={base2} x2="860" y2={base2} stroke="rgba(251,146,60,0.35)" strokeWidth="3" />
        <circle cx={origin} cy={base2} r="30" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeWidth="2" />
        <text x={origin} y={base2 + 6} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">m</text>
        <SvgArrow x1={origin} y1={base2 - 46} x2={origin + arrowV2} y2={base2 - 46} color="#34d399" label={`v_obs2=${fmt(v2, 1, lang)}`} />
        <SvgArrow x1={origin} y1={base2} x2={origin + arrowF} y2={base2} color="#f87171" label={`F_neta=${fmt(F, 1, lang)}`} />
        <SvgArrow x1={origin} y1={base2 + 46} x2={origin + arrowA} y2={base2 + 46} color="#f59e0b" label={`a_obs2=${fmt(a2, 1, lang)}`} />

        <rect x="250" y="438" width="460" height="72" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
        <text x="480" y="466" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="700">
          {isEs ? "v_obs2 = v_obs1 - V_rel" : "v_obs2 = v_obs1 - V_rel"}
        </text>
        <text x="480" y="492" textAnchor="middle" fill="#f59e0b" fontSize="13" fontWeight="700">
          {isEs ? "a_obs2 = a" : "a_obs2 = a"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["v_obs1", "V_rel", "F_neta", "m"],
    stateOut: ["v_obs2", "a", "a_obs2"],
    target: "F_neta",
  },
};

export default profile;
