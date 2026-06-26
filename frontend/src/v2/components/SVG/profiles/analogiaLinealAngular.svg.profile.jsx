import React from "react";
import { SVG_CONTROL_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";

const toNum = (value, fallback) => {
  const n = typeof value === "number" ? value : Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
};

const fmt = (value, digits = 2, lang = "es") => {
  const n = toNum(value, NaN);
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-analogia-lineal-angular",
    leafId: "analogia-lineal-angular",
    title: {
      es: "Analogía lineal-angular",
      en: "Linear-angular analogy",
    },
    subtitle: {
      es: "Qué magnitud angular corresponde a cada magnitud lineal y qué cambia físicamente",
      en: "Which angular quantity corresponds to each linear quantity and what changes physically",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Qué magnitud angular corresponde a cada magnitud lineal y qué cambia físicamente",
      en: "Which angular quantity corresponds to each linear quantity and what changes physically",
    },
    magnitud_estrella: "alpha",
    magnitud_secundaria: "tau",
    variable_control: "I",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "tau",
        default: 0.12,
        label: { es: "Torque tau", en: "Torque tau" },
        unit: "N m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        key: "I",
        default: 0.04,
        label: { es: "Momento de inercia I", en: "Moment of inertia I" },
        unit: "kg m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.01,
        max: 0.5,
        step: 0.01,
      },
      {
        key: "R",
        default: 0.2,
        label: { es: "Radio R", en: "Radius R" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.05,
        max: 1,
        step: 0.01,
      },
    ],
    derivations: {
      alpha: ({ tau, I }) => toNum(tau, 0.12) / Math.max(toNum(I, 0.04), 1e-6),
      a_t: ({ tau, I, R }) => toNum(R, 0.2) * (toNum(tau, 0.12) / Math.max(toNum(I, 0.04), 1e-6)),
    },
  },
  infoCards: [
    {
      key: "dynamic_bridge",
      label: { es: "Puente dinámico", en: "Dynamic bridge" },
      highlight: "F_net : m : a  ↔  tau : I : alpha",
      description: {
        es: "La forma se conserva, pero causa, inercia y respuesta cambian de significado.",
        en: "The form is preserved, but cause, inertia, and response change meaning.",
      },
    },
    {
      key: "current_values",
      label: { es: "Lectura actual", en: "Current reading" },
      lines: ({ p, lang }) => [
        `tau = ${fmt(p?.tau, 2, lang)} N m`,
        `I = ${fmt(p?.I, 3, lang)} kg m^2`,
        `R = ${fmt(p?.R, 2, lang)} m`,
      ],
      result: ({ p, lang }) => `alpha = ${fmt(p?.alpha, 2, lang)} rad/s^2`,
      resultColor: "#38bdf8",
    },
  ],
  render: ({ p, lang = "es" }) => {
    const isEn = lang === "en";
    const tau = toNum(p?.tau, 0.12);
    const I = Math.max(toNum(p?.I, 0.04), 1e-6);
    const R = toNum(p?.R, 0.2);
    const alpha = toNum(p?.alpha, tau / I);
    const at = toNum(p?.a_t, R * alpha);

    const rows = [
      ["x", "theta", isEn ? "position vs orientation" : "posición frente a orientación"],
      ["v", "omega", isEn ? "linear speed vs angular speed" : "rapidez lineal frente a angular"],
      ["a", "alpha", isEn ? "linear response vs angular response" : "respuesta lineal frente a angular"],
      ["F_net", "tau", isEn ? "linear cause vs rotational cause" : "causa lineal frente a rotacional"],
      ["m", "I", isEn ? "mass vs rotational inertia" : "masa frente a inercia rotacional"],
      ["K", "K_total", isEn ? "energy must include the rotating part" : "la energía debe incluir el giro"],
    ];

    return (
      <g>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="#0f172a" />
        <text x="480" y="44" textAnchor="middle" fill="#f8fafc" fontSize="24" fontWeight="800">
          {isEn ? "Linear-angular bridge" : "Puente lineal-angular"}
        </text>
        <text x="480" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="13">
          {isEn
            ? "Which angular quantity corresponds to each linear quantity, and what changes physically?"
            : "Qué magnitud angular corresponde a cada magnitud lineal y qué cambia físicamente"}
        </text>

        <g transform="translate(72, 105)">
          <rect x="0" y="0" width="500" height="330" rx="16" fill="rgba(15,23,42,0.96)" stroke="#334155" />
          <text x="95" y="34" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="900">{isEn ? "Linear" : "Lineal"}</text>
          <text x="250" y="34" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="900">↔</text>
          <text x="405" y="34" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">{isEn ? "Angular" : "Angular"}</text>

          {rows.map((row, i) => {
            const y = 72 + i * 42;
            return (
              <g key={row[0]} transform={`translate(0, ${y})`}>
                <text x="95" y="0" textAnchor="middle" fill="#dbeafe" fontSize="18" fontWeight="800">{row[0]}</text>
                <line x1="145" y1="-5" x2="355" y2="-5" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowAnalogy)" />
                <text x="405" y="0" textAnchor="middle" fill="#cffafe" fontSize="18" fontWeight="800">{row[1]}</text>
                <text x="250" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11">{row[2]}</text>
              </g>
            );
          })}
        </g>

        <defs>
          <marker id="arrowAnalogy" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" />
          </marker>
        </defs>

        <g transform="translate(610, 126)">
          <rect x="0" y="0" width="280" height="220" rx="16" fill="rgba(8,47,73,0.82)" stroke="#38bdf8" />
          <text x="140" y="34" textAnchor="middle" fill="#e0f2fe" fontSize="15" fontWeight="900">
            {isEn ? "Dynamic reading" : "Lectura dinámica"}
          </text>
          <text x="140" y="70" textAnchor="middle" fill="#f8fafc" fontSize="24" fontWeight="900">tau = I alpha</text>
          <text x="24" y="112" fill="#bae6fd" fontSize="13">tau = {fmt(tau, 2, lang)} N m</text>
          <text x="24" y="140" fill="#bae6fd" fontSize="13">I = {fmt(I, 3, lang)} kg m²</text>
          <text x="24" y="168" fill="#fef08a" fontSize="13">alpha = {fmt(alpha, 2, lang)} rad/s²</text>
          <text x="24" y="196" fill="#bbf7d0" fontSize="13">a_t = R alpha = {fmt(at, 2, lang)} m/s²</text>
        </g>

        <g transform="translate(610, 374)">
          <rect x="0" y="0" width="280" height="96" rx="16" fill="rgba(22,101,52,0.28)" stroke="#22c55e" />
          <text x="18" y="30" fill="#dcfce7" fontSize="13" fontWeight="800">
            {isEn ? "Model check" : "Control de modelo"}
          </text>
          <text x="18" y="56" fill="#bbf7d0" fontSize="12">
            {isEn ? "Use K_total when translation and rotation coexist." : "Usa K_total si coexisten traslación y rotación."}
          </text>
          <text x="18" y="78" fill="#bbf7d0" fontSize="12">
            {isEn ? "Use E_total only if losses are modeled or absent." : "Usa E_total solo si las pérdidas están modeladas o ausentes."}
          </text>
        </g>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["tau", "I", "R"],
    stateOut: ["alpha", "a_t", "tau", "I", "R"],
    target: "alpha",
  },
};

export default profile;
