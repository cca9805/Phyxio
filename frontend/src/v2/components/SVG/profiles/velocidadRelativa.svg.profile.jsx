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
    id: "svg-velocidad-relativa",
    leafId: "velocidad-relativa",
    title: {
      es: "Velocidad relativa",
      en: "Relative Velocity",
    },
    subtitle: {
      es: "Composición galileana de velocidades entre sistemas inerciales",
      en: "Galilean composition of velocities between inertial frames",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se compone la velocidad observada cuando dos sistemas inerciales se mueven entre sí?",
      en: "How is observed velocity composed when two inertial frames move with respect to each other?",
    },
    magnitud_estrella: "v_rel",
    magnitud_secundaria: "v_abs",
    variable_control: "v_abs",
  },
  graph_contract: createSvgProfileContract({
    leafId: "velocidad-relativa",
    graphId: "svg-velocidad-relativa",
    purpose: {
      es: "Visualizar la composición vectorial v_AB = v_A − v_B en el caso 1D y mostrar el triángulo de velocidades.",
      en: "Visualize the vector composition v_AB = v_A − v_B in the 1D case and show the velocity triangle.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["v_A", "v_B"],
    derivedMagnitudes: ["v_rel_AB", "v_rel_BA"],
    targetCandidates: ["v_rel_AB", "v_rel_BA"],
    equations: ["v_AB = v_A − v_B", "v_BA = v_B − v_A"],
    hypotheses: ["sistemas inerciales", "1D", "velocidades no relativistas"],
    validityDomain: ["v ≪ c"],
    visualSimplifications: ["movimiento 1D", "partículas puntuales"],
    alwaysVisible: ["v_rel_AB"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [
      {
        key: "v_A",
        default: 8,
        label: { es: "Velocidad de A", en: "Velocity of A" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -15,
        max: 15,
        step: 0.25,
      },
      {
        key: "v_B",
        default: 3,
        label: { es: "Velocidad de B", en: "Velocity of B" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -15,
        max: 15,
        step: 0.25,
      },
    ],
    derivations: {
      v_rel_AB: ({ v_A, v_B }) => safeNum(v_A, 8) - safeNum(v_B, 3),
      v_rel_BA: ({ v_A, v_B }) => safeNum(v_B, 3) - safeNum(v_A, 8),
    },
  },
  infoCards: [
    {
      key: "composicion",
      label: { es: "Composición galileana", en: "Galilean composition" },
      highlight: "v_AB = v_A − v_B",
      highlightColor: "#34d399",
      description: {
        es: "La velocidad relativa de A respecto a B es la diferencia de sus velocidades en el sistema inercial.",
        en: "The velocity of A relative to B is the difference of their velocities in the inertial frame.",
      },
    },
    {
      key: "lectura",
      label: { es: "Valores actuales", en: "Current values" },
      lines: ({ p, lang }) => [
        `v_A = ${fmt(safeNum(p?.v_A, 8), 2, lang)} m/s`,
        `v_B = ${fmt(safeNum(p?.v_B, 3), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v_AB = ${fmt(safeNum(p?.v_rel_AB, 0), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 4,
    loop: true,
    state: (t, p) => {
      const v_A = safeNum(p?.v_A, 8);
      const v_B = safeNum(p?.v_B, 3);
      const xA = 200 + ((v_A * t * 15) % 700);
      const xB = 200 + ((v_B * t * 15) % 700);
      return { xA, xB };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const v_A = safeNum(p?.v_A, 8);
    const v_B = safeNum(p?.v_B, 3);
    const v_rel = safeNum(p?.v_rel_AB, v_A - v_B);

    const trackY = 280;
    const arrowBaseY = 150;

    const xA = state?.xA ?? clamp(200 + v_A * 20, 120, 840);
    const xB = state?.xB ?? clamp(400 + v_B * 10, 120, 840);

    const scale = 16;
    const arrowA = clamp(v_A * scale, -220, 220);
    const arrowB = clamp(v_B * scale, -220, 220);
    const arrowRel = clamp(v_rel * scale, -220, 220);

    const originA = 250;
    const originB = 250;

    return (
      <g>
        <defs>
          <linearGradient id="vrBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0c1c30" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#vrBg)" />

        <text x="480" y="46" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="800">
          {isEs ? "Velocidad relativa" : "Relative Velocity"}
        </text>
        <text x="480" y="72" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "v_AB = v_A − v_B   (composición galileana)" : "v_AB = v_A − v_B   (Galilean composition)"}
        </text>

        {/* Track */}
        <line x1="100" y1={trackY} x2="860" y2={trackY} stroke="rgba(255,255,255,0.22)" strokeWidth="3" />

        {/* Particle A */}
        <circle cx={clamp(xA, 120, 840)} cy={trackY} r="20" fill="rgba(96,165,250,0.28)" stroke="#93c5fd" strokeWidth="2.5" />
        <text x={clamp(xA, 120, 840)} y={trackY + 5} textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="800">A</text>
        <SvgArrow x1={clamp(xA, 120, 840)} y1={trackY - 30} x2={clamp(xA, 120, 840) + clamp(v_A * 12, -150, 150)} y2={trackY - 30} color="#60a5fa" label={`v_A=${fmt(v_A, 2, lang)}`} />

        {/* Particle B */}
        <circle cx={clamp(xB, 120, 840)} cy={trackY} r="20" fill="rgba(248,113,113,0.25)" stroke="#fca5a5" strokeWidth="2.5" />
        <text x={clamp(xB, 120, 840)} y={trackY + 5} textAnchor="middle" fill="#fee2e2" fontSize="13" fontWeight="800">B</text>
        <SvgArrow x1={clamp(xB, 120, 840)} y1={trackY - 30} x2={clamp(xB, 120, 840) + clamp(v_B * 12, -150, 150)} y2={trackY - 30} color="#f87171" label={`v_B=${fmt(v_B, 2, lang)}`} />

        {/* Vector diagram */}
        <rect x="160" y="345" width="640" height="155" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="480" y="370" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="13" fontWeight="700">
          {isEs ? "Diagrama vectorial" : "Vector diagram"}
        </text>

        {/* v_A vector */}
        <text x="185" y="400" fill="#60a5fa" fontSize="12" fontWeight="700">v_A</text>
        <SvgArrow x1={originA} y1={412} x2={originA + arrowA} y2={412} color="#60a5fa" label={fmt(v_A, 2, lang)} />

        {/* v_B vector */}
        <text x="185" y="438" fill="#f87171" fontSize="12" fontWeight="700">v_B</text>
        <SvgArrow x1={originB} y1={450} x2={originB + arrowB} y2={450} color="#f87171" label={fmt(v_B, 2, lang)} />

        {/* v_rel = v_A - v_B */}
        <text x="185" y="476" fill="#34d399" fontSize="12" fontWeight="700">v_AB</text>
        <SvgArrow x1={originA} y1={488} x2={originA + arrowRel} y2={488} color="#34d399" label={fmt(v_rel, 2, lang)} />

        {/* Result box */}
        <rect x="640" y="360" width="145" height="130" rx="10" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.25)" strokeWidth="1.5" />
        <text x="712" y="386" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="700">v_AB</text>
        <text x="712" y="412" textAnchor="middle" fill="#6ee7b7" fontSize="22" fontWeight="900">{fmt(v_rel, 2, lang)}</text>
        <text x="712" y="434" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="12">m/s</text>
        <text x="712" y="464" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11">v_BA = {fmt(-v_rel, 2, lang)}</text>
        <text x="712" y="480" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10">m/s</text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["v_A", "v_B"],
    stateOut: ["v_rel_AB", "v_rel_BA"],
    target: "v_rel_AB",
  },
};

export default profile;
