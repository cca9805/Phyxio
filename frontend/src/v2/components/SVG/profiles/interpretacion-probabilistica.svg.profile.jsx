const profile = {
  meta: {
    leafId: "interpretacion-probabilistica",
    graphType: "Svg",
    title: {
      es: "Probabilidad de macroestado y microestados accesibles",
      en: "Macrostate probability and accessible microstates",
    },
  },
  graph_identity: {
    id: "interpretacion-probabilistica-svg",
    pregunta_principal: {
      es: "¿Cómo conecta el diagrama el peso estadístico de los macrostados con sus probabilidades microscópicas?",
      en: "How does the diagram relate the statistical weight of macrostates to their microscopic probabilities?",
    },
    magnitud_estrella: "probabilidad_macroestado",
  },
  pregunta_principal: {
    es: "¿Cómo se distribuyen los microestados entre macrostados y qué determina su probabilidad relativa?",
    en: "How are microstates distributed among macrostates and what determines their relative probability?",
  },
  magnitud_estrella: "probabilidad_macroestado",
  interpretation_binding: {
    target: "probabilidad_macroestado",
    formula: "P = Omega_macro / Omega_total",
    label: { es: "Probabilidad del macroestado", en: "Macrostate probability" },
  },
  infoCards: [
    {
      key: "probabilidad_macroestado",
      label: { es: "P(macroestado)", en: "P(macrostate)" },
      value: ({ sharedParams = {} }) => {
        const omegaMacro = Math.max(Number(sharedParams.omega_macro ?? 3), 1);
        const omegaTotal = Math.max(Number(sharedParams.omega_total ?? 10), omegaMacro);
        return (omegaMacro / omegaTotal).toFixed(4);
      },
      unit: "",
    },
    {
      key: "ratio_probabilidades",
      label: { es: "P₂/P₁ = Ω₂/Ω₁", en: "P₂/P₁ = Ω₂/Ω₁" },
      value: ({ sharedParams = {} }) => {
        const om1 = Math.max(Number(sharedParams.omega_macro ?? 3), 1);
        const om2 = Math.max(Number(sharedParams.omega_macro2 ?? 7), 1);
        return (om2 / om1).toFixed(3);
      },
      unit: "",
    },
  ],
  params: {
    schema: [
      {
        key: "omega_total",
        label: { es: "Microestados totales Ω", en: "Total microstates Ω" },
        type: "number",
        min: 2,
        max: 50,
        step: 1,
        default: 10,
      },
      {
        key: "omega_macro",
        label: { es: "Microestados macroestado 1", en: "Macrostate 1 microstates" },
        type: "number",
        min: 1,
        max: 49,
        step: 1,
        default: 3,
      },
    ],
  },
  viewBox: "0 0 420 300",
  svgHeight: 300,
  render: ({ sharedParams = {}, lang = "es", onGraphStateChange, onInterpretationContextChange }) => {
    const omegaTotal = Math.max(Number(sharedParams.omega_total ?? 10), 2);
    const omegaMacro1 = Math.min(Math.max(Number(sharedParams.omega_macro ?? 3), 1), omegaTotal - 1);
    const omegaMacro2 = omegaTotal - omegaMacro1;
    const P1 = omegaMacro1 / omegaTotal;
    const P2 = omegaMacro2 / omegaTotal;

    const tt = (es, en) => (lang === "en" ? en : es);

    if (typeof onGraphStateChange === "function") {
      onGraphStateChange({
        target: "probabilidad_macroestado",
        values: { omega_macro: omegaMacro1, omega_total: omegaTotal, P1, P2, ratio: omegaMacro2 / omegaMacro1 },
      });
    }
    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({ target: "probabilidad_macroestado", values: { P1, omegaMacro1, omegaTotal } });
    }

    // Draw two macrostates as boxes with dot grids
    const drawGrid = (x0, y0, w, h, count, color) => {
      const cols = Math.ceil(Math.sqrt(count));
      const rows = Math.ceil(count / cols);
      const cw = w / cols;
      const ch = h / rows;
      const r = Math.max(2, Math.min(6, cw * 0.35, ch * 0.35));
      const dots = [];
      for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        dots.push(
          <circle
            key={i}
            cx={x0 + col * cw + cw / 2}
            cy={y0 + row * ch + ch / 2}
            r={r}
            fill={color}
            opacity="0.85"
          />
        );
      }
      return dots;
    };

    const boxH = 160;
    const boxY = 60;
    const w1 = Math.round(180 * P1);
    const w2 = 180 - w1;

    return (
      <>
        {/* Outer container */}
        <rect x="30" y={boxY} width="180" height={boxH} rx="6" fill="rgba(15,23,42,0.5)" stroke="#64748b" strokeWidth="1" />
        <text x="120" y={boxY - 8} fontSize="10" fill="#94a3b8" textAnchor="middle">
          {tt(`Ω total = ${omegaTotal} microestados`, `Ω total = ${omegaTotal} microstates`)}
        </text>

        {/* Macrostate 1 box */}
        <rect x="30" y={boxY} width={w1 > 0 ? w1 : 1} height={boxH} rx="4" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1.5" />
        {omegaMacro1 <= 30 && drawGrid(32, boxY + 4, w1 - 4, boxH - 8, omegaMacro1, "#34d399")}
        {omegaMacro1 > 30 && (
          <text x={30 + w1 / 2} y={boxY + boxH / 2} fontSize="11" fill="#34d399" textAnchor="middle">{omegaMacro1}</text>
        )}

        {/* Macrostate 2 box */}
        <rect x={30 + w1} y={boxY} width={w2 > 0 ? w2 : 1} height={boxH} rx="4" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="1.5" />
        {omegaMacro2 <= 30 && drawGrid(30 + w1 + 2, boxY + 4, w2 - 4, boxH - 8, omegaMacro2, "#fb923c")}
        {omegaMacro2 > 30 && (
          <text x={30 + w1 + w2 / 2} y={boxY + boxH / 2} fontSize="11" fill="#fb923c" textAnchor="middle">{omegaMacro2}</text>
        )}

        {/* Labels below boxes */}
        <text x={30 + w1 / 2} y={boxY + boxH + 16} fontSize="11" fill="#34d399" textAnchor="middle">
          {tt("M₁", "M₁")} : Ω₁ = {omegaMacro1}
        </text>
        <text x={30 + w1 / 2} y={boxY + boxH + 30} fontSize="11" fill="#34d399" textAnchor="middle">
          P₁ = {P1.toFixed(3)}
        </text>
        <text x={30 + w1 + w2 / 2} y={boxY + boxH + 16} fontSize="11" fill="#fb923c" textAnchor="middle">
          {tt("M₂", "M₂")} : Ω₂ = {omegaMacro2}
        </text>
        <text x={30 + w1 + w2 / 2} y={boxY + boxH + 30} fontSize="11" fill="#fb923c" textAnchor="middle">
          P₂ = {P2.toFixed(3)}
        </text>

        {/* Info panel */}
        <rect x="230" y={boxY} width="170" height="140" rx="8" fill="rgba(15,23,42,0.7)" stroke="rgba(255,255,255,0.1)" />
        <text x="315" y={boxY + 20} fontSize="11" fill="#94a3b8" textAnchor="middle">
          P = Ω_macro / Ω_total
        </text>
        <text x="315" y={boxY + 44} fontSize="12" fill="#34d399" textAnchor="middle">
          P₁ = {omegaMacro1}/{omegaTotal} = {P1.toFixed(3)}
        </text>
        <text x="315" y={boxY + 64} fontSize="12" fill="#fb923c" textAnchor="middle">
          P₂ = {omegaMacro2}/{omegaTotal} = {P2.toFixed(3)}
        </text>
        <line x1="245" y1={boxY + 78} x2="385" y2={boxY + 78} stroke="rgba(255,255,255,0.1)" />
        <text x="315" y={boxY + 96} fontSize="10" fill="#94a3b8" textAnchor="middle">
          P₂/P₁ = Ω₂/Ω₁ = {(omegaMacro2 / omegaMacro1).toFixed(2)}
        </text>
        <text x="315" y={boxY + 116} fontSize="10" fill="#64748b" textAnchor="middle">
          P₁ + P₂ = {(P1 + P2).toFixed(3)}
        </text>

        <text x="210" y="290" fontSize="10" fill="#64748b" textAnchor="middle">
          {tt("El área de cada caja es proporcional a su probabilidad", "Box area is proportional to macrostate probability")}
        </text>
      </>
    );
  },
};

export default profile;
