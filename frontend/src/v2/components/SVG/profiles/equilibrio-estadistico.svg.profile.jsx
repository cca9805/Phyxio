const K_B = 1.380649e-23;

const profile = {
  meta: {
    leafId: "equilibrio-estadistico",
    graphType: "Svg",
    title: {
      es: "Distribución estacionaria de ocupación",
      en: "Stationary occupation distribution",
    },
  },
  graph_identity: {
    id: "equilibrio-estadistico-svg",
    pregunta_principal: {
      es: "¿Cómo se visualiza el equilibrio estadístico cuando no hay flujo neto entre estados accesibles?",
      en: "How is statistical equilibrium visualized when there is no net flow among accessible states?",
    },
    magnitud_estrella: "probabilidad_estado",
  },
  pregunta_principal: {
    es: "¿Cómo se visualiza el equilibrio estadístico cuando no hay flujo neto entre estados accesibles?",
    en: "How is statistical equilibrium visualized when there is no net flow among accessible states?",
  },
  magnitud_estrella: "probabilidad_estado",
  interpretation_binding: {
    target: "probabilidad_estado",
    formula: "p_i = e^{-E_i/k_B T} / Z",
    label: { es: "Probabilidad p_i", en: "Probability p_i" },
  },
  infoCards: [
    {
      key: "p_i",
      label: { es: "Probabilidad p_i", en: "Probability p_i" },
      value: ({ sharedParams = {} }) => {
        const T = Math.max(Number(sharedParams.T0 ?? 300), 10);
        const dE = Math.max(Number(sharedParams.deltaE ?? 1e-21), 1e-23);
        const x = Math.exp(-dE / (K_B * T));
        const p1 = x / (1 + x);
        return p1.toFixed(4);
      },
      unit: "adim.",
    },
    {
      key: "ratio",
      label: { es: "p_1 / p_0", en: "p_1 / p_0" },
      value: ({ sharedParams = {} }) => {
        const T = Math.max(Number(sharedParams.T0 ?? 300), 10);
        const dE = Math.max(Number(sharedParams.deltaE ?? 1e-21), 1e-23);
        const ratio = Math.exp(-dE / (K_B * T));
        return ratio.toFixed(4);
      },
      unit: "adim.",
    },
  ],
  params: {
    schema: [
      {
        key: "T0",
        label: { es: "Temperatura T (K)", en: "Temperature T (K)" },
        type: "number",
        min: 10,
        max: 2000,
        step: 10,
        default: 300,
      },
      {
        key: "deltaE",
        label: { es: "Separación energética Δε (J)", en: "Energy gap Δε (J)" },
        type: "number",
        min: 1e-23,
        max: 1e-19,
        step: 1e-22,
        default: 1e-21,
      },
    ],
  },
  viewBox: "0 0 420 300",
  svgHeight: 300,
  render: ({ sharedParams = {}, lang = "es", onGraphStateChange, onInterpretationContextChange }) => {
    const T = Math.max(Number(sharedParams.T0 ?? 300), 10);
    const dE = Math.max(Number(sharedParams.deltaE ?? 1e-21), 1e-23);
    const x = Math.exp(-dE / (K_B * T));
    const p0 = 1 / (1 + x);
    const p1 = x / (1 + x);

    const tt = (es, en) => (lang === "en" ? en : es);

    if (typeof onGraphStateChange === "function") {
      onGraphStateChange({ target: "probabilidad_estado", values: { T, p0, p1 } });
    }
    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({ target: "probabilidad_estado", values: { T, p0, p1 } });
    }

    const barW = 60;
    const maxH = 180;
    const h0 = p0 * maxH;
    const h1 = p1 * maxH;
    const x0 = 90;
    const x1 = 270;
    const baseY = 230;

    return (
      <>
        {/* Ground line */}
        <line x1="40" y1={baseY} x2="380" y2={baseY} stroke="#94a3b8" strokeWidth="1.5" />

        {/* Energy levels */}
        <text x={x0} y="40" fontSize="11" fill="#94a3b8" textAnchor="middle">
          E₀
        </text>
        <text x={x1} y="40" fontSize="11" fill="#94a3b8" textAnchor="middle">
          E₁ = E₀ + Δε
        </text>

        {/* Probability bars */}
        <rect x={x0 - barW / 2} y={baseY - h0} width={barW} height={h0} rx="4" fill="#34d399" opacity="0.85" />
        <rect x={x1 - barW / 2} y={baseY - h1} width={barW} height={h1} rx="4" fill="#f0abfc" opacity="0.85" />

        {/* Probability labels */}
        <text x={x0} y={baseY - h0 - 10} fontSize="12" fill="#34d399" textAnchor="middle" fontWeight="bold">
          p₀ = {p0.toFixed(4)}
        </text>
        <text x={x1} y={baseY - h1 - 10} fontSize="12" fill="#f0abfc" textAnchor="middle" fontWeight="bold">
          p₁ = {p1.toFixed(4)}
        </text>

        {/* Transition arrows */}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,4 L0,8" fill="#94a3b8" />
          </marker>
        </defs>
        <line x1={x0 + 40} y1={baseY - h0 / 2} x2={x1 - 40} y2={baseY - h1 / 2} stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arr)" strokeDasharray="4" />
        <line x1={x1 - 40} y1={baseY - h1 / 2 + 10} x2={x0 + 40} y2={baseY - h0 / 2 + 10} stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arr)" strokeDasharray="4" />

        <text x="210" y="290" fontSize="11" fill="#64748b" textAnchor="middle">
          {tt("Flujos iguales: equilibrio estadístico", "Equal flows: statistical equilibrium")}
        </text>
      </>
    );
  },
};

export default profile;
