const K_B = 1.380649e-23;

const profile = {
  meta: {
    leafId: "definicion-boltzmann",
    graphType: "Svg",
    title: {
      es: "Microestados y entropía de Boltzmann",
      en: "Microstates and Boltzmann entropy",
    },
  },
  graph_identity: {
    id: "definicion-boltzmann-svg",
    pregunta_principal: {
      es: "¿Qué determina la entropía de Boltzmann cuando crece el número de microestados accesibles?",
      en: "What determines Boltzmann entropy when the number of accessible microstates grows?",
    },
    magnitud_estrella: "entropia",
  },
  pregunta_principal: {
    es: "¿Cómo visualiza el esquema la relación entre microestados accesibles y entropía de Boltzmann?",
    en: "How does the diagram visualise the relation between accessible microstates and Boltzmann entropy?",
  },
  magnitud_estrella: "entropia",
  interpretation_binding: {
    target: "entropia",
    formula: "S = k_B * ln(Omega)",
    label: { es: "Entropía S", en: "Entropy S" },
  },
  infoCards: [
    {
      key: "entropia",
      label: { es: "Entropía S (J/K)", en: "Entropy S (J/K)" },
      value: ({ sharedParams = {} }) => {
        const omega = Math.max(Number(sharedParams.omega ?? 10), 1);
        return (K_B * Math.log(omega)).toExponential(3);
      },
      unit: "J/K",
    },
    {
      key: "s_kb",
      label: { es: "S / k_B = ln(Ω)", en: "S / k_B = ln(Ω)" },
      value: ({ sharedParams = {} }) => {
        const omega = Math.max(Number(sharedParams.omega ?? 10), 1);
        return Math.log(omega).toFixed(3);
      },
      unit: "adim.",
    },
  ],
  params: {
    schema: [
      {
        key: "omega",
        label: { es: "Microestados Ω", en: "Microstates Ω" },
        type: "number",
        min: 1,
        max: 1000,
        step: 1,
        default: 10,
      },
    ],
  },
  viewBox: "0 0 420 300",
  svgHeight: 300,
  render: ({ sharedParams = {}, lang = "es", onGraphStateChange, onInterpretationContextChange }) => {
    const omega = Math.max(Number(sharedParams.omega ?? 10), 1);
    const S = K_B * Math.log(omega);
    const lnOmega = Math.log(omega).toFixed(2);

    const tt = (es, en) => (lang === "en" ? en : es);

    if (typeof onGraphStateChange === "function") {
      onGraphStateChange({ target: "entropia", values: { omega, S, lnOmega: Math.log(omega) } });
    }
    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({ target: "entropia", values: { omega, S } });
    }

    // Dot grid: show up to 100 dots proportionally
    const shown = Math.min(omega, 100);
    const cols = Math.ceil(Math.sqrt(shown));
    const rows = Math.ceil(shown / cols);
    const dotR = Math.max(2, Math.min(5, 80 / cols));
    const gridX0 = 40;
    const gridY0 = 60;
    const cellW = 220 / cols;
    const cellH = 180 / rows;

    const dots = [];
    for (let i = 0; i < shown; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cx = gridX0 + col * cellW + cellW / 2;
      const cy = gridY0 + row * cellH + cellH / 2;
      dots.push(<circle key={i} cx={cx} cy={cy} r={dotR} fill="#34d399" opacity="0.85" />);
    }

    return (
      <>
        {/* Macrostate box */}
        <rect x="30" y="45" width="240" height="200" rx="8" fill="rgba(15,23,42,0.6)" stroke="#34d399" strokeWidth="1.5" />
        <text x="150" y="38" fontSize="11" fill="#94a3b8" textAnchor="middle">
          {tt("Macroestado (restricciones fijas)", "Macrostate (fixed constraints)")}
        </text>

        {/* Microstates dots */}
        {dots}
        {omega > 100 && (
          <text x="150" y="220" fontSize="10" fill="#94a3b8" textAnchor="middle">
            {tt(`… y ${omega - 100} más`, `… and ${omega - 100} more`)}
          </text>
        )}

        {/* Omega label */}
        <text x="150" y="258" fontSize="12" fill="#f0abfc" textAnchor="middle">
          Ω = {omega}
        </text>

        {/* Formula and result */}
        <rect x="280" y="60" width="130" height="120" rx="8" fill="rgba(15,23,42,0.7)" stroke="rgba(255,255,255,0.1)" />
        <text x="345" y="82" fontSize="11" fill="#94a3b8" textAnchor="middle">
          S = k_B · ln Ω
        </text>
        <text x="345" y="106" fontSize="11" fill="#94a3b8" textAnchor="middle">
          S/k_B = ln {omega}
        </text>
        <text x="345" y="130" fontSize="14" fill="#34d399" textAnchor="middle" fontWeight="bold">
          {lnOmega}
        </text>
        <text x="345" y="148" fontSize="10" fill="#64748b" textAnchor="middle">
          {tt("(adimensional)", "(dimensionless)")}
        </text>
        <text x="345" y="166" fontSize="10" fill="#64748b" textAnchor="middle">
          S = {S.toExponential(2)} J/K
        </text>

        {/* Arrow */}
        <line x1="270" y1="150" x2="284" y2="150" stroke="#f0abfc" strokeWidth="1.5" markerEnd="url(#arr)" />

        {/* Title */}
        <text x="210" y="290" fontSize="11" fill="#64748b" textAnchor="middle">
          {tt("Cada punto = un microestado accesible", "Each dot = one accessible microstate")}
        </text>
      </>
    );
  },
};

export default profile;
