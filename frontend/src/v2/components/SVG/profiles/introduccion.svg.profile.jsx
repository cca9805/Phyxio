import React from "react";

const profile = {
  meta: {
    leafId: "introduccion",
    title: {
      es: "Ondas longitudinales y transversales en sólidos",
      en: "Longitudinal and transverse waves in solids",
    },
    subtitle: {
      es: "Velocidad de fase en función del módulo elástico y la densidad",
      en: "Phase velocity as a function of elastic modulus and density",
    },
  },

  schema: [
    { key: "E_young", label: { es: "Módulo de Young (GPa)", en: "Young's Modulus (GPa)" }, unit: "GPa", min: 1, max: 500, step: 1, defaultValue: 200 },
    { key: "G_mod", label: { es: "Módulo de cizalladura (GPa)", en: "Shear Modulus (GPa)" }, unit: "GPa", min: 0.5, max: 200, step: 0.5, defaultValue: 80 },
    { key: "rho", label: { es: "Densidad (kg/m³)", en: "Density (kg/m³)" }, unit: "kg/m³", min: 500, max: 25000, step: 100, defaultValue: 7800 },
  ],

  computeState: (p, { toNum }) => {
    const E = toNum(p.E_young, 200) * 1e9;
    const G = toNum(p.G_mod, 80) * 1e9;
    const rho = toNum(p.rho, 7800);
    const vL = Math.sqrt(E / rho);
    const vT = Math.sqrt(G / rho);
    const ratio = vT / vL;
    return { E, G, rho, vL, vT, ratio };
  },

  derivations: [
    {
      id: "v_fase",
      label: { es: "Velocidad longitudinal", en: "Longitudinal velocity" },
      compute: (state) => state.vL,
      unit: "m/s",
    },
    {
      id: "v_transversal",
      label: { es: "Velocidad transversal", en: "Transverse velocity" },
      compute: (state) => state.vT,
      unit: "m/s",
    },
  ],

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se propagan las ondas mecánicas a través de un sólido y qué determina su velocidad?",
      en: "How do mechanical waves propagate through a solid and what determines their speed?",
      keywords: ["ondas", "sólidos", "velocidad", "longitudinal", "transversal", "fase"],
    },
    magnitud_estrella: "v_fase",
  },

  infoCards: [
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      highlight: "v = √(E / ρ)",
      highlightColor: "#86efac",
      description: {
        es: "La velocidad de fase depende de la rigidez y la densidad del material.",
        en: "Phase velocity depends on material stiffness and density.",
      },
      lines: ({ p, state, lang }) => [
        `E = ${(state.E / 1e9).toFixed(0)} GPa`,
        `G = ${(state.G / 1e9).toFixed(1)} GPa`,
        `ρ = ${state.rho.toFixed(0)} kg/m³`,
        `v_L = ${state.vL.toFixed(0)} m/s`,
        `v_T = ${state.vT.toFixed(0)} m/s`,
      ],
      result: ({ p, state, lang }) =>
        lang === "en"
          ? `Ratio v_T/v_L: ${state.ratio.toFixed(3)}`
          : `Ratio v_T/v_L: ${state.ratio.toFixed(3)}`,
      resultColor: "#34d399",
    },
  ],

  interpretation_binding: {
    paramsIn: ["E_young", "G_mod", "rho"],
    resultsOut: ["v_fase"],
    physicalReading: {
      es: "El gráfico muestra cómo la velocidad de fase depende de las constantes elásticas y la densidad del sólido.",
      en: "The graph shows how phase velocity depends on the elastic constants and density of the solid.",
    },
  },

  render: ({ state, p, w, h, label, toNum }) => {
    const vL = state.vL;
    const vT = state.vT;
    const maxV = 12000;
    const midX = w * 0.5;
    const midY = h * 0.5;

    const barW = w * 0.25;
    const barMaxH = h * 0.55;
    const barY = h * 0.2;

    const hL = (vL / maxV) * barMaxH;
    const hT = (vT / maxV) * barMaxH;

    const longColor = "#3b82f6";
    const transColor = "#f59e0b";

    return (
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
        {/* Background */}
        <rect x={0} y={0} width={w} height={h} fill="#f8fafc" rx={6} />

        {/* Longitudinal bar */}
        <rect x={midX - barW - 15} y={barY + barMaxH - hL} width={barW} height={hL} fill={longColor} opacity={0.7} rx={4} />
        <text x={midX - barW / 2 - 15} y={barY + barMaxH + 18} textAnchor="middle" fontSize={11} fill={longColor} fontWeight="bold">
          Longitudinal
        </text>
        <text x={midX - barW / 2 - 15} y={barY + barMaxH - hL - 8} textAnchor="middle" fontSize={11} fill={longColor}>
          {vL.toFixed(0)} m/s
        </text>

        {/* Transverse bar */}
        <rect x={midX + 15} y={barY + barMaxH - hT} width={barW} height={hT} fill={transColor} opacity={0.7} rx={4} />
        <text x={midX + barW / 2 + 15} y={barY + barMaxH + 18} textAnchor="middle" fontSize={11} fill={transColor} fontWeight="bold">
          Transversal
        </text>
        <text x={midX + barW / 2 + 15} y={barY + barMaxH - hT - 8} textAnchor="middle" fontSize={11} fill={transColor}>
          {vT.toFixed(0)} m/s
        </text>

        {/* Baseline */}
        <line x1={midX - barW - 25} y1={barY + barMaxH} x2={midX + barW + 25} y2={barY + barMaxH} stroke="#94a3b8" strokeWidth={1} />

        {/* Ratio label */}
        <text x={midX} y={h - 20} textAnchor="middle" fontSize={11} fill="#64748b">
          v_T / v_L = {state.ratio.toFixed(3)}
        </text>

        {/* Material info */}
        <text x={midX} y={16} textAnchor="middle" fontSize={10} fill="#94a3b8">
          E = {(state.E / 1e9).toFixed(0)} GPa · G = {(state.G / 1e9).toFixed(1)} GPa · ρ = {state.rho.toFixed(0)} kg/m³
        </text>

        {/* SYNC OK badge */}
        {label && (
          <g transform={`translate(${w - 80}, 25)`}>
            <circle cx="12" cy="0" r="3.5" fill="#22c55e" />
            <text x="22" y="1" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}
      </svg>
    );
  },
};

export default profile;
