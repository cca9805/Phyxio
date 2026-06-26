import React from "react";

const profile = {
  meta: {
    leafId: "impedancia-mecanica-en-solidos",
    title: {
      es: "Impedancia mecánica y reflexión en interfaces",
      en: "Mechanical impedance and interface reflection",
    },
    subtitle: {
      es: "Visualización de transmisión y reflexión en la unión entre dos sólidos",
      en: "Visualization of transmission and reflection at the junction between two solids",
    },
  },

  schema: [
    { key: "Z1", label: { es: "Impedancia medio 1", en: "Impedance medium 1" }, unit: "kg/s", min: 500, max: 100000, step: 500, defaultValue: 22000 },
    { key: "Z2", label: { es: "Impedancia medio 2", en: "Impedance medium 2" }, unit: "kg/s", min: 500, max: 100000, step: 500, defaultValue: 15000 },
  ],

  computeState: (p, { toNum }) => {
    const Z1 = toNum(p.Z1, 22000);
    const Z2 = toNum(p.Z2, 15000);
    const R = (Z2 - Z1) / (Z2 + Z1);
    const T = (2 * Z2) / (Z2 + Z1);
    const powerT = 1 - R * R;
    return { Z1, Z2, R, T, powerT };
  },

  derivations: [
    {
      id: "coeficiente_de_reflexion_en_amplitud",
      label: { es: "Coeficiente de reflexión", en: "Reflection coefficient" },
      compute: (state) => state.R,
      unit: "",
    },
    {
      id: "coeficiente_de_transmision_en_amplitud",
      label: { es: "Coeficiente de transmisión", en: "Transmission coefficient" },
      compute: (state) => state.T,
      unit: "",
    },
  ],

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determina la impedancia mecánica la transmisión y reflexión de energía en una interfaz entre sólidos?",
      en: "How does mechanical impedance determine the transmission and reflection of energy at an interface between solids?",
      keywords: ["impedancia", "mecánica", "transmisión", "reflexión", "sólidos", "interfaz"],
    },
    magnitud_estrella: "coeficiente_de_reflexion_en_amplitud",
  },

  infoCards: [
    {
      key: "reading",
      label: { es: "Lectura actual", en: "Current reading" },
      highlight: "R = (Z₂ − Z₁) / (Z₂ + Z₁)",
      highlightColor: "#86efac",
      description: {
        es: "El coeficiente de reflexión depende del contraste de impedancias entre ambos medios.",
        en: "The reflection coefficient depends on the impedance contrast between both media.",
      },
      lines: ({ p, state, lang }) => [
        `Z₁ = ${state.Z1.toFixed(0)} kg/s`,
        `Z₂ = ${state.Z2.toFixed(0)} kg/s`,
        `R = ${state.R.toFixed(3)}`,
        `T = ${state.T.toFixed(3)}`,
      ],
      result: ({ p, state, lang }) =>
        lang === "en"
          ? `Transmitted power: ${(state.powerT * 100).toFixed(1)}%`
          : `Potencia transmitida: ${(state.powerT * 100).toFixed(1)}%`,
      resultColor: "#34d399",
    },
  ],

  interpretation_binding: {
    paramsIn: ["Z1", "Z2"],
    resultsOut: ["coeficiente_de_reflexion_en_amplitud", "coeficiente_de_transmision_en_amplitud"],
    physicalReading: {
      es: "El gráfico muestra la fracción de onda incidente que se refleja y transmite según las impedancias de ambos medios.",
      en: "The graph shows the fraction of incident wave reflected and transmitted according to both media impedances.",
    },
  },

  render: ({ state, p, w, h, label, toNum }) => {
    const Z1 = state.Z1;
    const Z2 = state.Z2;
    const R = state.R;
    const T = state.T;

    const barMaxH = h * 0.6;
    const midY = h * 0.5;
    const midX = w * 0.5;

    const absR = Math.abs(R);
    const incidentH = barMaxH * 0.8;
    const reflectedH = barMaxH * absR * 0.8;
    const transmittedH = barMaxH * Math.min(T, 1) * 0.8;

    const z1Color = "#60a5fa";
    const z2Color = "#f97316";
    const incColor = "#22c55e";
    const refColor = "#ef4444";
    const transColor = "#8b5cf6";

    return (
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
        {/* Background media */}
        <rect x={0} y={0} width={midX} height={h} fill={z1Color} opacity={0.1} />
        <rect x={midX} y={0} width={midX} height={h} fill={z2Color} opacity={0.1} />

        {/* Interface line */}
        <line x1={midX} y1={20} x2={midX} y2={h - 20} stroke="#666" strokeWidth={2} strokeDasharray="6,4" />

        {/* Medium labels */}
        <text x={midX * 0.5} y={30} textAnchor="middle" fontSize={12} fill={z1Color} fontWeight="bold">
          Z₁ = {Z1.toFixed(0)} kg/s
        </text>
        <text x={midX * 1.5} y={30} textAnchor="middle" fontSize={12} fill={z2Color} fontWeight="bold">
          Z₂ = {Z2.toFixed(0)} kg/s
        </text>

        {/* Incident arrow */}
        <line x1={midX * 0.2} y1={midY - 20} x2={midX - 10} y2={midY - 20} stroke={incColor} strokeWidth={3} markerEnd="url(#arrowInc)" />
        <text x={midX * 0.5} y={midY - 30} textAnchor="middle" fontSize={10} fill={incColor}>
          Incidente
        </text>

        {/* Reflected arrow */}
        <line x1={midX - 10} y1={midY + 20} x2={midX * 0.2} y2={midY + 20} stroke={refColor} strokeWidth={Math.max(1, 3 * absR)} markerEnd="url(#arrowRef)" />
        <text x={midX * 0.5} y={midY + 40} textAnchor="middle" fontSize={10} fill={refColor}>
          R = {R.toFixed(3)}
        </text>

        {/* Transmitted arrow */}
        <line x1={midX + 10} y1={midY - 20} x2={w * 0.85} y2={midY - 20} stroke={transColor} strokeWidth={Math.max(1, 3 * Math.min(T, 1))} markerEnd="url(#arrowTrans)" />
        <text x={midX * 1.5} y={midY - 30} textAnchor="middle" fontSize={10} fill={transColor}>
          T = {T.toFixed(3)}
        </text>

        {/* Power bar */}
        <rect x={w * 0.1} y={h - 50} width={w * 0.35 * (1 - absR * absR)} height={12} fill={transColor} opacity={0.6} rx={3} />
        <text x={w * 0.1} y={h - 55} fontSize={9} fill="#666">
          Potencia transmitida: {(state.powerT * 100).toFixed(1)}%
        </text>

        {/* SYNC OK badge */}
        {label && (
          <g transform={`translate(${w - 80}, 25)`}>
            <circle cx="12" cy="0" r="3.5" fill="#22c55e" />
            <text x="22" y="1" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
          </g>
        )}

        {/* Arrow markers */}
        <defs>
          <marker id="arrowInc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={incColor} />
          </marker>
          <marker id="arrowRef" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={refColor} />
          </marker>
          <marker id="arrowTrans" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={transColor} />
          </marker>
        </defs>
      </svg>
    );
  },
};

export default profile;
