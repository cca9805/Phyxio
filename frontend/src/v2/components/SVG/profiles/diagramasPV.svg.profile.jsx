import React from "react";

const profile = {
  meta: {
    leafId: "diagramas-pv",
    graphType: "Svg",
    title: {
      es: "Diagrama p-V",
      en: "P-V diagram",
    },
  },
  graph_identity: {
    id: "diagramas-pv-svg",
    pregunta_principal: {
      es: "¿Cómo permiten los diagramas p-V calcular el trabajo y visualizar procesos en teoría y ejemplos?",
      en: "How do P-V diagrams enable calculation of work and visualisation of processes in theory and examples?",
    },
    magnitud_estrella: "W",
  },
  pregunta_principal: {
    es: "¿Cómo relaciona el trabajo y la forma del proceso la lectura de un diagrama p-V?",
    en: "How does the work and process shape relate to reading a P-V diagram?",
  },
  magnitud_estrella: "P",
  interpretation_binding: {
    target: "W",
    formula: "W = (P1 + P2) / 2 * (V2 - V1)",
    label: { es: "Trabajo aproximado", en: "Approximate work" },
  },
  infoCards: [
    {
      key: "W",
      label: { es: "Trabajo W (J)", en: "Work W (J)" },
      value: ({ sharedParams = {} }) => {
        const P1 = Number(sharedParams.P1 ?? 101325);
        const P2 = Number(sharedParams.P2 ?? 50000);
        const V1 = Number(sharedParams.V1 ?? 1);
        const V2 = Number(sharedParams.V2 ?? 2);
        return (((P1 + P2) / 2) * (V2 - V1)).toFixed(0);
      },
      unit: "J",
    },
  ],
  params: {
    schema: [
      {
        key: "P1",
        label: { es: "P₁ (Pa)", en: "P₁ (Pa)" },
        type: "number",
        min: 0,
        max: 300000,
        step: 5000,
        default: 101325,
      },
      {
        key: "V1",
        label: { es: "V₁ (m³)", en: "V₁ (m³)" },
        type: "number",
        min: 0.1,
        max: 5,
        step: 0.1,
        default: 1,
      },
      {
        key: "P2",
        label: { es: "P₂ (Pa)", en: "P₂ (Pa)" },
        type: "number",
        min: 0,
        max: 300000,
        step: 5000,
        default: 50000,
      },
      {
        key: "V2",
        label: { es: "V₂ (m³)", en: "V₂ (m³)" },
        type: "number",
        min: 0.1,
        max: 5,
        step: 0.1,
        default: 2,
      },
    ],
  },
  viewBox: "0 0 420 320",
  svgHeight: 320,
  render: ({ sharedParams = {}, lang = "es", onGraphStateChange, onInterpretationContextChange }) => {
    const P1 = Number(sharedParams.P1 ?? 101325);
    const V1 = Number(sharedParams.V1 ?? 1);
    const P2 = Number(sharedParams.P2 ?? 50000);
    const V2 = Number(sharedParams.V2 ?? 2);
    const W = ((P1 + P2) / 2) * (V2 - V1);
    const xMin = Math.min(V1, V2, 0.1);
    const xMax = Math.max(V1, V2, 5);
    const yMin = 0;
    const yMax = Math.max(P1, P2) * 1.1;
    const xOf = (x) => 50 + ((x - xMin) / Math.max(xMax - xMin, 0.0001)) * 320;
    const yOf = (y) => 260 - ((y - yMin) / Math.max(yMax - yMin, 0.0001)) * 200;
    const path = `M ${xOf(V1)} ${yOf(P1)} L ${xOf(V2)} ${yOf(P2)}`;
    const interpretation =
      lang === "en"
        ? "Area under the P-V curve approximates work."
        : "El area bajo la curva p-V aproxima el trabajo.";

    if (typeof onGraphStateChange === "function") {
      onGraphStateChange({
        target: "P",
        values: { P1, V1, P2, V2, W },
        interpretation,
      });
    }

    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({
        target: "P",
        values: { P1, V1, P2, V2, W },
      });
    }

    return (
      <>
        <rect x="40" y="40" width="340" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
        <line x1="40" y1="40" x2="40" y2="260" stroke="#475569" strokeWidth="2" />
        <line x1="40" y1="260" x2="380" y2="260" stroke="#475569" strokeWidth="2" />
        <path d={path} fill="none" stroke="#0f766e" strokeWidth="4" />
        <circle cx={xOf(V1)} cy={yOf(P1)} r="6" fill="#f97316" />
        <circle cx={xOf(V2)} cy={yOf(P2)} r="6" fill="#f97316" />
        <text x="385" y="265" fontSize="12" fill="#475569" textAnchor="end">
          {lang === "en" ? "V" : "V"}
        </text>
        <text x="30" y="30" fontSize="12" fill="#475569" textAnchor="middle">
          P
        </text>
        <text x="210" y="305" fontSize="12" fill="#475569" textAnchor="middle">
          {lang === "en" ? "P-V diagram" : "Diagrama p-V"}
        </text>
      </>
    );
  },
};

export default profile;
